import { useState, useRef } from 'react';
import { FileText, Plus, Trash2, Download, Printer } from 'lucide-react';
import { AdPlaceholder } from './AdPlaceholder';

interface LineItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
}

export function InvoiceGenerator() {
  const [invoiceNumber, setInvoiceNumber] = useState('INV-001');
  const [invoiceDate, setInvoiceDate] = useState(new Date().toISOString().split('T')[0]);
  const [dueDate, setDueDate] = useState('');
  
  // Your details
  const [yourName, setYourName] = useState('');
  const [yourEmail, setYourEmail] = useState('');
  const [yourAddress, setYourAddress] = useState('');
  const [yourPhone, setYourPhone] = useState('');
  
  // Client details
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  
  // Line items
  const [lineItems, setLineItems] = useState<LineItem[]>([
    { id: '1', description: '', quantity: 1, rate: 0 }
  ]);
  
  const [taxRate, setTaxRate] = useState(0);
  const [notes, setNotes] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  
  const invoiceRef = useRef<HTMLDivElement>(null);

  const addLineItem = () => {
    setLineItems([
      ...lineItems,
      { id: Date.now().toString(), description: '', quantity: 1, rate: 0 }
    ]);
  };

  const removeLineItem = (id: string) => {
    if (lineItems.length > 1) {
      setLineItems(lineItems.filter(item => item.id !== id));
    }
  };

  const updateLineItem = (id: string, field: keyof LineItem, value: string | number) => {
    setLineItems(lineItems.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const calculateSubtotal = () => {
    return lineItems.reduce((sum, item) => sum + (item.quantity * item.rate), 0);
  };

  const calculateTax = () => {
    return calculateSubtotal() * (taxRate / 100);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // In a real implementation, you would generate a PDF here
    alert('In a production app, this would generate a PDF download. For now, please use the Print function and save as PDF.');
  };

  const handleGenerate = () => {
    setShowPreview(true);
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Top Banner Ad */}
      <AdPlaceholder type="leaderboard" className="mb-6" />

      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <FileText className="w-10 h-10 text-indigo-600" />
          <h1 className="text-4xl text-gray-900">Invoice Generator</h1>
        </div>
        <p className="text-gray-600">
          Create professional invoices for your freelance work
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 print:hidden">
        {/* Form Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Invoice Details */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl text-gray-900 mb-6">Invoice Details</h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Invoice Number
                </label>
                <input
                  type="text"
                  value={invoiceNumber}
                  onChange={(e) => setInvoiceNumber(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Invoice Date
                </label>
                <input
                  type="date"
                  value={invoiceDate}
                  onChange={(e) => setInvoiceDate(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Due Date
                </label>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                />
              </div>
            </div>
          </div>

          {/* Your Details */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl text-gray-900 mb-6">Your Details</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Your Name / Business Name
                </label>
                <input
                  type="text"
                  value={yourName}
                  onChange={(e) => setYourName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={yourEmail}
                  onChange={(e) => setYourEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  value={yourAddress}
                  onChange={(e) => setYourAddress(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={yourPhone}
                  onChange={(e) => setYourPhone(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                />
              </div>
            </div>
          </div>

          {/* Client Details */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl text-gray-900 mb-6">Bill To</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Client Name / Company
                </label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm text-gray-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  value={clientAddress}
                  onChange={(e) => setClientAddress(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                />
              </div>
            </div>
          </div>

          {/* Line Items */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl text-gray-900">Items / Services</h2>
              <button
                onClick={addLineItem}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Item
              </button>
            </div>

            <div className="space-y-4">
              {lineItems.map((item, index) => (
                <div key={item.id} className="grid md:grid-cols-12 gap-3 items-start">
                  <div className="md:col-span-5">
                    <label className="block text-xs text-gray-600 mb-1">
                      Description
                    </label>
                    <input
                      type="text"
                      value={item.description}
                      onChange={(e) => updateLineItem(item.id, 'description', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                      placeholder="Service or item description"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs text-gray-600 mb-1">
                      Quantity
                    </label>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateLineItem(item.id, 'quantity', Number(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                      min="1"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs text-gray-600 mb-1">
                      Rate ($)
                    </label>
                    <input
                      type="number"
                      value={item.rate}
                      onChange={(e) => updateLineItem(item.id, 'rate', Number(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                      min="0"
                      step="0.01"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs text-gray-600 mb-1">
                      Amount
                    </label>
                    <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900">
                      ${(item.quantity * item.rate).toFixed(2)}
                    </div>
                  </div>

                  <div className="md:col-span-1 flex items-end">
                    <button
                      onClick={() => removeLineItem(item.id)}
                      disabled={lineItems.length === 1}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="max-w-xs ml-auto space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="text-gray-900">${calculateSubtotal().toFixed(2)}</span>
                </div>

                <div className="flex items-center gap-4">
                  <label className="text-gray-600">Tax (%):</label>
                  <input
                    type="number"
                    value={taxRate}
                    onChange={(e) => setTaxRate(Number(e.target.value))}
                    className="w-20 px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                    min="0"
                    step="0.1"
                  />
                  <span className="text-gray-900">${calculateTax().toFixed(2)}</span>
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-gray-300">
                  <span className="text-lg text-gray-900">Total:</span>
                  <span className="text-2xl text-gray-900">${calculateTotal().toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl text-gray-900 mb-4">Notes / Payment Terms</h2>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none resize-none"
              rows={4}
              placeholder="Payment terms, bank details, or additional notes..."
            />
          </div>

          {/* Generate Button */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <button
              onClick={handleGenerate}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl text-lg"
            >
              <FileText className="w-5 h-5" />
              Generate Invoice
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <AdPlaceholder type="rectangle" />

          {/* Actions */}
          {showPreview && (
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-gray-900 mb-4">Actions</h3>
              <div className="space-y-3">
                <button
                  onClick={handlePrint}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  Print Invoice
                </button>
                <button
                  onClick={handleDownload}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
              </div>
            </div>
          )}

          <AdPlaceholder type="rectangle" />

          {/* Tips */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6">
            <h3 className="text-gray-900 mb-3">Invoice Tips</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Include clear payment terms and due dates</li>
              <li>• Specify your payment methods</li>
              <li>• Number invoices sequentially</li>
              <li>• Itemize your services clearly</li>
              <li>• Send invoices promptly after work completion</li>
              <li>• Follow up on overdue payments professionally</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Banner Ad */}
      <div className="print:hidden">
        <AdPlaceholder type="leaderboard" className="mt-8" />
      </div>

      {/* Invoice Preview */}
      {showPreview && (
        <div ref={invoiceRef} className="mt-8 print:hidden">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl text-gray-900">Invoice Preview</h2>
              <button
                onClick={() => setShowPreview(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                Close Preview
              </button>
            </div>
            <div className="border border-gray-200 rounded-lg">
              <InvoicePrintView
                invoiceNumber={invoiceNumber}
                invoiceDate={invoiceDate}
                dueDate={dueDate}
                yourName={yourName}
                yourEmail={yourEmail}
                yourAddress={yourAddress}
                yourPhone={yourPhone}
                clientName={clientName}
                clientEmail={clientEmail}
                clientAddress={clientAddress}
                lineItems={lineItems}
                subtotal={calculateSubtotal()}
                taxRate={taxRate}
                tax={calculateTax()}
                total={calculateTotal()}
                notes={notes}
              />
            </div>
          </div>
        </div>
      )}

      {/* Hidden Invoice Preview for Printing */}
      <div className="hidden print:block">
        <InvoicePrintView
          invoiceNumber={invoiceNumber}
          invoiceDate={invoiceDate}
          dueDate={dueDate}
          yourName={yourName}
          yourEmail={yourEmail}
          yourAddress={yourAddress}
          yourPhone={yourPhone}
          clientName={clientName}
          clientEmail={clientEmail}
          clientAddress={clientAddress}
          lineItems={lineItems}
          subtotal={calculateSubtotal()}
          taxRate={taxRate}
          tax={calculateTax()}
          total={calculateTotal()}
          notes={notes}
        />
      </div>
    </div>
  );
}

interface InvoicePrintViewProps {
  invoiceNumber: string;
  invoiceDate: string;
  dueDate: string;
  yourName: string;
  yourEmail: string;
  yourAddress: string;
  yourPhone: string;
  clientName: string;
  clientEmail: string;
  clientAddress: string;
  lineItems: LineItem[];
  subtotal: number;
  taxRate: number;
  tax: number;
  total: number;
  notes: string;
}

function InvoicePrintView(props: InvoicePrintViewProps) {
  return (
    <div className="p-12 bg-white">
      <div className="mb-8">
        <h1 className="text-4xl text-gray-900 mb-2">INVOICE</h1>
        <p className="text-gray-600">#{props.invoiceNumber}</p>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div>
          <p className="text-sm text-gray-600 mb-2">From:</p>
          <p className="text-gray-900">{props.yourName}</p>
          <p className="text-gray-700 text-sm">{props.yourEmail}</p>
          <p className="text-gray-700 text-sm">{props.yourAddress}</p>
          <p className="text-gray-700 text-sm">{props.yourPhone}</p>
        </div>

        <div>
          <p className="text-sm text-gray-600 mb-2">Bill To:</p>
          <p className="text-gray-900">{props.clientName}</p>
          <p className="text-gray-700 text-sm">{props.clientEmail}</p>
          <p className="text-gray-700 text-sm">{props.clientAddress}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div>
          <p className="text-sm text-gray-600">Invoice Date:</p>
          <p className="text-gray-900">{props.invoiceDate}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Due Date:</p>
          <p className="text-gray-900">{props.dueDate}</p>
        </div>
      </div>

      <table className="w-full mb-8">
        <thead>
          <tr className="border-b-2 border-gray-900">
            <th className="text-left py-3 text-gray-900">Description</th>
            <th className="text-right py-3 text-gray-900">Qty</th>
            <th className="text-right py-3 text-gray-900">Rate</th>
            <th className="text-right py-3 text-gray-900">Amount</th>
          </tr>
        </thead>
        <tbody>
          {props.lineItems.map((item) => (
            <tr key={item.id} className="border-b border-gray-200">
              <td className="py-3 text-gray-700">{item.description}</td>
              <td className="text-right py-3 text-gray-700">{item.quantity}</td>
              <td className="text-right py-3 text-gray-700">${item.rate.toFixed(2)}</td>
              <td className="text-right py-3 text-gray-700">${(item.quantity * item.rate).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end mb-8">
        <div className="w-64 space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal:</span>
            <span className="text-gray-900">${props.subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Tax ({props.taxRate}%):</span>
            <span className="text-gray-900">${props.tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between pt-2 border-t-2 border-gray-900">
            <span className="text-lg text-gray-900">Total:</span>
            <span className="text-xl text-gray-900">${props.total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {props.notes && (
        <div className="mt-8">
          <p className="text-sm text-gray-600 mb-2">Notes:</p>
          <p className="text-gray-700 whitespace-pre-wrap">{props.notes}</p>
        </div>
      )}
    </div>
  );
}