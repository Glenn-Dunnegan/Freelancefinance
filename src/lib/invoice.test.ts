import { describe, expect, it } from 'vitest';
import { calculateInvoiceSubtotal, calculateInvoiceTax, calculateInvoiceTotal } from './invoice';

describe('invoice math helpers', () => {
  it('calculates subtotal from line items', () => {
    const subtotal = calculateInvoiceSubtotal([
      { quantity: 2, rate: 100 },
      { quantity: 3, rate: 50 },
    ]);

    expect(subtotal).toBe(350);
  });

  it('calculates tax from subtotal and tax rate', () => {
    const tax = calculateInvoiceTax(350, 10);
    expect(tax).toBe(35);
  });

  it('calculates total from subtotal and tax', () => {
    const total = calculateInvoiceTotal(350, 35);
    expect(total).toBe(385);
  });
});
