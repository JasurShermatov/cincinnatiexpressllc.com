import {
  Shield,
  Lock,
  Globe,
  Users,
  FileText,
  Mail,
  Phone,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/lib/seo";

const sections = [
  { id: "info-we-collect", title: "Information We Collect", icon: Users },
  { id: "how-we-use", title: "How We Use Your Information", icon: FileText },
  { id: "sharing", title: "Sharing of Information", icon: Globe },
  { id: "retention", title: "Data Retention", icon: FileText },
  { id: "your-choices", title: "Your Choices", icon: Shield },
  { id: "security", title: "Security", icon: Lock },
  { id: "children", title: "Children's Privacy", icon: Users },
  { id: "intl", title: "International Users", icon: Globe },
  { id: "changes", title: "Changes to This Policy", icon: FileText },
  { id: "contact", title: "Contact Us", icon: Mail },
];

const PrivacyPolicy = () => {
  const siteUrl = typeof window !== "undefined" ? window.location.origin : "";
  return (
    <div className="min-h-screen pt-nav">
      <SEO
        title="Privacy Policy | Cincinnati Express LLC"
        description="Learn how Cincinnati Express LLC collects, uses, and protects your personal information. Read our privacy practices and your rights."
        canonical={`${siteUrl}/privacy`}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-accent/40 to-accent/0">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              <Shield className="h-4 w-4" /> Privacy & Security
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg">
              Last updated: September 30, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-8">
        <div className="container mx-auto px-4 grid gap-8 lg:grid-cols-[1fr_320px]">
          {/* Content card */}
          <Card className="shadow-card">
            <CardContent className="p-6 md:p-10">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-base leading-7">
                  Cincinnati Express LLC ("we", "our", or "us") values your
                  privacy. This Privacy Policy explains how we collect, use,
                  disclose, and safeguard your information when you visit our
                  website and use our services.
                </p>

                <h2 id="info-we-collect" className="scroll-mt-28">
                  Information We Collect
                </h2>
                <ul>
                  <li>Contact details: name, email address, phone number</li>
                  <li>Messages you submit through our contact form</li>
                  <li>
                    Basic usage data such as pages visited and general
                    device/browser info
                  </li>
                </ul>

                <h2 id="how-we-use" className="scroll-mt-28">
                  How We Use Your Information
                </h2>
                <ul>
                  <li>To respond to inquiries and provide customer support</li>
                  <li>To provide quotes and logistics services you request</li>
                  <li>To improve our website experience and service quality</li>
                </ul>

                <h2 id="sharing" className="scroll-mt-28">
                  Sharing of Information
                </h2>
                <p>
                  We do not sell your personal information. We may share
                  information with trusted service providers who assist in
                  operating our website and conducting our business (for
                  example, email delivery providers), under confidentiality
                  obligations.
                </p>

                <h2 id="retention" className="scroll-mt-28">
                  Data Retention
                </h2>
                <p>
                  We retain personal information only as long as necessary to
                  fulfill the purposes outlined in this policy unless a longer
                  retention period is required by law.
                </p>

                <h2 id="your-choices" className="scroll-mt-28">
                  Your Choices
                </h2>
                <ul>
                  <li>
                    You may request access, correction, or deletion of your
                    personal information
                  </li>
                  <li>
                    You may opt out of non-essential communications at any time
                  </li>
                </ul>

                <h2 id="security" className="scroll-mt-28">
                  Security
                </h2>
                <p>
                  We implement reasonable physical, administrative, and
                  technical safeguards designed to protect your information.
                  However, no method of transmission over the Internet is 100%
                  secure.
                </p>

                <h2 id="children" className="scroll-mt-28">
                  Children's Privacy
                </h2>
                <p>
                  Our services are not directed to children under 13, and we do
                  not knowingly collect personal information from children.
                </p>

                <h2 id="intl" className="scroll-mt-28">
                  International Users
                </h2>
                <p>
                  If you access our website from outside the United States, you
                  understand your information may be processed in the U.S. where
                  data protection laws may differ from your jurisdiction.
                </p>

                <h2 id="changes" className="scroll-mt-28">
                  Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. Updates
                  will be posted on this page with a revised "Last updated"
                  date.
                </p>

                <h2 id="contact" className="scroll-mt-28">
                  Contact Us
                </h2>
                <p>
                  If you have questions or requests concerning this Privacy
                  Policy, contact us at:
                </p>
                <ul>
                  <li>
                    <strong>Email:</strong> cincinnatiexpressllc@gmail.com
                  </li>
                  <li>
                    <strong>Phone:</strong> +1 (347) 327-5234
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Lock className="h-5 w-5 text-primary" />
                  <h3 className="font-heading text-lg font-semibold">
                    On this page
                  </h3>
                </div>
                <nav className="space-y-2 text-sm">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                    >
                      <s.icon className="h-4 w-4" /> {s.title}
                    </a>
                  ))}
                </nav>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <h3 className="font-heading text-lg font-semibold">
                    Need assistance?
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Have questions about your data or this policy? We’re here to
                  help.
                </p>
                <div className="space-y-2 text-sm">
                  <a
                    href="mailto:cincinnatiexpressllc@gmail.com"
                    className="inline-flex items-center gap-2 hover:underline"
                  >
                    <Mail className="h-4 w-4" /> cincinnatiexpressllc@gmail.com
                  </a>
                  <a
                    href="tel:+13473275234"
                    className="inline-flex items-center gap-2 hover:underline"
                  >
                    <Phone className="h-4 w-4" /> +1 (347) 327-5234
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
