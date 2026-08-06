"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import clsx from "clsx";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { navLinks, products } from "@/lib/data";
import { EASE_PREMIUM } from "@/lib/motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "bg-ink/75 backdrop-blur-xl border-b border-line-dark" : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between section-x py-3.5">
        <Link href="#top" className="shrink-0">
          <Logo tone="dark" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.label === "Produits" ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm text-slate-dark transition-colors hover:text-white"
                  aria-expanded={productsOpen}
                >
                  {link.label}
                  <ChevronDown
                    className={clsx("size-3.5 transition-transform duration-300", productsOpen && "rotate-180")}
                  />
                </button>
                <AnimatePresence>
                  {productsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.22, ease: EASE_PREMIUM }}
                      className="absolute left-1/2 top-full w-95 -translate-x-1/2 pt-3 bg-white"
                    >
                      <div className="glass-dark rounded-2xl p-2.5 shadow-2xl shadow-black/40">
                        {products.map((product) => (
                          <Link
                            key={product.slug}
                            href={product.link}
                            className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-gray-50"
                          >
                            <span
                              className={clsx(
                                "flex size-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br",
                                product.gradient
                              )}
                            >
                              <product.icon className="size-4.5 text-white" />
                            </span>
                            <span>
                              <span className="block text-sm font-medium text-black">{product.name}</span>
                              <span className="block text-xs text-slate-dark">{product.tagline}</span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-slate-dark transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="#commencer" size="md" icon={false}>
            Commencer gratuitement
          </Button>
        </div>

        <button
          className="flex size-10 items-center justify-center rounded-full text-white lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Ouvrir le menu"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: EASE_PREMIUM }}
            className="overflow-hidden border-t border-line-dark bg-ink/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-3 py-3 text-base text-slate-dark transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-3 border-t border-line-dark pt-5">
                <Button href="#commencer" size="md" icon={false} className="w-full">
                  Commencer gratuitement
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
