import { useState } from 'react';
import { Trash2, Copy, Check, Clock, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import toast from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Formats ISO date string to a user-friendly relative timestamp.
 */
function formatRelativeTime(isoString) {
  const date = new Date(isoString);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);

  if (seconds < 60) return 'Just now';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
}

/**
 * MessageHistory component.
 * Renders history listing, custom type badges, copy actions, and limits to 10 items.
 *
 * @param {object} props
 * @param {Array} props.history — history list from context
 * @param {Function} props.onClear — clear history callback
 */
function MessageHistory({ history, onClear }) {
  const [copiedId, setCopiedId] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const handleCopy = async (id, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      toast.success('Message copied!');
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      toast.error('Failed to copy');
    }
  };

  const getBadgeStyle = (type) => {
    switch (type) {
      case 'connection':
        return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20';
      case 'referral':
        return 'bg-violet-500/10 text-violet-400 border-violet-500/20';
      case 'followup':
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';
      default:
        return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  const visibleItems = showAll ? history : history.slice(0, 5);

  return (
    <div className="glass rounded-2xl p-6 border-white/10 flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/5 pb-4">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-slate-400" />
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
            History
          </h3>
          {history.length > 0 && (
            <span className="bg-white/5 text-slate-400 text-xs px-2 py-0.5 rounded-full">
              {history.length}
            </span>
          )}
        </div>
        {history.length > 0 && (
          <button
            onClick={onClear}
            className="flex items-center gap-1.5 text-slate-500 hover:text-red-400 text-xs font-medium transition-colors"
          >
            <Trash2 className="h-3.5 w-3.5" />
            Clear all
          </button>
        )}
      </div>

      {/* History List */}
      <div className="flex flex-col gap-3 max-h-[500px] overflow-y-auto pr-1">
        <AnimatePresence mode="popLayout">
          {history.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-8 text-slate-500 text-sm flex flex-col items-center justify-center gap-2"
            >
              <Sparkles className="h-5 w-5 opacity-40" />
              <span>No messages generated yet</span>
            </motion.div>
          ) : (
            visibleItems.map((entry, index) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="group relative bg-slate-900/40 hover:bg-slate-900/80 border border-white/5 rounded-xl p-4 transition-all duration-200"
              >
                {/* Badge & Meta */}
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full border ${getBadgeStyle(entry.type)}`}>
                    {entry.type}
                  </span>
                  <span className="text-[10px] text-slate-500">
                    {formatRelativeTime(entry.timestamp)}
                  </span>
                </div>

                {/* Text preview */}
                <p className="text-slate-300 text-xs line-clamp-2 leading-relaxed mb-1 pr-6 select-none">
                  {entry.result}
                </p>

                {/* Hover actions */}
                <button
                  onClick={() => handleCopy(entry.id, entry.result)}
                  className="absolute right-3 bottom-3 p-1.5 rounded-lg bg-slate-800 border border-white/5 text-slate-400 hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-200"
                  aria-label="Copy this message"
                >
                  {copiedId === entry.id ? (
                    <Check className="h-3.5 w-3.5 text-indigo-400" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </button>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      {/* Show more/less toggle */}
      {history.length > 5 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center justify-center gap-1.5 w-full text-slate-400 hover:text-white text-xs font-semibold py-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl transition-all"
        >
          {showAll ? (
            <>
              Show less <ChevronUp className="h-3.5 w-3.5" />
            </>
          ) : (
            <>
              Show {history.length - 5} more <ChevronDown className="h-3.5 w-3.5" />
            </>
          )}
        </button>
      )}
    </div>
  );
}

export default MessageHistory;
