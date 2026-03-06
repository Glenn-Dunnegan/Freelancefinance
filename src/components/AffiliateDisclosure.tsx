import { BadgeInfo } from 'lucide-react';
import { Footer } from './Footer';

export function AffiliateDisclosure() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <article className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <BadgeInfo className="w-8 h-8 text-indigo-600" />
          <h1 className="text-4xl text-gray-900">Affiliate Disclosure</h1>
        </div>

        <p className="text-sm text-gray-600 mb-6">Last updated: March 6, 2026</p>

        <section className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Some links on this website are affiliate links. If you click a link and make a purchase, we may earn a commission.
          </p>
          <p>
            There is no additional cost to you. Affiliate commissions help support free tools, guides, and site maintenance.
          </p>
          <p>
            We only feature products we believe are relevant to freelancers and independent professionals.
          </p>
          <p>
            Affiliate relationships do not determine our educational content, recommendations, or editorial standards.
          </p>
        </section>
      </article>

      <Footer />
    </div>
  );
}
