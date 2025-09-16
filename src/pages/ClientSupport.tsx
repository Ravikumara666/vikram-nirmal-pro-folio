import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Headphones, 
  Clock, 
  Shield, 
  Users, 
  CheckCircle, 
  Phone, 
  Mail, 
  MessageCircle,
  AlertCircle,
  Zap,
  Settings
} from 'lucide-react';

const ClientSupport = () => {
  const supportServices = [
    {
      icon: Headphones,
      title: "24/7 Technical Support",
      description: "Round-the-clock assistance for all your IT infrastructure and digital transformation needs.",
      features: ["Immediate response", "Expert guidance", "Remote diagnostics"]
    },
    {
      icon: Settings,
      title: "Infrastructure Management", 
      description: "Complete management and monitoring of your IT systems, cloud infrastructure, and applications.",
      features: ["Proactive monitoring", "Performance optimization", "Security management"]
    },
    {
      icon: Users,
      title: "Training & Development",
      description: "Comprehensive training programs for your team on new technologies and best practices.",
      features: ["Custom training", "Skill development", "Knowledge transfer"]
    },
    {
      icon: Zap,
      title: "Rapid Issue Resolution",
      description: "Fast-track problem solving with our experienced technical team and proven methodologies.",
      features: ["Priority handling", "Root cause analysis", "Preventive measures"]
    }
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Direct line to our expert consultants",
      contact: "+91-9538909925",
      availability: "Mon-Fri, 9 AM - 6 PM IST"
    },
    {
      icon: Mail,
      title: "Email Support", 
      description: "Detailed technical assistance via email",
      contact: "support@vikramnirmal.com",
      availability: "24/7 Response within 2 hours"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant messaging for quick queries",
      contact: "Available on website",
      availability: "Business hours"
    }
  ];

  const slaCommitments = [
    { metric: "Response Time", value: "< 15 mins", description: "Average first response time" },
    { metric: "Resolution Rate", value: "98%", description: "First-contact resolution rate" },
    { metric: "Uptime", value: "99.9%", description: "System availability guarantee" },
    { metric: "Client Satisfaction", value: "4.9/5", description: "Average client rating" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <Badge variant="secondary" className="text-primary-foreground border-primary-foreground/20">
            Premium Client Support
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground leading-tight">
            Dedicated Support for Your Success
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Our client support team provides comprehensive infrastructure management, training, 
            and technical assistance to ensure your digital transformation initiatives succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Contact Support Now
            </Button>
            <Button variant="elegant" size="lg">
              View SLA Details
            </Button>
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">Our Support Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive support services designed to maximize your technology investments 
              and ensure smooth operations across all digital initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {supportServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="shadow-corporate hover:shadow-hover transition-smooth">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-corporate">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* SLA Commitments */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-foreground">Service Level Commitments</h2>
            <p className="text-xl text-muted-foreground">
              We stand behind our service quality with measurable commitments
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {slaCommitments.map((commitment, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl shadow-corporate">
                  <Shield className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">{commitment.value}</div>
                  <div className="font-semibold text-foreground mt-1">{commitment.metric}</div>
                  <div className="text-sm text-muted-foreground mt-2">{commitment.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-foreground">Get Support Now</h2>
            <p className="text-xl text-muted-foreground">
              Multiple ways to reach our expert support team
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <Card key={index} className="shadow-corporate hover:shadow-hover transition-smooth text-center">
                  <CardContent className="p-8 space-y-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl shadow-corporate">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-foreground">{channel.title}</h3>
                      <p className="text-muted-foreground">{channel.description}</p>
                      <div className="space-y-2">
                        <div className="text-primary font-semibold">{channel.contact}</div>
                        <div className="text-sm text-muted-foreground">{channel.availability}</div>
                      </div>
                    </div>
                    <Button variant="corporate" className="w-full">
                      Contact Now
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-elegant">
            <CardContent className="p-8 lg:p-12 text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-destructive rounded-2xl shadow-hover">
                <AlertCircle className="w-10 h-10 text-destructive-foreground" />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Emergency Support</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  For critical issues that require immediate attention outside business hours
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="destructive" size="lg">
                    <Phone className="w-4 h-4" />
                    Emergency Hotline
                  </Button>
                  <Button variant="outline" size="lg">
                    Submit Critical Ticket
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ClientSupport;