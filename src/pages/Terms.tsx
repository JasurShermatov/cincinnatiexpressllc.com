import { FileText, Scale, Shield, AlertTriangle, Globe, Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/lib/seo";
import { Link } from "react-router-dom";

const sections = [
    { id: "acceptance", title: "Acceptance of Terms", icon: FileText },
    { id: "use-of-website", title: "Use of Website", icon: Globe },
    { id: "intellectual-property", title: "Intellectual Property", icon: Shield },
    { id: "disclaimer", title: "Disclaimer", icon: AlertTriangle },
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
                title="Terms of Service | Cincinnati Express LLC"
                description="Read the Terms of Service for Cincinnati Express LLC website. Understand your rights and responsibilities when using our trucking and logistics services."
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
                            Terms of Service
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
                                    Welcome to the Cincinnati Express LLC website. These Terms of Service ("Terms") govern your access to and use of our website located at cincinnatiexpressllc.com (the "Website"). By accessing or using the Website, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Website.
                                </p>

                                <h2 id="acceptance" className="scroll-mt-28">
                                    1. Acceptance of Terms
                                </h2>
                                <p>
                                    By accessing and using this Website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>. These Terms apply to all visitors, users, and others who access or use the Website.
                                </p>

                                <h2 id="use-of-website" className="scroll-mt-28">
                                    2. Use of Website
                                </h2>
                                <p>You agree to use this Website only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                                <ul>
                                    <li>Use the Website in any way that violates any applicable federal, state, local, or international law or regulation</li>
                                    <li>Attempt to gain unauthorized access to any portion of the Website or any systems or networks connected to the Website</li>
                                    <li>Use any robot, spider, or other automatic device to access the Website for any purpose without our express written permission</li>
                                    <li>Introduce any viruses, Trojan horses, worms, or other material that is malicious or technologically harmful</li>
                                    <li>Impersonate or attempt to impersonate Cincinnati Express LLC, a Cincinnati Express LLC employee, or any other person or entity</li>
                                </ul>

                                <h2 id="intellectual-property" className="scroll-mt-28">
                                    3. Intellectual Property
                                </h2>
                                <p>
                                    The Website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Cincinnati Express LLC, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                                </p>
                                <p>
                                    You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Website without prior written consent from Cincinnati Express LLC.
                                </p>

                                <h2 id="disclaimer" className="scroll-mt-28">
                                    4. Disclaimer of Warranties
                                </h2>
                                <p>
                                    THE WEBSITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. CINCINNATI EXPRESS LLC DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                                </p>
                                <p>
                                    We do not warrant that the Website will be uninterrupted, timely, secure, or error-free. Information on the Website may be changed or updated without notice. Cincinnati Express LLC may also make improvements and/or changes to the Website at any time without notice.
                                </p>

                                <h2 id="limitation" className="scroll-mt-28">
                                    5. Limitation of Liability
                                </h2>
                                <p>
                                    TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL CINCINNATI EXPRESS LLC, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
                                </p>
                                <ul>
                                    <li>Your access to or use of (or inability to access or use) the Website</li>
                                    <li>Any conduct or content of any third party on the Website</li>
                                    <li>Any content obtained from the Website</li>
                                    <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                                </ul>

                                <h2 id="third-party" className="scroll-mt-28">
                                    6. Third-Party Links
                                </h2>
                                <p>
                                    The Website may contain links to third-party websites or services that are not owned or controlled by Cincinnati Express LLC. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that Cincinnati Express LLC shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
                                </p>

                                <h2 id="governing-law" className="scroll-mt-28">
                                    7. Governing Law
                                </h2>
                                <p>
                                    These Terms shall be governed by and construed in accordance with the laws of the State of Ohio, United States, without regard to its conflict of law provisions. You agree to submit to the personal and exclusive jurisdiction of the courts located in Hamilton County, Ohio for the resolution of any disputes arising out of or relating to these Terms or your use of the Website.
                                </p>

                                <h2 id="changes" className="scroll-mt-28">
                                    8. Changes to Terms
                                </h2>
                                <p>
                                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Website after those revisions become effective, you agree to be bound by the revised terms.
                                </p>

                                <h2 id="contact" className="scroll-mt-28">
                                    9. Contact Us
                                </h2>
                                <p>
                                    If you have any questions about these Terms of Service, please contact us:
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
                                        to="/privacy"
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

export default Terms;
