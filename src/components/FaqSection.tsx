"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { faqCategories } from "@/data/faqData";

export const FaqSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("installation");
  
  const activeCategory = faqCategories.find(cat => cat.id === selectedCategory) || faqCategories[0];

  return (
    <section className="container py-12 md:py-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">Frequently Asked Questions</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Get answers to common questions about fence installation, pricing, and maintenance in Seattle.
        </p>
      </div>

      <div className="grid lg:grid-cols-[240px_1fr] gap-6">
        {/* Sidebar Navigation */}
        <Card className="h-fit">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b">
              <HelpCircle className="h-5 w-5 text-primary" />
              <span className="font-semibold">Categories</span>
            </div>
            <nav className="space-y-1">
              {faqCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-left transition-colors ${
                      selectedCategory === category.id
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm font-medium">{category.title}</span>
                  </button>
                );
              })}
            </nav>
          </CardContent>
        </Card>

        {/* FAQ Content */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <activeCategory.icon className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">{activeCategory.title}</h3>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              {activeCategory.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
