import { Handshake, TrendingUp, Target, MessageSquare, AlertCircle, CheckCircle } from 'lucide-react';
import { Footer } from './Footer';
import { SEOHead } from './SEOHead';

export function NegotiatingRates() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <SEOHead />
      
      <div style={{marginBottom:40}}>
        {/* <AdPlaceholder type="leaderboard" className="mb-6" /> */}
      </div>

      <article className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <Handshake className="w-8 h-8 text-green-600" />
          <h1 className="text-4xl text-gray-900">How to Negotiate Rates with Clients</h1>
        </div>

        <p className="text-gray-600 text-lg mb-8">
          Rate negotiation is a critical skill for freelancers. Learn how to advocate for fair compensation while maintaining strong client relationships.
        </p>

        <div className="prose prose-gray max-w-none space-y-6">
          <section>
            <h2 className="text-2xl text-gray-900 mb-4">Why Many Freelancers Struggle with Rate Negotiation</h2>
            <p className="text-gray-700 leading-relaxed">
              Many freelancers underprice their work out of fear, lack of confidence, or inexperience. They believe that lower rates will help them win clients, land more projects, or build portfolios. While there's a time and place for reduced rates, chronic underpricing damages your long-term business viability and trains clients to expect low rates from you.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              The irony is that higher rates often attract better clients, lead to more professional relationships, and create space for you to deliver higher-quality work. A client paying premium rates expects excellence and is more likely to fund revisions, extend deadlines, and provide clear feedback than a client who wants the absolute cheapest option.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-gray-900 mb-4">Know Your Value Before You Negotiate</h2>
            
            <h3 className="text-xl text-gray-900 mb-3 mt-6">Calculate Your Baseline Rate</h3>
            <p className="text-gray-700 leading-relaxed">
              Before any client conversation, determine your non-negotiable minimum rate. This should cover your:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 mt-3 mb-4">
              <li>Desired income and lifestyle</li>
              <li>Business expenses (equipment, software, office)</li>
              <li>Taxes (self-employment, income tax)</li>
              <li>Benefits (health insurance, retirement)</li>
              <li>Unpaid time (marketing, admin, vacation)</li>
              <li>Overhead and business risks</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Use our free rate calculator to determine exactly what you need to earn. Don't accept rates below this floor—it's not actually sustainable.
            </p>

            <h3 className="text-xl text-gray-900 mb-3 mt-6">Research Market Rates</h3>
            <p className="text-gray-700 leading-relaxed">
              Know what other freelancers with similar experience charge. Check:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 mt-3 mb-4">
              <li>Freelance platforms (Upwork, Fiverr) in your niche</li>
              <li>Industry forums and communities</li>
              <li>LinkedIn profiles of similar freelancers</li>
              <li>Industry salary surveys and reports</li>
              <li>Agencies that offer similar services</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              You want to position yourself within the market range—typically at the higher end if you have strong experience and testimonials, toward the middle if you're mid-level.
            </p>

            <h3 className="text-xl text-gray-900 mb-3 mt-6">Articulate Your Unique Value</h3>
            <p className="text-gray-700 leading-relaxed">
              Beyond your hourly rate, identify what makes you different:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 mt-3 mb-4">
              <li>Specialized expertise in a niche</li>
              <li>Years of experience and proven track record</li>
              <li>Certifications or credentials</li>
              <li>Notable clients or case studies</li>
              <li>Faster turnaround or higher quality</li>
              <li>Better communication or project management</li>
              <li>Problem-solving approach vs. just execution</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              When a client questions your rate, you need clear reasons beyond "that's what I charge." The value conversation is more persuasive than the price conversation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-gray-900 mb-4">Price Before the Conversation</h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              The best time to establish price is before you're in direct negotiation. Do this by:
            </p>

            <h3 className="text-xl text-gray-900 mb-3 mt-6">Publish Clear Pricing</h3>
            <p className="text-gray-700 leading-relaxed">
              If your rates are visible on your website, freelance profiles, or proposals, clients self-select. Those comfortable with your pricing move forward; those who aren't, don't waste your time. This eliminates the surprise conversation where clients demand lower rates.
            </p>

            <h3 className="text-xl text-gray-900 mb-3 mt-6">Lead with Value in First Contact</h3>
            <p className="text-gray-700 leading-relaxed">
              When initially discussing a project, focus on outcomes and value:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 mt-3 mb-4">
              <li>"I typically help clients increase conversions by 20-30%"</li>
              <li>"My approach has resulted in faster time-to-market for my clients"</li>
              <li>"Based on your needs, here's how I can solve that problem..."</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              This frames the discussion around outcomes, making price feel less offensive when mentioned.
            </p>

            <h3 className="text-xl text-gray-900 mb-3 mt-6">Provide Estimates Before Committing</h3>
            <p className="text-gray-700 leading-relaxed">
              Always give a written estimate with scope clearly defined. This prevents scope creep and misaligned expectations. If a client accepts the estimate, they've agreed to your pricing and deliverables.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-gray-900 mb-4">When a Client Asks for a Lower Rate</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Despite your preparation, some clients will ask for discounts. Here's how to handle it:
            </p>

            <h3 className="text-xl text-gray-900 mb-3 mt-6">1. Don't Immediately Say Yes</h3>
            <p className="text-gray-700 leading-relaxed">
              Your first instinct might be to agree. Don't. Instead, pause and ask clarifying questions:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 mt-3 mb-4">
              <li>"What's your budget range for this project?"</li>
              <li>"Is cost the primary concern, or are there other factors?"</li>
              <li>"What specifically would make the rate work for you?"</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              This gives you information and shows that rates aren't arbitrary—you're assessing fit.
            </p>

            <h3 className="text-xl text-gray-900 mb-3 mt-6">2. Offer Alternatives to Cutting Your Rate</h3>
            <p className="text-gray-700 leading-relaxed">
              Instead of reducing your hourly rate, offer scope, timeline, or structure adjustments:
            </p>
            
            <div className="space-y-4 mt-4 mb-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Reduce Scope</h4>
                <p className="text-sm text-gray-700">"We could cut the project to phase one only. That would be $X instead of $Y, with phase two happening later."</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Extend Timeline</h4>
                <p className="text-sm text-gray-700">"If we extend the deadline from 2 weeks to 4 weeks, I can work more efficiently and offer a discount of 10%."</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Offer Retainer</h4>
                <p className="text-sm text-gray-700">"I can offer better rates on a 3-month retainer (15% discount) vs. project-based pricing."</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Payment Terms</h4>
                <p className="text-sm text-gray-700">"50% upfront, 50% on completion, with Net 30 payment terms."</p>
              </div>
            </div>

            <h3 className="text-xl text-gray-900 mb-3 mt-6">3. Explain Why Your Rate Is What It Is</h3>
            <p className="text-gray-700 leading-relaxed">
              Use this phrase (adapted to your situation):
            </p>
            <p className="bg-gray-50 border-l-4 border-indigo-600 p-4 text-gray-700 italic mt-3 mb-4">
              "I charge $X/hour because that rate reflects my experience level, the value I deliver (which typically generates ROI of Y%), and my commitment to quality. It also allows me to dedicate proper time to your project rather than rushing through it to hit billable hour targets. This is actually what allows me to deliver the results you're looking for."
            </p>

            <h3 className="text-xl text-gray-900 mb-3 mt-6">4. Ask If Negotiation Is a Deal-Breaker</h3>
            <p className="text-gray-700 leading-relaxed">
              Sometimes you need to be direct:
            </p>
            <p className="bg-gray-50 border-l-4 border-indigo-600 p-4 text-gray-700 italic mt-3 mb-4">
              "I appreciate your budget constraints. My minimum rate for this type of work is $X. If that doesn't fit your budget, I understand. Do you want to proceed at this rate, adjust the scope, or explore other options?"
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              This is often when clients either accept your rate, counter-offer with a legitimate reason, or move on. All three outcomes are better than silently agreeing to unsustainable rates.
            </p>

            <h3 className="text-xl text-gray-900 mb-3 mt-6">5. Know When to Walk Away</h3>
            <p className="text-gray-700 leading-relaxed">
              Not every project is a good fit. Clients who aggressively negotiate below your minimum often:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 mt-3 mb-4">
              <li>Continue demanding more for less throughout the project</li>
              <li>Delay payment or dispute invoices</li>
              <li>Change scope constantly without additional compensation</li>
              <li>Create constant stress and communication friction</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              A cheap client often costs you more in stress, time, and lost opportunity than you gain in revenue. Politely declining is sometimes the right business decision.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-gray-900 mb-4">Special Situations and How to Handle Them</h2>

            <h3 className="text-xl text-gray-900 mb-3 mt-6">Large Companies / Enterprise Clients</h3>
            <p className="text-gray-700 leading-relaxed">
              Enterprise clients often have procurement processes and pre-approved budgets. They often won't negotiate significantly, but they frequently have budget, want quality, and pay reliably. Focus on demonstrating ROI rather than justifying your rate.
            </p>

            <h3 className="text-xl text-gray-900 mb-3 mt-6">Startups and Small Businesses</h3>
            <p className="text-gray-700 leading-relaxed">
              Startups often have budget constraints but growth potential. You might offer reduced rates in exchange for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 mt-3 mb-4">
              <li>Equity or profit sharing</li>
              <li>Case study and portfolio permission</li>
              <li>Retainer relationship (with better rates)</li>
              <li>A timeline that lets you batch their work with other clients</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              But avoid "sweat equity deals" with no compensation. Startups fail often; you need to be paid in cash, not promises.
            </p>

            <h3 className="text-xl text-gray-900 mb-3 mt-6">Nonprofits and Mission-Driven Organizations</h3>
            <p className="text-gray-700 leading-relaxed">
              You might offer a 15-25% discount to mission-aligned nonprofits—but this should be a deliberate choice, not the default. Even charitable work has costs.
            </p>

            <h3 className="text-xl text-gray-900 mb-3 mt-6">Long-Term Clients</h3>
            <p className="text-gray-700 leading-relaxed">
              Existing clients who pay on time deserve loyalty. You can:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 mt-3 mb-4">
              <li>Offer "loyalty discounts" (10-15%) for retainer agreements</li>
              <li>Grandfather them at their current rate while raising new clients' rates</li>
              <li>Increase rates gradually (5-10% annually) with proper notice</li>
            </ul>

            <h3 className="text-xl text-gray-900 mb-3 mt-6">Friends and Family</h3>
            <p className="text-gray-700 leading-relaxed">
              This is touchy, but handle it professionally:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 mt-3 mb-4">
              <li>Charge a reduced rate (20-30% discount) but still charge</li>
              <li>Create a written estimate and contract (even more important here)</li>
              <li>Set clear scope to avoid "just one more thing" requests</li>
              <li>Treat it like any other project professionally</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Free work for friends/family often creates tension and resentment. Charging something (even discounted) sets healthier boundaries and prevents misunderstandings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-gray-900 mb-4">Negotiating Rate Increases with Existing Clients</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              As you gain experience, it's appropriate to raise rates. Handle this strategically:
            </p>

            <h3 className="text-xl text-gray-900 mb-3 mt-6">Annual Rate Review</h3>
            <p className="text-gray-700 leading-relaxed">
              Once per year, review rates with long-term clients. Use this approach:
            </p>
            <p className="bg-gray-50 border-l-4 border-indigo-600 p-4 text-gray-700 italic mt-3 mb-4">
              "After a year working together, I've become more efficient with your needs and requests, and my expertise has deepened. As of [DATE], my rates are increasing to $X/hour. I've valued our partnership and hope to continue working together at this rate. Current projects will remain at our agreed rate; this applies to new work starting [DATE]."
            </p>

            <h3 className="text-xl text-gray-900 mb-3 mt-6">Growth-Based Increases</h3>
            <p className="text-gray-700 leading-relaxed">
              Justify increases with tangible improvements:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 mt-3 mb-4">
              <li>New certifications or training completed</li>
              <li>Expanded expertise in areas relevant to them</li>
              <li>Proven results or case studies from your work together</li>
              <li>Industry-wide rate increases (inflation, market shifts)</li>
            </ul>

            <h3 className="text-xl text-gray-900 mb-3 mt-6">Grandfather Existing Work</h3>
            <p className="text-gray-700 leading-relaxed">
              To maintain goodwill, keep loyal clients at current rates for existing projects, applying new rates only to new work or the next contract period. This rewards loyalty without removing your entire client base overnight.
            </p>

            <h3 className="text-xl text-gray-900 mb-3 mt-6">Offer Value in Return</h3>
            <p className="text-gray-700 leading-relaxed">
              When raising rates, consider adding value:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 mt-3 mb-4">
              <li>Faster turnaround times</li>
              <li>Additional rounds of revisions</li>
              <li>Strategic consultation included</li>
              <li>Priority access to your schedule</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl text-gray-900 mb-4">Common Negotiation Mistakes to Avoid</h2>

            <div className="space-y-4 mb-6">
              <div className="border border-red-200 rounded-lg p-4 bg-red-50">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  Don't Negotiate Against Yourself
                </h4>
                <p className="text-sm text-gray-700">If a client doesn't counter-offer, don't lower your price again. Say "I understand. Let me know if circumstances change" and move on.</p>
              </div>

              <div className="border border-red-200 rounded-lg p-4 bg-red-50">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  Don't Apologize for Your Rates
                </h4>
                <p className="text-sm text-gray-700">Avoid "I'm sorry, my rate is..." or "Unfortunately..." Your pricing should sound confident and justified.</p>
              </div>

              <div className="border border-red-200 rounded-lg p-4 bg-red-50">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  Don't Share Your Actual Billable Hour Count
                </h4>
                <p className="text-sm text-gray-700">Clients don't need to know you estimate 40 hours of billable work. Quote project costs or ranges, not detailed breakdowns.</p>
              </div>

              <div className="border border-red-200 rounded-lg p-4 bg-red-50">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  Don't Negotiate on Scope If You Won't Change Price
                </h4>
                <p className="text-sm text-gray-700">If your rate isn't negotiable, neither is scope. Don't say "yes" to additional work without adjusting the contract and price.</p>
              </div>

              <div className="border border-red-200 rounded-lg p-4 bg-red-50">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  Don't Assume the First "No" Is Final
                </h4>
                <p className="text-sm text-gray-700">Clients often negotiate reflexively. Present your rate with confidence, and they may actually accept it. Don't assume a counter-offer is coming.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl text-gray-900 mb-4">Key Negotiation Tactics</h2>

            <div className="space-y-4 mb-6">
              <div className="border border-green-200 rounded-lg p-4 bg-green-50">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Frame Price as an Investment
                </h4>
                <p className="text-sm text-gray-700">"This investment will result in [specific outcome]. Here's how that translates to ROI for you." Shift from cost-thinking to value-thinking.</p>
              </div>

              <div className="border border-green-200 rounded-lg p-4 bg-green-50">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Use the Takeaway Close
                </h4>
                <p className="text-sm text-gray-700">Sometimes saying "I don't think this is the right fit" is more powerful than saying yes to a bad deal. It creates urgency and respect.</p>
              </div>

              <div className="border border-green-200 rounded-lg p-4 bg-green-50">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Anchor with Your First Number
                </h4>
                <p className="text-sm text-gray-700">The first number mentioned in negotiation often anchors the discussion. If you say $100/hour first, negotiations often happen around that figure rather than $50/hour.</p>
              </div>

              <div className="border border-green-200 rounded-lg p-4 bg-green-50">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Use Silence to Your Advantage
                </h4>
                <p className="text-sm text-gray-700">After stating your rate, be quiet. Don't fill the silence with more justifications or lower offers. Let the client respond first.</p>
              </div>

              <div className="border border-green-200 rounded-lg p-4 bg-green-50">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Get Everything in Writing
                </h4>
                <p className="text-sm text-gray-700">Verbal agreements lead to disputes. Confirm agreed rates, deliverables, timeline, and payment terms in a signed contract or detailed proposal.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl text-gray-900 mb-4">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed">
              Rate negotiation is a skill that improves with practice. The key is to be confident, know your value, prepare alternatives to price-cutting, and be willing to walk away from bad deals. Remember: clients who respect your expertise and deliver results aren't looking for the cheapest option—they're looking for the best option. Your job is to clearly articulate why that's you, and at what rate that's possible.
            </p>
          </section>
        </div>
      </article>

      {/* <AdPlaceholder type="rectangle" className="mb-8" /> */}
      <Footer />
    </div>
  );
}
