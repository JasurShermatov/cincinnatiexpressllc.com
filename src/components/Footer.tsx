import React from "react";
import { Link } from "react-router-dom";
import {
  Truck,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
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
                <h3 className="text-xl font-bold">Cincinnati Express</h3>
                <p className="text-sm opacity-80">LLC</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Reliable trucking solutions across the USA. Founded by Jonibek
              Shermatov in 2025.
            </p>
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
              <Link
                to="/privacy"
                className="text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                Privacy Policy
              </Link>
            </nav>
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
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 opacity-80" />
                <span className="text-sm">+1 (347) 327-5234</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 opacity-80" />
                <span className="text-sm">cincinnatiexpressllc@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 opacity-80" />
                <span className="text-sm">Lebanon, Ohio 45036</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-2">
              <h5 className="text-sm font-medium">Follow Us</h5>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2025 Cincinnati Express LLC. All rights reserved. | Founder:
            Jonibek Shermatov ·{" "}
            <Link to="/privacy" className="underline hover:no-underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
