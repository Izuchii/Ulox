import { type ClassValue, clsx } from 'clsx';

// Simple className utility - we'll use a basic implementation
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}