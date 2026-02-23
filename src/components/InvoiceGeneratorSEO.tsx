import { FileText, Download, Clock, CheckCircle } from 'lucide-react';

export function InvoiceGeneratorSEO() {
  return (
    <article className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl text-gray-900 mb-6">
        How to Use This Invoice Generator
      </h2>
      
      <div className="prose prose-gray max-w-none">
        <p className="text-gray-700 mb-6">
          Creating professional invoices is essential for freelancers and contractors who need to get paid on time. 
          Our free invoice generator makes it simple to create, customize, and download professional invoices in minutes. 
          No sign-up required, no watermarks, completely free.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-3">
              <FileText className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-gray-900 mb-2">Enter Your Details</h3>
                <p className="text-sm text-gray-600">
                  Add your business name, address, and contact information. Then fill in your client's details 
                  and their billing address. This information forms the header of your professional invoice.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-3">
              <Clock className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-gray-900 mb-2">Add Line Items</h3>
                <p className="text-sm text-gray-600">
                  List each service or product with its description, quantity, and rate. Our invoice generator 
                  automatically calculates totals, subtotals, taxes, and final amounts.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-gray-900 mb-2">Set Payment Terms</h3>
                <p className="text-sm text-gray-600">
                  Define invoice due dates, payment methods, and terms. Add a payment deadline to encourage timely 
                  payment from your clients. Include any late payment penalties if desired.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-3">
              <Download className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-gray-900 mb-2">Download as PDF</h3>
                <p className="text-sm text-gray-600">
                  Click the download button to save your invoice as a professional PDF file. Send it directly to 
                  your client or keep it for your records.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-xl text-gray-900 mb-4 mt-8">
          Why Professional Invoices Matter for Freelancers
        </h3>
        
        <p className="text-gray-700 mb-4">
          A professional invoice isn't just a request for payment—it's a reflection of your business. Here's why 
          it matters:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li><strong>Payment clarity:</strong> Clear invoices get paid faster. Clients know exactly what they owe and when.</li>
          <li><strong>Professional credibility:</strong> A well-formatted invoice makes your business look established and professional.</li>
          <li><strong>Legal protection:</strong> Invoices serve as proof of agreement between you and your client for accounting and dispute resolution.</li>
          <li><strong>Tax records:</strong> Professional invoices are essential for tax filing and bookkeeping.</li>
          <li><strong>Payment tracking:</strong> Numbered invoices help you track which payments you've sent and received.</li>
          <li><strong>Late payment prevention:</strong> Clear terms and due dates reduce payment delays.</li>
        </ul>

        <h3 className="text-xl text-gray-900 mb-4">
          What to Include in Your Freelance Invoices
        </h3>

        <p className="text-gray-700 mb-4">
          Our invoice generator includes all essential elements for professional freelance invoicing:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li><strong>Invoice number:</strong> A unique identifier for tracking and reference</li>
          <li><strong>Your business information:</strong> Name, address, phone, and email</li>
          <li><strong>Client information:</strong> Their name, address, and contact details</li>
          <li><strong>Invoice date:</strong> When the invoice was created</li>
          <li><strong>Due date:</strong> When payment is expected</li>
          <li><strong>Itemized services:</strong> Description of work, quantity, rate, and amount</li>
          <li><strong>Subtotal and taxes:</strong> Automatically calculated totals</li>
          <li><strong>Payment terms:</strong> How and where to send payment</li>
          <li><strong>Notes:</strong> Any additional information or special terms</li>
        </ul>

        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 my-6">
          <div className="flex gap-3">
            <CheckCircle className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-gray-900 mb-2">Pro Tip: Invoice Numbering</h4>
              <p className="text-sm text-gray-700">
                Keep your invoice numbers sequential and consistent. Start with 001 or 1001 and increment by one 
                for each invoice. This helps with organization, makes it easier to spot missing invoices, and looks 
                more professional to clients. Consider including a year prefix like "2025-001" to organize by year.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-xl text-gray-900 mb-4">
          Tips for Getting Paid Faster
        </h3>

        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li><strong>Send invoices promptly:</strong> Don't wait—send invoices on the same day you complete the work</li>
          <li><strong>Make payment easy:</strong> Offer multiple payment methods (credit card, bank transfer, PayPal)</li>
          <li><strong>Set clear due dates:</strong> Net 15 or Net 30 are standard; be consistent with all clients</li>
          <li><strong>Include bank details:</strong> Make it easy for clients to pay by including your banking information</li>
          <li><strong>Add late payment terms:</strong> Consider mentioning interest on overdue invoices to encourage timely payment</li>
          <li><strong>Follow up:</strong> Send a friendly reminder a few days before the due date</li>
          <li><strong>Keep copies:</strong> Archive all invoices for accounting and tax purposes</li>
        </ul>

        <p className="text-gray-700 mt-8 p-4 bg-blue-50 rounded-lg">
          Our invoice generator is completely free and works right in your browser. No installation, no sign-ups, 
          no hidden fees. Create as many professional invoices as you need, download them as PDFs, and focus on 
          growing your freelance business.
        </p>
      </div>
    </article>
  );
}
