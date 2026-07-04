import { motion } from 'framer-motion';

const widths = ['w-full', 'w-4/5', 'w-3/5'];

export default function LoadingSkeleton({ lines = 3, className = '' }) {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.08, duration: 0.3, ease: 'easeOut' }}
          className={`h-4 rounded-lg skeleton ${widths[i % widths.length]}`}
        />
      ))}
    </div>
  );
}
