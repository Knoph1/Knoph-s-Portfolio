import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { Github, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
              Omni-Legacy Limited
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              A <strong>Kenyan IT company</strong> delivering cutting-edge software, IT services and digital transformation
              solutions across Kenya and East Africa.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://github.com/Knoph1/Omni-Legacy" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://twitter.com/omni-legacy" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://linkedin.com/omni-legacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/services" className="block text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/projects" className="block text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="/careers" className="block text-muted-foreground hover:text-primary transition-colors">
                Careers
              </Link>
              <Link href="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@omni-legacy.co.ke" className="hover:text-primary transition-colors">
                  info@omni-legacy.co.ke
                </a>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="tel:+254790065271" className="hover:text-primary transition-colors">
                  +254 790 065 271
                </a>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Stay Updated</h3>
            <p className="text-muted-foreground text-sm">
              Subscribe to our newsletter for the latest tech insights and updates from East Africa.
            </p>
            <NewsletterSignup />
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-center md:text-left">
              &copy; 2026 | Omni-Legacy Limited | All Rights Reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
