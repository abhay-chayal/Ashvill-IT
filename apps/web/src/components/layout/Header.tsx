'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '@/components/brand/Logo';
import { Button } from '@/components/ui/Button';
import { navigation } from '@/config/company';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#F9F8F6] border-b border-surface-200 shadow-sm transition-all duration-300">
      <div className="w-full">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4" aria-label="Main navigation">
          
          <div className="flex items-center gap-6">
            <button
              className="rounded-lg p-2 text-surface-700 hover:bg-surface-200 transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
            <Logo variant="default" />
          </div>

          <div className="flex items-center gap-3">
            <Button href="/request-quote" variant="outline" size="sm" className="hidden lg:flex border-surface-300 text-surface-700 hover:bg-surface-50">
              Request Quote
            </Button>
            <Button href="/contact" size="sm" className="border-none" rightIcon={<ArrowRight className="h-4 w-4" />}>
              Contact Sales
            </Button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-0 z-50 bg-surface-900/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute left-0 top-0 h-full w-full max-w-md bg-[#F9F8F6] p-8 shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-12 flex items-center gap-6">
                <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="rounded-lg p-2 text-surface-700 hover:bg-surface-200 transition-colors">
                  <X className="h-6 w-6" />
                </button>
                <Logo />
              </div>
              
              <div className="flex-1 overflow-y-auto">
                <div className="flex flex-col gap-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-surface-400 mb-2">Main</div>
                  {navigation.main.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-lg px-4 py-3 text-lg font-light text-surface-800 hover:bg-white hover:shadow-sm transition-all"
                    >
                      {item.label}
                    </Link>
                  ))}
                  
                  <div className="text-xs font-bold uppercase tracking-wider text-surface-400 mt-8 mb-2">Services</div>
                  <div className="grid grid-cols-1 gap-1">
                    {navigation.services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setMobileOpen(false)}
                        className="rounded-lg px-4 py-3 text-base font-light text-surface-700 hover:bg-white hover:shadow-sm transition-all"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
