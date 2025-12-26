import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 bg-accent-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-foreground rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-foreground rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-foreground mb-6"
          >
            Ready to Transform Your Space?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-accent-foreground/80 text-lg mb-10"
          >
            Get a free consultation and detailed quote for your project. 
            Our experts are ready to bring your vision to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              variant="wood" 
              size="xl" 
              asChild
              className="gap-2"
            >
              <Link to="/contact">
                Request Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            
            <Button 
              size="xl"
              className="gap-2 bg-accent-foreground/10 text-accent-foreground border-2 border-accent-foreground/20 hover:bg-accent-foreground/20"
              asChild
            >
              <a href="tel:+1234567890">
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
