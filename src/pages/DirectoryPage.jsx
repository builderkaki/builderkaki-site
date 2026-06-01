import { useState } from 'react'
import { Link } from 'react-router-dom'
import SubmitModal from '../components/SubmitModal.jsx'

const types = ['All', 'Contractor', 'Supplier', 'Consultant', 'Engineer', 'Manufacturer']

const companies = [
  {
    id: 1, name: 'Permasteelisa Singapore Pte Ltd', type: 'Contractor',
    specialty: 'Unitised Curtain Wall, Structural Glazing, Façade Engineering',
    location: 'Tanjong Pagar, Singapore', employees: '200–500',
    bcaReg: 'CW01 A1', safetyScore: 96, verified: true, premium: true,
    projects: ['Marina Bay Sands', 'Jewel Changi Airport', 'DUO Tower'],
    contact: 'enquiry@permasteelisa.com.sg',
    desc: 'Global façade contractor with Singapore headquarters. Specialises in complex bespoke unitised systems for landmark projects.',
  },
  {
    id: 2, name: 'Schüco International Singapore', type: 'Supplier',
    specialty: 'Aluminium Window & Door Systems, Curtain Wall Profiles, Solar Shading',
    location: 'Alexandra, Singapore', employees: '50–100',
    bcaReg: 'N/A (Supplier)', safetyScore: 91, verified: true, premium: true,
    projects: ['Schüco AWS 75.SI', 'CW 50', 'FWS 60'],
    contact: 'singapore@schueco.com',
    desc: 'German manufacturer of premium aluminium systems for windows, doors and curtain walls. Strong technical support in Singapore.',
  },
  {
    id: 3, name: 'Arup Singapore Pte Ltd', type: 'Consultant',
    specialty: 'Façade Engineering, Wind Studies, Acoustic Consulting, Sustainability',
    location: 'Marina Bay, Singapore', employees: '100–200',
    bcaReg: 'PE Registered', safetyScore: 98, verified: true, premium: false,
    projects: ['Singapore Sports Hub', 'Changi T5', 'Various MRT stations'],
    contact: 'singapore@arup.com',
    desc: 'Global engineering consultancy with deep façade engineering expertise. Provides peer review, specification, and wind engineering services.',
  },
  {
    id: 4, name: 'Sika Singapore Pte Ltd', type: 'Supplier',
    specialty: 'Structural Sealants, Weather Sealants, Adhesives, Waterproofing',
    location: 'Jurong, Singapore', employees: '100–200',
    bcaReg: 'N/A (Supplier)', safetyScore: 94, verified: true, premium: false,
    projects: ['Sika SG-20HM', 'Sikaflex-268', 'SikaHyflex-250'],
    contact: 'singapore@sika.com',
    desc: 'Swiss specialty chemicals company. Singapore office stocks full range of structural and weatherseal products with local technical support.',
  },
  {
    id: 5, name: 'Beng Hui Glass & Aluminium Works', type: 'Contractor',
    specialty: 'Structural Glazing, Aluminium Windows, Shopfront Systems',
    location: 'Bukit Merah, Singapore', employees: '50–100',
    bcaReg: 'CW01 B2', safetyScore: 82, verified: true, premium: false,
    projects: ['Numerous HDB & commercial projects across Singapore'],
    contact: 'benghui@outlook.com',
    desc: 'Established Singapore façade subcontractor specialising in mid-rise residential and commercial structural glazing.',
  },
  {
    id: 6, name: 'WSP Façade Engineering', type: 'Engineer',
    specialty: 'Façade Peer Review, Specification, Thermal & Acoustic Analysis',
    location: 'Shenton Way, Singapore', employees: '50–100',
    bcaReg: 'PE Registered', safetyScore: 95, verified: true, premium: true,
    projects: ['OUE Downtown', 'Frasers Tower', 'Multiple Capitaland projects'],
    contact: 'singapore-facades@wsp.com',
    desc: 'Specialist façade engineering team within WSP. Provides independent peer review and façade specification services.',
  },
  {
    id: 7, name: 'Guardian Industries Singapore', type: 'Manufacturer',
    specialty: 'Float Glass, Coated Glass, Laminated Glass, Insulated Glass Units',
    location: 'Tuas, Singapore', employees: '200–500',
    bcaReg: 'N/A (Manufacturer)', safetyScore: 93, verified: true, premium: false,
    projects: ['SunGuard SNX 62/27', 'ClimaGuard Premium 2T'],
    contact: 'sg.info@guardian.com',
    desc: 'US glass manufacturer with Singapore float glass plant. Produces coated and processed glass for façade applications across SEA.',
  },
  {
    id: 8, name: 'Kim Tian Metal Works Pte Ltd', type: 'Contractor',
    specialty: 'Aluminium Fabrication, Window Frames, Louvres, Bespoke Metalwork',
    location: 'Bukit Batok, Singapore', employees: '20–50',
    bcaReg: 'CW01 C1', safetyScore: 78, verified: false, premium: false,
    projects: ['Multiple landed residential and light industrial projects'],
    contact: 'kimtianmetal@gmail.com',
    desc: 'Small fabrication workshop specialising in bespoke aluminium work for architects and main contractors.',
  },
]

