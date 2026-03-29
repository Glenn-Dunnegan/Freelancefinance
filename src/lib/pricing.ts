export interface FreelancePricingInput {
  desiredSalary: number;
  workingDaysPerYear: number;
  hoursPerDay: number;
  businessExpenses: number;
  profitMargin: number;
  taxRate: number;
  billablePercentage: number;
}

export interface FreelancePricingResult {
  hourlyRate: number;
  dailyRate: number;
  weeklyRate: number;
  monthlyRate: number;
  totalHoursNeeded: number;
  billableHours: number;
}

export function calculateFreelancePricing(input: FreelancePricingInput): FreelancePricingResult {
  const incomeBeforeTax = input.desiredSalary / (1 - input.taxRate / 100);
  const incomeWithProfit = incomeBeforeTax * (1 + input.profitMargin / 100);
  const totalRevenueNeeded = incomeWithProfit + input.businessExpenses;
  const totalHoursAvailable = input.workingDaysPerYear * input.hoursPerDay;
  const billableHours = totalHoursAvailable * (input.billablePercentage / 100);

  const hourlyRate = totalRevenueNeeded / billableHours;
  const dailyRate = hourlyRate * input.hoursPerDay;
  const weeklyRate = dailyRate * 5;
  const monthlyRate = dailyRate * (input.workingDaysPerYear / 12);

  return {
    hourlyRate: Math.ceil(hourlyRate),
    dailyRate: Math.ceil(dailyRate),
    weeklyRate: Math.ceil(weeklyRate),
    monthlyRate: Math.ceil(monthlyRate),
    totalHoursNeeded: Math.round(totalHoursAvailable),
    billableHours: Math.round(billableHours),
  };
}
