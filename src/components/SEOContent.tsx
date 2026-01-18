import { TrendingUp, DollarSign, Target, Shield } from 'lucide-react';

export function SEOContent() {
  return (
    <article className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl text-gray-900 mb-6">
        How to Use This Freelance Rate Calculator
      </h2>
      
      <div className="prose prose-gray max-w-none">
        <p className="text-gray-700 mb-6">
          Setting the right freelance rate is crucial for your success as an independent contractor or consultant. 
          Our free freelance rate calculator helps you determine competitive hourly rates, daily rates, and project 
          rates that ensure you meet your financial goals while remaining competitive in your market.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-3">
              <Target className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-gray-900 mb-2">Set Your Income Goals</h3>
                <p className="text-sm text-gray-600">
                  Enter your desired annual salary - the take-home income you want to achieve. This is what you'd 
                  make as an employee before factoring in the additional costs of being self-employed.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-3">
              <Calendar className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-gray-900 mb-2">Calculate Working Time</h3>
                <p className="text-sm text-gray-600">
                  Determine your realistic working days per year and hours per day. Remember to account for 
                  holidays, vacation, and the fact that not all work hours are billable.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-3">
              <DollarSign className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-gray-900 mb-2">Account for Expenses</h3>
                <p className="text-sm text-gray-600">
                  Include all your business expenses: software, equipment, insurance, marketing, accounting, 
                  and other overhead costs that employees don't typically pay.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-3">
              <TrendingUp className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-gray-900 mb-2">Add Profit Margin</h3>
                <p className="text-sm text-gray-600">
                  Build in a profit margin (15-30%) to handle slow periods, invest in growth, and provide 
                  financial security beyond just covering your basic needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-xl text-gray-900 mb-4 mt-8">
          Why Freelance Rates Are Higher Than Employee Salaries
        </h3>
        
        <p className="text-gray-700 mb-4">
          Many freelancers wonder why their hourly rate needs to be 2-3x higher than an equivalent employee salary. 
          The reason is simple: as a freelancer, you're responsible for costs and risks that employers typically cover:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li>Self-employment taxes (approximately 15.3% in the US)</li>
          <li>Health insurance and benefits</li>
          <li>Retirement contributions (no employer match)</li>
          <li>Paid time off (vacation, sick days, holidays)</li>
          <li>Equipment and software</li>
          <li>Professional development and training</li>
          <li>Marketing and business development time</li>
          <li>Administrative tasks and overhead</li>
          <li>Income uncertainty and gaps between projects</li>
        </ul>

        <h3 className="text-xl text-gray-900 mb-4">
          Tips for Setting Competitive Freelance Rates
        </h3>

        <p className="text-gray-700 mb-4">
          Once you've calculated your baseline rate, consider these factors to refine your pricing:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li><strong>Market research:</strong> Compare your rates with other freelancers in your industry and location</li>
          <li><strong>Experience level:</strong> Adjust for your years of experience and specialized skills</li>
          <li><strong>Value-based pricing:</strong> Consider the value you provide to clients, not just your time</li>
          <li><strong>Project complexity:</strong> Charge premium rates for complex or high-stakes projects</li>
          <li><strong>Client type:</strong> Corporate clients typically have larger budgets than startups or nonprofits</li>
          <li><strong>Payment terms:</strong> Consider charging more for longer payment terms or rush projects</li>
        </ul>

        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 my-6">
          <div className="flex gap-3">
            <Shield className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-gray-900 mb-2">Pro Tip: Start Higher</h4>
              <p className="text-sm text-gray-700">
                It's easier to lower your rates than to raise them with existing clients. Start with rates at the 
                higher end of your calculated range, and you can always offer discounts for long-term contracts or 
                ideal clients. Remember, clients often associate higher rates with higher quality and expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function Calendar({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}
