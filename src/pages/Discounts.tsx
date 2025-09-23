import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import Seo from "@/components/Seo";
import { supabase } from "@/integrations/supabase/client";
import { burstFirework } from "@/lib/effects";

const riddles = [
  {
    question: "I stand tall to mark your ground, keeping strangers from coming around. What am I?",
    answers: ["fence"],
    hint: "It's our main business!"
  },
  {
    question: "I'm made of wood that's aromatic and red, resistant to weather and bugs that are dread. What wood am I?",
    answers: ["cedar"],
    hint: "Think of a tree that smells great and resists rot"
  },
  {
    question: "I'm the opening that lets you through, with hinges and latches, I swing for you. What am I?",
    answers: ["gate"],
    hint: "An entrance in your fence"
  },
  {
    question: "I protect your fence from sun and rain, making it last without much pain. What process am I?",
    answers: ["stain", "staining"],
    hint: "A treatment that adds color and protection"
  },
  {
    question: "I'm horizontal and I'm not a post, between the verticals I like to boast. What am I?",
    answers: ["2x4", "rail"],
    hint: "The crosspiece that connects fence posts"
  },
  {
    question: "I go deep in the ground, holding everything sound. Without me your fence would fall down. What am I?",
    answers: ["post"],
    hint: "The vertical support buried in the ground"
  },
  {
    question: "I'm a measurement of height, making sure your fence looks just right. Six of me is common and true. What am I?",
    answers: ["foot"],
    hint: "A unit of measurement"
  },
  {
    question: "I have pickets that point to the sky, decorative and charming, I catch every eye. What style am I?",
    answers: ["picket"],
    hint: "A classic American fence style with pointed tops"
  },
  {
    question: "I run along the ground where your fence will stand, marking the boundary of your land. What am I?",
    answers: ["property line"],
    hint: "The legal boundary of your yard"
  },
  {
    question: "I'm put in concrete to make posts stay strong, keeping your fence standing all year long. What am I?",
    answers: ["concrete", "footing"],
    hint: "The foundation that secures fence posts"
  },
  {
    question: "I'm a barrier that's solid, you can't see through me, perfect for privacy as private as can be. What style am I?",
    answers: ["privacy"],
    hint: "A fence style designed to block views"
  },
  {
    question: "I'm clear and protective, I make wood shine bright, keeping the elements away day and night. What am I?",
    answers: ["staining", "sealer", "sealant", "stain"],
    hint: "A protective coating for wood fences"
  },
  {
    question: "I connect the sections, keeping them tight, without me your fence wouldn't look right. What hardware am I?",
    answers: ["screws"],
    hint: "Metal pieces that join fence components"
  },
  {
    question: "I'm the space between pickets, not too wide or narrow, I let light pass through like a wooden arrow. What am I?",
    answers: ["gap"],
    hint: "The opening between fence boards"
  },
  {
    question: "I'm dug in the earth before posts are placed, making sure your fence line is properly spaced. What am I?",
    answers: ["hole"],
    hint: "The excavation for fence post installation"
  },
  {
    question: "I'm slanted and topped with caps so neat, keeping water away from where posts meet. What am I?",
    answers: ["post cap", "cap"],
    hint: "The protective top piece on fence posts"
  },
  {
    question: "I swing both ways and latch with a click, keeping your yard secure with just one quick trick. What am I?",
    answers: ["latch"],
    hint: "The mechanism that keeps gates closed"
  }
];

