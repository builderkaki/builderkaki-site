const discussions = [
  {
    avatar: 'RK',
    name: 'Raj Kumar',
    role: 'Façade Site Manager',
    time: '2h ago',
    topic: 'Technical',
    title: 'Spider fitting torque spec for structural glazing — anyone using Pilkington Planar?',
    replies: 14,
    likes: 28,
    color: 'bg-blue-500',
  },
  {
    avatar: 'LM',
    name: 'Lim Mei Ying',
    role: 'M&E Consultant',
    time: '5h ago',
    topic: 'Contract',
    title: 'Main-con is withholding 10% retention past 12 months — can I apply for adjudication?',
    replies: 22,
    likes: 41,
    color: 'bg-emerald-600',
  },
  {
    avatar: 'AT',
    name: 'Ahmad Taufik',
    role: 'Structural Engineer',
    time: '1d ago',
    topic: 'Regulation',
    title: 'BCA circular on CW facade wind load recalculation — who has reviewed the new SS CP83 changes?',
    replies: 9,
    likes: 33,
    color: 'bg-purple-600',
  },
  {
    avatar: 'SC',
    name: 'Sarah Chen',
    role: 'Project Architect',
    time: '2d ago',
    topic: 'Product',
    title: 'Looking for high-performance warm-edge spacer bars for DGU — any SG distributors?',
    replies: 17,
    likes: 19,
    color: 'bg-rose-500',
  },
]

const topicColors = {
  Technical: 'bg-blue-100 text-blue-700',
  Contract: 'bg-amber-100 text-amber-700',
  Regulation: 'bg-red-100 text-red-700',
  Product: 'bg-emerald-100 text-emerald-700',
}

export default function CommunitySection() {
  return (
    <section id="community" className="bg-brand-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left: pitch */}
          <div>
            <div className="section-divider mb-5" />
            <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">Community</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy leading-tight">
              The LinkedIn for façade — but actually useful.
            </h2>
            <p className="mt-5 text-brand-navy/65 text-lg leading-relaxed">
              Ask technical questions, share site photos, discuss contracts, warn others about bad payers,
              and build a reputation in the industry. No noise — only façade.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {[
                { icon: '💬', title: 'Focused discussions', desc: 'Technical, contract, regulatory and product threads — each in the right place.' },
                { icon: '🏅', title: 'Build your profile', desc: 'Get verified, earn Kaki Points, showcase your projects and certifications.' },
                { icon: '🔔', title: 'Smart notifications', desc: 'Follow topics that matter to you. Never miss a relevant update or discussion.' },
                { icon: '🌏', title: 'Grow regionally', desc: 'Phase 2 expands to Malaysia, Thailand and Philippines — same login, regional reach.' },
              ].map(item => (
                <div key={item.title} className="flex gap-4 items-start">
                  <span className="text-2xl mt-0.5">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-brand-navy">{item.title}</p>
                    <p className="text-brand-navy/60 text-sm mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: discussion preview */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold text-brand-navy/50 uppercase tracking-wider">Live discussions preview</p>
            {discussions.map(d => (
              <div key={d.title} className="bg-white rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="flex items-start gap-3 mb-3">
                  <div className={`${d.color} w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                    {d.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-brand-navy text-sm">{d.name}</span>
                      <span className="text-brand-navy/40 text-xs">·</span>
                      <span className="text-brand-navy/50 text-xs">{d.role}</span>
                      <span className="text-brand-navy/40 text-xs">·</span>
                      <span className="text-brand-navy/40 text-xs">{d.time}</span>
                    </div>
                  </div>
                  <span className={`shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full ${topicColors[d.topic]}`}>{d.topic}</span>
                </div>
                <p className="text-brand-navy font-medium text-sm leading-snug mb-3">{d.title}</p>
                <div className="flex items-center gap-4 text-xs text-brand-navy/50">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    {d.replies} replies
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    {d.likes} likes
                  </span>
                </div>
              </div>
            ))}
            <div className="text-center mt-2">
              <a href="#join" className="text-brand-orange font-semibold text-sm hover:underline">
                Join to see all discussions →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
