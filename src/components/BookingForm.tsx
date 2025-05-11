import React, { useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser'; // Import EmailJS
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { 
  Select,
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

const bookingFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  service: z.string().min(1, { message: "Please select a service." }),
  date: z.string().min(1, { message: "Please select a date." }),
  message: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

interface BookingFormProps {
  preselectedService?: string;
  onSuccess?: () => void;
}

const BookingForm = ({ preselectedService, onSuccess }: BookingFormProps) => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: preselectedService || "",
      date: "",
      message: "",
    },
  });
  
  // Initialize EmailJS - only needed if you haven't added the script in your HTML
  useEffect(() => {
    emailjs.init({
      publicKey: "T_reHJTgfCtj6HitG", // Your public key
    });
  }, []);
  
  const isSubmitting = form.formState.isSubmitting;

  const onSubmit = async (data: BookingFormValues) => {
    try {
      // Prepare template parameters
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        service: data.service,
        date: data.date,
        message: data.message || 'No additional message',
        reply_to: data.email,
        // Don't include to_email here - specify this in the EmailJS template itself
      };
      
      console.log("Submitting form with data:", templateParams);
      console.log("Using service ID, template ID:", 'service_xxxxxxx', 'template_ime82jm');
      
      // Send email using EmailJS
      const response = await emailjs.send(
        'service_u3uql8t', // Replace with your actual service ID from EmailJS dashboard
        'template_ime82jm', // Your template ID seems correct
        templateParams,
        'T_reHJTgfCtj6HitG' // Your public key
      );
      
      console.log("EmailJS response:", response);
      
      if (response.status === 200) {
        toast({
          title: "Booking Request Received",
          description: "Thank you for your booking request. We will contact you shortly to confirm your appointment.",
        });
        
        form.reset();
        
        if (onSuccess) {
          onSuccess();
        }
      } else {
        throw new Error('Email not sent, status: ' + response.status);
      }
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your booking. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6 bg-white rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="your.email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="Your phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="photography">Photography</SelectItem>
                    <SelectItem value="phoneRepair">Phone Repair</SelectItem>
                    <SelectItem value="printing">Printing Services</SelectItem>
                    <SelectItem value="electronics">Electronics Purchase</SelectItem>
                    <SelectItem value="stationery">Stationery</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Details</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Please provide any additional details about your request"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Let us know about any specific requirements you have.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="w-full btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Book Service"}
        </Button>
      </form>
    </Form>
  );
};

export default BookingForm;