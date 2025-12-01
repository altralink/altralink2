import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic Cable",
      speed: "100 Mbps",
      price: "39.99",
      features: [
        "100 Mbps download speed",
        "10 Mbps upload speed",
        "Unlimited data",
        "Free modem rental",
        "24/7 customer support",
        "No contract required"
      ],
      popular: false
    },
    {
      name: "Pro Cable",
      speed: "300 Mbps",
      price: "59.99",
      features: [
        "300 Mbps download speed",
        "30 Mbps upload speed",
        "Unlimited data",
        "Free WiFi router",
        "Priority customer support",
        "No contract required",
        "Professional installation"
      ],
      popular: true
    },
    {
      name: "Elite Fiber",
      speed: "1 Gbps",
      price: "89.99",
      features: [
        "1 Gbps download speed",
        "1 Gbps upload speed",
        "Unlimited data",
        "Free WiFi 6 mesh system",
        "VIP customer support",
        "No contract required",
        "White-glove installation",
        "Network security suite"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl max-w-3xl mx-auto">
            No hidden fees, no surprises. Choose the plan that fits your needs.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <Card 
                key={plan.name} 
                className={`relative shadow-card hover:shadow-primary transition-all duration-300 ${
                  plan.popular ? 'border-2 border-primary' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="text-5xl font-bold text-primary mb-2">
                    ${plan.price}
                    <span className="text-lg text-muted-foreground">/mo</span>
                  </div>
                  <div className="text-xl font-semibold">{plan.speed}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">What's Included</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">No Data Caps</h3>
                  <p className="text-muted-foreground">
                    Stream, download, and browse as much as you want. We never throttle your connection.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">No Contracts</h3>
                  <p className="text-muted-foreground">
                    Enjoy month-to-month flexibility. No long-term commitments or cancellation fees.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Equipment Included</h3>
                  <p className="text-muted-foreground">
                    All plans include necessary equipment at no extra cost. No hidden rental fees.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">99.9% Uptime</h3>
                  <p className="text-muted-foreground">
                    Industry-leading reliability backed by our uptime guarantee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Are there any installation fees?</h3>
                <p className="text-muted-foreground">
                  Professional installation is included with all plans at no extra charge.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Can I upgrade or downgrade my plan?</h3>
                <p className="text-muted-foreground">
                  Yes! You can change your plan at any time with no penalties.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">What if I'm not satisfied with the service?</h3>
                <p className="text-muted-foreground">
                  We offer a 30-day money-back guarantee. If you're not completely satisfied, we'll refund your first month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Have Questions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team is ready to help you choose the perfect plan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="tel:+18885086472">Call +1 (888) 508-6472</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
