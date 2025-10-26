"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  locale?: string
  onLocaleChange?: (locale: string) => void
  onThemeToggle?: () => void
  theme?: string
}

export function Navigation({ locale = "en", onLocaleChange, onThemeToggle, theme = "dark" }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: locale === "zh" ? "首页" : "Home" },
    { href: "/solutions", label: locale === "zh" ? "解决方案" : "Solutions" },
    { href: "/case-studies", label: locale === "zh" ? "案例研究" : "Case Studies" },
    { href: "/about", label: locale === "zh" ? "关于我们" : "About" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <img
                src={theme === "dark" ? "/logo-light.png" : "/logo-dark.png"}
                alt="Functions logo"
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="font-semibold text-lg">FUNCTIONS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={onThemeToggle} className="hidden sm:flex">
              {theme === "dark" ? "☀️" : "🌙"}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onLocaleChange?.(locale === "en" ? "zh" : "en")}
              className="hidden sm:flex"
            >
              {locale === "en" ? "中文" : "EN"}
            </Button>
            <Button size="sm" className="hidden sm:flex">
              {locale === "zh" ? "联系我们" : "Contact Us"}
            </Button>

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-2 pt-2">
                <Button variant="ghost" size="sm" onClick={onThemeToggle}>
                  {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
                </Button>
                <Button variant="ghost" size="sm" onClick={() => onLocaleChange?.(locale === "en" ? "zh" : "en")}>
                  {locale === "en" ? "中文" : "EN"}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
