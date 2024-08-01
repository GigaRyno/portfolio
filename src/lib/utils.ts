import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getRandomItem(array: string[]): string {
  let randomColor = Math.floor(Math.random() * array.length);
  return array[randomColor];
}
