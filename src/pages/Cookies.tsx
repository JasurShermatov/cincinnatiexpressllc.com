import { Cookie, Settings, BarChart3, Shield, Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/lib/seo";
import { Link } from "react-router-dom";

const sections = [
    { id: "what-are-cookies", title: "What Are Cookies", icon: Cookie },
    { id: "types-of-cookies", title: "Types of Cookies We Use", icon: Settings },
    { id: "analytics", title: "Analytics", icon: BarChart3 },
    { id: "managing-cookies", title: "Managing Cookies", icon: Settings },
    { id: "changes", title: "Changes to This Policy", icon: Shield },
    { id: "contact", title: "Contact Us", icon: Mail },
];

const Cookies = () => {
    const siteUrl = typeof window !== "undefined" ? window.location.origin : "";
    return (
        <div className="min-h-screen pt-nav">
            <SEO
                title="Cookie Policy | Cincinnati Express LLC"
                description="Learn about how Cincinnati Express LLC uses cookies on our website. Understand cookie types, purposes, and how to manage your preferences."
                canonical={`${siteUrl}/cookies`}
                noIndex={false}
            />

            {/* Hero */}
            <section className="bg-gradient-to-b from-accent/40 to-accent/0">
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-5xl">
                        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                            <Cookie className="h-4 w-4" /> Cookies & Tracking
                        </div>
                        <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            Cookie Policy
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            Last updated: January 19, 2026
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
                                    This Cookie Policy explains how Cincinnati Express LLC ("we", "our", or "us") uses cookies and similar technologies when you visit our website at cincinnatiexpressllc.com. This policy should be read alongside our <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
                                </p>

                                <h2 id="what-are-cookies" className="scroll-mt-28">
                                    What Are Cookies
                                </h2>
                                <p>
                                    Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and give website owners useful information about how their site is being used.
                                </p>
                                <p>
                                    Cookies can be "persistent" (remaining on your device for a set period) or "session" cookies (deleted when you close your browser).
                                </p>

                                <h2 id="types-of-cookies" className="scroll-mt-28">
                                    Types of Cookies We Use
                                </h2>

                                <h3>Essential Cookies</h3>
                                <p>
                                    These cookies are necessary for the Website to function properly. They enable basic functions like page navigation and access to secure areas of the Website. The Website cannot function properly without these cookies.
                                </p>
                                <ul>
                                    <li><strong>Session cookies:</strong> Maintain your session while browsing</li>
                                    <li><strong>Security cookies:</strong> Help protect against unauthorized access</li>
                                </ul>

                                <h3>Functional Cookies</h3>
                                <p>
                                    These cookies enable the Website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
                                </p>
                                <ul>
                                    <li><strong>Preference cookies:</strong> Remember your preferences and settings</li>
                                    <li><strong>Form data:</strong> Remember information you've entered in forms</li>
                                </ul>

                                <h3>Analytics Cookies</h3>
                                <p>
                                    These cookies help us understand how visitors interact with our Website by collecting and reporting information anonymously. This helps us improve the Website and the services we offer.
                                </p>

                                <h2 id="analytics" className="scroll-mt-28">
                                    Analytics
                                </h2>
                                <p>
                                    We may use third-party analytics services to help us understand how our Website is being used. These services collect information about your use of the Website, including:
                                </p>
                                <ul>
                                    <li>Pages visited and time spent on each page</li>
                                    <li>Referring website or source</li>
                                    <li>General geographic location (country/city level)</li>
                                    <li>Browser type and device information</li>
                                    <li>Interactions with Website features</li>
                                </ul>
                                <p>
                                    This information is aggregated and anonymized, meaning it cannot be used to identify you personally. We use this data solely to improve our Website and understand user behavior patterns.
                                </p>

                                <h2 id="managing-cookies" className="scroll-mt-28">
                                    Managing Cookies
                                </h2>
                                <p>
                                    Most web browsers allow you to control cookies through their settings. You can typically:
                                </p>
                                <ul>
                                    <li>View what cookies are stored on your device</li>
                                    <li>Delete all or specific cookies</li>
                                    <li>Block cookies from all or specific websites</li>
                                    <li>Block third-party cookies</li>
                                    <li>Accept all cookies</li>
                                    <li>Receive notification when a cookie is set</li>
                                </ul>
                                <p>
                                    Please note that if you choose to block or delete cookies, some features of our Website may not function properly.
                                </p>
                                <p>
                                    Here are links to cookie management instructions for common browsers:
                                </p>
                                <ul>
                                    <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
                                    <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
                                    <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Apple Safari</a></li>
                                    <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
                                </ul>

                                <h2 id="changes" className="scroll-mt-28">
                                    Changes to This Policy
                                </h2>
                                <p>
                                    We may update this Cookie Policy from time to time to reflect changes in technology, legislation, our business operations, or any other reason we determine is necessary or appropriate. Any changes will be posted on this page with an updated "Last updated" date.
                                </p>
                                <p>
                                    We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies.
                                </p>

                                <h2 id="contact" className="scroll-mt-28">
                                    Contact Us
                                </h2>
                                <p>
                                    If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                                </p>
                                <ul>
                                    <li><strong>Company:</strong> Cincinnati Express LLC</li>
                                    <li><strong>USDOT:</strong> 4377740</li>
                                    <li><strong>MC Number:</strong> MC-1715581</li>
                                    <li><strong>Address:</strong> 12132 S Pine Dr Apt 242, Sharonville, OH 45241, USA</li>
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
                                    <Cookie className="h-5 w-5 text-primary" />
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
                                        Related Policies
                                    </h3>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <Link
                                        to="/privacy"
                                        className="block text-primary hover:underline"
                                    >
                                        Privacy Policy
                                    </Link>
                                    <Link
                                        to="/terms"
                                        className="block text-primary hover:underline"
                                    >
                                        Terms of Service
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
                                            12132 S Pine Dr Apt 242<br />
                                            Sharonville, OH 45241
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

export default Cookies;
