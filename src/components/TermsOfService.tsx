import { FileText } from 'lucide-react';
import { Footer } from './Footer';

export function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <article className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <FileText className="w-8 h-8 text-indigo-600" />
          <h1 className="text-4xl text-gray-900">Terms of Service</h1>
        </div>

        <p className="text-sm text-gray-600 mb-6">Last updated: March 6, 2026</p>

        <section className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            By using this website, you agree to use it lawfully and in accordance with these terms.
          </p>
          <p>
            Tools and content are provided for informational purposes only and are provided "as is" without warranties.
          </p>
          <p>
            You are responsible for verifying outputs from calculators and templates before business, legal, or tax use.
          </p>
          <p>
            We may update, suspend, or modify site features at any time to improve quality or security.
          </p>
          <p>
            To the maximum extent permitted by law, we are not liable for losses resulting from use of the website.
          </p>
          <p>
            If you do not agree with these terms, discontinue use of the site.
          </p>
        </section>
      </article>

      <Footer />
    </div>
  );
}
