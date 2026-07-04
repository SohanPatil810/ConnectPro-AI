import { useState, useCallback } from 'react';
import { UserPlus, Award, MessageSquare, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { TONE_OPTIONS, LENGTH_OPTIONS, FOLLOWUP_SITUATIONS } from '../utils/prompts';
import AuroraBackground from '../components/AuroraBackground';
import TabGroup from '../components/ui/TabGroup';
import GlassCard from '../components/ui/GlassCard';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import Textarea from '../components/ui/Textarea';
import Button from '../components/ui/Button';
import MessageOutput from '../components/MessageOutput';
import MessageHistory from '../components/MessageHistory';

/**
 * Generator page component.
 * Features a multi-tab form layout (Connection, Referral, Follow-up) and a live output generator sidebar.
 */
function Generator() {
  const { generator } = useApp();
  const [activeTab, setActiveTab] = useState('connection');

  // Connection Request form state
  const [connectionForm, setConnectionForm] = useState({
    name: '',
    company: '',
    role: '',
    reason: '',
    tone: TONE_OPTIONS[0],
    length: LENGTH_OPTIONS[0],
  });

  // Referral Request form state
  const [referralForm, setReferralForm] = useState({
    company: '',
    role: '',
    experience: '',
    context: '',
    tone: TONE_OPTIONS[0],
    length: LENGTH_OPTIONS[0],
  });

  // Follow-up form state
  const [followupForm, setFollowupForm] = useState({
    situation: FOLLOWUP_SITUATIONS[0],
    tone: TONE_OPTIONS[0],
    length: LENGTH_OPTIONS[0],
  });

  // Errors state
  const [errors, setErrors] = useState({});

  // Tab definitions
  const tabs = [
    { id: 'connection', label: 'Connection Request', icon: UserPlus },
    { id: 'referral', label: 'Referral Request', icon: Award },
    { id: 'followup', label: 'Follow-up', icon: MessageSquare },
  ];

  // Connection Form change
  const handleConnectionChange = (e) => {
    const { name, value } = e.target;
    setConnectionForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  // Referral Form change
  const handleReferralChange = (e) => {
    const { name, value } = e.target;
    setReferralForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  // Follow-up Form change
  const handleFollowupChange = (e) => {
    const { name, value } = e.target;
    setFollowupForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  // Validate fields
  const validateForm = () => {
    const newErrors = {};

    if (activeTab === 'connection') {
      if (!connectionForm.name.trim()) newErrors.name = 'Recipient name is required';
      if (!connectionForm.company.trim()) newErrors.company = 'Company is required';
      if (!connectionForm.role.trim()) newErrors.role = 'Role is required';
      if (!connectionForm.reason.trim()) newErrors.reason = 'Reason for connecting is required';
    } else if (activeTab === 'referral') {
      if (!referralForm.company.trim()) newErrors.company = 'Company is required';
      if (!referralForm.role.trim()) newErrors.role = 'Role is required';
      if (!referralForm.experience.trim()) newErrors.experience = 'Your experience details are required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Trigger generation
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (activeTab === 'connection') {
      await generator.generate('connection', connectionForm);
    } else if (activeTab === 'referral') {
      await generator.generate('referral', referralForm);
    } else if (activeTab === 'followup') {
      await generator.generate('followup', followupForm);
    }
  };

  const handleRegenerate = useCallback(async () => {
    await generator.regenerate();
  }, [generator]);

  return (
    <div className="relative min-h-screen pt-16 pb-12">
      {/* Aurora background */}
      <AuroraBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Title */}
        <div className="mb-10 max-w-2xl">
          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-semibold text-indigo-400 mb-3 uppercase tracking-wider">
            AI Assistant
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
            Message <span className="gradient-text">Generator</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-base">
            Create high-converting, personalized networking messages for any professional scenario.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Form column (Left) */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Tab Navigation */}
            <TabGroup tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

            {/* Form Card */}
            <GlassCard>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {activeTab === 'connection' && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Input
                        label="Recipient's Name"
                        name="name"
                        id="conn-name"
                        value={connectionForm.name}
                        onChange={handleConnectionChange}
                        placeholder="John Doe"
                        error={errors.name}
                      />
                      <Input
                        label="Company"
                        name="company"
                        id="conn-company"
                        value={connectionForm.company}
                        onChange={handleConnectionChange}
                        placeholder="Google"
                        error={errors.company}
                      />
                      <Input
                        label="Job Role"
                        name="role"
                        id="conn-role"
                        value={connectionForm.role}
                        onChange={handleConnectionChange}
                        placeholder="Senior Engineer"
                        error={errors.role}
                      />
                    </div>
                    <Textarea
                      label="Reason for Connecting"
                      name="reason"
                      id="conn-reason"
                      value={connectionForm.reason}
                      onChange={handleConnectionChange}
                      placeholder="e.g. I saw your recent post about the Llama-3 model release and was really impressed by..."
                      error={errors.reason}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Select
                        label="Tone"
                        name="tone"
                        id="conn-tone"
                        value={connectionForm.tone}
                        onChange={handleConnectionChange}
                        options={TONE_OPTIONS}
                      />
                      <Select
                        label="Message Length"
                        name="length"
                        id="conn-length"
                        value={connectionForm.length}
                        onChange={handleConnectionChange}
                        options={LENGTH_OPTIONS}
                      />
                    </div>
                  </>
                )}

                {activeTab === 'referral' && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="Target Company"
                        name="company"
                        id="ref-company"
                        value={referralForm.company}
                        onChange={handleReferralChange}
                        placeholder="Meta"
                        error={errors.company}
                      />
                      <Input
                        label="Target Role"
                        name="role"
                        id="ref-role"
                        value={referralForm.role}
                        onChange={handleReferralChange}
                        placeholder="Frontend Developer"
                        error={errors.role}
                      />
                    </div>
                    <Textarea
                      label="Your Experience / Qualifications"
                      name="experience"
                      id="ref-experience"
                      value={referralForm.experience}
                      onChange={handleReferralChange}
                      placeholder="Briefly state your qualifications (e.g. 3 years working with React and Node.js, built scalable cloud services)"
                      error={errors.experience}
                    />
                    <Textarea
                      label="Additional Context (Optional)"
                      name="context"
                      id="ref-context"
                      value={referralForm.context}
                      onChange={handleReferralChange}
                      placeholder="Any specific projects or mutual connections to mention..."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Select
                        label="Tone"
                        name="tone"
                        id="ref-tone"
                        value={referralForm.tone}
                        onChange={handleReferralChange}
                        options={TONE_OPTIONS}
                      />
                      <Select
                        label="Message Length"
                        name="length"
                        id="ref-length"
                        value={referralForm.length}
                        onChange={handleReferralChange}
                        options={LENGTH_OPTIONS}
                      />
                    </div>
                  </>
                )}

                {activeTab === 'followup' && (
                  <>
                    <Select
                      label="Follow-up Situation"
                      name="situation"
                      id="fol-situation"
                      value={followupForm.situation}
                      onChange={handleFollowupChange}
                      options={FOLLOWUP_SITUATIONS}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Select
                        label="Tone"
                        name="tone"
                        id="fol-tone"
                        value={followupForm.tone}
                        onChange={handleFollowupChange}
                        options={TONE_OPTIONS}
                      />
                      <Select
                        label="Message Length"
                        name="length"
                        id="fol-length"
                        value={followupForm.length}
                        onChange={handleFollowupChange}
                        options={LENGTH_OPTIONS}
                      />
                    </div>
                  </>
                )}

                {/* Submit button */}
                <Button
                  variant="gradient"
                  size="lg"
                  type="submit"
                  isLoading={generator.isLoading}
                  className="w-full"
                >
                  <Sparkles className="h-4.5 w-4.5" />
                  Generate Message
                </Button>
              </form>
            </GlassCard>

            {/* Generated Output */}
            <MessageOutput
              message={generator.message}
              isLoading={generator.isLoading}
              onRegenerate={handleRegenerate}
            />
          </div>

          {/* History column (Right) */}
          <div className="lg:col-span-1">
            <MessageHistory
              history={generator.history}
              onClear={generator.clearHistory}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Generator;
