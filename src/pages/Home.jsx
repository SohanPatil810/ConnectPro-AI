import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserPlus, Award, MessageSquare, Sliders, ArrowRight, Sparkles, Send, ShieldCheck, Zap } from 'lucide-react';
import AuroraBackground from '../components/AuroraBackground';
import FeatureCard from '../components/FeatureCard';
import Button from '../components/ui/Button';

/**
 * ConnectPro AI landing / home page.
 * Features a modern SaaS-inspired hero section, detailed features grid, and quick stats.
 */
function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  const stats = [
    { value: '10,000+', label: 'Messages Generated' },
    { value: '5+', label: 'AI Tone Options' },
    { value: '3', label: 'Message Types' },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col justify-between pt-16">
      {/* Dynamic Aurora Background */}
      <AuroraBackground />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        {/* Hero Section */}
        <section className="text-center py-20 md:py-28 flex flex-col items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center max-w-4xl mx-auto"
          >
            {/* Tag Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-6 shadow-sm shadow-indigo-500/5 hover:scale-105 transition-transform cursor-default"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Powered by Groq LLaMA 3.3
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
            >
              Generate Professional{' '}
              <span className="gradient-text">Networking Messages</span> with AI
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Land referrals. Build meaningful connections. Write professional LinkedIn connection requests and follow-ups in seconds.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 mb-16"
            >
              <Link to="/generator">
                <Button variant="gradient" size="lg" className="w-full sm:w-auto shadow-indigo-500/20 hover:shadow-indigo-500/30">
                  Start Generating
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </motion.div>

            {/* Stats Summary Panel */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl w-full glass rounded-2xl p-6 border-white/5 divide-x divide-white/5"
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center">
                  <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-1">
                    {stat.value}
                  </span>
                  <span className="text-[10px] md:text-xs text-slate-400 font-semibold uppercase tracking-wider text-center">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-20 text-center border-t border-white/5">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything You Need to <span className="gradient-text">Expand Your Network</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              Say goodbye to awkward drafts and writers block. ConnectPro AI handles the heavy lifting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <FeatureCard
              icon={UserPlus}
              title="Connection Request Generator"
              description="Craft highly-personalized, contextual LinkedIn connection messages that increase your acceptance rate."
              delay={0}
            />
            <FeatureCard
              icon={Award}
              title="Referral Request Generator"
              description="Write respectful, warm referral requests showing your experience without sounding desperate."
              delay={0.1}
            />
            <FeatureCard
              icon={MessageSquare}
              title="Follow-up Generator"
              description="Follow up gracefully after career fairs, interviews, connection acceptance, or when facing radio silence."
              delay={0.2}
            />
            <FeatureCard
              icon={Sliders}
              title="AI Tone Selection"
              description="Adjust the response tone instantly. Pick from Professional, Friendly, Casual, Formal, or Enthusiastic."
              delay={0.3}
            />
          </div>
        </section>

        {/* Trust banner */}
        <section className="py-16 text-center border-t border-white/5 flex flex-col items-center gap-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="flex items-center gap-2 text-slate-300 font-medium">
              <Zap className="h-5 w-5 text-indigo-400" />
              <span>Fast Inference</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300 font-medium">
              <Send className="h-5 w-5 text-violet-400" />
              <span>LinkedIn Ready</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300 font-medium">
              <ShieldCheck className="h-5 w-5 text-cyan-400" />
              <span>Secure & Private</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
