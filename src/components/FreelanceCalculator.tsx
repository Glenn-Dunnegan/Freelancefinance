import { useState, useEffect } from 'react';
import { Calculator, DollarSign, Calendar, TrendingUp, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AdPlaceholder } from './AdPlaceholder';
import { AffiliateLinks } from './AffiliateLinks';
import { SEOHead } from './SEOHead';
import { SEOContent } from './SEOContent';
import { FAQSection } from './FAQSection';

export function FreelanceCalculator() {
  const [desiredSalary, setDesiredSalary] = useState(75000);
  const [workingDaysPerYear, setWorkingDaysPerYear] = useState(230);
  const [hoursPerDay, setHoursPerDay] = useState(8);
  const [businessExpenses, setBusinessExpenses] = useState(10000);
  const [profitMargin, setProfitMargin] = useState(20);
  const [taxRate, setTaxRate] = useState(30);
  const [billablePercentage, setBillablePercentage] = useState(75);

  const [results, setResults] = useState({
    hourlyRate: 0,
    dailyRate: 0,
    weeklyRate: 0,
    monthlyRate: 0,
    totalHoursNeeded: 0,
    billableHours: 0
  });

  useEffect(() => {
    calculateRates();
  }, [desiredSalary, workingDaysPerYear, hoursPerDay, businessExpenses, profitMargin, taxRate, billablePercentage]);

  const calculateRates = () => {
    // Total income needed before taxes
    const incomeBeforeTax = desiredSalary / (1 - taxRate / 100);
    
    // Add profit margin
    const incomeWithProfit = incomeBeforeTax * (1 + profitMargin / 100);
    
    // Add business expenses
    const totalRevenueNeeded = incomeWithProfit + businessExpenses;
    
    // Calculate billable hours
    const totalHoursAvailable = workingDaysPerYear * hoursPerDay;
    const billableHours = totalHoursAvailable * (billablePercentage / 100);
    
    // Calculate rates
    const hourlyRate = totalRevenueNeeded / billableHours;
    const dailyRate = hourlyRate * hoursPerDay;
    const weeklyRate = dailyRate * 5;
    const monthlyRate = dailyRate * (workingDaysPerYear / 12);

    setResults({
      hourlyRate: Math.ceil(hourlyRate),
      dailyRate: Math.ceil(dailyRate),
      weeklyRate: Math.ceil(weeklyRate),
      monthlyRate: Math.ceil(monthlyRate),
      totalHoursNeeded: Math.round(totalHoursAvailable),
      billableHours: Math.round(billableHours)
    });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <SEOHead />
      
      {/* Top Banner Ad */}
      <AdPlaceholder type="leaderboard" className="mb-6" />

      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Calculator className="w-10 h-10 text-indigo-600" />
          <h1 className="text-4xl text-gray-900">Freelance Rate Calculator</h1>
        </div>
        <p className="text-gray-600">
          Calculate your ideal hourly and daily rates based on your financial goals
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl text-gray-900 mb-6 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-indigo-600" />
            Your Details
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Desired Annual Salary ($)
              </label>
              <input
                type="number"
                value={desiredSalary}
                onChange={(e) => setDesiredSalary(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Working Days Per Year
              </label>
              <input
                type="number"
                value={workingDaysPerYear}
                onChange={(e) => setWorkingDaysPerYear(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
              />
              <p className="text-xs text-gray-500 mt-1">
                365 days - weekends - holidays - vacation (typical: 220-240)
              </p>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Hours Per Day
              </label>
              <input
                type="number"
                value={hoursPerDay}
                onChange={(e) => setHoursPerDay(Number(e.target.value))}
                step="0.5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Annual Business Expenses ($)
              </label>
              <input
                type="number"
                value={businessExpenses}
                onChange={(e) => setBusinessExpenses(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
              />
              <p className="text-xs text-gray-500 mt-1">
                Software, equipment, insurance, marketing, etc.
              </p>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Desired Profit Margin (%)
              </label>
              <input
                type="number"
                value={profitMargin}
                onChange={(e) => setProfitMargin(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
              />
              <input
                type="range"
                min="0"
                max="50"
                value={profitMargin}
                onChange={(e) => setProfitMargin(Number(e.target.value))}
                className="w-full mt-2"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Tax Rate (%)
              </label>
              <input
                type="number"
                value={taxRate}
                onChange={(e) => setTaxRate(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
              />
              <input
                type="range"
                min="0"
                max="50"
                value={taxRate}
                onChange={(e) => setTaxRate(Number(e.target.value))}
                className="w-full mt-2"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Billable Hours (%)
              </label>
              <input
                type="number"
                value={billablePercentage}
                onChange={(e) => setBillablePercentage(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
              />
              <input
                type="range"
                min="0"
                max="100"
                value={billablePercentage}
                onChange={(e) => setBillablePercentage(Number(e.target.value))}
                className="w-full mt-2"
              />
              <p className="text-xs text-gray-500 mt-1">
                Not all hours are billable (admin, sales, etc. - typical: 60-80%)
              </p>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Sidebar Ad */}
          <AdPlaceholder type="rectangle" />

          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white">
            <h2 className="text-2xl mb-6 flex items-center gap-2">
              <DollarSign className="w-6 h-6" />
              Your Rates
            </h2>

            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <p className="text-sm opacity-90 mb-1">Hourly Rate</p>
                <p className="text-3xl">${results.hourlyRate}</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <p className="text-sm opacity-90 mb-1">Daily Rate</p>
                <p className="text-3xl">${results.dailyRate}</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <p className="text-sm opacity-90 mb-1">Weekly Rate</p>
                <p className="text-3xl">${results.weeklyRate}</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <p className="text-sm opacity-90 mb-1">Monthly Rate</p>
                <p className="text-3xl">${results.monthlyRate}</p>
              </div>
            </div>
          </div>

          {/* Mid-content Ad */}
            <AdPlaceholder type="rectangle" />
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl text-gray-900 mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-indigo-600" />
              Breakdown
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-600">Total Available Hours</span>
                <span className="text-gray-900">{results.totalHoursNeeded} hrs/year</span>
              </div>

              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-600">Billable Hours</span>
                <span className="text-gray-900">{results.billableHours} hrs/year</span>
              </div>

              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-600">Desired Salary</span>
                <span className="text-gray-900">${desiredSalary.toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-600">Business Expenses</span>
                <span className="text-gray-900">${businessExpenses.toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-600">Profit Margin</span>
                <span className="text-gray-900">{profitMargin}%</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">Tax Rate</span>
                <span className="text-gray-900">{taxRate}%</span>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <div className="flex gap-3">
              <Calendar className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-gray-900 mb-2">
                  <strong>Pro Tip:</strong> These rates ensure you meet your salary goals while covering all expenses.
                </p>
                <p className="text-xs text-gray-600">
                  Remember to adjust for your market, experience level, and specialty. Consider offering package deals or retainers at a slight discount.
                </p>
              </div>
            </div>
          </div>

          {/* Link to Invoice Generator */}
          <Link 
            to="/invoice-generator"
            className="block bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-6 hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl mb-2">Create an Invoice</h3>
                <p className="text-sm text-indigo-100">
                  Ready to bill your clients? Use our free invoice generator
                </p>
              </div>
              <ArrowRight className="w-6 h-6 flex-shrink-0" />
            </div>
          </Link>
        </div>
      </div>

      {/* Bottom Banner Ad */}
      <div style={{marginTop: 40}}>
        <AdPlaceholder type="leaderboard" className="mt-8" />
      </div>
      {/* Affiliate Links Section */}
      <div className="mt-8">
        <AffiliateLinks />
      </div>

      {/* SEO Content Section */}
      <div className="mt-8">
        <SEOContent />
      </div>

      {/* FAQ Section */}
      <div className="mt-8">
        <FAQSection />
      </div>
    </div>
  );
}