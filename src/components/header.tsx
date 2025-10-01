import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between w-full">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl pl-2">
          <Image src="/assets/images/logos/ivc/loco_horizontal.svg" width={200} height={100} alt="Igreja Viva em Células" />
          {/* <Church className="h-6 w-6 text-primary" />
          <span className="text-primary">Igreja Viva em Células</span> */}
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/igreja" className="text-sm font-medium transition-colors hover:text-primary">
            A Igreja
          </Link>
          <Link href="/cultos" className="text-sm font-medium transition-colors hover:text-primary">
            Cultos
          </Link>
          <Link href="/celulas" className="text-sm font-medium transition-colors hover:text-primary">
            Células
          </Link>
          <Link href="/dogao-do-pastor" className="text-sm font-medium transition-colors hover:text-primary">
            Dogão do Pastor
          </Link>
        </nav>

        <button className="md:hidden">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}
