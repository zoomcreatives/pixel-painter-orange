import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight, Users, Target, TrendingUp, CheckCircle, Quote } from "lucide-react";
import heroBusinessman from "@/assets/hero-businessman.jpg";
import businessMeeting from "@/assets/business-meeting.jpg";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";
import strategyBusinessman from "@/assets/strategy-businessman.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="w-full py-4 px-6 bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-orange-dark">Your Agency</div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-orange-light transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-orange-light transition-colors">About</a>
            <a href="#" className="text-gray-600 hover:text-orange-light transition-colors">Services</a>
            <a href="#" className="text-gray-600 hover:text-orange-light transition-colors">Contact</a>
          </div>
          <Button variant="default" className="bg-orange-light hover:bg-orange-dark text-white">
            Get Started
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-bg to-orange-dark text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge className="bg-orange-light/20 text-orange-light border-orange-light/30">
              Personalized Coaching to Help
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your Vision 
              <span className="text-orange-light"> Into Reality</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua consectetur adipiscing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-light hover:bg-orange-light/90 text-white px-8">
                Start Today <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-orange-dark">
                Watch Video
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-orange-light"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-400"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                </div>
                <span className="text-sm text-gray-300">16+ Members</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-light text-orange-light" />
                  ))}
                </div>
                <span className="text-sm text-gray-300">(4.9 Reviews)</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img 
              src={heroBusinessman} 
              alt="Professional businessman" 
              className="max-w-md w-full h-auto object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6 bg-section-bg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src={businessMeeting} 
              alt="Business professionals in meeting" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <Badge className="bg-orange-light/10 text-orange-light border-orange-light/30">
              Build an Experience, Driven by Results
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              We Help You To Increase Your Sale Through Solutions
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-orange-light">334+</div>
                <div className="text-sm text-gray-600">Active Clients</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-orange-light">500+</div>
                <div className="text-sm text-gray-600">Projects Done</div>
              </div>
            </div>
            <Button className="bg-orange-light hover:bg-orange-dark text-white">
              Read More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-orange-bg text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-orange-light/20 text-orange-light border-orange-light/30">
              Providing the best solutions for your business
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold">
              Get Better Results With Our Expert Team
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-orange-dark/20 border-orange-light/20 text-white">
              <CardContent className="p-6 text-center space-y-4">
                <img 
                  src={teamMember1} 
                  alt="Team member" 
                  className="w-20 h-20 rounded-full mx-auto object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold">Christina</h3>
                  <p className="text-orange-light">UI/UX Designer</p>
                </div>
                <p className="text-sm text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-orange-dark/20 border-orange-light/20 text-white">
              <CardContent className="p-6 text-center space-y-4">
                <img 
                  src={teamMember2} 
                  alt="Team member" 
                  className="w-20 h-20 rounded-full mx-auto object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold">David Lee</h3>
                  <p className="text-orange-light">Product Manager</p>
                </div>
                <p className="text-sm text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-orange-dark/20 border-orange-light/20 text-white">
              <CardContent className="p-6 text-center space-y-4">
                <img 
                  src={teamMember3} 
                  alt="Team member" 
                  className="w-20 h-20 rounded-full mx-auto object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold">Rebecca</h3>
                  <p className="text-orange-light">Developer</p>
                </div>
                <p className="text-sm text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-20 px-6 bg-section-bg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-orange-light/10 text-orange-light border-orange-light/30">
              Innovative strategies next digital era
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              We Are Committed To Give You The Best
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-orange-light" />
                <span className="text-gray-700">We help increase your productivity</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-orange-light" />
                <span className="text-gray-700">Management workflow and smooth process</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-orange-light" />
                <span className="text-gray-700">Committed to delivering excellent service</span>
              </div>
            </div>
            <Button className="bg-orange-light hover:bg-orange-dark text-white">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img 
              src={strategyBusinessman} 
              alt="Business strategy" 
              className="max-w-md w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Finished task follow the process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-orange-light/10 flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-orange-light" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Requirements Gathering</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-orange-light/10 flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-orange-light" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Analysis and Planning</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-orange-light/10 flex items-center justify-center mx-auto">
                  <TrendingUp className="w-8 h-8 text-orange-light" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Final Execution</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-orange-bg text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Our customers love what we do
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-orange-dark/20 border-orange-light/20 text-white">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-light text-orange-light" />
                  ))}
                </div>
                <p className="text-gray-300">
                  "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-light"></div>
                  <div>
                    <div className="font-semibold">Sarah Johnson</div>
                    <div className="text-sm text-orange-light">CEO, TechCorp</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-orange-dark/20 border-orange-light/20 text-white">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-light text-orange-light" />
                  ))}
                </div>
                <p className="text-gray-300">
                  "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-light"></div>
                  <div>
                    <div className="font-semibold">Michael Chen</div>
                    <div className="text-sm text-orange-light">Founder, StartupXYZ</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-orange-dark/20 border-orange-light/20 text-white">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-light text-orange-light" />
                  ))}
                </div>
                <p className="text-gray-300">
                  "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-light"></div>
                  <div>
                    <div className="font-semibold">Emma Williams</div>
                    <div className="text-sm text-orange-light">Director, InnovateCo</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-orange-light">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Let me help You Outperform!
          </h2>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Transform your business with our proven strategies and expert guidance.
          </p>
          <Button size="lg" className="bg-white text-orange-light hover:bg-gray-100 px-8">
            Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-bg text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="text-2xl font-bold text-orange-light">Your Agency</div>
              <p className="text-gray-300">
                Transform your vision into reality with our expert guidance and innovative solutions.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Company</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-orange-light transition-colors">About</a>
                <a href="#" className="block text-gray-300 hover:text-orange-light transition-colors">Services</a>
                <a href="#" className="block text-gray-300 hover:text-orange-light transition-colors">Portfolio</a>
                <a href="#" className="block text-gray-300 hover:text-orange-light transition-colors">Contact</a>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Resources</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-orange-light transition-colors">Blog</a>
                <a href="#" className="block text-gray-300 hover:text-orange-light transition-colors">Newsletter</a>
                <a href="#" className="block text-gray-300 hover:text-orange-light transition-colors">Events</a>
                <a href="#" className="block text-gray-300 hover:text-orange-light transition-colors">Support</a>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Newsletter</h4>
              <div className="space-y-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-2 rounded bg-orange-dark/20 border border-orange-light/20 text-white placeholder-gray-400 focus:outline-none focus:border-orange-light"
                />
                <Button className="w-full bg-orange-light hover:bg-orange-light/90 text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-orange-light/20 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Your Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;