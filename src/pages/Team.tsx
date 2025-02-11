
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Team = () => {
  const team = [
    {
      name: "John Smith",
      role: "Chief Technology Officer",
      image: "/placeholder.svg",
      description: "With over 15 years of experience in software development and technology leadership, John leads our technical strategy and innovation initiatives."
    },
    {
      name: "Sarah Johnson",
      role: "Lead Developer",
      image: "/placeholder.svg",
      description: "A full-stack developer with expertise in modern web technologies, Sarah ensures the highest quality in our development processes and deliverables."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-16">Our Team</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="flex flex-col items-center text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full object-cover mb-4"
                  />
                  <h3 className="text-2xl font-semibold">{member.name}</h3>
                  <p className="text-brightstar-primary font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
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

export default Team;
