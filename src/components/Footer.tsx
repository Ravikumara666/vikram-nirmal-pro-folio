import { Mail, Phone, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">VN</span>
              </div>
              <span className="font-semibold text-lg text-foreground">Vikram Nirmal</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Digital Transformation Consultant with 16+ years of experience in IT, 
              Cloud Solutions, and Strategic Business Development.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <a href="/" className="block text-muted-foreground text-sm hover:text-primary transition-smooth">
                Home
              </a>
              <a href="/about" className="block text-muted-foreground text-sm hover:text-primary transition-smooth">
                About
              </a>
              <a href="/client-support" className="block text-muted-foreground text-sm hover:text-primary transition-smooth">
                Client Support
              </a>
              <a href="/contact" className="block text-muted-foreground text-sm hover:text-primary transition-smooth">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">+91-9538909925</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">contact@vikramnirmal.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">LinkedIn Profile</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 Vikram Nirmal. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Certified ISO 27001:2022 ISMS/Lead Auditor
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;