import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const countUp = (
  el: HTMLElement,
  target: number,
  duration = 2000
) => {
  let current = 0;
  const stepTime = 16; // approx 60 fps
  const step = (target / duration) * stepTime;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    let displayValue: string;
    const v = Math.floor(current);
    if (target >= 1000000) {
      displayValue = (v / 1000000).toFixed(1) + 'M+';
    } else if (el.dataset.suffix === '%') {
      displayValue = v + '%';
    } else if (el.dataset.suffix === '+') {
      displayValue = v + '+';
    } else {
      displayValue = v.toString();
    }
    el.textContent = displayValue;
  }, stepTime);
};
