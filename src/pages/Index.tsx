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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  <Users className="h-3 w-3 mr-1" />
                  Join 100,000+ Players Worldwide
                </Badge>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Craft Your Adventure
                  <br />
                  <span className="gradient-primary bg-clip-text text-transparent animate-glow">
                    As You Live It
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  AI-powered storytelling where your choices shape the narrative. 
                  Create unlimited stories that respond to your every decision.
                </p>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Zap className="h-4 w-4 text-primary" />
                  <span>Start Free</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <span>2,000+ Adventures</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-primary fill-primary" />
                  <span>4.5/5 Rating</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gradient-primary shadow-glow hover:shadow-elegant transition-all duration-300 group">
                  <Sparkles className="h-5 w-5 mr-2 group-hover:animate-spin" />
                  Start My Adventure Now
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="group">
                  <Play className="h-4 w-4 mr-2" />
                  See It In Action (1 min)
                </Button>
              </div>

              {/* Additional Info */}
              <p className="text-sm text-muted-foreground">
                100% Free to start • Create unlimited stories • No credit card needed
              </p>
            </div>

            {/* Right Column - Demo/Visual */}
            <div className="relative">
              <div className="relative bg-card rounded-2xl shadow-elegant border overflow-hidden animate-float">
                {/* Mock Chat Interface */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between border-b pb-4">
                    <h3 className="font-semibold">Experience Interactive Storytelling</h3>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-accent p-3 rounded-lg">
                      <p className="text-sm">Watch how our AI creates immersive adventures that respond to your choices</p>
                    </div>
                    
                    {/* Mock video preview area */}
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 gradient-primary opacity-20" />
                      <Play className="h-12 w-12 text-primary-foreground opacity-90 hover:scale-110 transition-transform cursor-pointer" />
                    </div>
                    
                    {/* Adventure type badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                        🕵️ Secret Agent
                      </Badge>
                      <Badge variant="secondary" className="bg-purple-500/10 text-purple-400 border-purple-500/20">
                        🧙‍♀️ Magical Adventure  
                      </Badge>
                      <Badge variant="secondary" className="bg-pink-500/10 text-pink-400 border-pink-500/20">
                        🚀 Space Mission
                      </Badge>
                      <Badge variant="secondary" className="bg-green-500/10 text-green-400 border-green-500/20">
                        🔍 Detective Mystery
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
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

      {/* Featured Adventures Preview */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Adventures</h2>
              <p className="text-muted-foreground">Popular quests created by our community</p>
            </div>
            <Link to="/chats">
              <Button variant="ghost" className="group">
                View all
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "The Dragon's Crown", genre: "Fantasy", difficulty: "Epic" },
              { title: "Cyberpunk Detective", genre: "Sci-Fi", difficulty: "Hard" },
              { title: "Pirate's Treasure", genre: "Adventure", difficulty: "Medium" },
              { title: "Space Station Alpha", genre: "Sci-Fi", difficulty: "Easy" },
            ].map((adventure, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-t-lg" />
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{adventure.title}</h3>
                  <div className="flex items-center justify-between text-sm">
                    <Badge variant="outline">{adventure.genre}</Badge>
                    <span className="text-muted-foreground">{adventure.difficulty}</span>
                  </div>
                </CardContent>
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
