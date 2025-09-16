import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  Calendar,
  Linkedin,
  MessageCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent Successfully",
      description: "Thank you for your inquiry. I'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', company: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91-9538909925",
      description: "Available Mon-Fri, 9 AM - 6 PM IST"
    },
    {
      icon: Mail,
      title: "Email",
      details: "contact@vikramnirmal.com",
      description: "Response within 24 hours"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Bangalore, India",
      description: "Available for remote & on-site consultations"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday",
      description: "9:00 AM - 6:00 PM IST"
    }
  ];

  const services = [
    "Digital Transformation Strategy",
    "Cloud Migration & Management",
    "Cybersecurity & Compliance",
    "AI & IoT Implementation",
    "Business Process Optimization",
    "Technical Training & Support"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <Badge variant="secondary" className="text-primary font-medium">
            Let's Connect
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
            Ready to Start Your Digital Journey?
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Let's discuss how digital transformation can unlock new opportunities and 
            drive sustainable growth for your organization. Schedule a free consultation today.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center space-x-3">
                  <Send className="w-6 h-6 text-primary" />
                  <span>Send a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me more about your project or requirements..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" variant="corporate" size="lg" className="w-full">
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </form>

                <div className="text-center text-sm text-muted-foreground">
                  * Required fields. Your information is secure and will not be shared.
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Quick Actions */}
              <Card className="shadow-corporate">
                <CardContent className="p-6 space-y-6">
                  <h3 className="text-xl font-semibold text-foreground">Quick Actions</h3>
                  <div className="space-y-4">
                    <Button variant="corporate" size="lg" className="w-full justify-start">
                      <Calendar className="w-4 h-4" />
                      Schedule Free Consultation
                    </Button>
                    <Button variant="outline" size="lg" className="w-full justify-start">
                      <Phone className="w-4 h-4" />
                      Call Now: +91-9538909925
                    </Button>
                    <Button variant="outline" size="lg" className="w-full justify-start">
                      <Linkedin className="w-4 h-4" />
                      Connect on LinkedIn
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Details */}
              <div className="grid gap-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card key={index} className="shadow-corporate hover:shadow-hover transition-smooth">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-corporate flex-shrink-0">
                            <Icon className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <div className="space-y-1">
                            <h4 className="font-semibold text-foreground">{info.title}</h4>
                            <p className="text-primary font-medium">{info.details}</p>
                            <p className="text-sm text-muted-foreground">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-foreground">How I Can Help</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive consulting services for your digital transformation needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="shadow-corporate hover:shadow-hover transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium text-foreground">{service}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl font-bold text-primary-foreground">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Whether you're looking to modernize your infrastructure, implement new technologies, 
            or optimize your business processes, I'm here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              <MessageCircle className="w-4 h-4" />
              Start Conversation
            </Button>
            <Button variant="elegant" size="lg">
              <Calendar className="w-4 h-4" />
              Book Meeting
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;