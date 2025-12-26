import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import projectKitchen from "@/assets/project-kitchen.jpg";
import projectPainting from "@/assets/project-painting.jpg";
import projectBathroom from "@/assets/project-bathroom.jpg";

const categories = ["All", "Carpentry", "Painting", "Renovation"];

const projects = [
  {
    id: 1,
    title: "Modern Kitchen Renovation",
    category: "Carpentry",
    image: projectKitchen,
    description: "Complete kitchen transformation with custom walnut cabinets and marble countertops.",
  },
  {
    id: 2,
    title: "Elegant Living Room",
    category: "Painting",
    image: projectPainting,
    description: "Fresh interior painting with decorative molding and trim work.",
  },
  {
    id: 3,
    title: "Luxury Bathroom Remodel",
    category: "Renovation",
    image: projectBathroom,
    description: "Spa-inspired bathroom with custom wooden vanity and marble finishes.",
  },
  {
    id: 4,
    title: "Custom Built-in Shelving",
    category: "Carpentry",
    image: projectKitchen,
    description: "Floor-to-ceiling built-in bookshelves crafted from solid oak.",
  },
  {
    id: 5,
    title: "Exterior Home Painting",
    category: "Painting",
    image: projectPainting,
    description: "Complete exterior refresh with weather-resistant premium paint.",
  },
  {
    id: 6,
    title: "Basement Finishing",
    category: "Renovation",
    image: projectBathroom,
    description: "Unfinished basement transformed into a cozy family entertainment space.",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

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
              Portfolio
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Our Featured Work
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Browse through our collection of completed projects and see the quality 
              craftsmanship we bring to every home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-accent/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-500">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-accent text-sm font-medium">{project.category}</span>
                      <h3 className="font-serif text-xl font-semibold text-primary-foreground mt-1">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card rounded-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 sm:h-80 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-charcoal/50 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-charcoal transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-8">
                <span className="text-accent text-sm font-medium">{selectedProject.category}</span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-card-foreground mt-2 mb-4">
                  {selectedProject.title}
                </h2>
                <p className="text-muted-foreground mb-6">{selectedProject.description}</p>
                <Button variant="hero" asChild>
                  <Link to="/contact" className="gap-2">
                    Start a Similar Project
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Like What You See?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Let us create something beautiful for your home. Contact us for a free consultation.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact" className="gap-2">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
