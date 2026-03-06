import { AlertCircle, DollarSign, Heart, Briefcase, TrendingUp, Lock } from 'lucide-react';
import { Footer } from './Footer';
import { SEOHead } from './SEOHead';

export function HiddenCosts() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <SEOHead />
      
      <div style={{marginBottom:40}}>
        {/* <AdPlaceholder type="leaderboard" className="mb-6" /> */}
      </div>

      <article className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <AlertCircle className="w-8 h-8 text-red-600" />
          <h1 className="text-4xl text-gray-900">Hidden Costs of Being a Freelancer</h1>
        </div>

        <p className="text-gray-600 text-lg mb-8">
          Beyond your billable hours, freelancers face numerous expenses that employees don't. Understanding these hidden costs is crucial for setting sustainable rates and building a profitable business.
        </p>

        <div className="prose prose-gray max-w-none space-y-6">
          <section>
            <h2 className="text-2xl text-gray-900 mb-4">Why Freelance Rates Must Be Higher Than Employee Salaries</h2>
            <p className="text-gray-700 leading-relaxed">
              One of the biggest mistakes new freelancers make is calculating rates based solely on their desired take-home pay. If you charge the same hourly rate as an equivalent full-time employee, you'll likely go out of business. Here's why: employers cover costs and benefits that freelancers must pay themselves, and freelancers have non-billable time that employees don't lose to payroll.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              The typical rule of thumb is that freelance rates should be 2-3 times higher than equivalent employee salaries. This isn't greed—it's financial reality. A $50/hour employee actually costs the employer $65-75/hour when you include benefits, but a freelancer earning $100/hour might take home only $50-60/hour after accounting for hidden costs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-gray-900 mb-4">1. Self-Employment Taxes</h2>
            <p className="text-gray-700 leading-relaxed">
              This is often the biggest shock to new freelancers. As a self-employed person, you pay both the employer and employee portions of Social Security and Medicare taxes, totaling approximately 15.3% of your net income (in the US). Employees pay about half of this, with employers covering the rest.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Cost impact:</strong> If you want to take home $50,000, you need to earn approximately $58,500 to account for self-employment taxes ($8,500). Over a year, this adds up significantly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-gray-900 mb-4">2. Health Insurance</h2>
            <p className="text-gray-700 leading-relaxed">
              Employees get employer-subsidized health insurance. Freelancers must purchase individual health plans. The average cost of individual health insurance in 2026 ranges from $200-600+ per month depending on coverage and location, totaling $2,400-7,200 annually.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Some freelancers qualify for subsidies through the Affordable Care Act marketplace, which can significantly reduce costs. However, you must budget for this critical expense. The good news: health insurance premiums are tax-deductible.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-gray-900 mb-4">3. Retirement Contributions</h2>
            <p className="text-gray-700 leading-relaxed">
              Most employees have employer-sponsored retirement plans with employer matching. Freelancers get no matching and must fund their own retirement. You should contribute at least 10-15% of your income to retirement savings.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              As a freelancer, you can open a SEP IRA, Solo 401(k), or other self-employed retirement plans, which allow higher contribution limits than traditional IRAs. If you want to match what employers contribute (typically 3-6%), you need to set aside $6,000-15,000 annually for a $100,000 annual income.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-gray-900 mb-4">4. Paid Time Off (Vacation, Sick Days, Holidays)</h2>
            <p className="text-gray-700 leading-relaxed">
              Employees accrue paid vacation and sick days. Freelancers don't—if you're not working, you're not earning. Most employees get 15-25 days of paid time off annually (3-5 weeks). If you earn $100/hour and take 3 weeks off, that's $12,000 in lost income.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              You must factor this into your rates. If you plan to take 4 weeks off annually, you need to earn enough in the remaining 48 weeks to cover 52 weeks of expenses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-gray-900 mb-4">5. Equipment and Technology</h2>
            <p className="text-gray-700 leading-relaxed">
              Employers provide computers, software, and equipment. Freelancers must purchase these themselves. Typical costs include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 mt-4 mb-4">
              <li><strong>Computer:</strong> $800-3,000 (replacement every 3-5 years = $200-1,000/year)</li>
              <li><strong>Software subscriptions:</strong> Adobe Creative Suite ($60/month), Microsoft Office ($70/year), project management tools ($10-100/month) = $200-1,500/year</li>
              <li><strong>Internet:</strong> $50-100/month = $600-1,200/year</li>
              <li><strong>Phone:</strong> $30-100/month = $360-1,200/year</li>
              <li><strong>Other equipment:</strong> Monitor, keyboard, mouse, peripherals = $500-2,000 per upgrade</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Annual technology costs easily reach $2,000-5,000+ depending on your industry and needs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-gray-900 mb-4">6. Office Space</h2>
            <p className="text-gray-700 leading-relaxed">
              If you work from home, you can deduct a percentage of rent/mortgage and utilities. However, many freelancers need dedicated workspace. Costs include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 mt-4 mb-4">
              <li><strong>Home office:</strong> Utilities, internet, furniture = $100-300/month</li>
              <li><strong>Coworking space:</strong> $150-500/month depending on location</li>
              <li><strong>Shared office rental:</strong> $300-1,000+/month</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl text-gray-900 mb-4">7. Professional Development and Training</h2>
            <p className="text-gray-700 leading-relaxed">
              To stay competitive, freelancers must continuously learn new skills. Employers often provide training budgets; freelancers must fund their own. Typical costs:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 mt-4 mb-4">
              <li>Online courses: $30-500 each</li>
              <li>Certifications: $200-5,000</li>
              <li>Conferences and workshops: $500-3,000</li>
              <li>Books and publications: $20-100 each</li>
              <li>Subscriptions (newsletters, learning platforms): $10-50/month</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Budget $1,000-3,000 annually to stay current in your field.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-gray-900 mb-4">8. Marketing and Business Development</h2>
            <p className="text-gray-700 leading-relaxed">
              Employees have marketing departments; freelancers must market themselves. You need to spend 10-20% of your time on business development, which is non-billable. Additionally, direct marketing costs include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 mt-4 mb-4">
              <li>Website hosting and domain: $10-50/month</li>
              <li>Portfolio platform: $0-100/month</li>
              <li>LinkedIn Premium: $35-65/month</li>
              <li>Email marketing tools: $0-100/month</li>
              <li>Advertising: $200-2,000+/month if running ads</li>
              <li>Networking events and memberships: $100-1,000/year</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl text-gray-900 mb-4">9. Accounting and Legal Services</h2>
            <p className="text-gray-700 leading-relaxed">
              Freelancers need professional help with taxes, bookkeeping, and contracts. Typical costs:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 mt-4 mb-4">
              <li><strong>Accountant/tax preparation:</strong> $500-2,000/year</li>
              <li><strong>Bookkeeping software:</strong> $10-50/month</li>
              <li><strong>Legal templates/consultation:</strong> $100-500/year</li>
              <li><strong>Business registration:</strong> $100-500 (one-time)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Don't skimp here. Proper accounting and tax compliance save you money and prevent costly mistakes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-gray-900 mb-4">10. Insurance</h2>
            <p className="text-gray-700 leading-relaxed">
              Depending on your industry, you may need:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 mt-4 mb-4">
              <li><strong>Professional liability insurance:</strong> $300-1,500/year protects you if a client sues</li>
              <li><strong>General liability insurance:</strong> $200-500/year for physical business premises</li>
              <li><strong>Disability insurance:</strong> $50-200/month replaces income if you can't work</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl text-gray-900 mb-4">11. Non-Billable Time</h2>
            <p className="text-gray-700 leading-relaxed">
              Not all your working hours are billable. You'll spend time on:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 mt-4 mb-4">
              <li>Administrative tasks: invoicing, bookkeeping, email</li>
              <li>Sales and client prospecting: networking, proposals, negotiations</li>
              <li>Project planning and communication</li>
              <li>Revisions and client feedback</li>
              <li>Onboarding new clients</li>
              <li>Technology troubleshooting and maintenance</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Most freelancers find only 60-80% of their working time is actually billable. If you work 40 hours/week but only bill 30 hours, you're effectively earning 25% less.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-gray-900 mb-4">12. Income Gaps and Unpredictable Income</h2>
            <p className="text-gray-700 leading-relaxed">
              Unlike employees with steady paychecks, freelance income fluctuates. You may have months with great income and months with nothing. You need a financial buffer to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 mt-4 mb-4">
              <li>Cover 3-6 months of expenses during slow periods</li>
              <li>Handle client non-payment (bad debts)</li>
              <li>Account for late payments (cash flow stress)</li>
              <li>Survive project gaps between clients</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              This means you need to earn significantly more during busy months to offset lean ones.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-gray-900 mb-4">Quick Hidden Costs Calculator</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
              <p className="text-gray-700 mb-4">
                <strong>Example:</strong> You want to take home $50,000/year as a freelancer. Here's what you actually need to earn:
              </p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li>Desired take-home: <strong>$50,000</strong></li>
                <li>Self-employment taxes (15.3%): <strong>+$7,650</strong></li>
                <li>Health insurance: <strong>+$4,800</strong></li>
                <li>Retirement contributions (15%): <strong>+$9,465</strong></li>
                <li>Paid time off (4 weeks): <strong>+$3,846</strong></li>
                <li>Equipment and software: <strong>+$3,000</strong></li>
                <li>Marketing/business dev: <strong>+$3,000</strong></li>
                <li>Accounting/legal: <strong>+$1,500</strong></li>
                <li>Insurance: <strong>+$1,000</strong></li>
                <li>Professional development: <strong>+$1,500</strong></li>
                <li className="border-t border-gray-300 pt-2"><strong>TOTAL NEEDED TO EARN: $85,761</strong></li>
              </ul>
              <p className="text-gray-700 mt-4 text-sm">
                But remember: only 70% of your time is billable (1,456 hours/year out of 2,080). So you need to earn $85,761 ÷ 1,456 = <strong>$58.95/hour</strong> to take home $50,000.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl text-gray-900 mb-4">Key Takeaways</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 ml-2">
              <li>Hidden costs typically add 50-100% to what you think you need to earn</li>
              <li>Always factor in self-employment taxes, health insurance, and retirement</li>
              <li>Account for 20-40% non-billable time in your rate calculations</li>
              <li>Build an emergency fund to handle income variability</li>
              <li>Use our free rate calculator to determine sustainable prices</li>
              <li>Review and adjust your rates annually as costs change</li>
              <li>Remember: higher rates aren't greed—they're necessary for business sustainability</li>
            </ul>
          </section>
        </div>
      </article>

      {/* <AdPlaceholder type="rectangle" className="mb-8" /> */}
      <Footer />
    </div>
  );
}
