import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Play, Users, Star, BookOpen, Sword, Zap, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";

const Index = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  
  const features = [
    {
      icon: Zap,
      title: "AI-Powered Storytelling",
      description: "Experience dynamic narratives that adapt to every choice you make"
    },
    {
      icon: BookOpen,
      title: "Infinite Adventures", 
      description: "Explore unlimited worlds from fantasy realms to sci-fi galaxies"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Share your epic tales with fellow adventurers worldwide"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 gradient-secondary" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
        
        <div className="relative container mx-auto px-4 pt-20 pb-32">
          <div className="flex justify-center">
            {/* Centered Content */}
            <div className="max-w-4xl text-center space-y-8 animate-fade-in">
              {/* Badge */}
              <div className="flex justify-center">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 animate-pulse">
                  <Users className="h-3 w-3 mr-1" />
                  Join 100,000+ Players Worldwide
                </Badge>
              </div>

              {/* Main Headline */}
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in">
                  <span className="block animate-slide-up">Craft Your Adventure</span>
                  <span className="block text-primary animate-glow animate-slide-up delay-300">
                    As You Live It
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-500">
                  AI-powered storytelling where your choices shape the narrative. 
                  Create unlimited stories that respond to your every decision.
                </p>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 text-sm animate-fade-in delay-700">
                <div className="flex items-center space-x-2 animate-float">
                  <Zap className="h-4 w-4 text-primary" />
                  <span>Start Free</span>
                </div>
                <div className="flex items-center space-x-2 animate-float delay-200">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <span>2,000+ Adventures</span>
                </div>
                <div className="flex items-center space-x-2 animate-float delay-400">
                  <Star className="h-4 w-4 text-primary fill-primary" />
                  <span>4.5/5 Rating</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center animate-fade-in delay-1000">
                <Button size="lg" className="gradient-primary shadow-glow hover:shadow-elegant transition-all duration-300 group animate-bounce-gentle">
                  <Sparkles className="h-5 w-5 mr-2 group-hover:animate-spin" />
                  Start My Adventure Now
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Additional Info */}
              <p className="text-sm text-muted-foreground animate-fade-in delay-1200">
                100% Free to start • Create unlimited stories • No credit card needed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-t">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Adventurers Choose DungeonCraft AI</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the next generation of interactive storytelling
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-elegant transition-all duration-300 cursor-pointer ${
                  activeFeature === index ? "border-primary shadow-glow" : ""
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <CardHeader>
                  <feature.icon className={`h-10 w-10 mb-2 transition-colors ${
                    activeFeature === index ? "text-primary" : "text-muted-foreground"
                  }`} />
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">Ready to Begin Your Epic Journey?</h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of adventurers crafting their stories with AI-powered narratives
            </p>
            <Button size="lg" className="gradient-primary shadow-glow hover:shadow-elegant transition-all duration-300">
              <Sword className="h-5 w-5 mr-2" />
              Start Your Adventure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
