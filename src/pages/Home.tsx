import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Users, Award, Briefcase, Phone } from 'lucide-react';
import vikramHeadshot from '@/assets/vikram-headshot.jpg';
import heroBackground from '@/assets/hero-background.jpg';

const Home = () => {
  const titles = [
    "Digital Transformation Consultant", 
    "IT Strategic Advisor", 
    "Business Development Expert",
    "Cloud Solutions Architect"
  ];

  const expertise = [
    "Digital Transformation & AI Consulting",
    "Cloud Solutions & Infrastructure",
    "Cybersecurity & Compliance (ISO 27001)",
    "Business Development & Strategic Sales",
  ];

  const industries = [
    "Banking & Financial Services",
    "Healthcare & Life Sciences", 
    "Manufacturing & Supply Chain",
    "Government & Public Sector",
    "Startups & SMEs"
  ];

  const stats = [
    { icon: Award, label: "Years Experience", value: "16+" },
    { icon: Users, label: "Clients Served", value: "100+" },
    { icon: Briefcase, label: "Projects Delivered", value: "200+" },
    { icon: CheckCircle, label: "Success Rate", value: "98%" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-hero opacity-90"
          style={{ 
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-primary font-medium">
                  Certified Digital Transformation Expert
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                  Vikram Nirmal
                </h1>
                <div className="space-y-2">
                  {titles.map((title, index) => (
                    <p key={index} className="text-lg text-primary-foreground/90 font-medium">
                      {title}
                    </p>
                  ))}
                </div>
              </div>
              
              <p className="text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
                With 16+ years of experience, I help businesses embrace digital transformation 
                and harness emerging technologies to achieve meaningful growth and competitive advantage.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="group">
                  Schedule Free Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="elegant" size="lg">
                  <Phone className="w-4 h-4" />
                  +91-9538909925
                </Button>
              </div>
            </div>

            {/* Right Content - Professional Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-elegant border-4 border-primary-foreground/20">
                  <img
                    src={vikramHeadshot}
                    alt="Vikram Nirmal - Digital Transformation Consultant"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-4 shadow-hover">
                  <div className="text-center">
                    <div className="text-2xl font-bold">16+</div>
                    <div className="text-xs font-medium">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl shadow-corporate">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">Core Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specializing in strategic digital transformation initiatives that drive business growth 
              and operational excellence across diverse industry verticals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-corporate hover:shadow-hover transition-smooth">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">Technology Solutions</h3>
                <div className="space-y-4">
                  {expertise.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-corporate hover:shadow-hover transition-smooth">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">Industry Experience</h3>
                <div className="space-y-4">
                  {industries.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl font-bold text-primary-foreground">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Let's discuss how digital transformation can unlock new opportunities 
            and drive sustainable growth for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Schedule Free Consultation
            </Button>
            <Button variant="elegant" size="lg">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;