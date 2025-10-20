import { Facebook, Instagram, Linkedin, Phone, Youtube, Music2, Pin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
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
                <span className="font-medium">(253) 455-1885</span>
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
              <div className="flex flex-wrap gap-4 mb-6">
                <a
                  href="https://www.facebook.com/myfence.com.official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/myfence.com.official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://twitter.com/MyFenceDotCom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@fencegenius"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/company/myfence-com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://www.pinterest.com/MyFenceDotCom/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Pinterest"
                >
                  <Pin className="h-6 w-6" />
                </a>
                <a
                  href="https://www.tiktok.com/@myfence.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="TikTok"
                >
                  <Music2 className="h-6 w-6" />
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
                <Link
                  to="/fence-genius"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Fence Genius Technology
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} MyFence.com. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              WA Contractor License: MYFEN**772L3
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;