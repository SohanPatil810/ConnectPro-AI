import { motion } from 'framer-motion';

/**
 * FeatureCard component.
 * Displays a feature with entrance animations and hover states.
 *
 * @param {object} props
 * @param {React.ComponentType} props.icon — Lucide Icon component
 * @param {string} props.title — card title
 * @param {string} props.description — card description
 * @param {number} props.delay — animation delay
 */
function FeatureCard({ icon: Icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="glass rounded-2xl p-6 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 group flex flex-col items-start text-left"
    >
      <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 mb-5">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-indigo-300 transition-colors">
        {title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

export default FeatureCard;
