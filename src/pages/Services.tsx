import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Zap, 
  Wifi, 
  Tv, 
  Shield, 
  Settings, 
  Clock,
  Check
} from "lucide-react";
import fiberOptic from "@/assets/fiber-optic.jpg";
import wifiRouter from "@/assets/wifi-router.jpg";
import cableModem from "@/assets/cable-modem.jpg";

const Services = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive internet and connectivity solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {/* Fiber Internet */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block p-3 bg-primary rounded-lg mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold mb-4">Fiber Optic Internet</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Experience the future of connectivity with our fiber optic internet service. 
                  Enjoy symmetrical upload and download speeds, ultra-low latency, and unmatched reliability.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span>Speeds up to 1Gbps</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span>Unlimited data with no throttling</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span>Perfect for 4K streaming and gaming</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span>Future-proof technology</span>
                  </div>
                </div>
                <Button asChild>
                  <Link to="/pricing">View Fiber Plans</Link>
                </Button>
              </div>
              <div>
                <img 
                  src={fiberOptic} 
                  alt="Fiber optic internet" 
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* Cable Internet */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src={cableModem} 
                  alt="Cable internet" 
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block p-3 bg-primary rounded-lg mb-4">
                  <Wifi className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold mb-4">Cable Internet</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Reliable and affordable cable internet service perfect for households and small businesses. 
                  Get consistent speeds for browsing, streaming, and working from home.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span>Speeds from 100Mbps to 500Mbps</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span>Great value for money</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span>Suitable for multiple devices</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span>No data caps</span>
                  </div>
                </div>
                <Button asChild>
                  <Link to="/pricing">View Cable Plans</Link>
                </Button>
              </div>
            </div>

            {/* WiFi Equipment */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block p-3 bg-primary rounded-lg mb-4">
                  <Tv className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold mb-4">Professional WiFi Equipment</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Maximize your internet experience with our high-performance WiFi routers and mesh systems. 
                  Ensure whole-home coverage without dead zones.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span>Latest WiFi 6 technology</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span>Mesh network options available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span>Professional installation included</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span>Advanced security features</span>
                  </div>
                </div>
                <Button asChild>
                  <Link to="/contact">Learn More</Link>
                </Button>
              </div>
              <div>
                <img 
                  src={wifiRouter} 
                  alt="WiFi equipment" 
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              More ways we can help keep you connected
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">Network Security</h3>
                <p className="text-muted-foreground">
                  Advanced firewall protection and parental controls to keep your network safe from threats.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <Settings className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">Professional Installation</h3>
                <p className="text-muted-foreground">
                  Expert technicians will set up your service and ensure optimal performance throughout your space.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <Clock className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">24/7 Technical Support</h3>
                <p className="text-muted-foreground">
                  Round-the-clock support from our experienced team whenever you need assistance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Upgrade Your Internet?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose the plan that's right for you or call us to discuss custom solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/pricing">View All Plans</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+18885086472">Call +1 (888) 508-6472</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
