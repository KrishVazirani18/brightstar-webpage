
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
      transition={{ duration: 0.5, delay }}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
    >
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    </motion.div>
  );
};

export default ServiceCard;
