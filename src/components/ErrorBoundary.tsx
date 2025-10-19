import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  className?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Centralized logging for MDX/article runtime issues
    console.error("Article render error:", { error, info });
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="container mx-auto px-4 py-16">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8 space-y-4">
              <h2 className="text-2xl font-semibold">We couldn't load this article</h2>
              <p className="text-muted-foreground">
                An unexpected error occurred while rendering the content. Please try again or return to the blog.
              </p>
              <div className="flex gap-3">
                <Button onClick={this.handleRetry}>Try again</Button>
                <Button variant="outline" asChild>
                  <Link to="/blog">Back to Blog</Link>
                </Button>
              </div>
              {import.meta.env.DEV && this.state.error && (
                <pre className="mt-4 text-xs bg-muted p-3 rounded overflow-auto">
                  {this.state.error?.toString()}
                </pre>
              )}
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children as React.ReactElement;
  }
}

export default ErrorBoundary;
