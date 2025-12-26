import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Clock, CheckCircle } from "lucide-react";
import heroBg from "@/assets/hero-carpentry.jpg";

const values = [
  {
    title: "Quality Craftsmanship",
    description: "We take pride in every detail, ensuring each project meets the highest standards of quality.",
  },
  {
    title: "Customer First",
    description: "Your satisfaction is our priority. We listen, adapt, and deliver beyond expectations.",
  },
  {
    title: "Integrity",
    description: "Honest pricing, transparent communication, and reliable timelines you can count on.",
  },
  {
    title: "Innovation",
    description: "We blend traditional techniques with modern methods for the best results.",
  },
];

const stats = [
  { icon: Clock, value: "28+", label: "Years of Experience" },
  { icon: Users, value: "2,500+", label: "Happy Clients" },
  { icon: Award, value: "150+", label: "Industry Awards" },
];

const About = () => {
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
              About Us
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Building Dreams Since 1995
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              For nearly three decades, CraftWorks has been transforming homes with 
              exceptional craftsmanship and unwavering dedication to quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  CraftWorks was founded in 1995 by master carpenter John Harrison, 
                  who believed that every home deserved the same attention to detail 
                  and quality craftsmanship that once defined American homebuilding.
                </p>
                <p>
                  What started as a one-man operation in a small garage has grown 
                  into a full-service renovation company with a team of 50+ skilled 
                  professionals. Yet our core values remain unchanged: quality work, 
                  honest pricing, and genuine care for every project we undertake.
                </p>
                <p>
                  Today, we're proud to serve homeowners across the region, from 
                  simple repairs to complete home transformations. Our team combines 
                  time-tested techniques with modern innovation to deliver results 
                  that stand the test of time.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={heroBg}
                alt="Our team at work"
                className="rounded-2xl shadow-strong"
              />
              <div className="absolute -bottom-8 -left-8 bg-accent rounded-2xl p-6 shadow-strong">
                <div className="text-4xl font-serif font-bold text-accent-foreground">28+</div>
                <div className="text-accent-foreground/80">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              The principles that guide everything we do
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-2xl p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary-foreground/10 flex items-center justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="text-4xl sm:text-5xl font-serif font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Let's discuss your project and see how we can bring your vision to life.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact" className="gap-2">
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
