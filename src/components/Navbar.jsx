import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()

  const navItems = [
    { name: 'Home', href: '/' },
    {
      name: 'Key Informations',
      href: '/key-informations',
      submenu: [
        { name: 'Dates of Importance', href: '/key-informations#dates' },
        { name: 'Committees', href: '/key-informations#committees' },
        { name: 'Conference Speakers', href: '/key-informations#speakers' },
        { name: 'Paper Publication', href: '/key-informations#publication' },
      ],
    },
    { name: 'Topics', href: '/topics' },
    { name: 'Program', href: '/program' },
    {
      name: 'Authors Guidelines',
      href: '/authors-guidelines',
      submenu: [
        { name: 'Abstract Submission', href: '/authors-guidelines#abstract' },
        { name: 'Paper Submission', href: '/authors-guidelines#paper' },
        { name: 'Registration Fees', href: '/authors-guidelines#fees' },
      ],
    },
    { name: 'GIP2026', href: '/gip2026' },
    { name: 'Venue', href: '/venue' },
  ]

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/'
    return location.pathname.startsWith(href.split('#')[0])
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">J</span>
            </div>
            <span className="font-display font-bold text-xl text-[#2c4360]">
              YGM-JOE<span className="text-green-500">6</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors flex items-center ${
                    isActive(item.href)
                      ? 'text-green-600'
                      : 'text-[#2c4360] hover:text-green-600'
                  }`}
                >
                  {item.name}
                  {item.submenu && (
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>
                {item.submenu && openDropdown === item.name && (
                  <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        to={subitem.href}
                        className="block px-4 py-2 text-sm text-[#2c4360] hover:bg-green-50 hover:text-green-600"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-[#2c4360] hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.href}
                  className={`block px-4 py-2 ${
                    isActive(item.href)
                      ? 'text-green-600 bg-green-50'
                      : 'text-[#2c4360] hover:bg-green-50 hover:text-green-600'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="pl-6">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        to={subitem.href}
                        className="block px-4 py-2 text-sm text-gray-500 hover:text-green-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
