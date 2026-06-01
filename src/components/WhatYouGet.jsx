const benefits = [
  {
    icon: '📋',
    title: 'Plain-English contract guides',
    body: "We decode the clauses that cost subcontractors money — variation orders, retention, defects liability, the SOP Act — in language you'd actually use on site.",
  },
  {
    icon: '🤝',
    title: 'A community of experienced contractors',
    body: "Ask questions, share wins, warn others about bad payers. Kaki means buddy — this is the network you needed when you started out.",
  },
  {
    icon: '🛠️',
    title: 'Tools to track variations and claims',
    body: "Early access to tools that help you document variations properly, submit compliant payment claims, and know exactly where your money is.",
  },
]

export default function WhatYouGet() {
  return (
    <section className="bg-[#252545] text-white px-5 py-16 md:py-20">
      <div className="max-w-2xl mx-auto">
        <p className="text-[#E8630A] font-semibold text-sm uppercase tracking-widest mb-3">What You'll Get</p>
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-balance">
          Everything a subcontractor needs — in one place.
        </h2>
        <p className="mt-4 text-white/60 text-lg">
          No jargon. No $500/month enterprise software. Built for the kaki on site.
        </p>

        <div className="mt-10 flex flex-col gap-5">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-white/8 rounded-2xl p-6 border border-white/10 flex gap-5"
            >
              <span className="text-3xl mt-0.5 shrink-0">{b.icon}</span>
              <div>
                <h3 className="font-bold text-white text-lg">{b.title}</h3>
                <p className="mt-1.5 text-white/65 leading-relaxed">{b.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust line */}
        <p className="mt-8 text-white/50 text-sm text-center">
          Free to start. No credit card. Built for Singapore's façade, M&E and structural subs.
        </p>
      </div>
    </section>
  )
}
