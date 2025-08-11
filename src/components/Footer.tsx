import { Facebook, Instagram, Linkedin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Google Maps Section */}
      <section className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Find Us</h2>
            <p className="text-lg text-muted-foreground">Visit our location or contact us for your fencing needs</p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.4!2d-104.991531!3d39.742043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ0JzMxLjQiTiAxMDTCsDU5JzI5LjUiVw!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MyFence.com Location"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">MyFence.com</h3>
              <p className="text-muted-foreground mb-4">
                Professional fencing solutions for residential and commercial properties. Quality craftsmanship you can trust.
              </p>
              <div className="flex items-center text-muted-foreground">
                <Phone className="h-4 w-4 mr-2" />
                <span className="font-medium">(555) 123-4567</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/fence-styles" className="text-muted-foreground hover:text-primary transition-colors">
                    Fence Styles
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/quote" className="text-muted-foreground hover:text-primary transition-colors">
                    Get Quote
                  </Link>
                </li>
                <li>
                  <Link to="/financing" className="text-muted-foreground hover:text-primary transition-colors">
                    Financing
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media & Legal */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-6">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
              <div className="space-y-2">
                <Link
                  to="/privacy-policy"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms-conditions"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} MyFence.com. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;