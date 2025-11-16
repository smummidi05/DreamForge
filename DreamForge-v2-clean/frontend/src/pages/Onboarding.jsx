
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Heart, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';

function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    inputMethod: '',
    interests: ''
  });

  const handleProjectSelect = (type) => {
    setFormData({ ...formData, projectType: type });
  };

  const handleInputMethodSelect = (method) => {
    setFormData({ ...formData, inputMethod: method });
  };

  const handleNext = () => {
    if (step === 1 && formData.projectType) {
      setStep(2);
    } else if (step === 2 && formData.inputMethod) {
      // Save to localStorage for later use
      localStorage.setItem('dreamforge_preferences', JSON.stringify(formData));
      // Navigate to the builder
      navigate('/builder');
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6 py-12">
      <div className="max-w-3xl w-full">
        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex justify-center gap-3 mb-4">
            <div className={`h-3 w-16 rounded-full ${step >= 1 ? 'bg-lavender-500' : 'bg-warmGray'}`}></div>
            <div className={`h-3 w-16 rounded-full ${step >= 2 ? 'bg-lavender-500' : 'bg-warmGray'}`}></div>
          </div>
          <p className="text-center text-lg text-navy/70">
            Step {step} of 2
          </p>
        </div>

        {/* Step 1: Project Type */}
        {step === 1 && (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
                What would you like to create today?
              </h1>
              <p className="text-xl text-navy/70">
                Choose the type of project that interests you most
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <ProjectCard
                icon={<BookOpen size={64} />}
                title="Family Recipe Book"
                description="Preserve your treasured recipes with stories for generations"
                selected={formData.projectType === 'recipe'}
                onClick={() => handleProjectSelect('recipe')}
                color="lavender"
              />
              <ProjectCard
                icon={<Heart size={64} />}
                title="Memory Photo Album"
                description="Turn precious photos into beautiful memory albums"
                selected={formData.projectType === 'album'}
                onClick={() => handleProjectSelect('album')}
                color="coral"
              />
              <ProjectCard
                icon={<Sparkles size={64} />}
                title="Hobby Blog"
                description="Share your passion for gardening, crafts, or travel"
                selected={formData.projectType === 'blog'}
                onClick={() => handleProjectSelect('blog')}
                color="lightPurple"
              />
            </div>
          </div>
        )}

        {/* Step 2: Input Method */}
        {step === 2 && (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
                How would you like to share your story?
              </h1>
              <p className="text-xl text-navy/70">
                Choose whichever feels most comfortable to you
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <InputMethodCard
                title="I'll Type"
                description="Type your thoughts at your own pace"
                icon="⌨️"
                selected={formData.inputMethod === 'typing'}
                onClick={() => handleInputMethodSelect('typing')}
              />
              <InputMethodCard
                title="I'll Speak"
                description="Tell your story in your own voice"
                icon="🎤"
                selected={formData.inputMethod === 'voice'}
                onClick={() => handleInputMethodSelect('voice')}
              />
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-12">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 px-6 py-3 text-lg text-navy hover:text-lavender-500 transition-colors"
          >
            <ArrowLeft size={24} />
            Back
          </button>

          <button
            onClick={handleNext}
            disabled={
              (step === 1 && !formData.projectType) ||
              (step === 2 && !formData.inputMethod)
            }
            className={`flex items-center gap-2 px-8 py-4 rounded-2xl text-xl font-medium transition-all shadow-medium
              ${(step === 1 && formData.projectType) || (step === 2 && formData.inputMethod)
                ? 'bg-lavender-500 hover:bg-lavender-600 text-white cursor-pointer'
                : 'bg-warmGray text-navy/40 cursor-not-allowed'
              }`}
          >
            {step === 2 ? "Let's Create!" : 'Next'}
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

// Project Card Component
function ProjectCard({ icon, title, description, selected, onClick, color }) {
  const colorClasses = {
    lavender: selected 
      ? 'bg-lavender-100 border-lavender-500 text-lavender-500' 
      : 'bg-white border-lavender-200 text-lavender-400',
    coral: selected 
      ? 'bg-coral-100 border-coral-400 text-coral-400' 
      : 'bg-white border-coral-200 text-coral-300',
    lightPurple: selected 
      ? 'bg-purple-100 border-lightPurple-400 text-lightPurple-400' 
      : 'bg-white border-purple-200 text-purple-300'
  };

  return (
    <button
      onClick={onClick}
      className={`p-6 rounded-2xl border-4 transition-all hover:shadow-lg text-left
        ${colorClasses[color]} ${selected ? 'scale-105 shadow-medium' : ''}`}
    >
      <div className="mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-heading font-semibold text-navy mb-2 text-center">
        {title}
      </h3>
      <p className="text-navy/70 leading-relaxed text-center">
        {description}
      </p>
      {selected && (
        <div className="mt-4 text-center">
          <span className="inline-block px-4 py-1 bg-lavender-500 text-white rounded-full text-sm">
            Selected ✓
          </span>
        </div>
      )}
    </button>
  );
}

// Input Method Card Component
function InputMethodCard({ title, description, icon, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`p-8 rounded-2xl border-4 transition-all hover:shadow-lg
        ${selected 
          ? 'bg-lavender-100 border-lavender-500 scale-105 shadow-medium' 
          : 'bg-white border-lavender-200'
        }`}
    >
      <div className="text-6xl mb-4 text-center">{icon}</div>
      <h3 className="text-2xl font-heading font-semibold text-navy mb-2 text-center">
        {title}
      </h3>
      <p className="text-lg text-navy/70 leading-relaxed text-center">
        {description}
      </p>
      {selected && (
        <div className="mt-4 text-center">
          <span className="inline-block px-4 py-2 bg-lavender-500 text-white rounded-full">
            Selected ✓
          </span>
        </div>
      )}
    </button>
  );
}

export default Onboarding;
