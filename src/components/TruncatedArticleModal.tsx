import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronRight } from "lucide-react";

interface TruncatedArticleModalProps {
  title: string;
  preview: string;
  children: React.ReactNode;
  maxChars?: number;
}

const TruncatedArticleModal = ({
  title,
  preview,
  children,
  maxChars = 280,
}: TruncatedArticleModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const truncatedText =
    preview.length > maxChars ? preview.slice(0, maxChars) + "..." : preview;

  return (
    <div className="bg-muted/30 rounded-lg p-4 border">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {truncatedText}
      </p>
      <Button
        variant="link"
        className="p-0 h-auto mt-2 text-primary"
        onClick={() => setIsOpen(true)}
      >
        Read more <ChevronRight className="h-4 w-4 ml-1" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{title}</DialogTitle>
          </DialogHeader>
          <div className="mt-4">{children}</div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TruncatedArticleModal;
