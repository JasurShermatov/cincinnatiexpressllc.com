import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Truck, 
  Package, 
  Thermometer, 
  Zap,
  CheckCircle,
  Clock,
  Shield,
  Navigation,
  Phone,
  MapPin
} from 'lucide-react';
import ftlService from '@/assets/ftl-service.jpg';
import ltlService from '@/assets/ltl-service.jpg';
import refrigeratedService from '@/assets/refrigerated-service.jpg';
import expressService from '@/assets/express-service.jpg';

const Services = () => {
  const services = [
    {
      title: 'Full Truckload (FTL)',
      description: 'Direct shipments for large cargo loads. Secure and efficient with dedicated trucks.',
      image: ftlService,
      icon: Truck,
      features: [
        'Dedicated truck for your shipment',
        'Direct delivery without stops',
        'Maximum security and efficiency',
        'Ideal for large volume orders',
        'Faster transit times',
        'Temperature control available'
      ],
      benefits: [
        'Lower cost per unit for large shipments',
        'Reduced handling and damage risk',
        'Priority scheduling',
        'Complete load visibility'
      ]
    },
    {
      title: 'Less than Truckload (LTL)',
      description: 'Flexible option for smaller shipments, perfect for businesses that don\'t need a full truck.',
      image: ltlService,
      icon: Package,
      features: [
        'Share truck space with other shipments',
        'Cost-effective for smaller loads',
        'Flexible pickup and delivery',
        'Professional handling and care',
        'Multiple delivery options',
        'Real-time tracking included'
      ],
      benefits: [
        'Significant cost savings',
        'Environmentally friendly',
        'No minimum shipment size',
        'Reliable service network'
      ]
    },
    {
      title: 'Refrigerated Transport',
      description: 'Cold-chain solutions for perishable or temperature-sensitive goods.',
      image: refrigeratedService,
      icon: Thermometer,
      features: [
        'Temperature-controlled environment',
        'Continuous monitoring systems',
        'Frozen and chilled options',
        'Pharmaceutical grade standards',
        'Multi-temperature capabilities',
        'Compliance documentation'
      ],
      benefits: [
        'Product quality preservation',
        'Regulatory compliance',
        'Reduced spoilage and waste',
        'Extended shelf life'
      ]
    },
    {
      title: 'Express Delivery',
      description: 'Nationwide fast-trucking option for time-critical deliveries.',
      image: expressService,
      icon: Zap,
      features: [
        'Expedited pickup and delivery',
        'Time-definite service',
        'Priority handling',
        'Real-time updates',
        '24/7 dispatch support',
        'Direct routing'
      ],
      benefits: [
        'Meet tight deadlines',
        'Minimize downtime',
        'Emergency logistics support',
        'Competitive advantage'
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Navigation,
      title: 'GPS Tracking',
      description: 'Real-time visibility of your shipments with advanced tracking technology.'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Punctual and reliable service with guaranteed delivery windows.'
    },
    {
      icon: MapPin,
      title: 'Nationwide Coverage',
      description: 'Comprehensive service network covering all major US routes.'
    },
    {
      icon: Phone,
      title: '24/7 Support',
      description: 'Round-the-clock customer service and emergency assistance.'
    },
    {
      icon: Shield,
      title: 'Cargo Insurance',
      description: 'Comprehensive coverage to protect your valuable shipments.'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Rigorous standards and procedures ensure consistent service quality.'
    }
  ];

  return (
    <div className="min-h-screen pt-nav">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">Our Trucking Services</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Comprehensive logistics solutions designed to meet all your transportation needs with 
              reliability, efficiency, and professional service.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Key Features</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Benefits</h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <Button asChild>
                    <Link to="/contact">Get Quote for {service.title}</Link>
                  </Button>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="overflow-hidden shadow-card">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-80 object-cover"
                    />
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Additional Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support services to enhance your shipping experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-hero transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">Service Coverage</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Based in Lebanon, Ohio, Cincinnati Express LLC serves customers across the United States. 
              Our strategic location provides excellent access to major interstate highways and distribution centers.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="p-6">
                <CardContent className="p-0 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">Regional</h3>
                  <p className="text-muted-foreground">Ohio, Kentucky, Indiana, Michigan, West Virginia</p>
                </CardContent>
              </Card>
              
              <Card className="p-6">
                <CardContent className="p-0 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">National</h3>
                  <p className="text-muted-foreground">All 48 contiguous United States</p>
                </CardContent>
              </Card>
              
              <Card className="p-6">
                <CardContent className="p-0 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">Specialized</h3>
                  <p className="text-muted-foreground">Cross-border coordination available</p>
                </CardContent>
              </Card>
            </div>
            
            <Button asChild size="lg">
              <Link to="/contact">Discuss Your Shipping Needs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today for a personalized quote tailored to your specific trucking and logistics needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Request Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-primary">
              <Link to="/faq">View FAQ</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;