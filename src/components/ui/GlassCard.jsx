import { motion } from 'framer-motion';

export default function GlassCard({
  children,
  className = '',
  hover = false,
  ...rest
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`glass rounded-2xl p-6 ${hover ? 'hover:border-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300' : ''} ${className}`}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
