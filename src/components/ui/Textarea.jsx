export default function Textarea({ label, id, error, className = '', ...rest }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-slate-300">
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={`w-full min-h-[100px] resize-none bg-slate-900/50 border rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-500 transition-all duration-200 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 ${error ? 'border-red-500/50' : 'border-white/10'} ${className}`}
        {...rest}
      />
      {error && <p className="text-red-400 text-xs mt-0.5">{error}</p>}
    </div>
  );
}
