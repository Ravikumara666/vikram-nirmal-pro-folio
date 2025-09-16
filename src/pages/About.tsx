import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Target, Users, CheckCircle, ArrowRight } from 'lucide-react';
import vikramHeadshot from '@/assets/vikram-headshot.jpg';

const About = () => {
  const journey = [
    {
      period: "2008-2012",
      title: "Foundation Years",
      description: "Started career in IT infrastructure and systems management, building expertise in enterprise technologies."
    },
    {
      period: "2012-2016", 
      title: "Growth Phase",
      description: "Expanded into business development and client relationship management, driving strategic partnerships."
    },
    {
      period: "2016-2020",
      title: "Leadership Role",
      description: "Led digital transformation initiatives for enterprise clients across BFSI, Healthcare, and Manufacturing."
    },
    {
      period: "2020-Present",
      title: "Strategic Consultant",
      description: "Independent consulting practice focused on AI, Cloud, IoT, and comprehensive digital transformation strategies."
    }
  ];

  const certifications = [
    "Certified ISO 27001:2022 ISMS Lead Auditor",
    "Google Cloud Platform Professional",
    "Microsoft Azure Solutions Architect", 
    "AWS Cloud Practitioner",
    "ITIL Foundation Certified",
    "PMP - Project Management Professional"
  ];

  const approach = [
    {
      icon: Target,
      title: "Strategic Vision",
      description: "Crafting visionary paths for organizations to proactively stay ahead of industry shifts and technological disruptions."
    },
    {
      icon: Users,
      title: "Strategic Alliances",
      description: "Cultivating partnerships to ensure seamless integration of emerging technologies with existing business processes."
    },
    {
      icon: CheckCircle,
      title: "Future Empowerment",
      description: "Empowering organizations to confidently embrace the evolving digital landscape with sustainable growth strategies."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-primary font-medium">
                  About Vikram Nirmal
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Two Decades of Digital Innovation
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Passionate about helping businesses embrace and thrive in the digital age through 
                  strategic transformation that extends beyond mere technology adoption.
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-elegant">
                  <img
                    src={vikramHeadshot}
                    alt="Vikram Nirmal"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl font-bold text-foreground">Professional Summary</h2>
          <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
            <p>
              IT professional with 16+ years of experience driving organizational success through 
              strategic sales, business development and innovative solutions. I specialize in navigating 
              the complex landscape of IT & digital technologies, including Cloud, AI, IoT, AI Consulting, 
              Digital Transformation, GRC, and ESG initiatives.
            </p>
            <p>
              My expertise spans across ensuring compliance with key regulatory standards (ISO 27001, 
              PCI DSS, HIPAA, GDPR) while creating tailored solutions that address client needs across 
              diverse sectors including BFSI, Healthcare, Manufacturing, Government, and Startups.
            </p>
            <p>
              I excel at expanding customer scalability and managing consulting practices, leading and 
              mentoring virtual and geographically dispersed teams across departments. My multilingual 
              capabilities and global experience allow me to effectively connect across geography and 
              develop effective strategies to penetrate new markets.
            </p>
          </div>
        </div>
      </section>

      {/* Career Journey */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-foreground">Career Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A progressive career spanning two decades of digital innovation and strategic transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {journey.map((phase, index) => (
              <Card key={index} className="shadow-corporate hover:shadow-hover transition-smooth">
                <CardContent className="p-6 space-y-4">
                  <Badge variant="outline" className="text-primary border-primary">
                    {phase.period}
                  </Badge>
                  <h3 className="text-lg font-semibold text-foreground">{phase.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {phase.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-foreground">My Approach</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Digital transformation extends beyond mere technology adoption - it's a strategic 
              reinvention that mandates three key principles
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {approach.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="shadow-corporate hover:shadow-hover transition-smooth text-center">
                  <CardContent className="p-8 space-y-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl shadow-corporate">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <Card className="shadow-corporate">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-semibold text-foreground">Education</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-6 space-y-2">
                    <h4 className="font-semibold text-foreground">Bachelor of Commerce (B.Com)</h4>
                    <p className="text-muted-foreground">Business Administration & Finance</p>
                  </div>
                  <div className="border-l-4 border-primary pl-6 space-y-2">
                    <h4 className="font-semibold text-foreground">Post Graduate in Marketing</h4>
                    <p className="text-muted-foreground">Strategic Marketing & Business Development</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="shadow-corporate">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-semibold text-foreground">Certifications</h3>
                </div>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;