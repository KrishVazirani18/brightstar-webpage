
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code, FileCode, Paintbrush, GitBranch, Cloud, HeadsetHelp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <FileCode className="w-12 h-12 text-brightstar-primary" />,
      title: "Product Research & Strategy",
      description: "Strategic planning and market analysis to ensure your product meets market demands and user needs."
    },
    {
      icon: <Code className="w-12 h-12 text-brightstar-primary" />,
      title: "Full-Stack Development",
      description: "End-to-end development solutions utilizing cutting-edge technologies and best practices."
    },
    {
      icon: <Paintbrush className="w-12 h-12 text-brightstar-primary" />,
      title: "UX/UI Design & Prototyping",
      description: "Creating intuitive, user-centered designs that enhance user engagement and satisfaction."
    },
    {
      icon: <GitBranch className="w-12 h-12 text-brightstar-primary" />,
      title: "Agile Project Management",
      description: "Flexible and efficient project management ensuring timely delivery and continuous improvement."
    },
    {
      icon: <Cloud className="w-12 h-12 text-brightstar-primary" />,
      title: "Cloud Infrastructure & DevOps",
      description: "Scalable cloud solutions and automated deployment pipelines for optimal performance."
    },
    {
      icon: <HeadsetHelp className="w-12 h-12 text-brightstar-primary" />,
      title: "Ongoing Support & Consulting",
      description: "Continuous technical support and strategic consulting to keep your solutions running smoothly."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-16">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  {service.icon}
                  <h3 className="text-xl font-semibold mt-4 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
