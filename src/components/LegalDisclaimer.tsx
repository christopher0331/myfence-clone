import { AlertTriangle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export const LegalDisclaimer = () => {
  return (
    <Alert className="border-amber-200 bg-amber-50 text-amber-800 my-6">
      <AlertTriangle className="h-4 w-4" />
      <AlertDescription className="text-sm">
        <strong>Legal Disclaimer:</strong> This information is provided for general informational purposes only and does not constitute legal advice. 
        Laws and regulations vary by jurisdiction and may change over time. MyFence.com makes no representations or warranties regarding the accuracy, 
        completeness, or reliability of this information and assumes no liability for any damages, losses, or legal consequences resulting from the use 
        of this information. For specific legal guidance regarding fence laws in your area, please consult with a qualified attorney or local authority.
      </AlertDescription>
    </Alert>
  );
};