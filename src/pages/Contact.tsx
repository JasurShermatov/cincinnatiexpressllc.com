import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Truck,
  MessageSquare,
  Send,
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Escape user-provided text for safe inclusion in Telegram HTML parse mode
  const escapeHtml = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simple client-side rate limit to respect Telegram/anti-spam
    const MIN_SUBMIT_INTERVAL_MS = 12000; // 12 seconds between submissions
    const lastSentAtStr = localStorage.getItem("contact_last_sent_at");
    const now = Date.now();
    if (lastSentAtStr) {
      const last = parseInt(lastSentAtStr, 10);
      if (!Number.isNaN(last) && now - last < MIN_SUBMIT_INTERVAL_MS) {
        const wait = Math.ceil((MIN_SUBMIT_INTERVAL_MS - (now - last)) / 1000);
        toast({
          title: "Please wait before sending again",
          description: `Please try again in ${wait} seconds.`,
          variant: "destructive",
        });
        return;
      }
    }
    setIsSubmitting(true);

    // Telegram (primary) and EmailJS (secondary) configuration
    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN as
      | string
      | undefined;
    const chatIdsCsv = import.meta.env.VITE_TELEGRAM_CHAT_IDS as
      | string
      | undefined; // comma-separated list

    try {
      const nowStr = new Date().toLocaleString();
      const name = escapeHtml(formData.name || "");
      const email = escapeHtml(formData.email || "");
      const phone = escapeHtml(formData.phone || "—");
      const msg = escapeHtml(formData.message || "");
      const text = [
        `🧾 <b>New Website Contact</b>`,
        `🕒 <b>Time:</b> ${escapeHtml(nowStr)}`,
        `────────────`,
        `👤 <b>Name:</b> ${name}`,
        `✉️ <b>Email:</b> ${email}`,
        `📞 <b>Phone:</b> ${phone}`,
        `📝 <b>Message:</b>`,
        `  `,
        msg,
        `────────────`,
        `🌐 Via website contact form`,
      ].join("\n");

      let delivered = false;

      // Helper: tiny delay between Telegram requests
      const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

      // 1) Send to Telegram (multiple recipients) — sequential with tiny delay
      if (botToken && chatIdsCsv) {
        const chatIds = chatIdsCsv
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean);
        if (chatIds.length > 0) {
          const urlBase = `https://api.telegram.org/bot${botToken}/sendMessage`;
          let allOk = true;
          for (const chat_id of chatIds) {
            const resp = await fetch(urlBase, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                chat_id,
                text,
                parse_mode: "HTML",
                disable_web_page_preview: true,
              }),
            });
            if (!resp.ok) allOk = false;
            // Small delay to stay well under Telegram constraints
            await sleep(350);
          }
          delivered = allOk;
        }
      }
      // Show result toasts and handle reset only on success
      if (delivered) {
        toast({
          title: "Message sent",
          description:
            "Thanks! Your message has been received. We'll get back to you shortly.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
        localStorage.setItem("contact_last_sent_at", String(Date.now()));
      } else {
        const notConfigured = !botToken || !chatIdsCsv;
        toast({
          title: "Failed to send",
          description: notConfigured
            ? "Telegram settings not found. Please contact the administrator."
            : "Please try again later. There may be a temporary limit or network issue.",
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error(err);
      toast({
        title: "Failed to send",
        description: "Please try again later or contact us by phone.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (347) 327-5234",
      description: "Call us for immediate assistance",
    },
    {
      icon: Mail,
      title: "Email",
      value: "cincinnatiexpressllc@gmail.com",
      description: "Send us your inquiry anytime",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "Lebanon, Ohio 45036",
      description: "Our headquarters location",
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "24/7 Available",
      description: "Round-the-clock service",
    },
  ];

  const services = [
    "Full Truckload (FTL)",
    "Less than Truckload (LTL)",
    "Refrigerated Transport",
    "Express Delivery",
    "GPS Tracking",
    "Emergency Shipments",
  ];

  return (
    <div className="min-h-screen pt-nav">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Contact Cincinnati Express
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to ship? Get in touch for a personalized quote or to discuss
              your logistics needs. Our team is available 24/7 to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="p-8 shadow-card">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MessageSquare className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-foreground">
                        Send Us a Message
                      </h2>
                      <p className="text-muted-foreground">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@company.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        placeholder="Tell us about your shipping needs, including pickup/delivery locations, cargo type, timeline, and any special requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Sending...</>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Cincinnati Express LLC is here to handle all your trucking and
                  logistics needs. Contact us through any of the methods below
                  for fast, professional service.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-card transition-shadow duration-300"
                  >
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-1">
                            {info.title}
                          </h3>
                          <p className="text-foreground font-medium mb-1">
                            {info.value}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Services Quick List */}
              <Card className="p-6 bg-accent/30">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-3 mb-4">
                    <Truck className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">
                      Our Services
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="p-6 bg-destructive/5 border-destructive/20">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Emergency Shipments
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Need urgent delivery? We provide 24/7 emergency logistics
                    services.
                  </p>
                  <Button variant="destructive" size="sm">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now: (347) 327-5234
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Location
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cincinnati Express LLC is strategically located in Lebanon, Ohio,
              providing excellent access to major highways and distribution
              networks.
            </p>
          </div>

          <Card className="overflow-hidden shadow-card max-w-4xl mx-auto">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196308.39209194604!2d-84.41142073632811!3d39.43527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884051b5ce3d8b83%3A0xd06e6fa8b9188ae1!2sLebanon%2C%20OH%2045036!5e0!3m2!1sen!2sus!4v1642688950000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cincinnati Express LLC Location"
              ></iframe>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Ship?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don't wait - get your personalized shipping quote today and
            experience the Cincinnati Express difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <a href="tel:+13473275234">Call (347) 327-5234</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-black hover:text-primary"
            >
              <a href="mailto:cincinnatiexpressllc@gmail.com">Send Email</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
