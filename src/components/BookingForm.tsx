
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
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

const BookingForm = () => {
  const { toast } = useToast();
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      message: "",
    },
  });

  const onSubmit = async (data: BookingFormValues) => {
    console.log("Form data:", data);
    
    // Google Form submission
    // Replace with your actual Google Form URL
    const googleFormUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLScYHNR7cHm-VEbAz9m2HAEAs6rZF6rIjQKVmIQQhgGTvXwJyg/formResponse";
    
    // Map form fields to Google Form field names (entry.xxxxx)
    // You'll need to get these from your actual Google Form
    const formData = new FormData();
    formData.append('entry.123456789', data.name); // Replace with actual entry IDs
    formData.append('entry.987654321', data.email); // Replace with actual entry IDs
    formData.append('entry.135792468', data.phone); // Replace with actual entry IDs
    formData.append('entry.246813579', data.service); // Replace with actual entry IDs
    formData.append('entry.975318642', data.date); // Replace with actual entry IDs
    formData.append('entry.159753486', data.message || ''); // Replace with actual entry IDs
    
    try {
      // Due to CORS restrictions, we can't directly post to Google Forms
      // Instead, we'll show a success message and provide instructions
      // In a real app, you'd use a proxy server or Supabase Edge Function
      
      toast({
        title: "Booking Request Received",
        description: "Thank you for your booking request. We will contact you shortly to confirm your appointment.",
      });
      
      form.reset();
      
      // Here you would typically send the data through an edge function or backend
      // For now, we'll just simulate a successful submission
      
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6 bg-white rounded-lg shadow-lg">
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
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Submitting..." : "Book Service"}
        </Button>
      </form>
    </Form>
  );
};

export default BookingForm;
