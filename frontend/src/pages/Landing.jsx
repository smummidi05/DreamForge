
import { useState } from 'react';
import { Sparkles, Heart, BookOpen } from 'lucide-react';

function Landing() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Title */}
          <div className="mb-8">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-lavender-500 mb-4">
              DreamForge
            </h1>
            <p className="text-2xl md:text-3xl text-navy font-medium">
              Empowering elders to bring new ideas to life
            </p>
          </div>

          {/* Main Description */}
          <div className="mb-12 space-y-4">
            <p className="text-xl md:text-2xl text-navy leading-relaxed">
              Create, share, and explore—at any age.
            </p>
            <p className="text-lg md:text-xl text-navy/80 leading-relaxed max-w-2xl mx-auto">
              Share your family recipes, preserve precious memories, or start that hobby blog 
              you've always wanted. We make it simple, welcoming, and yours.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              className="bg-lavender-500 hover:bg-lavender-600 text-white px-8 py-4 rounded-2xl text-xl font-medium transition-all shadow-medium hover:shadow-lg"
              onClick={() => window.location.href = '/onboarding'}
            >
              Create Something Today
            </button>
            <button 
              className="bg-white hover:bg-warmGray text-navy px-8 py-4 rounded-2xl text-xl font-medium transition-all shadow-soft border-2 border-lavender-200"
              onClick={() => window.location.href = '/gallery'}
            >
              See Examples
            </button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <FeatureCard
              icon={<BookOpen size={48} />}
              title="Family Recipes"
              description="Preserve your treasured recipes with stories and memories for generations to come."
              color="lavender"
            />
            <FeatureCard
              icon={<Heart size={48} />}
              title="Photo Albums"
              description="Turn your precious photos into beautiful memory albums with your own stories."
              color="coral"
            />
            <FeatureCard
              icon={<Sparkles size={48} />}
              title="Hobby Blogs"
              description="Share your passion for gardening, crafts, travel, or any interest close to your heart."
              color="lightPurple"
            />
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-heading font-bold text-center text-navy mb-12">
            How It Works
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <Step 
              number="1" 
              title="Tell us what you'd like to create"
              description="Choose from recipes, photo albums, or hobby blogs. Or tell us your own idea!"
            />
            <Step 
              number="2" 
              title="We guide you step by step"
              description="Our friendly AI assistant walks you through each step at your own pace."
            />
            <Step 
              number="3" 
              title="Share with those who matter"
              description="Your creation is ready to share with family and friends, or keep just for yourself."
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-navy text-cream py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg">
            Made with 💜 for the wisdom and stories of every generation
          </p>
        </div>
      </footer>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ icon, title, description, color }) {
  const colorClasses = {
    lavender: 'bg-lavender-50 text-lavender-500 border-lavender-200',
    coral: 'bg-coral-50 text-coral-400 border-coral-200',
    lightPurple: 'bg-purple-50 text-lightPurple-400 border-purple-200'
  };

  return (
    <div className={`p-6 rounded-2xl border-2 ${colorClasses[color]} transition-all hover:shadow-medium`}>
      <div className="mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-heading font-semibold text-navy mb-2">
        {title}
      </h3>
      <p className="text-navy/80 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

// Step Component
function Step({ number, title, description }) {
  return (
    <div className="flex gap-6 items-start">
      <div className="flex-shrink-0 w-12 h-12 bg-lavender-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
        {number}
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-heading font-semibold text-navy mb-2">
          {title}
        </h3>
        <p className="text-lg text-navy/80 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Landing;
