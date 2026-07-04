import { ChevronDown } from 'lucide-react';

export default function Select({
  label,
  id,
  options = [],
  error,
  className = '',
  ...rest
}) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-slate-300">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={id}
          className={`w-full appearance-none bg-slate-900/50 border rounded-xl px-4 py-3 pr-10 text-slate-100 transition-all duration-200 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 ${error ? 'border-red-500/50' : 'border-white/10'} ${className}`}
          {...rest}
        >
          {options.map((opt) => (
            <option key={opt} value={opt} className="bg-slate-900 text-slate-100">
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
      </div>
      {error && <p className="text-red-400 text-xs mt-0.5">{error}</p>}
    </div>
  );
}
