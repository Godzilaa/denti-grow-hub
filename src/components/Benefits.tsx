
import React from "react";
import { Calendar, Shield, ChartBar, Users } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Save Time & Reduce No-Shows",
      description:
        "Automated scheduling and reminders cut administrative work by 70% and reduce missed appointments by up to 60%.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Enhance Patient Experience",
      description:
        "Streamlined digital communications and online booking improve patient satisfaction scores by an average of 35%.",
    },
    {
      icon: <ChartBar className="h-8 w-8 text-primary" />,
      title: "Grow Your Practice",
      description:
        "Our clients report an average 28% increase in new patient acquisition and 40% boost in positive online reviews.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Secure & Compliant",
      description:
        "Enterprise-grade security and full HIPAA compliance protect your patients' sensitive information.",
    },
  ];

  return (
    <section id="benefits" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Why Dental Practices Choose Us</h2>
          <p className="section-subtitle">
            Our technology solutions are specifically designed to address the unique 
            challenges faced by modern dental practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="bg-accent p-3 rounded-lg inline-flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
