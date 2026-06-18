import { useState } from 'react'
import { Link, useLocation } from 'react-router'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Principles', path: '/principles' },
  { label: 'Study Plan', path: '/study-plan' },
  { label: 'Community', path: '/community' },
  { label: 'About', path: '/about' },
]

export default function Navbar() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: 'rgba(2, 12, 27, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="font-inter text-[14px] font-medium uppercase tracking-[2px] text-accent-gold"
        >
          THE HILL CODEX
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="font-inter text-[14px] font-normal uppercase tracking-[1.5px] transition-colors duration-300"
              style={{
                color:
                  location.pathname === link.path
                    ? 'var(--accent-gold)'
                    : 'var(--off-white)',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="flex flex-col gap-[5px] md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block h-[2px] w-6 bg-accent-gold transition-transform duration-300"
            style={{
              transform: mobileOpen ? 'rotate(45deg) translateY(7px)' : 'none',
            }}
          />
          <span
            className="block h-[2px] w-6 bg-accent-gold transition-opacity duration-300"
            style={{ opacity: mobileOpen ? 0 : 1 }}
          />
          <span
            className="block h-[2px] w-6 bg-accent-gold transition-transform duration-300"
            style={{
              transform: mobileOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="absolute left-0 right-0 top-full border-t border-slate-blue md:hidden"
          style={{
            backgroundColor: 'rgba(2, 12, 27, 0.95)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <div className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className="font-inter text-[14px] font-normal uppercase tracking-[1.5px] transition-colors duration-300"
                style={{
                  color:
                    location.pathname === link.path
                      ? 'var(--accent-gold)'
                      : 'var(--off-white)',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
