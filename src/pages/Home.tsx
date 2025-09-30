import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Truck, 
  MapPin, 
  Clock, 
  Shield, 
  Navigation, 
  Star,
  CheckCircle,
  Phone
} from 'lucide-react';
import heroImage from '@/assets/hero-trucking.jpg';
import ftlService from '@/assets/ftl-service.jpg';
import ltlService from '@/assets/ltl-service.jpg';
import refrigeratedService from '@/assets/refrigerated-service.jpg';
import expressService from '@/assets/express-service.jpg';

const Home = () => {
  const services = [
    {
      title: 'Full Truckload (FTL)',
      description: 'Direct, dedicated large shipments with maximum efficiency.',
      image: ftlService,
      icon: Truck
    },
    {
      title: 'Less than Truckload (LTL)',
      description: 'Flexible, cost-effective transport for smaller shipments.',
      image: ltlService,
      icon: MapPin
    },
    {
      title: 'Refrigerated Transport',
      description: 'Temperature-controlled trucks for sensitive goods.',
      image: refrigeratedService,
      icon: Shield
    },
    {
      title: 'Express Delivery',
      description: 'Fast, time-critical shipments nationwide.',
      image: expressService,
      icon: Clock
    }
  ];

  const features = [
    {
      icon: Navigation,
      title: 'GPS Tracking',
      description: 'Real-time visibility of your shipments'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Punctual and reliable service'
    },
    {
      icon: MapPin,
      title: 'Nationwide Coverage',
      description: 'Serving across the USA'
    },
    {
      icon: Phone,
      title: '24/7 Support',
      description: 'Always available for customers'
    }
  ];

  const testimonials = [
    {
      quote: "Cincinnati Express handled our urgent shipment with speed and professionalism. Highly recommended!",
      author: "Logistics Partner",
      rating: 5
    },
    {
      quote: "Great communication and reliable trucking service. Will definitely use again.",
      author: "Manufacturing Client",
      rating: 5
    },
    {
      quote: "Professional service and competitive pricing. They exceeded our expectations.",
      author: "Supply Chain Manager",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="hero-section py-20 flex items-center justify-center relative bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay"></div>
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Reliable Trucking Solutions
              <span className="block text-blue-200">Across the USA</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Professional logistics services with GPS tracking, on-time delivery, and nationwide coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-1">
              <Button asChild size="lg" className="btn-hero text-lg px-8 py-6">
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-hero text-lg px-8 py-6">
                <Link to="/services" className="text-black">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Trucking Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive logistics solutions tailored to meet your transportation needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="service-card hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-6">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <service.icon className="h-12 w-12 text-primary mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-accent/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Cincinnati Express</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with our professional trucking services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by businesses across the nation for reliable trucking services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="testimonial-card p-6">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-foreground mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <cite className="text-muted-foreground font-medium">— {testimonial.author}</cite>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Ship with Cincinnati Express?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get a personalized quote for your trucking needs. Professional service, competitive rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link to="/contact">Request Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-black  hover:text-primary">
              <Link to="/services">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;