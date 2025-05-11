
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import BookingForm from './BookingForm';
import { Button } from '@/components/ui/button';

interface BookingModalProps {
  triggerText: string;
  service?: string;
}

const BookingModal = ({ triggerText, service }: BookingModalProps) => {
  const [open, setOpen] = useState(false);
  
  const handleSuccess = () => {
    // Close the modal after successful submission
    setOpen(false);
  };
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="btn-primary">{triggerText}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Book a Service</DialogTitle>
          <DialogDescription>
            Fill out the form below to book your service. We'll get back to you shortly to confirm your appointment.
          </DialogDescription>
        </DialogHeader>
        <BookingForm preselectedService={service} onSuccess={handleSuccess} />
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
