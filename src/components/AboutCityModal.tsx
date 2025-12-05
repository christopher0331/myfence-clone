import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MapPin } from "lucide-react";

interface AboutCityModalProps {
  cityName: string;
  content: string;
  truncateLength?: number;
}

const AboutCityModal = ({ cityName, content, truncateLength = 280 }: AboutCityModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const truncatedContent = content.length > truncateLength 
    ? content.slice(0, truncateLength).trim() + "..."
    : content;

  // Split content into paragraphs for the modal
  const paragraphs = content.split('\n\n').filter(p => p.trim());

  return (
    <section className="py-8 border-t border-border/50">
      <div className="flex items-start gap-3">
        <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">About {cityName}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {truncatedContent}
            {content.length > truncateLength && (
              <Button
                variant="link"
                className="p-0 h-auto ml-1 text-primary font-medium"
                onClick={() => setIsOpen(true)}
              >
                Read more
              </Button>
            )}
          </p>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">About {cityName}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default AboutCityModal;
