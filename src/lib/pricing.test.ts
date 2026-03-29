import { describe, expect, it } from 'vitest';
import { calculateFreelancePricing } from './pricing';

describe('calculateFreelancePricing', () => {
  it('calculates expected rounded rates for common inputs', () => {
    const result = calculateFreelancePricing({
      desiredSalary: 75000,
      workingDaysPerYear: 230,
      hoursPerDay: 8,
      businessExpenses: 10000,
      profitMargin: 20,
      taxRate: 30,
      billablePercentage: 75,
    });

    expect(result).toEqual({
      hourlyRate: 101,
      dailyRate: 804,
      weeklyRate: 4017,
      monthlyRate: 15397,
      totalHoursNeeded: 1840,
      billableHours: 1380,
    });
  });

  it('returns Infinity for hourly-derived rates when billable hours are zero', () => {
    const result = calculateFreelancePricing({
      desiredSalary: 75000,
      workingDaysPerYear: 230,
      hoursPerDay: 8,
      businessExpenses: 10000,
      profitMargin: 20,
      taxRate: 30,
      billablePercentage: 0,
    });

    expect(result.hourlyRate).toBe(Infinity);
    expect(result.dailyRate).toBe(Infinity);
    expect(result.weeklyRate).toBe(Infinity);
    expect(result.monthlyRate).toBe(Infinity);
    expect(result.billableHours).toBe(0);
  });
});
