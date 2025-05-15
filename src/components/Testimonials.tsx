
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Implementing the patient booking system and automated reminders has transformed our practice. No-shows are down by 65% and our staff spends less time on the phone.",
      author: "Dr. Sarah Johnson",
      title: "Johnson Family Dental",
      rating: 5,
    },
    {
      quote:
        "The custom website and SEO services have dramatically increased our visibility in the local area. We've seen a 40% increase in new patient inquiries within just 3 months.",
      author: "Dr. Michael Chen",
      title: "Brightsmile Dental Clinic",
      rating: 5,
    },
    {
      quote:
        "The analytics dashboard gives me insights into my practice I never had before. I can now make data-driven decisions about staffing and services that have improved our profitability.",
      author: "Dr. Rebecca Torres",
      title: "Cornerstone Dental",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">What Dental Professionals Say</h2>
          <p className="section-subtitle">
            Join hundreds of successful dental practices that have transformed
            their operations with our technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-lg transition-all"
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-600 text-sm">{testimonial.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
