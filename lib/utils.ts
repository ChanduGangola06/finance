import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {  format,  subDays } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// export function convertAmountFromMiliunits(amount: number) {
//   return amount / 1000;
// };

// export function convertAmountToMiliunits(amount: number) {
//   return Math.round(amount * 1000);
// };

type Period = {
  from: string | Date | undefined;
  to: string | Date | undefined;
};

export function formatDateRange (period?: Period) {
  const defaultTo = new Date();
  const defaultFrom = subDays(defaultTo, 30);

  if (!period?.from) {
    return `${format(defaultFrom, "LLL dd")} - ${format(defaultTo, "LLL dd, y")}`;
  }

  if (period.to) {
    return `${format(period.from, "LLL dd")} - ${format(period.to, "LLL dd, y")}`;
  }

  return format(period.from, "LLL dd, y");
};
