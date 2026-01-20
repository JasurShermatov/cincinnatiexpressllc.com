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
        canonical={`${siteUrl}/privacy-policy`}
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
              Last updated: January 20, 2026
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
                  Cincinnati Express LLC ("we", "our", or "us"), a federally authorized motor carrier (USDOT: 4377740, MC: MC-1715581), values your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at cincinnatiexpressllc.com (the "Website") and use our trucking and logistics services.
                </p>
                <p className="text-base leading-7">
                  By using our Website or services, you consent to the practices described in this Privacy Policy. If you do not agree with these practices, please do not use our Website.
                </p>

                <h2 id="info-we-collect" className="scroll-mt-28">
                  Information We Collect
                </h2>
                <h3>Information You Provide</h3>
                <ul>
                  <li><strong>Contact Information:</strong> Name, email address, phone number, and company name when you submit our contact form or request a quote</li>
                  <li><strong>Communications:</strong> Messages, inquiries, and other content you submit through our contact form</li>
                  <li><strong>Shipping Information:</strong> Pickup/delivery locations, cargo details, and timeline requirements when requesting quotes</li>
                  <li><strong>SMS Consent Records:</strong> Your SMS opt-in choice, consent text version, timestamp, page URL, and (when available) IP address to document consent</li>
                </ul>
                <h3>Information Collected Automatically</h3>
                <ul>
                  <li><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers</li>
                  <li><strong>Usage Data:</strong> Pages visited, time spent on pages, referring website, and navigation patterns</li>
                  <li><strong>Cookies:</strong> We use cookies and similar technologies as described in our <a href="/cookies" className="text-primary hover:underline">Cookie Policy</a></li>
                </ul>

                <h2 id="how-we-use" className="scroll-mt-28">
                  How We Use Your Information
                </h2>
                <p>We use the information we collect for the following purposes:</p>
                <ul>
                  <li><strong>Service Delivery:</strong> To respond to your inquiries, provide shipping quotes, and deliver our trucking and logistics services</li>
                  <li><strong>Customer Support:</strong> To communicate with you about your requests, shipments, and provide assistance</li>
                  <li><strong>Business Operations:</strong> To manage our business relationship with you and fulfill our contractual obligations</li>
                  <li><strong>Website Improvement:</strong> To analyze usage patterns and improve our Website functionality and user experience</li>
                  <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes, including FMCSA requirements</li>
                  <li><strong>Safety and Security:</strong> To protect against fraud, unauthorized access, and other security threats</li>
                </ul>

                <h2 id="sharing" className="scroll-mt-28">
                  Sharing of Information
                </h2>
                <p>
                  <strong>We do not sell your personal information.</strong> We may share your information only in the following limited circumstances:
                </p>
                <ul>
                  <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in operating our Website (hosting, analytics) and conducting our business (communication tools), under strict confidentiality obligations</li>
                  <li><strong>Legal Requirements:</strong> When required by law, regulation, legal process, or governmental request, including FMCSA or DOT requirements</li>
                  <li><strong>Business Protection:</strong> To protect the rights, property, or safety of Cincinnati Express LLC, our customers, or others</li>
                  <li><strong>Business Transfers:</strong> In connection with any merger, acquisition, or sale of company assets, with appropriate notice</li>
                </ul>
                <p className="mt-4 p-4 bg-accent/30 rounded-lg">
                  <strong>Phone & SMS Protection:</strong> Phone numbers and SMS consent are collected solely to provide quotes, service updates, and customer support. SMS consent and phone numbers will not be shared or sold to third parties for marketing purposes.
                </p>

                <h2 id="retention" className="scroll-mt-28">
                  Data Retention
                </h2>
                <p>
                  We retain personal information only as long as necessary to fulfill the purposes outlined in this policy, typically:
                </p>
                <ul>
                  <li><strong>Contact form submissions:</strong> Up to 3 years for customer service and business records</li>
                  <li><strong>Quote requests and SMS consent logs:</strong> Up to 5 years for business and legal compliance purposes</li>
                  <li><strong>Website usage data:</strong> Up to 26 months for analytics purposes</li>
                </ul>
                <p>
                  Longer retention periods may apply when required by law or for legitimate business purposes such as resolving disputes or enforcing agreements.
                </p>

                <h2 id="your-choices" className="scroll-mt-28">
                  Your Choices
                </h2>
                <p>You have the following rights regarding your personal information:</p>
                <ul>
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal retention requirements</li>
                  <li><strong>Opt-Out:</strong> Opt out of non-essential communications at any time</li>
                </ul>
                <p>
                  To exercise any of these rights, please contact us at contact@cincinnatiexpressllc.com or call (513) 908-9066.
                </p>

                <h2 id="security" className="scroll-mt-28">
                  Security
                </h2>
                <p>
                  We implement reasonable physical, administrative, and technical safeguards designed to protect your information, including:
                </p>
                <ul>
                  <li>SSL/TLS encryption for data transmission</li>
                  <li>Secure hosting infrastructure</li>
                  <li>Access controls and authentication measures</li>
                  <li>Regular security assessments</li>
                </ul>
                <p>
                  However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.
                </p>

                <h2 id="children" className="scroll-mt-28">
                  Children's Privacy
                </h2>
                <p>
                  Our Website and services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately at contact@cincinnatiexpressllc.com, and we will take steps to delete such information.
                </p>

                <h2 id="intl" className="scroll-mt-28">
                  International Users
                </h2>
                <p>
                  Cincinnati Express LLC is based in the United States and our services are primarily offered within the USA. If you access our Website from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States where data protection laws may differ from those in your jurisdiction. By using our Website, you consent to such transfer and processing.
                </p>

                <h2 id="changes" className="scroll-mt-28">
                  Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will:
                </p>
                <ul>
                  <li>Update the "Last updated" date at the top of this policy</li>
                  <li>Post the revised policy on this page</li>
                  <li>Take reasonable steps to notify you of significant changes</li>
                </ul>
                <p>
                  We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
                </p>

                <h2 id="contact" className="scroll-mt-28">
                  Contact Us
                </h2>
                <p>
                  If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <ul>
                  <li><strong>Company:</strong> Cincinnati Express LLC</li>
                  <li><strong>USDOT:</strong> 4377740</li>
                  <li><strong>MC Number:</strong> MC-1715581</li>
                  <li><strong>Address:</strong> 12132 S PINE DR APT 242, SHARONVILLE, OH 45241, USA</li>
                  <li><strong>Phone:</strong> (513) 908-9066</li>
                  <li><strong>Email:</strong> contact@cincinnatiexpressllc.com</li>
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
                    href="mailto:contact@cincinnatiexpressllc.com"
                    className="inline-flex items-center gap-2 hover:underline"
                  >
                    <Mail className="h-4 w-4" /> contact@cincinnatiexpressllc.com
                  </a>
                  <a
                    href="tel:+15139089066"
                    className="inline-flex items-center gap-2 hover:underline"
                  >
                    <Phone className="h-4 w-4" /> (513) 908-9066
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
