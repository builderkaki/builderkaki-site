import { useState } from 'react'
import { Link } from 'react-router-dom'

const categories = [
  { id: 'all', label: 'All Topics', count: 142 },
  { id: 'technical', label: 'Technical', count: 58 },
  { id: 'contract', label: 'Contracts & Payment', count: 34 },
  { id: 'regulatory', label: 'Regulatory & BCA', count: 21 },
  { id: 'products', label: 'Products & Systems', count: 19 },
  { id: 'safety', label: 'Safety & MCS', count: 10 },
]

const threads = [
  {
    id: 1, category: 'technical', tag: 'Technical', tagColor: 'bg-blue-100 text-blue-700',
    title: 'Spider fitting torque spec for structural glazing — Pilkington Planar vs Dorma Gartner?',
    preview: 'We are speccing a spider fitting system for a 40-storey residential tower in Tanjong Pagar. The architect wants exposed stainless fittings. Has anyone compared the torque specs between Pilkington Planar and Dorma Gartner in high wind zones?',
    author: 'Raj Kumar', role: 'Façade Site Manager', avatar: 'RK', avatarColor: 'bg-blue-500',
    replies: 14, likes: 28, views: 203, time: '2h ago', pinned: false,
  },
  {
    id: 2, category: 'contract', tag: 'Contract', tagColor: 'bg-amber-100 text-amber-700',
    title: 'Main-con withholding 10% retention past 12 months — can I apply for adjudication under SOP Act?',
    preview: 'My contract has a 5% retention clause, but the main-con has been holding 10% for 14 months now. They keep saying defects are not rectified but have never issued a formal defects list. My solicitor says I have a strong SOP Act claim. Anyone been through this?',
    author: 'Lim Mei Ying', role: 'M&E Consultant', avatar: 'LM', avatarColor: 'bg-emerald-600',
    replies: 22, likes: 41, views: 387, time: '5h ago', pinned: true,
  },
  {
    id: 3, category: 'regulatory', tag: 'Regulatory', tagColor: 'bg-red-100 text-red-700',
    title: 'BCA circular on CW façade wind load recalculation — has anyone reviewed the new SS CP83:2026 changes?',
    preview: 'The revised SS CP83:2026 has significant changes to wind load factors for sloped glazing and curtain walls above 100m. We are currently re-running our calculations for a project in Marina Bay. Anyone else affected?',
    author: 'Ahmad Taufik', role: 'Structural Engineer', avatar: 'AT', avatarColor: 'bg-purple-600',
    replies: 9, likes: 33, views: 156, time: '1d ago', pinned: false,
  },
  {
    id: 4, category: 'products', tag: 'Products', tagColor: 'bg-emerald-100 text-emerald-700',
    title: 'High-performance warm-edge spacer bars for DGU — any Singapore distributors for Swisspacer or TPS?',
    preview: 'We are switching to warm-edge spacer bars for all our DGU units to meet the new BCA Green Mark requirements. Swisspacer Ultimate is our preference but the lead time from Germany is 10 weeks. Does anyone have a local distributor contact?',
    author: 'Sarah Chen', role: 'Project Architect', avatar: 'SC', avatarColor: 'bg-rose-500',
    replies: 17, likes: 19, views: 241, time: '2d ago', pinned: false,
  },
  {
    id: 5, category: 'safety', tag: 'Safety', tagColor: 'bg-orange-100 text-orange-700',
    title: 'MCS cyclic inspection report format — BCA audited us and rejected the template. What format is acceptable?',
    preview: 'We submitted our MCS cyclic inspection reports using the consultant-provided template but BCA came back saying the format does not comply with the latest guidelines. Has anyone received an updated template or guidance from BCA directly?',
    author: 'Daniel Wong', role: 'QA/QC Engineer', avatar: 'DW', avatarColor: 'bg-teal-600',
    replies: 31, likes: 55, views: 612, time: '3d ago', pinned: false,
  },
  {
    id: 6, category: 'technical', tag: 'Technical', tagColor: 'bg-blue-100 text-blue-700',
    title: 'Fire-rated glass specification for escape staircase — 30min vs 60min rating with intumescent strip?',
    preview: 'We have a project with a fully glazed escape staircase enclosure. FSSD requires 30-minute fire rating but the architect wants to maintain clear vision panels. We are looking at fire-rated laminated glass with intumescent seals. What systems have been approved in Singapore?',
    author: 'Priya Nair', role: 'Fire Safety Engineer', avatar: 'PN', avatarColor: 'bg-indigo-500',
    replies: 8, likes: 24, views: 178, time: '4d ago', pinned: false,
  },
  {
    id: 7, category: 'contract', tag: 'Contract', tagColor: 'bg-amber-100 text-amber-700',
    title: 'Back-to-back payment clause — is this enforceable in Singapore after recent SOP Act amendments?',
    preview: 'Our sub-contract has a pay-when-paid clause tied to the main contract. After reading the 2022 SOP Act amendments I believe this clause may be void. However our main-con is insisting it is still enforceable. Has anyone tested this in adjudication?',
    author: 'Kevin Tan', role: 'Contracts Manager', avatar: 'KT', avatarColor: 'bg-cyan-600',
    replies: 26, likes: 48, views: 501, time: '5d ago', pinned: false,
  },
  {
    id: 8, category: 'products', tag: 'Products', tagColor: 'bg-emerald-100 text-emerald-700',
    title: 'PVDF vs polyester powder coat for aluminium cladding in marine environment — 5-year field data?',
    preview: 'We have a coastal project in Sentosa where salt spray is a major concern. The client is asking for a 20-year coating warranty. PVDF (Kynar 500) is the obvious choice but the cost premium is 40% over polyester. Any field data from Singapore coastal projects?',
    author: 'Marcus Loh', role: 'Materials Consultant', avatar: 'ML', avatarColor: 'bg-amber-600',
    replies: 12, likes: 31, views: 289, time: '6d ago', pinned: false,
  },
]

