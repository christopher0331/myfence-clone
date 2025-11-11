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
    <Card className="border-primary/20 bg-gradient-to-br from-background to-muted/30 max-w-4xl mx-auto">
      <CardContent className="p-8 md:p-10">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="h-7 w-7 text-primary animate-pulse" />
            <h3 className="text-2xl md:text-3xl font-bold">
              AI Company Summary
            </h3>
            <Sparkles className="h-7 w-7 text-primary animate-pulse" />
          </div>
          
          {!summaries && !isLoading && (
            <div>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Get an AI-powered professional summary showcasing MyFence.com's innovative technology and commitment to excellence.
              </p>
              <Button 
                onClick={generateSummary}
                className="gap-2 hover-scale"
                size="lg"
              >
                <Sparkles className="h-5 w-5" />
                Generate AI Summary
              </Button>
            </div>
          )}

          {isLoading && (
            <div className="flex flex-col items-center gap-3 py-8">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <span className="text-muted-foreground">Generating professional summary...</span>
            </div>
          )}

          {summaries && isExpanded && (
            <div className="space-y-4 mt-6">
              {/* Display first available summary - prefer gemini, fallback to grok or chatgpt */}
              {(summaries.gemini || summaries.grok || summaries.chatgpt) && (
                <div className="prose prose-sm md:prose-base max-w-none text-left bg-muted/30 rounded-lg p-6 [&_h2]:text-foreground [&_h2]:font-bold [&_h2]:text-lg [&_h2]:mb-3 [&_h2]:mt-4 [&_h2:first-child]:mt-0 [&_ul]:list-none [&_ul]:space-y-2 [&_li]:text-foreground [&_p]:text-foreground [&_hr]:my-4 [&_hr]:border-border">
                  {(summaries.gemini || summaries.grok || summaries.chatgpt || '').split('\n').map((line, i) => {
                    if (line.startsWith('## ')) {
                      return <h2 key={i}>{line.replace('## ', '')}</h2>;
                    } else if (line.startsWith('• ')) {
                      return <li key={i} className="flex gap-2"><span>•</span><span>{line.replace('• ', '')}</span></li>;
                    } else if (line.trim() === '---') {
                      return <hr key={i} />;
                    } else if (line.trim()) {
                      return <p key={i}>{line}</p>;
                    }
                    return null;
                  })}
                </div>
              )}
              
              {/* Hidden additional summaries for SEO */}
              {summaries.chatgpt && summaries.gemini && (
                <div className="sr-only" aria-hidden="true">
                  <h4>ChatGPT Summary:</h4>
                  {summaries.chatgpt}
                </div>
              )}
              
              {summaries.grok && summaries.gemini && (
                <div className="sr-only" aria-hidden="true">
                  <h4>Grok Summary:</h4>
                  {summaries.grok}
                </div>
              )}
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(false)}
                className="gap-2 mt-4"
              >
                <ChevronUp className="h-4 w-4" />
                Collapse Summary
              </Button>
            </div>
          )}

          {summaries && !isExpanded && (
            <Button
              variant="ghost"
              size="lg"
              onClick={() => setIsExpanded(true)}
              className="gap-2 hover-scale mt-4"
            >
              <ChevronDown className="h-4 w-4" />
              Show AI Summary
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
