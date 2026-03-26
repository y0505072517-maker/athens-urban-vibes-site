'use client';

import { useEffect, useRef } from 'react';
import { trackScrollDepth, trackTimeOnPage } from '@/lib/gtag';
import { usePathname } from 'next/navigation';

export function useScrollTracking() {
  const milestones = useRef<Set<number>>(new Set());
  useEffect(() => {
    milestones.current = new Set();
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      [25, 50, 75, 100].forEach((checkpoint) => {
        if (scrollPercent >= checkpoint && !milestones.current.has(checkpoint)) {
          milestones.current.add(checkpoint);
          trackScrollDepth(checkpoint);
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}

export function useTimeTracking() {
  const pathname = usePathname();
  const reported = useRef<Set<number>>(new Set());
  useEffect(() => {
    reported.current = new Set();
    const pageName = pathname === '/' ? 'Home' : pathname.replace('/', '').replace(/-/g, ' ');
    const timers = [30, 60, 120, 300].map((seconds) =>
      setTimeout(() => {
        if (!reported.current.has(seconds)) {
          reported.current.add(seconds);
          trackTimeOnPage(seconds, pageName);
        }
      }, seconds * 1000)
    );
    return () => timers.forEach(clearTimeout);
  }, [pathname]);
}

export function useAnalytics() {
  useScrollTracking();
  useTimeTracking();
}
