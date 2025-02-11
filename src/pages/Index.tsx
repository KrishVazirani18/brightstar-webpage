import { motion } from "framer-motion";
import {
  Code,
  Zap,
  Users,
  ArrowRight,
  Waves,
  ArrowUpRight,
  Plug,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import React from "react";

const Index = () => {
  const services = [
    "Product Research & Strategy",
    "Full-Stack Development",
    "UX/UI Design & Prototyping",
    "Agile Project Management",
    "Cloud Infrastructure & DevOps",
    "Ongoing Support & Consulting",
  ];

  const staticText = "Software Excellence, ";
  const [dynamicVerb, setDynamicVerb] = React.useState("");
  const verbs = ["Delivered.", "Developed.", "Promised."];
  const [verbIndex, setVerbIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const handleTyping = () => {
      const currentVerb = verbs[verbIndex];

      if (!isDeleting) {
        // Typing out the verb
        if (dynamicVerb.length < currentVerb.length) {
          setDynamicVerb((prev) => currentVerb.slice(0, prev.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting the verb
        if (dynamicVerb.length > 0) {
          setDynamicVerb((prev) => prev.slice(0, -1));
        } else {
          // Move to next verb
          setIsDeleting(false);
          setVerbIndex((prev) => (prev + 1) % verbs.length);
        }
      }
    };

    const typingTimer = setTimeout(handleTyping, isDeleting ? 50 : 100);

    return () => clearTimeout(typingTimer);
  }, [dynamicVerb, isDeleting, verbIndex]);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-20 px-6 md:px-8 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl w-full px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-col items-center justify-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 text-center leading-tight">
              <div>Software Excellence,</div>
              <div className="text-brightstar-primary">
                {dynamicVerb}
                <span className="animate-blink">|</span>
              </div>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 max-w-[90%]">
              We transform your ideas into powerful digital solutions,
              delivering innovation with precision and expertise.
            </p>
            <Button
              className="bg-brightstar-primary hover:bg-brightstar-light text-white px-8 py-4 sm:px-10 sm:py-5 text-lg sm:text-xl transition-all transform hover:scale-105"
              onClick={() => (window.location.href = "/contact")}
            >
              Get Started
              <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="relative py-20 bg-brightstar-primary overflow-hidden">
        {/* Subtle background animation */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute -top-10 left-0 w-full h-full bg-gradient-to-r from-brightstar-dark to-brightstar-primary"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto space-y-6"
          >
            {/* Animated Header */}
            <motion.h2
              className="text-4xl sm:text-5xl font-bold text-white relative"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <motion.span
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ duration: 0.2 }}
                className="inline-block"
              >
                Plug In
              </motion.span>
              ,
              <motion.span
                whileHover={{ scale: 1.1, rotate: -2 }}
                transition={{ duration: 0.2 }}
                className="inline-block mx-2"
              >
                Scale Up
              </motion.span>
              &
              <motion.span
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ duration: 0.2 }}
                className="inline-block"
              >
                &nbsp;Disrupt
              </motion.span>
            </motion.h2>

            {/* Floating Icons */}
            <div className="flex justify-center space-x-4">
              <Plug className="h-10 w-10 text-white opacity-60" />
              <ArrowUpRight className="h-10 w-10 text-white opacity-60" />
              <Waves className="h-10 w-10 text-white opacity-60" />
            </div>

            {/* Animated Text */}
            <motion.p
              className="text-lg text-white/90 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              At Brightstar, we're not just another consultancy—we're the
              missing link in your digital transformation.
              <span className="font-semibold text-white">
                {" "}
                Think of us as your on-demand tech arm
              </span>
              , seamlessly integrating into your organization to strategize,
              consult, and build the technology that propels your business
              forward. Whether you're a startup on the brink of disruption or an
              established enterprise seeking to innovate, we turn bold ideas
              into dynamic digital solutions.
            </motion.p>

            {/* Animated CTA Button */}
            <motion.div
              className="flex justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <Button
                className="bg-white text-brightstar-primary px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
                onClick={() => (window.location.href = "/services")}
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-8 w-8 text-brightstar-primary" />,
                title: "Custom Development",
                description:
                  "Tailored solutions built with cutting-edge technology",
              },
              {
                icon: <Zap className="h-8 w-8 text-brightstar-primary" />,
                title: "Rapid Delivery",
                description: "Swift deployment with our agile methodology",
              },
              {
                icon: <Users className="h-8 w-8 text-brightstar-primary" />,
                title: "Expert Team",
                description: "Seasoned professionals dedicated to your success",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Capabilities
          </h2>
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
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to Build Your Tech Future?
            </h2>
            <p className="text-lg opacity-90">
              Let's transform your ideas into reality. Whether you need a
              complete tech overhaul or targeted expertise, our team is ready to
              plug in and deliver excellence.
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
