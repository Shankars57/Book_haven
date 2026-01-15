import { Link } from "react-router-dom";
import {
  BookOpen,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Link2,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card ">
      <div className="container py-12 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="font-display text-lg font-semibold">
                The Book Haven
              </span>
            </Link>
            <p className="text-sm text-muted-foreground font-accent leading-relaxed">
              Your destination for timeless literature and contemporary
              favorites. Discover the joy of reading with our curated
              collection.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-semibold text-foreground">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                to="/cart"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Shopping Cart
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-semibold text-foreground">
              Contact Us
            </h3>
            <div className="flex flex-col gap-3">
               <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link2 className="h-4 w-4" />
                <span><a href="https://shankar-portfolio-lac.vercel.app">Portfolio </a></span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>bonamgshankar@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+91 9110560147</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Peddapuram , Andhra Pradesh</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-semibold text-foreground">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              Stay connected for new arrivals and exclusive offers!
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} The Book Haven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
