export interface InvoiceLineItem {
  quantity: number;
  rate: number;
}

export function calculateInvoiceSubtotal(lineItems: InvoiceLineItem[]): number {
  return lineItems.reduce((sum, item) => sum + item.quantity * item.rate, 0);
}

export function calculateInvoiceTax(subtotal: number, taxRate: number): number {
  return subtotal * (taxRate / 100);
}

export function calculateInvoiceTotal(subtotal: number, taxAmount: number): number {
  return subtotal + taxAmount;
}
