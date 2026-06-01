const problems = [
  {
    icon: '📄',
    title: 'Contracts written to trap you',
    body: 'Main-cons stack the terms in their favour. Back-to-back clauses, "pay when paid" traps, and vague variation wording leave you carrying all the risk.',
  },
  {
    icon: '💸',
    title: 'Paid late — or not at all',
    body: '72% of Singapore subcontractors face late payment. Average Days Sales Outstanding is 65 days. Your workers still need paying on Friday.',
  },
  {
    icon: '🤷',
    title: 'No one teaches you this',
    body: 'You learned the trade on site, not in a classroom. Nobody explains the SOP Act, what a valid payment claim looks like, or when you can suspend work.',
  },
]

export default function ProblemSection() {
  return (
    <section className="bg-[#FFF8F3] px-5 py-16 md:py-20">
      <div className="max-w-2xl mx-auto">
        <p className="text-[#E8630A] font-semibold text-sm uppercase tracking-widest mb-3">The Problem</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A2E] leading-tight text-balance">
          The system is stacked against subcontractors.
        </h2>
        <p className="mt-4 text-[#1A1A2E]/60 text-lg">
          If you've been in the trade more than a year, you already know this. Here's why it keeps happening.
        </p>

        <div className="mt-10 flex flex-col gap-5">
          {problems.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl p-6 border border-[#1A1A2E]/8 shadow-sm flex gap-5"
            >
              <span className="text-3xl mt-0.5 shrink-0">{p.icon}</span>
              <div>
                <h3 className="font-bold text-[#1A1A2E] text-lg">{p.title}</h3>
                <p className="mt-1.5 text-[#1A1A2E]/65 leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stat callout */}
        <div className="mt-8 bg-[#E8630A] rounded-2xl p-6 text-white">
          <p className="text-4xl font-extrabold">S$15,000</p>
          <p className="mt-1 text-white/85">average fine per safety incident — and most subs don't even know the rules they're supposed to follow.</p>
        </div>
      </div>
    </section>
  )
}
