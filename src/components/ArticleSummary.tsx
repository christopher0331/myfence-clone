import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, ChevronDown, ChevronUp, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface ArticleSummaryProps {
  pageTitle: string;
  pageContent: string;
}

interface Summaries {
  gemini: string | null;
  chatgpt: string | null;
  grok: string | null;
}

export const ArticleSummary = ({ pageTitle, pageContent }: ArticleSummaryProps) => {
  const [summaries, setSummaries] = useState<Summaries | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { toast } = useToast();

  const generateSummary = async () => {
    setIsLoading(true);
    setIsExpanded(true);

    try {
      const { data, error } = await supabase.functions.invoke('summarize-article', {
        body: { pageTitle, pageContent }
      });

      if (error) {
        console.error('Error generating summary:', error);
        
        toast({
          variant: "destructive",
          title: "Failed to generate summaries",
          description: "Please try again later.",
        });
        setIsExpanded(false);
        return;
      }

      setSummaries(data.summaries);
      
      const successCount = [data.summaries.gemini, data.summaries.chatgpt, data.summaries.grok].filter(Boolean).length;
      toast({
        title: "Summaries generated!",
        description: `${successCount} AI ${successCount === 1 ? 'summary' : 'summaries'} created successfully.`,
      });
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Please try again later.",
      });
      setIsExpanded(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="border-primary/20 bg-gradient-to-br from-background to-muted/30">
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Sparkles className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                AI Summary
              </h3>
              
              {!summaries && !isLoading && (
                <div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get a quick AI-generated summary of this article's key points and benefits.
                  </p>
                  <Button 
                    onClick={generateSummary}
                    className="gap-2"
                    size="sm"
                  >
                    <Sparkles className="h-4 w-4" />
                    Generate Summary
                  </Button>
                </div>
              )}

              {isLoading && (
                <div className="flex items-center gap-2 text-muted-foreground py-4">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span className="text-sm">Generating summaries from multiple AI providers...</span>
                </div>
              )}

              {summaries && isExpanded && (
                <div className="space-y-2 mt-2">
                  {/* Visible Gemini summary */}
                  {summaries.gemini && (
                    <div className="prose prose-sm max-w-none text-muted-foreground whitespace-pre-line">
                      {summaries.gemini}
                    </div>
                  )}
                  
                  {/* Hidden ChatGPT summary for SEO */}
                  {summaries.chatgpt && (
                    <div className="sr-only" aria-hidden="true">
                      <h4>ChatGPT Summary:</h4>
                      {summaries.chatgpt}
                    </div>
                  )}
                  
                  {/* Hidden Grok summary for SEO */}
                  {summaries.grok && (
                    <div className="sr-only" aria-hidden="true">
                      <h4>Grok Summary:</h4>
                      {summaries.grok}
                    </div>
                  )}
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsExpanded(false)}
                    className="gap-2 mt-2"
                  >
                    <ChevronUp className="h-4 w-4" />
                    Collapse
                  </Button>
                </div>
              )}

              {summaries && !isExpanded && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsExpanded(true)}
                  className="gap-2"
                >
                  <ChevronDown className="h-4 w-4" />
                  Show Summary
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
