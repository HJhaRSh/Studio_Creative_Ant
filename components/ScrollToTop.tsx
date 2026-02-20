'use client';

import { useEffect } from 'react';

export function ScrollToTop() {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
    // Also handle hash navigation
    if (window.location.hash) {
      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return null;
}
