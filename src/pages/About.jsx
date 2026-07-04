import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Sparkles, Zap, Users, BookOpen } from 'lucide-react';
import AuroraBackground from '../components/AuroraBackground';
import Button from '../components/ui/Button';
import GlassCard from '../components/ui/GlassCard';

/**
 * About page component.
 * Displays information about the product mission, how it works, features list, and a CTA.
 */
function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const steps = [
    {
      step: '1',
      title: 'Choose Message Type',
      description: 'Select between Connection Requests, Referral Requests, or Follow-up templates based on your target networking goal.',
      icon: BookOpen,
    },
    {
      step: '2',
      title: 'Fill In Key Details',
      description: 'Provide information about the recipient, target company, role, reason, or experience to personalize the prompt.',
      icon: Users,
    },
    {
      step: '3',
      title: 'Get Polished Message',
      description: 'ConnectPro AI will instantly craft a refined, professional, and natural message tailored exactly to your criteria.',
      icon: Zap,
    },
  ];

  const features = [
    'AI-powered personalization based on context inputs',
    'Custom Tone controls matching target communication standards',
    'Saved generation logs utilizing localStorage history features',
    'Zero-data-tracking secure backend connection',
    'MIT License open-source project structure',
  ];

  return (
    <div className="relative min-h-screen pt-16 pb-12 flex flex-col justify-between">
      {/* Aurora background overlay */}
      <AuroraBackground />

      {/* Main Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 mt-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-16"
        >
          {/* Header section */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-4">
              Our Mission
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              About <span className="gradient-text">ConnectPro AI</span>
            </h1>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              ConnectPro AI was built with a simple goal: to make professional networking accessible, conversational, and highly effective. We remove the awkwardness and uncertainty of drafting cold outreach, letting you focus on establishing genuine relationships.
            </p>
          </motion.div>

          {/* How It Works Section */}
          <motion.div variants={itemVariants} className="flex flex-col gap-10">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white">
              How It <span className="gradient-text">Works</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((item, idx) => {
                const StepIcon = item.icon;
                return (
                  <GlassCard key={idx} className="flex flex-col items-center text-center p-6 relative">
                    <span className="absolute top-4 right-4 text-3xl font-black text-white/5 select-none">
                      {item.step}
                    </span>
                    <div className="p-3 rounded-full bg-indigo-500/10 text-indigo-400 mb-4">
                      <StepIcon className="h-6 w-6" />
                    </div>
                    <h3 className="text-white font-semibold text-base mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </GlassCard>
                );
              })}
            </div>
          </motion.div>

          {/* Why ConnectPro AI Checklist */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Why Use <span className="gradient-text">ConnectPro AI</span>?
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Our templates and system prompts are designed in collaboration with LinkedIn advisors and coaches. Messages generated are proven to sound natural, polite, and personalized, significantly raising response rates.
              </p>
              <ul className="flex flex-col gap-3.5">
                {features.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle className="h-4.5 w-4.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <GlassCard className="flex flex-col items-center justify-center text-center p-8 border-indigo-500/20 shadow-xl shadow-indigo-500/5">
              <div className="p-4 rounded-full bg-indigo-500/10 text-indigo-400 mb-4 animate-float">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">
                100% Free &amp; Open Source
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6 max-w-xs">
                No subscription, no limit barriers, no account registration. Use your own Groq API key and retain complete privacy of your context.
              </p>
              <Link to="/generator">
                <Button variant="gradient" size="md">
                  Launch Generator
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
