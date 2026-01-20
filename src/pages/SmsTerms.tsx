import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/lib/seo";
import { Link } from "react-router-dom";
import { MessageSquare, Phone, Shield, FileText } from "lucide-react";

const SmsTerms = () => {
    const siteUrl = typeof window !== "undefined" ? window.location.origin : "";

    return (
        <div className="min-h-screen pt-nav">
            <SEO
                title="SMS Terms | Cincinnati Express LLC"
                description="SMS terms for Cincinnati Express LLC: consent, message frequency, STOP/HELP instructions, and privacy protections."
                canonical={`${siteUrl}/sms-terms`}
            />

            {/* Hero */}
            <section className="bg-gradient-to-b from-accent/40 to-accent/0">
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                            <MessageSquare className="h-4 w-4" /> SMS Program
                        </div>
                        <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            SMS Terms & Disclosures
                        </h1>
                        <p className="text-muted-foreground text-lg">Last updated: January 20, 2026</p>
                    </div>
                </div>
            </section>

            <section className="py-8">
                <div className="container mx-auto px-4 grid gap-8 lg:grid-cols-[1fr_320px]">
                    <Card className="shadow-card">
                        <CardContent className="p-6 md:p-10">
                            <div className="prose prose-slate dark:prose-invert max-w-none">
                                <p className="text-base leading-7">
                                    These SMS Terms govern your choice to receive text messages from CINCINNATI EXPRESS LLC (USDOT 4377740, MC-1715581) about quotes, service updates, and customer support. By opting in, you agree to these terms and our <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
                                </p>

                                <h2 id="program">1. Program Description</h2>
                                <ul>
                                    <li>Messages relate to quotes, scheduling, load status, and customer support for Cincinnati Express LLC services.</li>
                                    <li>Message frequency varies based on your requests; typical cadence is up to 4 messages per month unless you are actively coordinating a shipment.</li>
                                    <li>Message and data rates may apply. Check with your carrier for details.</li>
                                </ul>

                                <h2 id="consent">2. Consent</h2>
                                <ul>
                                    <li>SMS/text messages are sent only if you expressly opt in through our contact form or another documented channel.</li>
                                    <li>Consent is not required to obtain a quote or receive services; if you do not opt in, we will contact you by email or phone call instead.</li>
                                    <li>We record your opt-in status, timestamp, page URL, consent text version, and (when available) IP address to document your consent.</li>
                                </ul>

                                <h2 id="commands">3. How to Opt Out or Get Help</h2>
                                <ul>
                                    <li>Reply <strong>STOP</strong> to any SMS to opt out of further messages.</li>
                                    <li>Reply <strong>HELP</strong> for assistance or contact us using the details below.</li>
                                    <li>Opt-out requests are processed promptly; you may receive a confirmation message.</li>
                                </ul>

                                <h2 id="privacy">4. Privacy & Data Use</h2>
                                <ul>
                                    <li>Phone numbers and SMS consent data are used only for the program described above.</li>
                                    <li>SMS consent and phone numbers will not be shared or sold to third parties for marketing purposes.</li>
                                    <li>See our <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link> for details on data handling, security, and your rights.</li>
                                </ul>

                                <h2 id="eligibility">5. Eligibility & Carrier Responsibilities</h2>
                                <ul>
                                    <li>You must be at least 18 years old and the subscriber or customary user of the phone number provided.</li>
                                    <li>Carriers are not liable for delayed or undelivered messages.</li>
                                    <li>Wireless service is subject to your carrier’s terms.</li>
                                </ul>

                                <h2 id="changes">6. Changes to These SMS Terms</h2>
                                <p>
                                    We may update these SMS Terms periodically. Material changes will be reflected by updating the “Last updated” date above. Continued participation after changes become effective constitutes acceptance of the revised terms.
                                </p>

                                <h2 id="contact">7. Contact Us</h2>
                                <p>For questions or to report issues with our SMS program, contact us:</p>
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

                    <div className="space-y-6">
                        <Card className="sticky top-24">
                            <CardContent className="p-6 space-y-3">
                                <div className="flex items-center gap-2">
                                    <FileText className="h-5 w-5 text-primary" />
                                    <h3 className="font-heading text-lg font-semibold">Summary</h3>
                                </div>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                    <li>Purpose: quotes, updates, support</li>
                                    <li>Frequency: varies, typically up to 4/mo</li>
                                    <li>STOP to opt out, HELP for help</li>
                                    <li>Message & data rates may apply</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6 space-y-3">
                                <div className="flex items-center gap-2">
                                    <Shield className="h-5 w-5 text-primary" />
                                    <h3 className="font-heading text-lg font-semibold">Privacy</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    SMS consent and phone numbers are used only for service communications and are never sold for marketing. Review our <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link> for full details.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6 space-y-3">
                                <div className="flex items-center gap-2">
                                    <Phone className="h-5 w-5 text-primary" />
                                    <h3 className="font-heading text-lg font-semibold">Need help?</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">Call or email us anytime for assistance with SMS preferences.</p>
                                <div className="text-sm space-y-1">
                                    <a href="tel:+15139089066" className="block text-primary hover:underline">(513) 908-9066</a>
                                    <a href="mailto:contact@cincinnatiexpressllc.com" className="block text-primary hover:underline">contact@cincinnatiexpressllc.com</a>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SmsTerms;
