"use client";

import { AlertCircle, CheckCircle, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type CalloutVariant = "warning" | "success" | "info";

const iconMap = {
  warning: AlertCircle,
  success: CheckCircle,
  info: Info,
};

interface CalloutProps {
  title?: string;
  variant?: CalloutVariant;
  children: React.ReactNode;
}

/** MDX-compatible callout matching legacy blog style (e.g. "Real-world failure") */
export default function Callout({ title, variant = "warning", children }: CalloutProps) {
  const Icon = iconMap[variant];
  const iconColor = variant === "warning" ? "text-amber-500" : variant === "success" ? "text-green-500" : "text-blue-500";

  return (
    <Card className="my-8">
      <CardContent className="p-6">
        <div className="flex items-start gap-3">
          <Icon className={`w-6 h-6 mt-1 shrink-0 ${iconColor}`} />
          <div>
            {title && <h3 className="font-semibold mb-2">{title}</h3>}
            <div className="text-muted-foreground prose-p:mb-0 prose-p:mt-0 [&>p]:text-muted-foreground">
              {children}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
