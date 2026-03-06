import { Users, Target, ShieldCheck } from 'lucide-react';
import { Footer } from './Footer';

export function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <article className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <Users className="w-8 h-8 text-indigo-600" />
          <h1 className="text-4xl text-gray-900">About Freelance Tools</h1>
        </div>

        <p className="text-gray-700 leading-relaxed mb-6">
          Freelance Tools exists to help independent professionals make smarter pricing and invoicing decisions.
          Our goal is to provide practical, easy-to-use resources for freelancers, contractors, and consultants.
        </p>

        <section className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-5 h-5 text-indigo-600" />
            <h2 className="text-2xl text-gray-900">Our Mission</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We focus on clear financial education and useful calculators that support sustainable freelance businesses.
            We publish practical guides, maintain free tools, and continuously improve content based on user needs.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheck className="w-5 h-5 text-indigo-600" />
            <h2 className="text-2xl text-gray-900">Editorial Standards</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-3">
            We aim for accurate, actionable content and regularly update pages as best practices evolve.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Content on this website is educational and not legal, tax, or financial advice. For personalized guidance,
            consult a qualified professional.
          </p>
        </section>
      </article>

      <Footer />
    </div>
  );
}
