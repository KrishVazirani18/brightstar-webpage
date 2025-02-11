import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Team = () => {
  const partners = [
    {
      name: "Krish Vazirani",
      role: "Managing Partner",
      image: "headshots/krish-circular-headshot.png",
      description:
        "An exited founder and technology strategist, Krish leverages his experience in software leadership and product innovation to deliver high-impact digital solutions.",
    },
    {
      name: "Sean Blizard",
      role: "Technical Partner",
      image: "headshots/sean-circular-headshot.png",
      description:
        "A full-stack developer with expertise in modern web technologies, Sean ensures the highest quality in our development processes and deliverables.",
    },
  ];

  const advisors = [
    {
      name: "Farouk Charkas",
      role: "Senior Advisor",
      image: "headshots/farouk-circular-headshot.png",
      description:
        "A seasoned software engineer and strategic advisor, Farouk draws from his experiences at Delphi AI & Fidelity Investments to provide high-level technical and business guidance.",
    },
  ];

  const engineers = [
    {
      name: "Joel D'Silva",
      role: "Forward Deployed Engineer",
      image: "headshots/joel-circular-headshot.png",
      description:
        "A problem-solving engineer, Joel applies his background in software development and leadership to drive innovation in forward-deployed engineering.",
    },
    {
      name: "Nathan Santiago",
      role: "Forward Deployed Engineer",
      image: "headshots/nathan-circular-headshot.png",
      description:
        "A skilled full-stack developer, Nathan combines his experience in game development, web applications, and data visualization to build intuitive and performant digital products.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-center text-gray-900 mb-12"
          >
            Meet the Team
          </motion.h1>

          {/* Partners Section */}
          <Section title="Partners" team={partners} delay={0.1} />

          {/* Engineers Section */}
          <Section title="Engineers" team={engineers} delay={0.2} />

          {/* Advisors Section */}
          <Section title="Advisors" team={advisors} delay={0.3} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const Section = ({ title, team, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="mb-16 w-full flex flex-col items-center"
  >
    <h2 className="text-3xl font-bold text-center text-brightstar-primary mb-8">
      {title}
    </h2>

    {/* Use flexbox for centering when items are less than 3 */}
    <div
      className={`w-full max-w-5xl ${
        team.length <= 2
          ? "flex flex-wrap justify-center gap-8"
          : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      }`}
    >
      {team.map((member, index) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all flex flex-col items-center text-center w-[320px]"
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-48 h-48 rounded-full object-cover mb-4 border-4 border-brightstar-primary"
          />
          <h3 className="text-2xl font-semibold">{member.name}</h3>
          <p className="text-brightstar-primary font-medium mb-2">
            {member.role}
          </p>
          <p className="text-gray-600">{member.description}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default Team;
