import { Mail, MessageSquare } from 'lucide-react';
import { Footer } from './Footer';

export function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <article className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <MessageSquare className="w-8 h-8 text-indigo-600" />
          <h1 className="text-4xl text-gray-900">Contact</h1>
        </div>

        <p className="text-gray-700 leading-relaxed mb-6">
          Questions, feedback, or correction requests are welcome. We review messages and respond as quickly as possible.
        </p>

        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-indigo-600 mt-1" />
            <div>
              <h2 className="text-xl text-gray-900 mb-2">Email Support</h2>
              <p className="text-gray-700">
                Reach us at: <a className="text-indigo-700 hover:underline" href="mailto:support@freelance-finance.com">support@freelance-finance.com</a>
              </p>
              <p className="text-sm text-gray-600 mt-2">
                For legal or policy inquiries, include the page URL and details of your request.
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
