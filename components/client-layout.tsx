"use client"

import type React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { LayoutDashboard, Users, Settings, LogOut } from "lucide-react"
import { usePathname } from "next/navigation"

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState("en")
  const [theme, setTheme] = useState("dark")
  const pathname = usePathname()

  useEffect(() => {
    // Apply theme class to document
    if (theme === "light") {
      document.documentElement.classList.add("light")
    } else {
      document.documentElement.classList.remove("light")
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

  const handleLogout = () => {
    // Logout logic here
  }

  return (
    <>
      <Navigation locale={locale} onLocaleChange={setLocale} onThemeToggle={toggleTheme} theme={theme}>
        <nav className="flex flex-col gap-2">
          <Button variant={pathname === "/admin" ? "secondary" : "ghost"} className="justify-start" asChild>
            <Link href="/admin">
              <LayoutDashboard className="size-5" />
              Dashboard
            </Link>
          </Button>
          <Button variant={pathname === "/admin/users" ? "secondary" : "ghost"} className="justify-start" asChild>
            <Link href="/admin/users">
              <Users className="size-5" />
              Users
            </Link>
          </Button>
          <Button variant={pathname === "/admin/settings" ? "secondary" : "ghost"} className="justify-start" asChild>
            <Link href="/admin/settings">
              <Settings className="size-5" />
              Settings
            </Link>
          </Button>
        </nav>

        <Button
          variant="ghost"
          className="justify-start mt-auto text-destructive hover:text-destructive hover:bg-destructive/10"
          onClick={handleLogout}
        >
          <LogOut className="size-5" />
          Logout
        </Button>
      </Navigation>
      <main className="pt-16">{children}</main>
      <Footer locale={locale} />
    </>
  )
}
