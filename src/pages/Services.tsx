import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Hammer, Paintbrush, Home } from "lucide-react";
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
    features: [
      "Custom cabinet making",
      "Furniture restoration",
      "Deck and patio construction",
      "Trim and molding installation",
      "Door and window framing",
    ],
  },
  {
    icon: Paintbrush,
    title: "Painting",
    description: "Interior and exterior painting services that bring new life to your spaces with lasting beauty.",
    image: projectPainting,
    href: "/services/painting",
    features: [
      "Interior wall painting",
      "Exterior house painting",
      "Cabinet refinishing",
      "Decorative finishes",
      "Color consultation",
    ],
  },
  {
    icon: Home,
    title: "Renovation",
    description: "Complete home renovations that transform your space into the home of your dreams.",
    image: projectBathroom,
    href: "/services/renovation",
    features: [
      "Kitchen remodeling",
      "Bathroom renovations",
      "Basement finishing",
      "Room additions",
      "Full home renovations",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-4">
              Our Services
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Expert Craftsmanship for Every Project
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              From custom carpentry to complete renovations, we deliver quality workmanship 
              that transforms your space and exceeds expectations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-strong">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-accent-foreground" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-forest shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant="hero" size="lg" asChild>
                    <Link to={service.href} className="gap-2">
                      Learn More
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Contact us today for a free consultation and quote. We'll help bring your vision to life.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact" className="gap-2">
              Request a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
