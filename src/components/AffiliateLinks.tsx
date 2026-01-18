import { ExternalLink, Zap } from 'lucide-react';

interface AffiliateLinkProps {
  title: string;
  description: string;
  url: string;
  badge?: string;
}

function AffiliateLink({ title, description, url, badge }: AffiliateLinkProps) {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-indigo-500 hover:shadow-md transition-all group"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-gray-900 group-hover:text-indigo-600 transition-colors">{title}</h3>
            {badge && (
              <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full">
                {badge}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 transition-colors flex-shrink-0 mt-1" />
      </div>
    </a>
  );
}

export function AffiliateLinks() {
  const tools = [
    {
      title: 'FreshBooks',
      description: 'Invoicing & accounting software for freelancers',
      url: 'https://www.freshbooks.com',
      badge: 'Popular'
    },
    {
      title: 'QuickBooks Self-Employed',
      description: 'Track expenses, mileage & maximize tax deductions',
      url: 'https://quickbooks.intuit.com/self-employed',
    },
    {
      title: 'Toggl Track',
      description: 'Time tracking to maximize your billable hours',
      url: 'https://toggl.com/track',
    },
    {
      title: 'Gusto',
      description: 'Payroll, benefits, and HR for contractors',
      url: 'https://gusto.com',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg p-8 border border-gray-200">
      <div className="flex items-center gap-2 mb-6">
        <Zap className="w-6 h-6 text-indigo-600" />
        <h2 className="text-2xl text-gray-900">Recommended Freelance Tools</h2>
      </div>
      
      <p className="text-sm text-gray-600 mb-6">
        Essential tools to help you manage your freelance business effectively
      </p>

      <div className="space-y-3">
        {tools.map((tool, index) => (
          <AffiliateLink key={index} {...tool} />
        ))}
      </div>

      <p className="text-xs text-gray-500 mt-6 italic">
        * Affiliate disclosure: We may earn a commission from qualifying purchases at no extra cost to you
      </p>
    </div>
  );
}
