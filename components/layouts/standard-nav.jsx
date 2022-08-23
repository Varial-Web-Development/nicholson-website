import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

export default function Nav() {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentMenu, setCurrentMenu] = useState('')
  const [scroll, setScroll] = useState(false)

  console.log(router)

  function NavLink({ children, ...props}) {
    return (
      <Link {...props}>
        <a className={`font-normal  ${router.asPath === props.href ? 'decoration-nicholson-green-500 underline underline-offset-4' : ''}`}>
          {children}
        </a>
      </Link>
    )
  }

  return (
    <nav className="bg-white p-4 md:p-6 lg:px-[6vw] lg:py-8 sticky top-0 z-50 flex justify-between items-center transition shadow">
      <header>
        <Link href="/">
          <a>
            <picture>
              <source srcSet="https://media.nicholson-insurance.com/images/icons/nicholson-original-logo?w=480" media="(min-width: 1024px)" />
              <source srcSet="https://media.nicholson-insurance.com/images/icons/nicholson-original-logo?w=384" media="(min-width: 768px)" />
              <img src="https://media.nicholson-insurance.com/images/icons/nicholson-original-logo?w=300" alt="" width={150} height={51} className="md:w-48 lg:w-56" />
            </picture>
          </a>
        </Link>
      </header>
      <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">
        <img src="/img/menu.svg" width="28" height="28" className="md:w-10" />
      </button>
      <ul 
        className={`
          ${menuOpen ? 'flex' : 'hidden lg:flex'} 
          absolute 
          p-4 
          md:p-6 
          top-0 
          left-0 
          bg-white 
          w-4/5 
          h-screen 
          flex-col
          gap-4 
          text-lg
          lg:text-[20px] 
          lg:static 
          lg:h-auto
          lg:flex-row
          lg:w-fit
        `}
      >
        <li className="lg:hidden mb-4">
          <Link href="/">
            <a>
              <picture>
                <source srcSet="https://media.nicholson-insurance.com/images/icons/nicholson-original-logo?w=480" media="(min-width: 1024px)" />
                <source srcSet="https://media.nicholson-insurance.com/images/icons/nicholson-original-logo?w=384" media="(min-width: 768px)" />
                <img src="https://media.nicholson-insurance.com/images/icons/nicholson-original-logo?w=300" alt="" width={150} height={51} className="md:w-48 lg:w-60" />
              </picture>
            </a>
          </Link>
        </li>
        <li>
          <NavLink href="/">
            Home
          </NavLink>
        </li>
        <li>
          <MenuButton 
            name="About" 
            currentMenu={currentMenu} 
            setCurrentMenu={setCurrentMenu} 
            scroll={scroll} 
            className={(router.asPath === '/about-us' || router.asPath.startsWith('/company-directory')) && 'decoration-nicholson-green-500 underline underline-offset-4'}
          >
            <NavLink href="/about-us">
              About us
            </NavLink>
            <NavLink href="/company-directory">
              Our Team
            </NavLink>
          </MenuButton>
        </li>
        <li>
          <MenuButton name="Services" currentMenu={currentMenu} setCurrentMenu={setCurrentMenu}>
            <NavLink href="/">Personal Insurance</NavLink>
            <NavLink href="/">Commercial Insurance</NavLink>
            <NavLink href="/">Life & Health Insurance</NavLink>
          </MenuButton>
        </li>
        <li>
          <MenuButton name="Resources" currentMenu={currentMenu} setCurrentMenu={setCurrentMenu}>
            <NavLink href="/policy-changes">Policy Request</NavLink>
            <NavLink href="/insurance-companies">Companies</NavLink>
            <NavLink href="/insurance-claims">Claims Support</NavLink>
          </MenuButton>
        </li>
        <li>
          <NavLink href="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink href="/community">Community</NavLink>
        </li>
        <li>
          <NavLink href="/contact-us">
            Contact
          </NavLink>
        </li>
        <li className="mt-2 lg:mt-0">
          <Link href="/forms/free-quote">
            <a className="bg-nicholson-green-500 p-2.5 md:py-3 text-lg md:text-lg px-10 rounded-full shadow-sm whitespace-nowrap">
              Get quote
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

function MenuButton({ name, currentMenu, setCurrentMenu, children, anchor = 'left', className = '', scroll }) {
  return (
    <div className="flex flex-col gap-4 items-start relative">
      <button onClick={() => setCurrentMenu(currentMenu === name ? '' : name)} className={`font-normal ${className}`}>{name}</button>
      <div
        className={`
          ${currentMenu === name ? 'block' : 'hidden'}
          pl-4
          flex
          flex-col
          gap-4
          lg:bg-white       
          lg:absolute
          lg:top-28
          lg:p-4
          lg:whitespace-nowrap
          lg:rounded-md
          lg:shadow-md
          ${anchor === 'left' ? 'lg:left-0' : 'lg:right-0'}
          
        `}
      >
        {children}
      </div>
    </div>
  )
}
