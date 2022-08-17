import { useState } from "react"
import Link from 'next/link'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-white p-4 md:p-6 lg:px-32 lg:py-8 flex justify-between items-center w-full shadow sticky top-0 z-50">
      <header>
        <Link href="/">
          <a>
            <picture>
              <source srcSet="https://media.nicholson-insurance.com/images/icons/nicholson-logo?w=480" media="(min-width: 1024px)" />
              <source srcSet="https://media.nicholson-insurance.com/images/icons/nicholson-logo?w=320" media="(min-width: 768px)" />
              <img 
                src="https://media.nicholson-insurance.com/images/icons/nicholson-logo?w=232" 
                alt="Nichlson logo" 
                width="116" 
                height="27"
                className="w-[117px] md:w-[160px] lg:w-60 h-auto"  
              />
            </picture>
          </a>
        </Link>
      </header>
      <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">
        <img src="/img/menu.svg" width="28" height="28" alt="Menu" className="md:w-10" />
      </button>
      <ul className={`absolute h-screen lg:h-auto top-0 left-0 w-4/5 z-50 lg:w-fit bg-white lg:bg-inherit p-4 py-[16.5px] md:p-[24px] md:py-[25.5px] flex-col lg:flex-row lg:gap-6 text-xl gap-2 ${menuOpen ? 'flex shadow' : 'hidden lg:static lg:flex '}`}>
        <li>
          <Link href="/">
            <a>
              <picture>
                <source srcSet="https://media.nicholson-insurance.com/images/icons/nicholson-logo?w=480" media="(min-width: 1024px)" />
                <source srcSet="https://media.nicholson-insurance.com/images/icons/nicholson-logo?w=320" media="(min-width: 768px)" />
                <img 
                  src="https://media.nicholson-insurance.com/images/icons/nicholson-logo?w=232" 
                  alt="Nichlson logo" 
                  width="116" 
                  height="27"
                  className="w-[117px] md:w-[160px] h-auto lg:hidden mb-4"  
                />
              </picture>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <details className="cursor-pointer list-none relative">
            <summary className="list-none">About</summary>
            <ul className="flex flex-col pl-4 p-2 gap-2 lg:absolute lg:top-24 lg:left-0 lg:w-36 lg:bg-white lg:border lg:border-slate-100 lg:shadow-lg lg:p-4 lg:rounded">
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/company-directory">Our Team</Link>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary className="list-none">Services</summary>
          </details>
        </li>
        <li>
          <details>
            <summary className="list-none">Resources</summary>
          </details>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/community">Community</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact</Link>
        </li>
        {/* <li className=""><br /></li> */}
        <li className="mt-4 md:mt-0">
          <Link href="/forms/free-quote">
            <a className="bg-nicholson-green-500 p-2.5 md:py-3.5 text-lg md:text-xl px-10 rounded-full shadow-sm">
              Get Quote
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
