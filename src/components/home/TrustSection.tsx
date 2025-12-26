import { motion } from "framer-motion";
import { Shield, Award, Clock, ThumbsUp, CheckCircle } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed and insured for your peace of mind",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized for excellence in craftsmanship",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your time and deliver as promised",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description: "100% satisfaction or we make it right",
  },
];

const certifications = [
  "National Association of Home Builders",
  "EPA Lead-Safe Certified",
  "Better Business Bureau A+",
  "HomeAdvisor Top Rated",
];

export function TrustSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-secondary flex items-center justify-center mb-4">
                <item.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-secondary rounded-2xl p-8 sm:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Trusted by Homeowners Nationwide
            </h3>
            <p className="text-muted-foreground">
              Our certifications and affiliations speak to our commitment to quality
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 bg-background rounded-lg p-4"
              >
                <CheckCircle className="w-5 h-5 text-forest shrink-0" />
                <span className="text-sm font-medium text-foreground">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
