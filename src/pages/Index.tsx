
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";

const Index = () => {
  const services = [
    "Product Research & Strategy",
    "Full-Stack Development",
    "UX/UI Design & Prototyping",
    "Agile Project Management",
    "Cloud Infrastructure & DevOps",
    "Ongoing Support & Consulting",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="overflow-hidden">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 inline-block whitespace-nowrap overflow-hidden border-r-4 border-brightstar-primary animate-typing">
                Software Excellence, Delivered.
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Plug In, Scale Up, and Disrupt
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Brightstar, we're not just another consultancy—we're the missing link in your digital transformation. Think of us as your on-demand tech arm, seamlessly integrating into your organization to strategize, consult, and build the technology that propels your business forward. Whether you're a startup on the brink of disruption or an established enterprise seeking to innovate, we turn bold ideas into dynamic digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Development</h3>
              <p className="text-gray-600">Tailored solutions built with cutting-edge technology</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Rapid Delivery</h3>
              <p className="text-gray-600">Swift deployment with our agile methodology</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600">Seasoned professionals dedicated to your success</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service} title={service} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brightstar-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold">Ready to Build Your Tech Future?</h2>
            <p className="text-lg opacity-90">
              Let's transform your ideas into reality. Whether you need a complete tech overhaul or targeted expertise, our team is ready to plug in and deliver excellence.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-brightstar-primary px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
