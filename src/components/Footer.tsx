import React from "react";
import { Link } from "react-router-dom";
import {
  Truck,
  Phone,
  Mail,
  MapPin,
  Shield,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-primary-foreground/10 p-2 rounded-lg">
                <Truck className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold">CINCINNATI EXPRESS</h3>
                <p className="text-sm opacity-80">LLC</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Federally authorized motor carrier providing reliable trucking
              and logistics services across the USA.
            </p>

            {/* FMCSA Authority Badge */}
            <div className="bg-primary-foreground/10 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-4 w-4" />
                <span className="text-xs font-medium">FMCSA Authorized</span>
              </div>
              <div className="text-xs space-y-1 opacity-90">
                <p><strong>USDOT:</strong> 4377740</p>
                <p><strong>MC:</strong> MC-1715581</p>
                <p><strong>Authority:</strong> Property</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                className="text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                Services
              </Link>
              <Link
                to="/faq"
                className="text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                className="text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                Contact
              </Link>
            </nav>

            {/* Legal Links */}
            <div className="pt-2 border-t border-primary-foreground/20">
              <h5 className="text-sm font-medium mb-2">Legal</h5>
              <nav className="flex flex-col space-y-2">
                <Link
                  to="/privacy-policy"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  Terms & Conditions
                </Link>
                <Link
                  to="/sms-terms"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  SMS Terms
                </Link>
                <Link
                  to="/cookies"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  Cookie Policy
                </Link>
              </nav>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <div className="flex flex-col space-y-2 text-sm opacity-80">
              <span>Full Truckload (FTL)</span>
              <span>Less than Truckload (LTL)</span>
              <span>Refrigerated Transport</span>
              <span>Express Delivery</span>
              <span>GPS Tracking</span>
              <span>24/7 Support</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <a href="tel:+15139089066" className="flex items-center space-x-3 hover:opacity-100 opacity-90 transition-opacity">
                <Phone className="h-4 w-4" />
                <span className="text-sm">(513) 908-9066</span>
              </a>
              <a href="mailto:contact@cincinnatiexpressllc.com" className="flex items-center space-x-3 hover:opacity-100 opacity-90 transition-opacity">
                <Mail className="h-4 w-4" />
                <span className="text-sm">contact@cincinnatiexpressllc.com</span>
              </a>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span className="text-sm opacity-80">
                  12132 S PINE DR APT 242<br />
                  SHARONVILLE, OH 45241, USA
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-80 text-center md:text-left">
              © {new Date().getFullYear()} Cincinnati Express LLC. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm opacity-80">
              <span>USDOT: 4377740</span>
              <span>|</span>
              <span>MC: MC-1715581</span>
              <span>|</span>
              <Link to="/privacy-policy" className="hover:opacity-100 hover:underline transition-opacity">
                Privacy
              </Link>
              <span>|</span>
              <Link to="/terms" className="hover:opacity-100 hover:underline transition-opacity">
                Terms & Conditions
              </Link>
              <span>|</span>
              <Link to="/sms-terms" className="hover:opacity-100 hover:underline transition-opacity">
                SMS Terms
              </Link>
              <span>|</span>
              <Link to="/cookies" className="hover:opacity-100 hover:underline transition-opacity">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
