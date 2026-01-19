import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, MessageCircle, Phone } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What is the difference between FTL and LTL?",
      answer: "FTL (Full Truckload) is for full truckloads where you rent the entire truck for your shipment, providing faster delivery and direct routing. LTL (Less than Truckload) allows you to share truck space with other shipments, making it cost-effective for smaller loads that don't require a full truck."
    },
    {
      question: "Do you offer refrigerated transport?",
      answer: "Yes, we provide temperature-controlled trucking for sensitive and perishable goods. Our refrigerated units maintain precise temperature control throughout the journey, with continuous monitoring and compliance documentation for pharmaceutical and food-grade shipments."
    },
    {
      question: "Which states do you currently serve?",
      answer: "We are based in Sharonville, Ohio and provide services across the USA. Currently, we serve Ohio and surrounding states with nationwide coverage on major routes. Our strategic location in the Cincinnati metro area provides excellent access to major interstate corridors and distribution centers."
    },
    {
      question: "How do I request a shipping quote?",
      answer: "Simply fill out our contact form with your shipping details, call us directly at (513) 908-9066, or email us at contact@cincinnatiexpressllc.com. We'll provide a personalized quote based on your specific needs, including pickup/delivery locations, cargo type, and timeline."
    },
    {
      question: "Do you provide GPS tracking for shipments?",
      answer: "Yes, all our trucks are equipped with real-time GPS tracking systems. You'll receive tracking information and regular updates on your shipment's location and estimated delivery time. Our tracking provides complete visibility and peace of mind throughout the transportation process."
    },
    {
      question: "Are your services available 24/7?",
      answer: "Absolutely! Our customer support and trucking services are available 24/7 for urgent shipments and emergency logistics needs. We understand that business doesn't stop, and neither do we. Call us anytime at (513) 908-9066 for immediate assistance."
    },
    {
      question: "Can you handle both small and large businesses?",
      answer: "Yes! Whether you're shipping a single pallet or multiple full truckloads, we're here to help. Our flexible service options include LTL for smaller shipments and FTL for larger volumes, making us suitable for businesses of all sizes from startups to large corporations."
    },
    {
      question: "What types of cargo do you transport?",
      answer: "We transport a wide variety of cargo including general freight, temperature-sensitive goods, manufactured products, raw materials, and more. Our fleet includes standard dry vans, refrigerated units, and specialized equipment to handle different cargo types safely and efficiently."
    },
    {
      question: "How do you ensure cargo safety and security?",
      answer: "We maintain the highest safety standards through professional drivers, regular vehicle maintenance, cargo insurance coverage, and secure loading procedures. All shipments are handled with care, and we provide documentation and tracking throughout the transportation process."
    },
    {
      question: "What are your payment terms and methods?",
      answer: "We offer flexible payment terms for established customers and accept various payment methods including corporate accounts, credit cards, and traditional invoicing. Contact us to discuss payment options that work best for your business needs."
    }
  ];

  const categories = [
    {
      title: "Services & Pricing",
      count: 4
    },
    {
      title: "Tracking & Support",
      count: 3
    },
    {
      title: "Coverage & Logistics",
      count: 3
    }
  ];

  return (
    <div className="min-h-screen pt-nav">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Find answers to common questions about Cincinnati Express LLC's trucking and logistics services.
              Can't find what you're looking for? Contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {categories.map((category, index) => (
                <Card key={index} className="p-6 text-center">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{category.title}</h3>
                    <p className="text-muted-foreground">{category.count} questions</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleItem(index)}
                      className="faq-question w-full p-6 text-left flex items-center justify-between hover:bg-accent/30 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-foreground pr-4">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        {openItems.includes(index) ? (
                          <ChevronUp className="h-5 w-5 text-primary" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-primary" />
                        )}
                      </div>
                    </button>

                    {openItems.includes(index) && (
                      <div className="px-6 pb-6 border-t border-border">
                        <div className="pt-6">
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 text-center">
                <CardContent className="p-0">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Still Have Questions?</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Our team is ready to help with any specific questions about your shipping needs.
                  </p>
                  <Button asChild size="lg">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-8 text-center">
                <CardContent className="p-0">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Need Immediate Help?</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Call us directly for urgent shipments or immediate assistance with your logistics needs.
                  </p>
                  <Button asChild size="lg" variant="outline">
                    <a href="tel:+15139089066">Call (513) 908-9066</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">Learn More About Our Services</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Explore our comprehensive trucking solutions and discover how Cincinnati Express LLC
              can meet your logistics needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/services">View All Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/about">About Cincinnati Express</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join the growing list of satisfied customers who trust Cincinnati Express LLC
            for their trucking and logistics needs.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Get Your Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FAQ;