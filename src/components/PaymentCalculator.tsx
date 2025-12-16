import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

// Simple payment calculator for financing estimates
// NOTE: These are example APRs per common term length. Adjust as needed.
const TERMS: { months: number; apr: number }[] = [
  { months: 3, apr: 0.0 },
  { months: 6, apr: 5.9 },
  { months: 12, apr: 6.9 },
  { months: 24, apr: 8.9 },
  { months: 36, apr: 9.9 },
  { months: 60, apr: 10.9 },
];

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function parseAmount(input: string): number {
  const normalized = input.replace(/[^0-9.]/g, "");
  const value = parseFloat(normalized);
  return isNaN(value) ? 0 : value;
}

function computeMonthlyPayment(principal: number, aprPercent: number, months: number) {
  if (principal <= 0 || months <= 0) return { monthly: 0, interest: 0 };
  const r = aprPercent / 100 / 12; // monthly rate
  if (r === 0) {
    const monthly = principal / months;
    return { monthly, interest: 0 };
  }
  const monthly = (principal * r) / (1 - Math.pow(1 + r, -months));
  const totalPaid = monthly * months;
  const interest = totalPaid - principal;
  return { monthly, interest };
}

export default function PaymentCalculator() {
  const [amountInput, setAmountInput] = useState("");
  const [calculatedFor, setCalculatedFor] = useState<number | null>(null);

  const rows = useMemo(() => {
    if (!calculatedFor || calculatedFor <= 0) return [] as Array<{
      months: number;
      apr: number;
      monthly: number;
      interest: number;
    }>;
    return TERMS.map(({ months, apr }) => {
      const { monthly, interest } = computeMonthlyPayment(calculatedFor, apr, months);
      return { months, apr, monthly, interest };
    });
  }, [calculatedFor]);

  const onCalculate = () => {
    const val = parseAmount(amountInput);
    setCalculatedFor(val > 0 ? Math.round(val * 100) / 100 : 0);
  };

  return (
    <section aria-label="Finance calculator" className="space-y-6">
        <div className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 justify-items-center items-start mx-auto max-w-4xl">
            <div className="max-w-xs">
              <label className="block text-sm font-medium mb-2" htmlFor="purchase-amount">
                Enter purchase amount:
              </label>
              <Input
                id="purchase-amount"
                value={amountInput}
                onChange={(e) => setAmountInput(e.target.value)}
                placeholder="$"
                inputMode="decimal"
                aria-label="Purchase amount"
              />
              <Button className="mt-4" variant="hero" onClick={onCalculate}>
                Calculate
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                Estimates only. Actual APR and terms subject to approval. No penalties, late fees, or compounding interest.
              </p>
            </div>

            <Card className="p-4 md:p-6">
              <h3 className="text-lg font-semibold tracking-tight">Why financing can be a great fit</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Get the fence done right the first time without deferring quality.</li>
                <li>Predictable monthly payments that fit your budget.</li>
                <li>No penalties, late fees, or compounding interest.</li>
                <li>Start sooner—protect pets, security, and privacy now.</li>
                <li>Pay off early anytime.</li>
              </ul>
              <p className="mt-3 text-sm text-muted-foreground">
                Learn more on our
                <Link href="/financing" className="text-primary underline">
                  Financing
                </Link>
                page.
              </p>
            </Card>
          </div>

          <Card className="w-full p-4 md:p-6">
            <div className="mb-4">
              <p className="text-sm font-medium text-muted-foreground">
                {calculatedFor && calculatedFor > 0
                  ? `Estimates for ${currency.format(calculatedFor)}`
                  : "Enter an amount and select Calculate to view estimates"}
              </p>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="whitespace-nowrap text-xs sm:text-sm">
                      <span className="sm:hidden">Term</span>
                      <span className="hidden sm:inline">Term length</span>
                    </TableHead>
                    <TableHead className="text-xs sm:text-sm">APR</TableHead>
                    <TableHead className="text-right text-xs sm:text-sm">
                      <span className="sm:hidden">Monthly</span>
                      <span className="hidden sm:inline">Monthly payment</span>
                    </TableHead>
                    <TableHead className="text-right text-xs sm:text-sm">
                      <span className="sm:hidden">Interest</span>
                      <span className="hidden sm:inline">Total interest</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rows.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center text-muted-foreground text-xs sm:text-sm">
                        No estimates to show
                      </TableCell>
                    </TableRow>
                  ) : (
                    rows.map((r) => (
                      <TableRow key={r.months}>
                        <TableCell className="font-medium text-xs sm:text-sm">
                          {r.months} <span className="sm:hidden">mo</span><span className="hidden sm:inline">months</span>
                        </TableCell>
                        <TableCell className="text-xs sm:text-sm">{r.apr.toFixed(1)}%</TableCell>
                        <TableCell className="text-right text-xs sm:text-sm">{currency.format(r.monthly)}</TableCell>
                        <TableCell className="text-right text-xs sm:text-sm">{currency.format(r.interest)}</TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </Card>
        </div>
    </section>
  );
}
