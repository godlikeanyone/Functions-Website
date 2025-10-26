import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ClientLayout } from "@/components/client-layout"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Functions Ltd - Tech & Engineering Solutions</title>
        <meta name="description" content="Innovative technology and engineering solutions for modern enterprises" />
      </head>
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}

export const metadata = {
  title: "Functions Ltd - Tech & Engineering Solutions",
  description: "Innovative technology and engineering solutions for modern enterprises",
};