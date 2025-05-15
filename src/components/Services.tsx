
import React from "react";
import { Calendar, Database, Mail, Star, Chart, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Online Appointment Booking",
      description:
        "Allow patients to book and manage appointments 24/7 through your website, integrated with your clinic's schedule.",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Custom Website & SEO",
      description:
        "Professional, mobile-friendly website design with SEO optimization to boost your local visibility and attract new patients.",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Patient Communication",
      description:
        "Automated appointment reminders and follow-ups via SMS, email, or WhatsApp to reduce no-shows and improve patient engagement.",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Digital Case Management",
      description:
        "Streamlined digital workflows for case management, treatment planning, and patient records with secure cloud storage.",
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Review Management",
      description:
        "Automated systems to collect and manage Google reviews, monitoring your online reputation and building patient trust.",
    },
    {
      icon: <ChartBar className="h-6 w-6" />,
      title: "Analytics Dashboard",
      description:
        "Comprehensive analytics platform providing insights into practice performance, patient retention, and revenue trends.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Comprehensive Dental Practice Solutions</h2>
          <p className="section-subtitle">
            Tailored technology solutions to streamline operations, enhance patient
            experience, and grow your dental practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="service-card border-none">
              <CardContent className="p-6">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