const discounts = [
  "15% Off Pre-Staining Fence",
  "Free Credit Card Processing",
  "3% Fence Discount", 
  "15% Clear Cedar Discount",
  "Free Panel Within System",
  "Free Man Gate"
];


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
  const [clickTimeout, setClickTimeout] = useState<NodeJS.Timeout | null>(null);
  const [shouldClick, setShouldClick] = useState(false);
  const [hasPlayedToday, setHasPlayedToday] = useState(false);

  const [formFirstName, setFormFirstName] = useState("");
  const [formLastName, setFormLastName] = useState("");
  const [formAddress, setFormAddress] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formDescription, setFormDescription] = useState("");

  // Get daily riddle based on current date
  useEffect(() => {
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
    setCurrentRiddleIndex(dayOfYear % riddles.length);
    
    // Check if user has already played today
    const todayString = today.toDateString();
    const lastPlayDate = localStorage.getItem('lastDiscountPlayDate');
    
    if (lastPlayDate === todayString) {
      setHasPlayedToday(true);
    }
  }, []);

  // Create mechanical clicking sound effect
  const playClickSound = () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Create a more mechanical click sound with multiple frequencies
      const oscillator1 = audioContext.createOscillator();
      const oscillator2 = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      const filter = audioContext.createBiquadFilter();
      
      oscillator1.connect(gainNode);
      oscillator2.connect(gainNode);
      gainNode.connect(filter);
      filter.connect(audioContext.destination);
      
      // Sharp mechanical click frequencies
      oscillator1.frequency.setValueAtTime(1200, audioContext.currentTime);
      oscillator2.frequency.setValueAtTime(800, audioContext.currentTime);
      
      // Quick decay for sharp click
      gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.05);
      
      // High-pass filter for crisp sound
      filter.type = 'highpass';
      filter.frequency.setValueAtTime(400, audioContext.currentTime);
      
      oscillator1.start(audioContext.currentTime);
      oscillator1.stop(audioContext.currentTime + 0.05);
      oscillator2.start(audioContext.currentTime);
      oscillator2.stop(audioContext.currentTime + 0.05);
    } catch (error) {
      // Fallback for browsers that don't support Web Audio API
      console.log("Click sound not supported");
    }
  };

  // Simulate wheel clicking with easing
  const startWheelClicking = () => {
    setShouldClick(true);
    const segmentAngle = 360 / discounts.length;
    const totalDuration = 7000; // 7 seconds
    let currentTime = 0;
    
    const scheduleClick = () => {
      if (currentTime >= totalDuration || !shouldClick) {
        setShouldClick(false);
        return; // Stop scheduling clicks
      }
      
      playClickSound();
      
      // Calculate next interval using easing function (starts fast, slows down)
      const progress = currentTime / totalDuration;
      const easeOut = 1 - Math.pow(1 - progress, 3); // Cubic ease-out
      
      // Start with 50ms intervals, end with 500ms intervals
      const baseInterval = 50;
      const maxInterval = 500;
      const currentInterval = baseInterval + (maxInterval - baseInterval) * easeOut;
      
      currentTime += currentInterval;
      
      const timeout = setTimeout(() => {
        if (shouldClick) {
          scheduleClick();
        }
      }, currentInterval);
      setClickTimeout(timeout);
    };
    
    scheduleClick();
  };

  const checkAnswer = () => {
    const currentRiddle = riddles[currentRiddleIndex];
    const userAnswerLower = userAnswer.toLowerCase().trim();
    const isAnswerCorrect = currentRiddle.answers.some(answer => 
      answer.toLowerCase() === userAnswerLower
    );
    
    if (isAnswerCorrect) {
      setIsCorrect(true);
      toast.success("Correct! You can now spin the wheel for your discount!");
    } else {
      setAttempts(prev => prev + 1);
      if (attempts >= 1) {
        setShowHint(true);
        toast.error("Incorrect answer. Here's a hint!");
      } else {
        toast.error("Incorrect answer. Try again!");
      }
    }
  };

  const getNewRiddle = () => {
    const newIndex = Math.floor(Math.random() * riddles.length);
    setCurrentRiddleIndex(newIndex);
    setUserAnswer("");
    setAttempts(0);
    setShowHint(false);
    setIsCorrect(false);
  };

  const spinWheel = () => {
    if (isSpinning || hasPlayedToday) {
      toast.error("You've already played today!");
      return;
    }
    
    setIsSpinning(true);
    
    // Start mechanical clicking sound that slows down with the wheel
    startWheelClicking();
    
    const spins = 8 + Math.random() * 4; // 8-12 full rotations
    const segmentAngle = 360 / discounts.length;
    const randomSegment = Math.floor(Math.random() * discounts.length);
    const finalAngle = (spins * 360) + (randomSegment * segmentAngle) + (segmentAngle / 2);
    
    setWheelRotation(finalAngle);
    
    setTimeout(() => {
      // Double-check if user has already played before showing results
      const todayString = new Date().toDateString();
      const lastPlayDate = localStorage.getItem('lastDiscountPlayDate');
      
      if (lastPlayDate === todayString) {
        // Stop everything and don't show congratulations
        setShouldClick(false);
        if (clickTimeout) {
          clearTimeout(clickTimeout);
          setClickTimeout(null);
        }
        setIsSpinning(false);
        setHasPlayedToday(true);
        toast.error("You've already played today!");
        return;
      }
      
      // Mark that user has played today only when wheel completes
      localStorage.setItem('lastDiscountPlayDate', todayString);
      setHasPlayedToday(true);
      
      // Stop clicking sound immediately when wheel stops
      setShouldClick(false);
      if (clickTimeout) {
        clearTimeout(clickTimeout);
        setClickTimeout(null);
      }
      
      setIsSpinning(false);
      setSelectedDiscount(discounts[randomSegment]);
      // Trigger confetti effect
      burstFirework(window.innerWidth / 2, window.innerHeight / 2);
      setTimeout(() => burstFirework(window.innerWidth / 3, window.innerWidth / 3), 200);
      setTimeout(() => burstFirework((window.innerWidth / 3) * 2, window.innerHeight / 3), 400);
      setShowContactForm(true);
    }, 7000);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (!formFirstName.trim() || !formLastName.trim() || !formEmail.trim() || !formPhone.trim()) {
        toast.error("Please fill in all required fields.");
        return;
      }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formEmail)) {
        toast.error("Please enter a valid email address.");
        return;
      }

      const emailData = {
        firstName: formFirstName,
        lastName: formLastName,
        address: formAddress,
        email: formEmail,
        phone: formPhone,
        riddle: riddles[currentRiddleIndex].question,
        answer: riddles[currentRiddleIndex].answers[0],
        discount: selectedDiscount,
        description: formDescription || "Discount wheel submission",
      };

      const { error } = await supabase.functions.invoke('send-discount-email', {
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
      setShouldClick(false);
      setFormFirstName("");
      setFormLastName("");
      setFormAddress("");
      setFormEmail("");
      setFormPhone("");
      setFormDescription("");
      
      // Clean up any remaining click timeout
      setShouldClick(false);
      if (clickTimeout) {
        clearTimeout(clickTimeout);
        setClickTimeout(null);
      }
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
                <div className="space-y-4">
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
                  
                  {attempts >= 2 && (
                    <div className="flex justify-center">
                      <Button variant="outline" onClick={getNewRiddle}>
                        Get New Riddle
                      </Button>
                    </div>
                  )}
                </div>
              )}

              {isCorrect && !hasPlayedToday && (
                <div className="text-center space-y-6">
                  <div className="text-2xl text-green-600 font-semibold">
                    🎉 Correct! Now spin the wheel! 🎉
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="relative">
                      <div 
                        className="w-80 h-80 rounded-full border-8 border-primary"
                        style={{ 
                          transform: `rotate(${wheelRotation}deg)`,
                          transition: isSpinning ? 'transform 7s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
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
                          const angle = (360 / discounts.length) * index + (360 / discounts.length / 2);
                          const radius = 110;
                          const x = Math.cos((angle - 90) * Math.PI / 180) * radius;
                          const y = Math.sin((angle - 90) * Math.PI / 180) * radius;
                          
                          // Split text into multiple lines if too long
                          const words = discount.split(' ');
                          const lines = [];
                          let currentLine = '';
                          
                          for (const word of words) {
                            if (currentLine.length + word.length > 12) {
                              lines.push(currentLine.trim());
                              currentLine = word;
                            } else {
                              currentLine += (currentLine ? ' ' : '') + word;
                            }
                          }
                          if (currentLine) lines.push(currentLine.trim());
                          
                          return (
                            <div
                              key={index}
                              className="absolute text-xs font-bold text-white text-center leading-tight"
                              style={{
                                top: '50%',
                                left: '50%',
                                transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                                width: '80px',
                                textShadow: '2px 2px 4px rgba(0,0,0,0.9)',
                                zIndex: 10
                              }}
                            >
                              {lines.map((line, lineIndex) => (
                                <div key={lineIndex} className="block">
                                  {line}
                                </div>
                              ))}
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
                    disabled={isSpinning || hasPlayedToday}
                    className="text-lg px-8 py-4"
                  >
                    {isSpinning ? "Spinning..." : "Spin the Wheel!"}
                  </Button>
                </div>
              )}

              {isCorrect && hasPlayedToday && (
                <div className="text-center space-y-4">
                  <div className="text-2xl text-green-600 font-semibold">
                    🎉 Correct Answer! 🎉
                  </div>
                  <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="text-lg font-semibold text-yellow-800 mb-2">
                      You've already played today! 
                    </div>
                    <div className="text-yellow-700">
                      Come back tomorrow for another chance to win exclusive discounts!
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle>Congratulations! 🎉</DialogTitle>
                <DialogDescription>
                  Enter your contact information to claim your discount
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="font-semibold text-green-800">
                    You won: {selectedDiscount}
                  </p>
                </div>
                
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" value={formFirstName} onChange={(e) => setFormFirstName(e.target.value)} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" value={formLastName} onChange={(e) => setFormLastName(e.target.value)} required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" value={formAddress} onChange={(e) => setFormAddress(e.target.value)} required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" value={formEmail} onChange={(e) => setFormEmail(e.target.value)} required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" value={formPhone} onChange={(e) => setFormPhone(e.target.value)} required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Project Description</Label>
                    <Textarea 
                      id="description" 
                      value={formDescription} 
                      onChange={(e) => setFormDescription(e.target.value)}
                      placeholder="Tell us about your fencing project..."
                      rows={3}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Claim My Discount!
                  </Button>
                </form>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default Discounts;