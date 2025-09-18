import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import Seo from "@/components/Seo";
import { supabase } from "@/integrations/supabase/client";

const riddles = [
  {
    question: "I stand tall to mark your ground, keeping strangers from coming around. What am I?",
    answer: "fence",
    hint: "It's our main business!"
  },
  {
    question: "I'm made of wood that's aromatic and red, resistant to weather and bugs that are dread. What wood am I?",
    answer: "cedar",
    hint: "Think of a tree that smells great and resists rot"
  },
  {
    question: "I'm the opening that lets you through, with hinges and latches, I swing for you. What am I?",
    answer: "gate",
    hint: "An entrance in your fence"
  },
  {
    question: "I protect your fence from sun and rain, making it last without much pain. What process am I?",
    answer: "staining",
    hint: "A treatment that adds color and protection"
  },
  {
    question: "I'm horizontal and I'm not a post, between the verticals I like to boast. What am I?",
    answer: "rail",
    hint: "The crosspiece that connects fence posts"
  },
  {
    question: "I go deep in the ground, holding everything sound. Without me your fence would fall down. What am I?",
    answer: "post",
    hint: "The vertical support buried in the ground"
  },
  {
    question: "I'm a measurement of height, making sure your fence looks just right. Six of me is common and true. What am I?",
    answer: "foot",
    hint: "A unit of measurement"
  }
];

const discounts = [
  "15% off pre-staining fence",
  "Free credit card processing",
  "3% fence discount", 
  "15% Clear Cedar Discount",
  "Free Panel Within System",
  "Free Man Gate"
];

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Discounts = () => {
  const [currentRiddleIndex, setCurrentRiddleIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [wheelRotation, setWheelRotation] = useState(0);
  const [selectedDiscount, setSelectedDiscount] = useState("");
  const [showContactForm, setShowContactForm] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  // Get daily riddle based on current date
  useEffect(() => {
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
    setCurrentRiddleIndex(dayOfYear % riddles.length);
  }, []);

  const checkAnswer = () => {
    const currentRiddle = riddles[currentRiddleIndex];
    if (userAnswer.toLowerCase().trim() === currentRiddle.answer.toLowerCase()) {
      setIsCorrect(true);
      toast.success("Correct! You can now spin the wheel for your discount!");
    } else {
      setAttempts(prev => prev + 1);
      if (attempts >= 2) {
        setShowHint(true);
        toast.error("Incorrect answer. Here's a hint!");
      } else {
        toast.error("Incorrect answer. Try again!");
      }
    }
  };

  const spinWheel = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    const spins = 5 + Math.random() * 5; // 5-10 full rotations
    const segmentAngle = 360 / discounts.length;
    const randomSegment = Math.floor(Math.random() * discounts.length);
    const finalAngle = (spins * 360) + (randomSegment * segmentAngle) + (segmentAngle / 2);
    
    setWheelRotation(finalAngle);
    
    setTimeout(() => {
      setIsSpinning(false);
      setSelectedDiscount(discounts[randomSegment]);
      setShowContactForm(true);
    }, 3000);
  };

  const onSubmit = async (data: ContactFormData) => {
    try {
      const emailData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        riddle: riddles[currentRiddleIndex].question,
        answer: riddles[currentRiddleIndex].answer,
        discount: selectedDiscount,
        message: data.message || "Discount wheel submission"
      };

      const { data: responseData, error } = await supabase.functions.invoke('send-discount-email', {
        body: emailData,
      });

      if (error) {
        throw error;
      }
      
      toast.success("Congratulations! Your discount has been submitted. We'll contact you soon!");
      setShowContactForm(false);
      // Reset the game
      setIsCorrect(false);
      setUserAnswer("");
      setSelectedDiscount("");
      setWheelRotation(0);
      setAttempts(0);
      setShowHint(false);
      form.reset();
    } catch (error) {
      toast.error("There was an error submitting your information. Please try again.");
    }
  };

  const currentRiddle = riddles[currentRiddleIndex];

  return (
    <>
      <Seo 
        title="Daily Discounts | MyFence.com"
        description="Solve our daily riddle and spin the wheel for exclusive fence discounts. Get up to 15% off cedar fencing, free processing, and more!"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-24 pb-12">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Daily Discount Challenge
            </h1>
            <p className="text-xl text-muted-foreground">
              Solve today's riddle and spin the wheel for exclusive discounts!
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Today's Riddle</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-lg text-center p-6 bg-muted rounded-lg">
                "{currentRiddle.question}"
              </div>
              
              {showHint && (
                <div className="text-center p-4 bg-accent rounded-lg">
                  <p className="text-sm text-accent-foreground">
                    <strong>Hint:</strong> {currentRiddle.hint}
                  </p>
                </div>
              )}

              {!isCorrect && (
                <div className="flex gap-4 justify-center">
                  <Input
                    placeholder="Enter your answer..."
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && checkAnswer()}
                    className="max-w-md"
                  />
                  <Button onClick={checkAnswer} disabled={!userAnswer.trim()}>
                    Submit Answer
                  </Button>
                </div>
              )}

              {isCorrect && (
                <div className="text-center space-y-6">
                  <div className="text-2xl text-green-600 font-semibold">
                    🎉 Correct! Now spin the wheel! 🎉
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="relative">
                      <div 
                        className={`w-80 h-80 rounded-full border-8 border-primary transition-transform duration-3000 ease-out ${isSpinning ? 'animate-spin' : ''}`}
                        style={{ 
                          transform: `rotate(${wheelRotation}deg)`,
                          background: `conic-gradient(
                            from 0deg,
                            hsl(var(--primary)) 0deg 60deg,
                            hsl(var(--secondary)) 60deg 120deg,
                            hsl(var(--accent)) 120deg 180deg,
                            hsl(var(--primary)) 180deg 240deg,
                            hsl(var(--secondary)) 240deg 300deg,
                            hsl(var(--accent)) 300deg 360deg
                          )`
                        }}
                      >
                        {discounts.map((discount, index) => {
                          const angle = (360 / discounts.length) * index;
                          return (
                            <div
                              key={index}
                              className="absolute text-xs font-semibold text-white p-2 text-center"
                              style={{
                                top: '50%',
                                left: '50%',
                                transform: `rotate(${angle + 30}deg) translateX(100px) rotate(-${angle + 30}deg)`,
                                transformOrigin: '0 0',
                                width: '80px',
                                marginTop: '-10px',
                                marginLeft: '-40px'
                              }}
                            >
                              {discount}
                            </div>
                          );
                        })}
                      </div>
                      
                      {/* Wheel pointer */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                        <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-red-600"></div>
                      </div>
                    </div>
                  </div>

                  <Button 
                    size="lg" 
                    onClick={spinWheel} 
                    disabled={isSpinning}
                    className="text-lg px-8 py-4"
                  >
                    {isSpinning ? "Spinning..." : "Spin the Wheel!"}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Congratulations! 🎉</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="font-semibold text-green-800">
                    You won: {selectedDiscount}
                  </p>
                </div>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Message (Optional)</FormLabel>
                          <FormControl>
                            <Textarea {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full">
                      Claim My Discount!
                    </Button>
                  </form>
                </Form>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default Discounts;