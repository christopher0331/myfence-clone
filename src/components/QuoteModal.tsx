import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { callEdgeFunction } from "@/lib/supabase";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteModal = ({ isOpen, onClose }: QuoteModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    projectDescription: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Submitting quote request with data:', formData);
      
      // Direct fetch to Supabase edge function
      const response = await fetch('https://vcrkvdtlnhihglgahfcr.supabase.co/functions/v1/send-quote-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjcmt2ZHRsbmhpaGdsZ2FoZmNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxMjM2MTksImV4cCI6MjA0OTY5OTYxOX0.rNFVXl5gYvjjWz3MO2WXPzr_fFf7jYtWAqJKCYI2EwI',
        },
        body: JSON.stringify(formData),
      });

      console.log('Quote request response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Quote request error:', errorText);
        throw new Error(`Failed to send quote request: ${response.status} ${errorText}`);
      }

      const result = await response.json();
      console.log('Quote request sent successfully:', result);
        
        toast({
          title: "Quote Request Sent!",
          description: "We'll get back to you within 24 hours with a detailed quote.",
        });
        
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          address: "",
          projectDescription: ""
        });
        
        onClose();
    } catch (error) {
      console.error('Quote request submission error:', error);
      toast({
        title: "Error",
        description: `Failed to send quote request: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again or call us directly at (253) 455-1885.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Get Your Free Quote</DialogTitle>
          <p className="text-muted-foreground text-center">
            Tell us about your fencing project and we'll provide a detailed estimate
          </p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              placeholder="Enter your full name"
              autoComplete="name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="your.email@example.com"
              autoComplete="email"
              inputMode="email"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              required
              placeholder="(253) 555-0123"
              autoComplete="tel"
              inputMode="tel"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Project Address *</Label>
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              placeholder="Street address, City, State, ZIP"
              autoComplete="street-address"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="projectDescription">Project Description *</Label>
            <Textarea
              id="projectDescription"
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleInputChange}
              required
              placeholder="Describe your fencing project: type of fence, approximate length, height, any special requirements..."
              rows={4}
              autoComplete="off"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="w-full sm:flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="w-full sm:flex-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Quote Request"
              )}
            </Button>
          </div>
        </form>

        <div className="text-center text-sm text-muted-foreground border-t pt-4">
          <p>Questions? Call us directly at <strong>(253) 455-1885</strong></p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteModal;