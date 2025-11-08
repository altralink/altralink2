import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Wifi, 
  Zap, 
  Shield, 
  Clock, 
  Tv, 
  Headphones,
  ArrowRight,
  Check,
  Star,
  Users,
  Award,
  TrendingUp,
  ChevronRight
} from "lucide-react";
import heroImage from "@/assets/hero-internet.jpg";
import fiberOptic from "@/assets/fiber-optic.jpg";
import wifiRouter from "@/assets/wifi-router.jpg";
import cableModem from "@/assets/cable-modem.jpg";
import customerSupport from "@/assets/customer-support.jpg";
import happyCustomers from "@/assets/happy-customers.jpg";
import dataCenter from "@/assets/data-center.jpg";
import networkPattern from "@/assets/network-pattern.jpg";

const Home = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Remote Worker",
      content: "Altralink's fiber internet has been a game-changer for my remote work. Video calls are crystal clear and downloads are instant!",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Gaming Enthusiast",
      content: "Zero lag, amazing speeds. Best internet service I've ever had. The 1Gbps plan is perfect for streaming and gaming simultaneously.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Family of 5",
      content: "With 5 people streaming, gaming, and working from home, we needed reliable internet. Altralink delivers every time!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Unique Creative Layout */}
      <section className="relative min-h-screen gradient-hero text-white overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>
        
        {/* Animated geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large floating shapes */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/30 to-blue-vibrant/20 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-white/10 to-primary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
          
          {/* Geometric grid pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 100 100" className="w-full h-full">
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          {/* Floating icons */}
          <div className="absolute top-1/4 left-1/4 animate-float">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Wifi className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: '1s' }}>
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Zap className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="absolute bottom-1/3 left-1/3 animate-float" style={{ animationDelay: '2s' }}>
            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Shield className="w-7 h-7 text-white" />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="min-h-screen flex items-center">
            <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
              {/* Left Content */}
              <div className="space-y-8">
                {/* Badge */}
                <div className="inline-block animate-fade-in-up">
                  <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Now Live: 1Gbps Fiber Network</span>
                    <Zap className="w-4 h-4" />
                  </div>
                </div>

                {/* Main Heading */}
                <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                    <span className="block">Internet That</span>
                    <span className="block text-transparent bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text animate-glow">
                      Changes Everything
                    </span>
                  </h1>
                </div>

                {/* Description */}
                <p className="text-lg md:text-xl lg:text-2xl text-gray-100 leading-relaxed animate-fade-in-up max-w-2xl" style={{ animationDelay: '0.2s' }}>
                  Experience lightning-fast fiber internet that transforms how you work, play, and connect. 
                  No limits, no buffering, just pure speed.
                </p>

                {/* Stats Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  {[
                    { value: "1Gbps", label: "Max Speed" },
                    { value: "99.9%", label: "Uptime" },
                    { value: "24/7", label: "Support" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/20">
                      <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs md:text-sm text-gray-300">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <Button size="lg" variant="secondary" asChild className="shadow-2xl group px-6 md:px-8 py-3 md:py-4 text-base md:text-lg bg-white text-primary hover:bg-gray-100">
                    <Link to="/pricing">
                      Get Started Today
                      <ChevronRight className="ml-2 w-5 md:w-6 h-5 md:h-6 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-2 border-white/30 text-blue-600 hover:text-blue-700 hover:bg-white/10 backdrop-blur-sm px-6 md:px-8 py-3 md:py-4 text-base md:text-lg">
                    <a href="tel:+18884424532">
                      Call Now
                    </a>
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-2 md:gap-4 items-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-center gap-2 text-xs md:text-sm bg-white/10 backdrop-blur-sm rounded-full px-3 md:px-4 py-2">
                    <Check className="w-3 md:w-4 h-3 md:h-4 text-green-400" />
                    <span>No Contracts</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs md:text-sm bg-white/10 backdrop-blur-sm rounded-full px-3 md:px-4 py-2">
                    <Check className="w-3 md:w-4 h-3 md:h-4 text-green-400" />
                    <span>Free Installation</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs md:text-sm bg-white/10 backdrop-blur-sm rounded-full px-3 md:px-4 py-2">
                    <Check className="w-3 md:w-4 h-3 md:h-4 text-green-400" />
                    <span>Money Back Guarantee</span>
                  </div>
                </div>
              </div>

              {/* Right Visual Element */}
              <div className="lg:block animate-slide-in-right">
                <div className="relative">
                  {/* Main image container */}
                  <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md border border-white/20 p-4 md:p-8">
                    <img 
                      src={fiberOptic} 
                      alt="Fiber optic technology" 
                      className="w-full h-48 md:h-80 object-cover rounded-xl md:rounded-2xl"
                    />
                    
                    {/* Floating speed indicator */}
                    <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 bg-primary text-white px-3 md:px-6 py-2 md:py-3 rounded-full shadow-2xl animate-scale-in font-bold text-sm md:text-lg">
                      1 Gbps
                    </div>
                    
                    {/* Connection indicator */}
                    <div className="absolute -bottom-2 md:-bottom-4 -left-2 md:-left-4 bg-green-500 text-white px-3 md:px-4 py-2 rounded-full shadow-xl flex items-center gap-2 animate-scale-in" style={{ animationDelay: '0.3s' }}>
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <span className="text-xs md:text-sm font-medium">Connected</span>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -z-10 top-4 md:top-8 right-4 md:right-8 w-48 md:w-72 h-48 md:h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
                  <div className="absolute -z-10 bottom-4 md:bottom-8 left-4 md:left-8 w-40 md:w-64 h-40 md:h-64 bg-white/10 rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          {/* Hero Image */}
          <div className="relative mb-12 md:mb-20 animate-fade-in-up">
            <div className="relative h-64 md:h-96 rounded-2xl md:rounded-3xl overflow-hidden">
              <img 
                src={networkPattern} 
                alt="Advanced Internet Technology" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <div className="w-16 md:w-24 h-16 md:h-24 mx-auto mb-4 md:mb-6 relative">
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse-glow"></div>
                    <div className="absolute inset-2 bg-white/30 rounded-full animate-pulse-glow" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute inset-4 bg-white/50 rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
                    <Wifi className="absolute inset-0 m-auto w-6 md:w-8 h-6 md:h-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold">Next-Generation Connectivity</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Zap,
                iconBg: "bg-orange-500",
                title: "Ultra-Fast Speeds",
                subtitle: "Gigabit-class fiber connectivity delivering speeds up to 1 Gbps",
                features: [
                  "Download speeds up to 1 Gbps",
                  "Low latency below 10ms",
                  "Symmetrical upload speeds",
                  "99.9% uptime guarantee"
                ]
              },
              {
                icon: Users,
                iconBg: "bg-primary",
                title: "Smart Control",
                subtitle: "Manage your internet from anywhere with our intuitive mobile app",
                features: [
                  "Real-time network monitoring",
                  "Parental controls and filters",
                  "Device management dashboard",
                  "WiFi scheduling and optimization"
                ]
              },
              {
                icon: Award,
                iconBg: "bg-yellow-500",
                title: "Developer-Ready",
                subtitle: "Open API for seamless integration with your existing systems",
                features: [
                  "RESTful API endpoints",
                  "Webhook support",
                  "SDKs for Python, JavaScript, Go",
                  "Complete documentation"
                ]
              }
            ].map((feature, index) => (
              <Card 
                key={index} 
                className="bg-white shadow-card hover:shadow-primary transition-all duration-300 hover:-translate-y-2 animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 md:p-8">
                  <div className={`w-10 md:w-12 h-10 md:h-12 ${feature.iconBg} rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-5 md:w-6 h-5 md:h-6 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4 md:mb-6 leading-relaxed text-sm md:text-base">{feature.subtitle}</p>
                  <ul className="space-y-2 md:space-y-3">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <div className="w-4 md:w-5 h-4 md:h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-2 md:w-3 h-2 md:h-3 text-white" />
                        </div>
                        <span className="text-xs md:text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Animation */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "99.9%", label: "Uptime Guarantee", delay: "0s" },
              { value: "500K+", label: "Happy Customers", delay: "0.1s" },
              { value: "1Gbps", label: "Max Speed", delay: "0.2s" },
              { value: "24/7", label: "Support", delay: "0.3s" }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: stat.delay }}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nexus Elite Router Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Meet the <span className="text-primary">Nexus Elite Router</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Our flagship router combines cutting-edge WiFi 6E technology with enterprise-grade performance
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Router Visualization */}
            <div className="relative animate-slide-in-left">
              <div className="relative">
                <img 
                  src={wifiRouter} 
                  alt="Nexus Elite Router" 
                  className="rounded-2xl shadow-lg-custom"
                />
                {/* Network Visualization Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full w-32 h-32 animate-pulse-glow"></div>
                    <div className="absolute inset-0 bg-primary/30 rounded-full w-24 h-24 m-4 animate-pulse-glow" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute inset-0 bg-primary/50 rounded-full w-16 h-16 m-8 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg">
                      5G
                    </div>
                  </div>
                </div>
                {/* Network Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 300">
                  <defs>
                    <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: 'hsl(229 100% 56%)', stopOpacity: 0.8 }} />
                      <stop offset="100%" style={{ stopColor: 'hsl(229 100% 56%)', stopOpacity: 0.2 }} />
                    </linearGradient>
                  </defs>
                  {/* Animated network connections */}
                  <path d="M50,150 Q150,50 250,150 T450,150" stroke="url(#networkGradient)" strokeWidth="2" fill="none" className="animate-pulse-glow network-line" />
                  <path d="M150,50 Q200,100 250,150 Q300,200 350,150" stroke="url(#networkGradient)" strokeWidth="1.5" fill="none" className="animate-pulse-glow network-line" style={{ animationDelay: '0.5s' }} />
                  <path d="M100,200 Q200,150 300,200 Q400,250 450,200" stroke="url(#networkGradient)" strokeWidth="1.5" fill="none" className="animate-pulse-glow network-line" style={{ animationDelay: '1s' }} />
                  {/* Connection nodes */}
                  <circle cx="150" cy="50" r="4" fill="hsl(229 100% 56%)" className="animate-pulse-glow" />
                  <circle cx="250" cy="150" r="6" fill="hsl(229 100% 56%)" className="animate-pulse-glow" style={{ animationDelay: '0.3s' }} />
                  <circle cx="350" cy="150" r="4" fill="hsl(229 100% 56%)" className="animate-pulse-glow" style={{ animationDelay: '0.6s' }} />
                </svg>
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-primary animate-scale-in" style={{ animationDelay: '0.3s' }}>
                  INTERNET
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="animate-slide-in-right">
              <div className="space-y-6 md:space-y-8">
                {[
                  {
                    icon: Wifi,
                    title: "WiFi 6E Ready",
                    description: "Triple band technology delivers simultaneous gigabit speeds across all connected devices.",
                    color: "text-blue-500"
                  },
                  {
                    icon: Shield,
                    title: "Smart AI Integration",
                    description: "Automatic optimization and device prioritization for seamless streaming and gaming performance.",
                    color: "text-green-500"
                  },
                  {
                    icon: Award,
                    title: "Enterprise Security",
                    description: "Military-grade encryption protects your connected home from advanced threats and intrusions.",
                    color: "text-orange-500"
                  },
                  {
                    icon: Users,
                    title: "Mobile Management",
                    description: "Complete control from anywhere with our intuitive mobile app for real-time monitoring.",
                    color: "text-purple-500"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 md:space-x-4 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-10 md:w-12 h-10 md:h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className={`w-5 md:w-6 h-5 md:h-6 ${feature.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm md:text-base">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speed Comparison Section */}
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Speed That Matters</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Compare our fiber speeds to the competition
            </p>
          </div>

          {/* Speed Cards */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            {[
              {
                title: "Standard Cable",
                speed: "150 Mbps",
                color: "bg-gray-600",
                textColor: "text-white"
              },
              {
                title: "Premium Cable", 
                speed: "300 Mbps",
                color: "bg-orange-400",
                textColor: "text-white"
              },
              {
                title: "Nexus Fiber",
                speed: "1 Gbps",
                color: "bg-primary",
                textColor: "text-white",
                highlight: true
              }
            ].map((plan, index) => (
              <Card 
                key={index} 
                className={`${plan.color} ${plan.textColor} border-none shadow-lg hover:scale-105 transition-all duration-300 animate-scale-in ${plan.highlight ? 'ring-4 ring-white' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 md:p-8 text-center">
                  <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-4">{plan.title}</h3>
                  <div className="text-3xl md:text-5xl font-bold mb-2">{plan.speed}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Comparison Details */}
          <Card className="bg-orange-50 border-orange-200 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-6 md:p-8 text-center">
              <div className="mb-4 md:mb-6">
                <span className="text-3xl md:text-4xl font-bold text-primary">10x Faster</span>
                <span className="text-lg md:text-2xl text-muted-foreground ml-2">than standard cable</span>
              </div>
              <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6 max-w-3xl mx-auto">
                Stream 4K, game without lag, and download entire movies in seconds
              </p>
              <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 max-w-4xl mx-auto">
                Experience the difference with fiber-optic technology. While traditional cable internet struggles 
                with speed and reliability, Nexusnett delivers consistent performance.
              </p>
              <Button size="lg" className="animate-scale-in text-sm md:text-base" style={{ animationDelay: '0.6s' }} asChild>
                <a href="tel:+18889932795" className="flex items-center">
                  Call (888) 993-2795
                  <ChevronRight className="ml-2 w-4 md:w-5 h-4 md:h-5" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section with Hover Effects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">Our Internet Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of high-speed internet and cable services designed for your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: fiberOptic,
                icon: Zap,
                title: "Fiber Internet",
                description: "Lightning-fast fiber optic internet with speeds up to 1Gbps. Perfect for streaming, gaming, and working from home.",
                delay: "0s"
              },
              {
                image: cableModem,
                icon: Wifi,
                title: "Cable Internet",
                description: "Reliable cable internet service with consistent speeds. Great value for households with moderate usage.",
                delay: "0.1s"
              },
              {
                image: wifiRouter,
                icon: Tv,
                title: "WiFi Equipment",
                description: "Professional-grade WiFi routers and mesh systems for whole-home coverage. Never worry about dead zones again.",
                delay: "0.2s"
              }
            ].map((service, index) => (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-primary transition-all duration-300 group hover:-translate-y-2 animate-fade-in-up overflow-hidden"
                style={{ animationDelay: service.delay }}
              >
                <CardContent className="p-6">
                  <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                    />
                  </div>
                  <service.icon className="w-12 h-12 text-primary mb-4 transition-transform group-hover:scale-110" />
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <Button variant="link" asChild className="p-0 group/link">
                    <Link to="/services">
                      Learn More 
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Showcase Section with Wave */}
      <section className="relative py-20 gradient-dark text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">Powered by Advanced Technology</h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Our state-of-the-art infrastructure ensures you get the best connection possible
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Military-grade encryption and advanced threat protection keep your connection secure.",
                image: dataCenter
              },
              {
                icon: Zap,
                title: "Fiber Optic Network",
                description: "Pure fiber optic cables deliver unmatched speed and reliability to your doorstep.",
                image: fiberOptic
              },
              {
                icon: Award,
                title: "99.9% Uptime",
                description: "Redundant systems and 24/7 monitoring ensure your internet is always on.",
                image: customerSupport
              }
            ].map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <item.icon className="w-10 h-10 text-white mb-3" />
                  <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-200">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img 
                src={dataCenter} 
                alt="Advanced data center infrastructure" 
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-4xl font-bold mb-6">Why Choose Altralink?</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Zap,
                    title: "Ultra-Fast Speeds",
                    description: "Stream 4K videos, game online, and video conference without buffering or lag."
                  },
                  {
                    icon: Shield,
                    title: "99.9% Reliability",
                    description: "Industry-leading uptime guarantee. Stay connected when it matters most."
                  },
                  {
                    icon: Headphones,
                    title: "24/7 Expert Support",
                    description: "Our technical support team is always ready to help you, day or night."
                  },
                  {
                    icon: Clock,
                    title: "Quick Installation",
                    description: "Get online fast with our professional installation service. Most setups completed same-day."
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 group-hover:rotate-6">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials with Wave */}
      <section className="relative py-20 bg-secondary overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied customers enjoying fast, reliable internet
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-primary transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">Simple Installation Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get connected in 3 easy steps
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Choose Your Plan",
                description: "Select the perfect internet plan for your needs and budget",
                icon: Wifi
              },
              {
                step: "2",
                title: "Schedule Installation",
                description: "Pick a convenient time for our professional technicians to visit",
                icon: Clock
              },
              {
                step: "3",
                title: "Get Connected",
                description: "Enjoy lightning-fast internet in your home or business",
                icon: Zap
              }
            ].map((step, index) => (
              <div key={index} className="relative animate-scale-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <Card className="shadow-card hover:shadow-primary transition-all duration-300 group hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white group-hover:scale-110 transition-transform">
                      {step.step}
                    </div>
                    <step.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="w-8 h-8 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-6">Available in Your Area?</h2>
              <p className="text-xl text-muted-foreground mb-6">
                We're constantly expanding our network to bring high-speed internet to more communities. 
                Check if Altralink is available in your neighborhood.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Serving 150+ cities nationwide</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Expanding to new areas monthly</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Fiber and cable options available</span>
                </li>
              </ul>
              <Button size="lg" asChild>
                <Link to="/contact">Check Availability</Link>
              </Button>
            </div>
            <div className="animate-scale-in">
              <img 
                src={happyCustomers} 
                alt="Happy customers" 
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Get answers to common questions about our internet services
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {[
              {
                question: "What internet speeds do you offer?",
                answer: "We offer speeds ranging from 150 Mbps cable internet to 1 Gbps fiber optic internet. Our fiber plans provide symmetrical upload and download speeds, perfect for streaming, gaming, and working from home."
              },
              {
                question: "Is there a contract required?",
                answer: "No contracts required! We believe in earning your business every month with reliable service and competitive pricing. You can cancel anytime without early termination fees."
              },
              {
                question: "How long does installation take?",
                answer: "Most installations are completed within 2-4 hours. Our professional technicians will schedule a convenient time and ensure your internet is working perfectly before they leave."
              },
              {
                question: "Do you charge extra fees?",
                answer: "No hidden fees! Our pricing is transparent and includes all equipment, installation, and taxes. The price you see is the price you pay."
              },
              {
                question: "What if I experience technical issues?",
                answer: "Our 24/7 technical support team is always ready to help. You can reach us by phone, chat, or email anytime. We also offer remote diagnostics to resolve most issues quickly."
              },
              {
                question: "Do you offer business internet plans?",
                answer: "Yes! We offer dedicated business internet plans with guaranteed speeds, static IP addresses, and priority support. Contact our business team for custom solutions."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="mb-3 md:mb-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <details className="group bg-white rounded-lg shadow-card hover:shadow-primary transition-all duration-300">
                  <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer list-none">
                    <h3 className="text-base md:text-lg font-semibold text-foreground group-open:text-primary transition-colors pr-4">
                      {faq.question}
                    </h3>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-open:rotate-90 transition-transform duration-300 flex-shrink-0" />
                  </summary>
                  <div className="px-4 md:px-6 pb-4 md:pb-6">
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 md:mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6 px-4">
              Still have questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Contact Support</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+18884424532">Call (888) 442-4532</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Wave */}
      <section className="relative py-20 gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers enjoying fast, reliable internet. 
            Call us today or check out our plans online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" asChild className="shadow-primary group">
              <Link to="/pricing">
                View All Plans
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <a 
              href="tel:+18884424532" 
              className="text-xl font-semibold hover:text-secondary transition-colors flex items-center group"
            >
              Or call: +1 (888) 442-4532
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
