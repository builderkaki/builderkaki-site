const footerLinks = {
  Platform: [
    { label: 'Job Board', href: '#features' },
    { label: 'Technical Hub', href: '#community' },
    { label: 'Contract Guides', href: '#features' },
    { label: 'New Launches', href: '#launches' },
    { label: 'Micro-Learning', href: '#features' },
  ],
  Community: [
    { label: 'Contractors', href: '#audience' },
    { label: 'Engineers', href: '#audience' },
    { label: 'Architects', href: '#audience' },
    { label: 'Consultants', href: '#audience' },
    { label: 'Suppliers', href: '#audience' },
  ],
  Company: [
    { label: 'About Us', href: '#join' },
    { label: 'Advertise With Us', href: '#advertise' },
    { label: 'Partner With Us', href: 'mailto:partners@builderkaki.sg' },
    { label: 'Contact Us', href: 'mailto:hello@builderkaki.sg' },
    { label: 'Privacy Policy', href: '#join' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-6xl mx-auto px-5 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div>
            <a href="#" className="flex items-center gap-1.5 mb-4">
              <span className="text-brand-orange font-extrabold text-xl">Builder</span>
              <span className="font-extrabold text-xl">Kaki</span>
              <span className="ml-1 text-[10px] font-bold bg-brand-orange text-white rounded-full px-2 py-0.5 uppercase tracking-widest">SG</span>
            </a>
            <p className="text-white/55 text-sm leading-relaxed mb-5">
              Singapore's education-first platform for the façade industry. Built by the trade, for the trade.
            </p>
            <p className="text-white/40 text-xs italic mb-5">"Built by the trade, for the trade."</p>

            {/* Social links */}
            <div className="flex gap-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/builderkaki"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow us on LinkedIn"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#0A66C2] transition-colors flex items-center justify-center"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/6500000000?text=Hi%20BuilderKaki%2C%20I%20want%20to%20know%20more!"
                target="_blank"
                rel="noopener noreferrer"
                title="Chat with us on WhatsApp"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#25D366] transition-colors flex items-center justify-center"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p className="font-semibold text-sm uppercase tracking-wider text-white/60 mb-4">{section}</p>
              <ul className="flex flex-col gap-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/50 text-sm hover:text-white transition-colors"
                      {...(link.href.startsWith('mailto') ? {} : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/35 text-sm">© {new Date().getFullYear()} BuilderKaki.sg Pte Ltd. All rights reserved.</p>
          <p className="text-white/35 text-sm">
            Experienced contractor or developer?{' '}
            <a href="mailto:founder@builderkaki.sg" className="text-brand-orange hover:underline">Get in touch.</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
