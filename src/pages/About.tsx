import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award, TrendingUp } from "lucide-react";
import customerSupport from "@/assets/customer-support.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Altralink</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're on a mission to provide everyone with fast, reliable, and affordable internet connectivity
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Founded in 2015, Altralink started with a simple vision: to bridge the digital divide and 
                provide high-quality internet service that everyone can afford. What began as a small local 
                provider has grown into a trusted name serving over 500,000 customers nationwide.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                We believe that fast, reliable internet is no longer a luxury—it's a necessity. That's why 
                we've invested heavily in fiber optic infrastructure and cutting-edge technology to deliver 
                speeds up to 1Gbps to homes and businesses across the country.
              </p>
              <p className="text-lg text-muted-foreground">
                Our commitment goes beyond just providing internet. We're dedicated to exceptional customer 
                service, transparent pricing, and continuous innovation to meet the evolving needs of our 
                connected world.
              </p>
            </div>
            <div>
              <img 
                src={customerSupport} 
                alt="NetSpeed team" 
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="shadow-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Customer First</h3>
                <p className="text-muted-foreground">
                  Your satisfaction is our top priority. We listen, adapt, and deliver.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Integrity</h3>
                <p className="text-muted-foreground">
                  Honest, transparent pricing with no hidden fees or surprises.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for the highest quality in service and technology.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  Constantly evolving to bring you the latest in connectivity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Altralink By The Numbers</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">500K+</div>
              <div className="text-xl text-muted-foreground">Active Customers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">150+</div>
              <div className="text-xl text-muted-foreground">Cities Served</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-xl text-muted-foreground">Uptime Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">4.8/5</div>
              <div className="text-xl text-muted-foreground">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 gradient-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-2xl max-w-4xl mx-auto leading-relaxed">
            To empower communities through reliable, high-speed internet connectivity, 
            enabling people to work, learn, create, and connect without limitations.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
