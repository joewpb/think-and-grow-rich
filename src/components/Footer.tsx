import { useState } from 'react'
import { Link } from 'react-router'
import { toast } from 'sonner'
import { formCopy } from '../data/resources-and-events'

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Principles', path: '/principles' },
  { label: 'Study Plan', path: '/study-plan' },
  { label: 'Community', path: '/community' },
  { label: 'About', path: '/about' },
]

const resources = [
  { label: 'Discussion Guides', path: '/study-plan' },
  { label: 'Worksheets', path: '/study-plan' },
  { label: 'Audio Summaries', path: '/study-plan' },
  { label: 'Recommended Reading', path: '/study-plan' },
]

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="w-full border-t border-slate-blue bg-midnight-blue">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        {/* CTA Block */}
        <div className="mb-16 text-center">
          <h3
            className="font-playfair text-[clamp(28px,3vw,48px)] font-semibold text-pure-white"
            style={{ color: '#FFFFFF' }}
          >
            Begin Your Transformation
          </h3>
          <p className="mx-auto mt-4 max-w-[560px] font-inter text-[18px] font-light text-off-white">
            Join The Hill Codex and start applying the 13 Principles today.
          </p>
          <Link
            to="/community"
            className="mt-8 inline-block rounded-[4px] bg-accent-gold px-8 py-4 font-inter text-[14px] font-medium uppercase tracking-[1px] text-deep-navy transition-all duration-300 hover:bg-[#C4A02E] hover:shadow-gold-glow"
          >
            Join The Hill Codex
          </Link>
        </div>

        {/* Three Columns */}
        <div className="grid gap-12 border-t border-slate-blue pt-12 md:grid-cols-3">
          {/* Quick Links */}
          <div>
            <h4 className="mb-6 font-inter text-[14px] font-medium uppercase tracking-[2px] text-accent-gold">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-inter text-[16px] text-off-white transition-colors duration-300 hover:text-accent-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-6 font-inter text-[14px] font-medium uppercase tracking-[2px] text-accent-gold">
              Resources
            </h4>
            <ul className="flex flex-col gap-3">
              {resources.map((resource) => (
                <li key={resource.label}>
                  <Link
                    to={resource.path}
                    className="font-inter text-[16px] text-off-white transition-colors duration-300 hover:text-accent-gold"
                  >
                    {resource.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-6 font-inter text-[14px] font-medium uppercase tracking-[2px] text-accent-gold">
              Connect
            </h4>
            <p className="mb-4 font-inter text-[16px] text-off-white">
              Subscribe to our newsletter
            </p>
            <form
              onSubmit={async (e) => {
                e.preventDefault()
                if (!email.trim()) {
                  toast.error(formCopy.subscribe.error)
                  return
                }
                try {
                  const fd = new FormData()
                  fd.append('email', email)
                  fd.append('_subject', 'Hill Codex Newsletter Subscribe')
                  fd.append('_captcha', 'false')
                  await fetch('https://formsubmit.co/ajax/thehillcodex@gmail.com', {
                    method: 'POST',
                    body: fd,
                  })
                  toast.success(formCopy.subscribe.success, { duration: 4000 })
                  setEmail('')
                } catch {
                  toast.error('Something went wrong. Try again or email us directly.')
                }
              }}
              className="flex gap-2"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 rounded-[4px] border border-slate-blue bg-deep-navy px-4 py-3 font-inter text-[14px] text-off-white placeholder-steel-blue outline-none transition-colors duration-300 focus:border-accent-gold"
              />
              <button
                type="submit"
                className="rounded-[4px] bg-accent-gold px-5 py-3 font-inter text-[14px] font-medium uppercase tracking-[1px] text-deep-navy transition-all duration-300 hover:bg-[#C4A02E] hover:shadow-gold-glow"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-12 border-t border-slate-blue pt-8 text-center">
          <p className="font-inter text-[14px] text-steel-blue">
            &copy; 2025 The Hill Codex — Think and Grow Rich. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
