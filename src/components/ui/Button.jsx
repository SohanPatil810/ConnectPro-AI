import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const variants = {
  primary: 'bg-indigo-500 hover:bg-indigo-600 text-white',
  secondary:
    'bg-white/5 border border-white/10 hover:bg-white/10 text-slate-200',
  ghost: 'bg-transparent hover:bg-white/5 text-slate-400',
  gradient:
    'bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-indigo-500/25',
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3 text-base',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  className = '',
  ...rest
}) {
  const disabled = rest.disabled || isLoading;

  return (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      className={`rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      disabled={disabled}
      {...rest}
    >
      {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
      {children}
    </motion.button>
  );
}
