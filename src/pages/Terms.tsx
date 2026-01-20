import { FileText, Scale, Shield, AlertTriangle, Globe, Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/lib/seo";
import { Link } from "react-router-dom";

const sections = [
    { id: "acceptance", title: "Acceptance of Terms", icon: FileText },
    { id: "company", title: "Company & Services", icon: Shield },
    { id: "permitted-use", title: "Eligibility & Permitted Use", icon: Globe },
    { id: "communications", title: "Quotes & Communications", icon: Mail },
    { id: "intellectual-property", title: "Intellectual Property", icon: Shield },
    { id: "disclaimer", title: "Disclaimers", icon: AlertTriangle },
    { id: "limitation", title: "Limitation of Liability", icon: Scale },
    { id: "third-party", title: "Third-Party Links", icon: Globe },
    { id: "governing-law", title: "Governing Law", icon: Scale },
    { id: "changes", title: "Changes to Terms", icon: FileText },
    { id: "contact", title: "Contact Us", icon: Mail },
];

const Terms = () => {
    const siteUrl = typeof window !== "undefined" ? window.location.origin : "";
    return (
        <div className="min-h-screen pt-nav">
            <SEO
                title="Terms & Conditions | Cincinnati Express LLC"
                description="Terms & Conditions for using Cincinnati Express LLC's website and services. Understand permitted use, communications, and legal rights."
                canonical={`${siteUrl}/terms`}
                noIndex={false}
            />

            {/* Hero */}
            <section className="bg-gradient-to-b from-accent/40 to-accent/0">
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-5xl">
                        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                            <Scale className="h-4 w-4" /> Legal
                        </div>
                        <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            Terms & Conditions
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
                                    These Terms & Conditions ("Terms") govern your access to and use of the Cincinnati Express LLC website located at cincinnatiexpressllc.com (the "Website") and any related services offered by CINCINNATI EXPRESS LLC (USDOT 4377740, MC-1715581). By using the Website, you agree to these Terms and our linked policies. If you do not agree, please discontinue use immediately.
                                </p>

                                <h2 id="acceptance" className="scroll-mt-28">
                                    1. Acceptance of Terms
                                </h2>
                                <p>
                                    By accessing or using the Website, you confirm you are at least 18 years old (or the age of majority in your jurisdiction) and capable of entering a binding agreement. These Terms incorporate our <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link> and <Link to="/sms-terms" className="text-primary hover:underline">SMS Terms</Link> by reference.
                                </p>

                                <h2 id="company" className="scroll-mt-28">
                                    2. Company & Services
                                </h2>
                                <p>
                                    Cincinnati Express LLC provides trucking and logistics services across the United States. Information on the Website (including service descriptions, coverage areas, and contact details) is provided for general informational purposes and does not constitute a binding offer. Quotes and service commitments are confirmed only once you receive written confirmation from us.
                                </p>

                                <h2 id="permitted-use" className="scroll-mt-28">
                                    3. Eligibility & Permitted Use
                                </h2>
                                <p>You agree to use the Website only for lawful business purposes. You will not:</p>
                                <ul>
                                    <li>Violate applicable federal, state, or local laws and regulations</li>
                                    <li>Misrepresent your identity or authority to act on behalf of another entity</li>
                                    <li>Access or attempt to access non-public areas of the Website, servers, or related systems</li>
                                    <li>Introduce malicious code or interfere with the Website’s operation or security</li>
                                    <li>Use automated tools (scrapers, bots) without our prior written consent</li>
                                </ul>

                                <h2 id="communications" className="scroll-mt-28">
                                    4. Quotes & Communications (Email/SMS)
                                </h2>
                                <p>
                                    By submitting a form, you authorize us to contact you regarding your inquiry via email or phone. SMS/text messages are only sent if you expressly opt in to receive them, and are governed by our <Link to="/sms-terms" className="text-primary hover:underline">SMS Terms</Link>. If you do not opt in, we will not send SMS/text messages to you. Message frequency varies; message and data rates may apply.
                                </p>

                                <h2 id="intellectual-property" className="scroll-mt-28">
                                    5. Intellectual Property
                                </h2>
                                <p>
                                    All content on the Website—including text, graphics, logos, icons, images, audio, video, and software—is owned by Cincinnati Express LLC or its licensors and is protected by U.S. and international intellectual property laws. You may not copy, modify, distribute, publicly display, or create derivative works from the Website without our prior written consent.
                                </p>

                                <h2 id="disclaimer" className="scroll-mt-28">
                                    6. Disclaimers
                                </h2>
                                <p>
                                    THE WEBSITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, OR NON-INFRINGEMENT. We do not warrant that the Website will be uninterrupted, secure, or free from errors or harmful components.
                                </p>

                                <h2 id="limitation" className="scroll-mt-28">
                                    7. Limitation of Liability
                                </h2>
                                <p>
                                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, CINCINNATI EXPRESS LLC AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR LOST PROFITS OR REVENUES, ARISING FROM YOUR USE OF THE WEBSITE. OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THE WEBSITE SHALL NOT EXCEED ONE HUNDRED U.S. DOLLARS ($100).
                                </p>

                                <h2 id="third-party" className="scroll-mt-28">
                                    8. Third-Party Links
                                </h2>
                                <p>
                                    The Website may contain links to third-party websites. Cincinnati Express LLC is not responsible for the content, security, or privacy practices of those sites. Accessing third-party links is at your own risk.
                                </p>

                                <h2 id="governing-law" className="scroll-mt-28">
                                    9. Governing Law & Venue
                                </h2>
                                <p>
                                    These Terms are governed by the laws of the State of Ohio, USA, without regard to conflict of law principles. You agree to the exclusive jurisdiction and venue of the state and federal courts located in Hamilton County, Ohio for any dispute arising from these Terms or your use of the Website.
                                </p>

                                <h2 id="changes" className="scroll-mt-28">
                                    10. Changes to Terms
                                </h2>
                                <p>
                                    We may update these Terms from time to time. Material changes will be indicated by updating the “Last updated” date at the top of this page. Your continued use of the Website after changes become effective constitutes acceptance of the revised Terms.
                                </p>

                                <h2 id="contact" className="scroll-mt-28">
                                    11. Contact Us
                                </h2>
                                <p>
                                    For questions about these Terms, contact us:
                                </p>
                                <ul>
                                    <li><strong>Company:</strong> CINCINNATI EXPRESS LLC</li>
                                    <li><strong>USDOT:</strong> 4377740</li>
                                    <li><strong>MC:</strong> MC-1715581</li>
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
                                    <Scale className="h-5 w-5 text-primary" />
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
                                    <FileText className="h-5 w-5 text-primary" />
                                    <h3 className="font-heading text-lg font-semibold">
                                        Legal Documents
                                    </h3>
                                </div>
                                <p className="text-muted-foreground text-sm mb-4">
                                    Review our other legal documents for complete information.
                                </p>
                                <div className="space-y-2 text-sm">
                                    <Link
                                        to="/privacy-policy"
                                        className="block text-primary hover:underline"
                                    >
                                        Privacy Policy
                                    </Link>
                                    <Link
                                        to="/cookies"
                                        className="block text-primary hover:underline"
                                    >
                                        Cookie Policy
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <Mail className="h-5 w-5 text-primary" />
                                    <h3 className="font-heading text-lg font-semibold">
                                        Questions?
                                    </h3>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center gap-2">
                                        <Mail className="h-4 w-4 text-muted-foreground" />
                                        <a href="mailto:contact@cincinnatiexpressllc.com" className="hover:underline">
                                            contact@cincinnatiexpressllc.com
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Phone className="h-4 w-4 text-muted-foreground" />
                                        <a href="tel:+15139089066" className="hover:underline">
                                            (513) 908-9066
                                        </a>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                                        <span className="text-muted-foreground">
                                            12132 S PINE DR APT 242<br />
                                            SHARONVILLE, OH 45241
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Terms;
