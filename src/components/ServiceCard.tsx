
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  delay: number;
}

const ServiceCard = ({ title, delay }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="w-20 h-1 bg-brightstar-primary rounded-full"></div>
    </motion.div>
  );
};

export default ServiceCard;
