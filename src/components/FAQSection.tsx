import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
        aria-expanded={isOpen}
      >
        <h3 className="text-gray-900 pr-4">{question}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-indigo-600 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How do I calculate my freelance hourly rate?',
      answer: 'To calculate your freelance hourly rate, start with your desired annual salary, add your business expenses and desired profit margin, account for taxes, then divide by your billable hours. Our calculator does this automatically by considering your working days per year, hours per day, and the percentage of time that\'s actually billable (typically 60-80%).'
    },
    {
      question: 'What percentage of my time should be billable?',
      answer: 'Most freelancers find that only 60-80% of their working hours are billable. The remaining time goes to administrative tasks, marketing, sales calls, professional development, and other non-billable activities. New freelancers often start around 60% and can increase this as they establish better systems and workflows.'
    },
    {
      question: 'Should I charge hourly or daily rates?',
      answer: 'Both have advantages. Hourly rates are more flexible for smaller tasks and variable workloads, while daily rates can be better for longer projects and often feel more premium. Many successful freelancers use daily rates for project work and hourly rates for ongoing retainer clients or smaller tasks. Consider your industry standards and client preferences.'
    },
    {
      question: 'How much profit margin should I include?',
      answer: 'A healthy profit margin for freelancers is typically 15-30%. This provides a buffer for slow periods, allows you to invest in business growth, and gives you financial security beyond just covering your salary and expenses. Start with at least 20% and adjust based on your market and business goals.'
    },
    {
      question: 'What business expenses should I factor in?',
      answer: 'Common freelance business expenses include software subscriptions, equipment, website hosting, professional development, health insurance, retirement contributions, marketing costs, accounting services, coworking space or home office expenses, and professional liability insurance. Don\'t forget to include taxes, which vary by location but are often 25-35% for self-employed individuals.'
    },
    {
      question: 'How many working days per year should I use?',
      answer: 'A typical calculation is: 365 days - 104 weekend days - 10 holidays - 15 vacation days = 236 working days. However, account for sick days, slower periods, and client holidays. Most freelancers use 220-240 working days. Being conservative (220-230 days) gives you a buffer and more accurate rates.'
    },
    {
      question: 'Should my rates be different for different types of clients?',
      answer: 'While your base rate calculation should remain consistent, you can adjust your actual rates based on factors like project scope, client budget, long-term relationship potential, complexity, urgency, or prestige. Some freelancers offer slight discounts for retainer clients or nonprofits, while charging premium rates for rush projects or highly specialized work.'
    },
    {
      question: 'How often should I update my freelance rates?',
      answer: 'Review your rates at least annually, or whenever your costs, skills, or market conditions change significantly. Cost of living increases, new certifications, expanded expertise, and market demand all justify rate increases. Existing clients can be grandfathered at current rates for a period, while new clients get your updated rates.'
    }
  ];

  return (
    <section className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex items-center gap-2 mb-6">
        <HelpCircle className="w-6 h-6 text-indigo-600" />
        <h2 className="text-2xl text-gray-900">Frequently Asked Questions</h2>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
}
