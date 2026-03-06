import { Shield } from 'lucide-react';
import { Footer } from './Footer';

export function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <article className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-8 h-8 text-indigo-600" />
          <h1 className="text-4xl text-gray-900">Privacy Policy</h1>
        </div>

        <p className="text-sm text-gray-600 mb-6">Last updated: March 6, 2026</p>

        <section className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            We collect limited information necessary to operate the website, improve performance, and maintain security.
          </p>
          <p>
            This may include technical data such as browser type, device information, pages viewed, and approximate location.
          </p>
          <p>
            Third-party partners (including advertising providers) may use cookies or similar technologies to serve and measure ads.
          </p>
          <p>
            You can manage cookies through your browser settings. Disabling cookies may affect some site functionality.
          </p>
          <p>
            We do not sell personal information. If you contact us directly, we use your message only to respond and provide support.
          </p>
          <p>
            For privacy requests, contact <a className="text-indigo-700 hover:underline" href="mailto:privacy@freelance-finance.com">privacy@freelance-finance.com</a>.
          </p>
        </section>
      </article>

      <Footer />
    </div>
  );
}
