import { useState } from 'react';
import { Copy, Download, RefreshCw, Sparkles, Check } from 'lucide-react';
import toast from 'react-hot-toast';
import Button from './ui/Button';
import LoadingSkeleton from './ui/LoadingSkeleton';

/**
 * MessageOutput component.
 * Renders the generated message output card, skeleton states, and action buttons.
 *
 * @param {object} props
 * @param {string} props.message — generated message text
 * @param {boolean} props.isLoading — loading state
 * @param {Function} props.onRegenerate — trigger regeneration callback
 */
function MessageOutput({ message, isLoading, onRegenerate }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!message) return;
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      toast.success('Message copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('Failed to copy message');
    }
  };

  const handleDownload = () => {
    if (!message) return;
    try {
      const element = document.createElement('a');
      const file = new Blob([message], { type: 'text/plain;charset=utf-8' });
      element.href = URL.createObjectURL(file);
      element.download = 'connectpro-message.txt';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      toast.success('Message downloaded as connectpro-message.txt');
    } catch {
      toast.error('Failed to download message');
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="glass rounded-2xl p-6 border-white/10 flex flex-col gap-4 animate-pulse">
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full skeleton" />
            <div className="w-32 h-4 rounded skeleton" />
          </div>
          <div className="w-16 h-3 rounded skeleton" />
        </div>
        <div className="py-4">
          <LoadingSkeleton lines={4} />
        </div>
      </div>
    );
  }

  // Empty state
  if (!message) {
    return (
      <div className="glass rounded-2xl p-8 border-dashed border-white/10 text-center flex flex-col items-center justify-center min-h-[300px]">
        <div className="p-4 rounded-full bg-indigo-500/5 text-indigo-400 mb-4 animate-float">
          <Sparkles className="h-8 w-8" />
        </div>
        <h3 className="text-white font-semibold text-lg mb-2">
          Ready to Connect?
        </h3>
        <p className="text-slate-400 text-sm max-w-sm">
          Fill in the details above and click &quot;Generate Message&quot; to craft a highly-personalized, professional networking message.
        </p>
      </div>
    );
  }

  // Normal populated state
  return (
    <div className="glass rounded-2xl p-6 border-indigo-500/20 shadow-xl shadow-indigo-500/5 animate-fade-in flex flex-col gap-4 relative">
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-white/5 pb-4">
        <div className="flex items-center gap-2">
          <div className="p-1 rounded bg-indigo-500/10 text-indigo-400">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="font-semibold text-sm text-indigo-300 uppercase tracking-wider">
            AI Generated Response
          </span>
        </div>
        <span className="text-xs text-slate-500">
          Character count: {message.length}
        </span>
      </div>

      {/* Message Content */}
      <div className="py-4 text-slate-200 text-base leading-relaxed whitespace-pre-wrap select-all selection:bg-indigo-500/30 selection:text-white">
        {message}
      </div>

      {/* Action buttons footer */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-4">
        <Button variant="secondary" size="sm" onClick={onRegenerate} className="text-slate-400 hover:text-white">
          <RefreshCw className="h-4 w-4" />
          Regenerate
        </Button>

        <div className="flex gap-2">
          <Button variant="secondary" size="sm" onClick={handleDownload}>
            <Download className="h-4 w-4" />
            Download TXT
          </Button>

          <Button variant="primary" size="sm" onClick={handleCopy}>
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? 'Copied!' : 'Copy Message'}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MessageOutput;
