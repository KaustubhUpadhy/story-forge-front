import { Shield, Zap, Users, Star, Globe, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">About DungeonCraft AI</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're revolutionizing interactive storytelling by combining the magic of tabletop RPGs 
            with the power of artificial intelligence to create unlimited adventures.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground">
                To democratize storytelling and make immersive, personalized adventures accessible to everyone. 
                We believe every person has a unique story to tell, and our AI helps bring those stories to life 
                in ways that were never before possible.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <Zap className="h-8 w-8 text-primary mb-2" />
              <CardTitle>AI-Powered Storytelling</CardTitle>
              <CardDescription>
                Advanced AI creates dynamic, responsive narratives that adapt to your choices in real-time.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Globe className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Infinite Worlds</CardTitle>
              <CardDescription>
                Explore countless unique worlds, from medieval fantasies to futuristic space stations.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Community Driven</CardTitle>
              <CardDescription>
                Join a growing community of storytellers and adventurers sharing epic tales.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Safe & Inclusive</CardTitle>
              <CardDescription>
                We're committed to creating a safe, welcoming environment for all adventurers.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Star className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Premium Experience</CardTitle>
              <CardDescription>
                High-quality storytelling with rich character development and immersive world-building.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Heart className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Passion Project</CardTitle>
              <CardDescription>
                Built by storytellers, for storytellers. We share your love for great adventures.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">The Team Behind the Magic</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Alex Chen", role: "AI Engineer", desc: "Former OpenAI researcher passionate about narrative AI" },
              { name: "Sarah Martinez", role: "Game Designer", desc: "20+ years in tabletop RPG design" },
              { name: "David Kim", role: "Frontend Developer", desc: "Creating beautiful user experiences" },
              { name: "Maya Patel", role: "Community Manager", desc: "Building bridges between adventurers" },
            ].map((member, index) => (
              <Card key={index}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="font-medium">{member.role}</CardDescription>
                  <CardDescription className="text-sm">{member.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Ready to Start Your Adventure?</CardTitle>
              <CardDescription className="text-lg">
                Join thousands of adventurers already crafting their stories with DungeonCraft AI.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" className="w-full max-w-sm">
                Begin Your Journey
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;