export default function DiscussionsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = threads.filter(t => {
    const matchCat = activeCategory === 'all' || t.category === activeCategory
    const matchSearch = !searchQuery || t.title.toLowerCase().includes(searchQuery.toLowerCase()) || t.preview.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div className="bg-brand-cream min-h-screen pt-16">
      {/* Page header */}
      <div className="bg-hero-gradient text-white py-14 px-5">
        <div className="max-w-5xl mx-auto">
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-2">Community</p>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Technical Discussions</h1>
          <p className="text-white/70 text-lg max-w-xl">
            Ask questions, share knowledge, and discuss everything façade — from spider fittings to SOP Act claims.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/60">
            <span>💬 142 active threads</span>
            <span>👥 2,800+ members</span>
            <span>🔥 58 this week</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 py-10">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar */}
          <aside className="lg:w-56 shrink-0">
            <div className="bg-white rounded-2xl shadow-card p-4 mb-4">
              <p className="text-xs font-bold text-brand-navy/50 uppercase tracking-wider mb-3">Categories</p>
              <div className="flex flex-col gap-1">
                {categories.map(c => (
                  <button
                    key={c.id}
                    onClick={() => setActiveCategory(c.id)}
                    className={`flex items-center justify-between text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeCategory === c.id
                        ? 'bg-brand-orange text-white font-semibold'
                        : 'text-brand-navy/70 hover:bg-gray-50'
                    }`}
                  >
                    <span>{c.label}</span>
                    <span className={`text-xs rounded-full px-2 py-0.5 ${activeCategory === c.id ? 'bg-white/20' : 'bg-gray-100'}`}>{c.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Join CTA */}
            <div className="bg-hero-gradient rounded-2xl p-5 text-white text-center">
              <p className="font-bold mb-2">Join to participate</p>
              <p className="text-white/70 text-xs mb-4">Post questions, reply to threads, and build your reputation.</p>
              <Link to="/#join" className="block bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-bold py-2.5 rounded-xl transition-colors">
                Join Free →
              </Link>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Search + Post button */}
            <div className="flex gap-3 mb-6">
              <div className="flex-1 relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-navy/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search discussions..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-brand-orange"
                />
              </div>
              <Link to="/#join" className="bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold px-5 py-3 rounded-xl text-sm transition-colors whitespace-nowrap">
                + Post Question
              </Link>
            </div>

            {/* Thread list */}
            <div className="flex flex-col gap-4">
              {filtered.map(t => (
                <div key={t.id} className={`bg-white rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all duration-200 cursor-pointer ${t.pinned ? 'border-l-4 border-brand-orange' : ''}`}>
                  {t.pinned && (
                    <div className="flex items-center gap-1.5 text-brand-orange text-xs font-bold mb-2">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"/></svg>
                      Pinned
                    </div>
                  )}
                  <div className="flex items-start gap-3">
                    <div className={`${t.avatarColor} w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                      {t.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="font-semibold text-brand-navy text-sm">{t.author}</span>
                        <span className="text-brand-navy/40 text-xs">·</span>
                        <span className="text-brand-navy/50 text-xs">{t.role}</span>
                        <span className="text-brand-navy/40 text-xs">·</span>
                        <span className="text-brand-navy/40 text-xs">{t.time}</span>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${t.tagColor}`}>{t.tag}</span>
                      </div>
                      <h3 className="font-bold text-brand-navy text-base leading-snug mb-2">{t.title}</h3>
                      <p className="text-brand-navy/60 text-sm leading-relaxed line-clamp-2">{t.preview}</p>
                      <div className="flex items-center gap-5 mt-3 text-xs text-brand-navy/50">
                        <span className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          {t.replies} replies
                        </span>
                        <span className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          {t.likes} likes
                        </span>
                        <span className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          {t.views} views
                        </span>
                        <Link to="/#join" className="ml-auto text-brand-orange font-semibold hover:underline">Reply →</Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-12 text-brand-navy/40">
                <p className="text-lg font-semibold">No discussions found</p>
                <p className="text-sm mt-1">Try a different search or category</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
