import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import type { Metadata } from "next"
import type React from "react"
import "./globals.css"


export const metadata: Metadata = {
  title: "Igreja Viva em Células",
  description: "Uma igreja viva, conectada em células, transformando vidas através do amor de Cristo.",
  generator: 'jssolucoeseservicos.com.br'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased min-h-screen flex flex-col ">
        <Header />
        <main className="flex-1 items-center">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