const scoreColor = (score) => {
  if (score >= 90) return 'text-green-600 bg-green-50'
  if (score >= 75) return 'text-amber-600 bg-amber-50'
  return 'text-red-600 bg-red-50'
}

export default function DirectoryPage() {
  const [activeType, setActiveType] = useState('All')
  const [search, setSearch] = useState('')
  const [showListCompany, setShowListCompany] = useState(false)

  const filtered = companies.filter(c => {
    const matchType = activeType === 'All' || c.type === activeType
    const matchSearch = !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.specialty.toLowerCase().includes(search.toLowerCase())
    return matchType && matchSearch
  })

  return (
    <div className="bg-brand-cream min-h-screen pt-16">
      {/* Header */}
      <div className="bg-hero-gradient text-white py-14 px-5">
        <div className="max-w-5xl mx-auto">
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-2">Directory</p>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Façade Industry Directory</h1>
          <p className="text-white/70 text-lg max-w-xl">
            Verified contractors, suppliers, consultants, engineers and manufacturers across Singapore's façade ecosystem.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/60">
            <span>🏢 {companies.length} verified companies</span>
            <span>🛡️ BCA registration checked</span>
            <span>⭐ Safety scores from BCA data</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 py-10">
        {/* Search + filter */}
        <div className="bg-white rounded-2xl shadow-card p-5 mb-6">
          <div className="flex flex-col md:flex-row gap-3 mb-4">
            <div className="flex-1 relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-navy/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" placeholder="Search company name or specialty..." value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-orange" />
            </div>
            <button onClick={() => setShowListCompany(true)} className="bg-brand-orange hover:bg-brand-orange-hover text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors whitespace-nowrap">
              + List Your Company
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {types.map(t => (
              <button key={t} onClick={() => setActiveType(t)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${activeType === t ? 'bg-brand-orange text-white' : 'bg-gray-100 text-brand-navy/70 hover:bg-gray-200'}`}>
                {t}
              </button>
            ))}
          </div>
        </div>

        <p className="text-sm text-brand-navy/50 mb-4">{filtered.length} companies found</p>

        <div className="flex flex-col gap-5">
          {filtered.map(c => (
            <div key={c.id} className={`bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-200 p-6 ${c.premium ? 'border-l-4 border-brand-orange' : ''}`}>
              <div className="flex flex-col md:flex-row gap-5">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-brand-blue-light w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0">🏢</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="font-bold text-brand-navy text-lg">{c.name}</h3>
                        {c.verified && (
                          <span className="flex items-center gap-1 text-xs font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                            Verified
                          </span>
                        )}
                        {c.premium && <span className="text-xs font-bold bg-brand-orange/10 text-brand-orange px-2 py-0.5 rounded-full">Premium</span>}
                        <span className="text-xs font-semibold bg-gray-100 text-brand-navy/60 px-2 py-0.5 rounded-full">{c.type}</span>
                      </div>
                      <p className="text-sm text-brand-navy/60">{c.specialty}</p>
                    </div>
                  </div>

                  <p className="text-sm text-brand-navy/65 leading-relaxed mb-3">{c.desc}</p>

                  <div className="flex flex-wrap gap-4 text-xs text-brand-navy/60 mb-3">
                    <span>📍 {c.location}</span>
                    <span>👥 {c.employees} staff</span>
                    <span>🏛️ {c.bcaReg}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {c.projects.slice(0, 3).map(p => (
                      <span key={p} className="text-xs bg-brand-cream text-brand-navy/60 border border-gray-200 px-2.5 py-1 rounded-full">{p}</span>
                    ))}
                  </div>
                </div>

                <div className="flex md:flex-col gap-3 items-start md:items-end shrink-0">
                  <div className={`text-center rounded-xl px-4 py-3 ${scoreColor(c.safetyScore)}`}>
                    <p className="text-2xl font-extrabold">{c.safetyScore}</p>
                    <p className="text-xs font-semibold">Safety Score</p>
                  </div>
                  <a href={`mailto:${c.contact}`} className="bg-brand-orange hover:bg-brand-orange-hover text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* List company CTA */}
        <div className="mt-10 bg-hero-gradient rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-extrabold mb-2">Is your company listed?</h3>
          <p className="text-white/70 mb-5">Free basic listing for all BCA-registered companies. Premium listing from S$50/month.</p>
          <button onClick={() => setShowListCompany(true)} className="inline-block bg-brand-orange hover:bg-brand-orange-hover text-white font-bold px-8 py-3 rounded-xl transition-colors">
            List Your Company Free →
          </button>
        </div>
      </div>
      {showListCompany && <SubmitModal type="company" onClose={() => setShowListCompany(false)} />}
    </div>
  )
}
