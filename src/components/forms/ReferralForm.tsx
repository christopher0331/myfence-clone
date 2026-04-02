import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  // Referrer information
  referrerFirstName: z.string().trim().min(1, "First name is required").max(100),
  referrerLastName: z.string().trim().min(1, "Last name is required").max(100),
  referrerEmail: z.string().trim().email("Invalid email address").max(255),
  referrerPhone: z.string().trim().min(1, "Phone is required").max(20),
  referrerAddress: z.string().trim().max(255).optional(),
  
  // Referred person information
  referredName: z.string().trim().min(1, "Name is required").max(200),
  referredPhone: z.string().trim().min(1, "Phone is required").max(20),
  referredEmail: z.string().trim().email("Invalid email address").max(255).optional().or(z.literal("")),
  referredAddress: z.string().trim().max(255).optional(),
  relationship: z.string().optional(),
  
  // Additional notes
  notes: z.string().trim().max(1000).optional(),
});

type FormData = z.infer<typeof formSchema>;

export function ReferralForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      referrerFirstName: "",
      referrerLastName: "",
      referrerEmail: "",
      referrerPhone: "",
      referrerAddress: "",
      referredName: "",
      referredPhone: "",
      referredEmail: "",
      referredAddress: "",
      relationship: "",
      notes: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-referral-email", {
        body: data,
      });

      if (error) throw error;

      toast({
        title: "Referral submitted!",
        description: "Thank you! We'll reach out to your friend soon.",
      });
      form.reset();
    } catch (error) {
      console.error("Error submitting referral:", error);
      toast({
        title: "Error",
        description: "Failed to submit referral. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Referrer Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Your Information</h3>
          <p className="text-sm text-muted-foreground">Tell us about yourself so we can send your gift card after the project is complete.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="referrerFirstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="referrerLastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="referrerEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="john@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="referrerPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone *</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="(555) 123-4567" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="referrerAddress"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel>Your Address (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="123 Main St, Seattle, WA" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Referred Person Section */}
        <div className="space-y-4 pt-4 border-t">
          <h3 className="text-lg font-semibold text-foreground">Person You're Referring</h3>
          <p className="text-sm text-muted-foreground">Tell us about your friend who needs a fence.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="referredName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Jane Smith" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="referredPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone *</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="(555) 987-6543" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="referredEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email (optional)</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="jane@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="relationship"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How do you know them? (optional)</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select relationship" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="neighbor">Neighbor</SelectItem>
                      <SelectItem value="family">Family</SelectItem>
                      <SelectItem value="friend">Friend</SelectItem>
                      <SelectItem value="coworker">Coworker</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="referredAddress"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel>Their Address/City (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="456 Oak Ave, Bellevue, WA" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Notes Section */}
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Notes (optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Any additional details about the referral..."
                  className="min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isSubmitting} size="lg" className="w-full md:w-auto">
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Submit Referral
        </Button>
      </form>
    </Form>
  );
}
