import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Warung Sederhana Bu Cempluk | Makanan Enak Harga Terjangkau",
  description:
    "Warung Sederhana Bu Cempluk - Menyajikan Nasi Goreng, Mie Goreng, Magelangan, Soto, Seblak dan berbagai minuman dengan harga terjangkau. Buka setiap hari kecuali Jumat.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`${poppins.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
