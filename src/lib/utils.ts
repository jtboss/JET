import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Scrolls smoothly to the element with the given ID
 * @param elementId - The ID of the element to scroll to (without the # prefix)
 * @param offset - Optional vertical offset in pixels (default: 0)
 */
export function smoothScrollTo(elementId: string, offset: number = 0): void {
  // If not in browser environment, do nothing
  if (typeof window === 'undefined') return;
  
  // Remove # if it was included
  const targetId = elementId.startsWith('#') ? elementId.substring(1) : elementId;
  const targetElement = document.getElementById(targetId);
  
  if (targetElement) {
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    
    // Update URL without reloading
    if (window.history && window.history.pushState) {
      window.history.pushState(null, '', `#${targetId}`);
    }
  }
}
