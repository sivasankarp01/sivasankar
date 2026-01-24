import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Al-Rashid",
    role: "CEO, TechVenture UAE",
    content:
      "Sivasankar delivered an exceptional e-commerce platform that exceeded our expectations. His expertise in Next.js and attention to detail transformed our vision into reality. The automated deployment pipeline he set up has saved us countless hours.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Product Manager, InnovateTech",
    content:
      "Working with Sivasankar on our Flutter mobile app was a fantastic experience. He brought creative solutions to complex problems and delivered a polished product that our users love. His communication and professionalism are top-notch.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CTO, DataFlow Solutions",
    content:
      "Sivasankar's work on our analytics dashboard was outstanding. He implemented complex data visualizations with excellent performance. His understanding of both technical requirements and user experience made the project a success.",
    rating: 5,
  },
];

export const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              What <span className="text-gradient">Clients Say</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Feedback from people I've had the pleasure of working with
            </p>
          </motion.div>

          {/* Testimonials grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass-card rounded-2xl p-6 hover-lift relative"
              >
                {/* Quote icon */}
                <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4 pt-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
