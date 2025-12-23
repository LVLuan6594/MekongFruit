import type React from "react"
import type { Metadata } from "next"
import { Be_Vietnam_Pro, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { AuthProvider } from "@/lib/auth-context"
import "./globals.css"

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-be-vietnam",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "CTY TNHH Trái Cây Mekong - Trái Cây Sấy Chất Lượng Cao",
  description:
    "Công ty TNHH Trái Cây Mekong chuyên sản xuất và cung cấp các sản phẩm trái cây sấy dẻo, sấy giòn chất lượng cao từ vùng đồng bằng sông Cửu Long.",
  generator: "v0.app",
  keywords: ["trái cây sấy", "trái cây sấy dẻo", "trái cây sấy giòn", "mekong", "đồng bằng sông cửu long"],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`${beVietnamPro.variable} ${playfairDisplay.variable} font-sans antialiased`}>
        <AuthProvider>{children}</AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
