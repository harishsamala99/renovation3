import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Hammer, Paintbrush, Home } from "lucide-react";
import projectKitchen from "@/assets/project-kitchen.jpg";
import projectPainting from "@/assets/project-painting.jpg";
import projectBathroom from "@/assets/project-bathroom.jpg";

const services = [
  {
    icon: Hammer,
    title: "Carpentry",
    description: "Custom woodwork, cabinetry, furniture, and structural repairs crafted with precision and care.",
    image: projectKitchen,
    href: "/services/carpentry",
  },
  {
    icon: Paintbrush,
    title: "Painting",
    description: "Interior and exterior painting services that bring new life to your spaces with lasting beauty.",
    image: projectPainting,
    href: "/services/painting",
  },
  {
    icon: Home,
    title: "Renovation",
    description: "Complete home renovations that transform your space into the home of your dreams.",
    image: projectBathroom,
    href: "/services/renovation",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function ServicesSection() {
  return (
    <section className="py-24 bg-warm-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-4"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Our Expert Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            From custom carpentry to complete renovations, we bring your vision to life with 
            unmatched craftsmanship and attention to detail.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group"
            >
              <Link to={service.href}>
                <div className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-500 group-hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-3">
                        <service.icon className="w-6 h-6 text-accent-foreground" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-semibold text-card-foreground mb-3 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
