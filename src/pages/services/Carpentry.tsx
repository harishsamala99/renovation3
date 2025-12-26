import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Hammer } from "lucide-react";
import projectKitchen from "@/assets/project-kitchen.jpg";

const features = [
  "Custom cabinet making and installation",
  "Built-in shelving and storage solutions",
  "Hardwood flooring installation",
  "Crown molding and trim work",
  "Deck and patio construction",
  "Door and window installation",
  "Furniture repair and restoration",
  "Structural repairs and framing",
];

const ServiceCarpentry = () => {
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
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
                <Hammer className="w-7 h-7 text-accent-foreground" />
              </div>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Our Services
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Expert Carpentry Services
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              From custom cabinetry to structural repairs, our skilled carpenters bring precision 
              and artistry to every project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Masterful Woodwork for Your Home
              </h2>
              <p className="text-muted-foreground mb-8">
                Our team of skilled carpenters combines traditional craftsmanship with modern 
                techniques to create beautiful, lasting woodwork. Whether you need custom cabinets, 
                built-in storage, or structural repairs, we deliver exceptional results that exceed expectations.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="hero" size="lg" asChild>
                <Link to="/contact" className="gap-2">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={projectKitchen}
                alt="Custom carpentry work"
                className="rounded-2xl shadow-strong"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Start Your Carpentry Project?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Contact us today for a free consultation and detailed estimate.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact" className="gap-2">
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceCarpentry;
