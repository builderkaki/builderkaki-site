const audiences = [
  {
    icon: '🏗️',
    title: 'Contractors & Subcontractors',
    desc: 'Find jobs, benchmark rates, understand your contractual rights, and connect with verified suppliers. Stop leaving money on the table.',
    tags: [{ label: 'Job Board', href: '#features' }, { label: 'Contract Guides', href: '#features' }, { label: 'Payment Rights', href: '#features' }],
    color: 'from-orange-50 to-amber-50',
    border: 'border-orange-200',
    iconBg: 'bg-orange-100',
    cta: '#join',
  },
  {
    icon: '⚙️',
    title: 'Engineers',
    desc: 'Access technical resources, discuss façade systems, share load calculations, and collaborate on complex projects with industry peers.',
    tags: [{ label: 'Technical Library', href: '#community' }, { label: 'System Discussions', href: '#community' }, { label: 'CPD Points', href: '#features' }],
    color: 'from-blue-50 to-indigo-50',
    border: 'border-blue-200',
    iconBg: 'bg-blue-100',
    cta: '#join',
  },
  {
    icon: '📐',
    title: 'Architects',
    desc: 'Discover the latest façade systems, connect with specialist contractors, and explore new materials and finishes for your next project.',
    tags: [{ label: 'Product Showcase', href: '#launches' }, { label: 'Contractor Network', href: '#community' }, { label: 'New Materials', href: '#launches' }],
    color: 'from-violet-50 to-purple-50',
    border: 'border-violet-200',
    iconBg: 'bg-violet-100',
    cta: '#join',
  },
  {
    icon: '📊',
    title: 'Consultants',
    desc: 'Advertise your services, post RFQs, find specialist sub-consultants, and grow your practice through a targeted professional network.',
    tags: [{ label: 'Service Listings', href: '#advertise' }, { label: 'RFQ Board', href: '#community' }, { label: 'Lead Generation', href: '#advertise' }],
    color: 'from-teal-50 to-emerald-50',
    border: 'border-teal-200',
    iconBg: 'bg-teal-100',
    cta: '#advertise',
  },
  {
    icon: '🏛️',
    title: 'Authorities & Bodies',
    desc: 'Publish regulatory updates, safety advisories, and BCA/MOM circulars directly to the professionals who need them most.',
    tags: [{ label: 'Regulatory Updates', href: '#launches' }, { label: 'Safety Circulars', href: '#launches' }, { label: 'Official Notices', href: '#launches' }],
    color: 'from-red-50 to-rose-50',
    border: 'border-red-200',
    iconBg: 'bg-red-100',
    cta: 'mailto:partners@builderkaki.sg',
  },
  {
    icon: '🔧',
    title: 'Suppliers & Manufacturers',
    desc: 'Advertise your façade products to decision-makers, launch new products to thousands, and build direct relationships with buyers.',
    tags: [{ label: 'Product Ads', href: '#advertise' }, { label: 'New Launches', href: '#launches' }, { label: 'Direct Enquiries', href: 'mailto:advertise@builderkaki.sg' }],
    color: 'from-yellow-50 to-orange-50',
    border: 'border-yellow-200',
    iconBg: 'bg-yellow-100',
    cta: '#advertise',
  },
]

export default function AudienceSection() {
  return (
    <section id="audience" className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-divider mx-auto mb-5" />
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">Built For Everyone</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy">
            One platform. Every façade professional.
          </h2>
          <p className="mt-4 text-brand-navy/60 text-lg max-w-2xl mx-auto">
            BuilderKaki connects the entire façade ecosystem — from site workers to C-suite, from suppliers to government bodies.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map(a => (
            <div
              key={a.title}
              className={`bg-gradient-to-br ${a.color} rounded-2xl p-6 border ${a.border} hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group flex flex-col`}
            >
              <div className={`${a.iconBg} w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                {a.icon}
              </div>
              <h3 className="font-bold text-brand-navy text-lg mb-2">{a.title}</h3>
              <p className="text-brand-navy/65 text-sm leading-relaxed mb-4 flex-1">{a.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {a.tags.map(tag => (
                  <a
                    key={tag.label}
                    href={tag.href}
                    className="text-xs font-medium bg-white/70 text-brand-navy/70 border border-white px-2.5 py-1 rounded-full hover:bg-white hover:text-brand-orange transition-colors"
                  >
                    {tag.label}
                  </a>
                ))}
              </div>
              <a
                href={a.cta}
                className="text-sm font-semibold text-brand-orange hover:underline mt-auto"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
