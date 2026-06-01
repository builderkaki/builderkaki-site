import { useState } from 'react'
import { Link } from 'react-router-dom'

const jobTypes = ['All', 'Full-time', 'Contract', 'Freelance', 'Part-time']
const jobCategories = ['All Roles', 'Site Management', 'Engineering', 'Architecture', 'Consulting', 'Supervision', 'Skilled Trade', 'Admin']

const jobs = [
  {
    id: 1, title: 'Façade Project Manager', company: 'Permasteelisa Singapore',
    type: 'Full-time', category: 'Site Management', location: 'Tanjong Pagar, Singapore',
    salary: 'S$8,000 – S$12,000/mo', posted: '2 days ago', urgent: true,
    tags: ['Curtain Wall', 'BIM', 'Main Contractor'],
    desc: 'Lead end-to-end façade packages for high-rise commercial projects in Singapore CBD. Minimum 8 years experience with unitised curtain wall systems required.',
  },
  {
    id: 2, title: 'Structural Glazing Supervisor', company: 'Beng Hui Glass Pte Ltd',
    type: 'Full-time', category: 'Supervision', location: 'Jurong East, Singapore',
    salary: 'S$4,500 – S$6,500/mo', posted: '3 days ago', urgent: false,
    tags: ['Structural Glazing', 'CSOC', 'Supervision'],
    desc: 'Supervise structural glazing installation on multiple residential and commercial projects. CSOC or equivalent certification required.',
  },
  {
    id: 3, title: 'Façade Engineer (Design)', company: 'Arup Singapore',
    type: 'Full-time', category: 'Engineering', location: 'Central, Singapore',
    salary: 'S$6,000 – S$9,500/mo', posted: '5 days ago', urgent: false,
    tags: ['FEA', 'Wind Engineering', 'Consulting'],
    desc: 'Perform structural and thermal analysis for complex façade systems. Experience with Rhino, Grasshopper and FEA software preferred.',
  },
  {
    id: 4, title: 'Aluminium Fabricator (Experienced)', company: 'Kim Tian Metal Works',
    type: 'Full-time', category: 'Skilled Trade', location: 'Bukit Merah, Singapore',
    salary: 'S$2,800 – S$4,200/mo', posted: '1 week ago', urgent: true,
    tags: ['Aluminium', 'CNC', 'Fabrication'],
    desc: 'Fabricate aluminium window and door frames using CNC machines. Experience with WICONA or Schüco extrusion systems preferred.',
  },
  {
    id: 5, title: 'Façade Consultant (Freelance)', company: 'Private Developer',
    type: 'Freelance', category: 'Consulting', location: 'Remote / Hybrid',
    salary: 'S$800 – S$1,200/day', posted: '1 week ago', urgent: false,
    tags: ['Specification', 'Peer Review', 'Freelance'],
    desc: 'Provide peer review and specification services for a 32-storey mixed development façade package. Estimated 3–4 months engagement.',
  },
  {
    id: 6, title: 'BIM Coordinator (Façade)', company: 'Woh Hup Construction',
    type: 'Contract', category: 'Engineering', location: 'Paya Lebar, Singapore',
    salary: 'S$5,500 – S$7,000/mo', posted: '1 week ago', urgent: false,
    tags: ['Revit', 'BIM', '3D Modelling'],
    desc: '12-month contract to coordinate façade BIM models for a new government project. Revit and Navisworks proficiency required.',
  },
  {
    id: 7, title: 'Façade Site Foreman', company: 'Sin Heng Long Contractor',
    type: 'Full-time', category: 'Site Management', location: 'Woodlands, Singapore',
    salary: 'S$3,500 – S$5,000/mo', posted: '2 weeks ago', urgent: false,
    tags: ['Site Supervision', 'Safety', 'HDB'],
    desc: 'Oversee daily façade installation works for HDB upgrading projects. Experience in precast and lightweight cladding installation required.',
  },
  {
    id: 8, title: 'Quantity Surveyor (Façade Specialist)', company: 'AECOM Singapore',
    type: 'Full-time', category: 'Consulting', location: 'Marina Bay, Singapore',
    salary: 'S$6,500 – S$9,000/mo', posted: '2 weeks ago', urgent: false,
    tags: ['QS', 'Cost Planning', 'Facade'],
    desc: 'Prepare façade cost plans, BOQs and tender documents for major infrastructure projects across Southeast Asia.',
  },
]

export default function JobBoardPage() {
  const [activeType, setActiveType] = useState('All')
  const [activeCategory, setActiveCategory] = useState('All Roles')
  const [search, setSearch] = useState('')

  const filtered = jobs.filter(j => {
    const matchType = activeType === 'All' || j.type === activeType
    const matchCat = activeCategory === 'All Roles' || j.category === activeCategory
    const matchSearch = !search || j.title.toLowerCase().includes(search.toLowerCase()) || j.company.toLowerCase().includes(search.toLowerCase())
    return matchType && matchCat && matchSearch
  })

  return (
    <div className="bg-brand-cream min-h-screen pt-16">
      {/* Header */}
      <div className="bg-hero-gradient text-white py-14 px-5">
        <div className="max-w-5xl mx-auto">
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-2">Opportunities</p>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Façade Job Board</h1>
          <p className="text-white/70 text-lg max-w-xl">
            Full-time roles, contracts, and freelance projects across Singapore's façade industry.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/60">
            <span>💼 {jobs.length} active listings</span>
            <span>🏢 Verified companies only</span>
            <span>📍 Singapore & regional</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 py-10">
        {/* Search + filters */}
        <div className="bg-white rounded-2xl shadow-card p-5 mb-6">
          <div className="flex flex-col md:flex-row gap-3 mb-4">
            <div className="flex-1 relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-navy/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search job title or company..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-orange"
              />
            </div>
            <Link to="/#join" className="bg-brand-orange hover:bg-brand-orange-hover text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors whitespace-nowrap text-center">
              + Post a Job (Free)
            </Link>
          </div>
          {/* Type filter */}
          <div className="flex flex-wrap gap-2">
            {jobTypes.map(t => (
              <button key={t} onClick={() => setActiveType(t)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${activeType === t ? 'bg-brand-navy text-white' : 'bg-gray-100 text-brand-navy/70 hover:bg-gray-200'}`}>
                {t}
              </button>
            ))}
            <div className="w-px bg-gray-200 mx-1" />
            {jobCategories.map(c => (
              <button key={c} onClick={() => setActiveCategory(c)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${activeCategory === c ? 'bg-brand-orange text-white' : 'bg-gray-100 text-brand-navy/70 hover:bg-gray-200'}`}>
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-brand-navy/50 mb-4">{filtered.length} jobs found</p>

        {/* Job listings */}
        <div className="flex flex-col gap-4">
          {filtered.map(job => (
            <div key={job.id} className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-200 p-6">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="bg-brand-blue-light w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0">🏢</div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold text-brand-navy text-lg leading-tight">{job.title}</h3>
                        {job.urgent && <span className="text-xs font-bold bg-red-100 text-red-600 px-2 py-0.5 rounded-full">Urgent</span>}
                      </div>
                      <p className="text-brand-navy/60 text-sm">{job.company}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 text-xs text-brand-navy/60 mb-3">
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1 font-semibold text-brand-navy">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {job.salary}
                    </span>
                    <span className="text-brand-navy/40">Posted {job.posted}</span>
                  </div>

                  <p className="text-sm text-brand-navy/65 leading-relaxed mb-3">{job.desc}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {job.tags.map(tag => (
                      <span key={tag} className="text-xs bg-brand-blue-light text-brand-blue font-medium px-2.5 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="flex md:flex-col gap-3 md:items-end shrink-0">
                  <Link to="/#join" className="bg-brand-orange hover:bg-brand-orange-hover text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors">
                    Apply Now
                  </Link>
                  <button className="border border-gray-200 text-brand-navy/60 hover:border-brand-orange hover:text-brand-orange font-medium px-4 py-2.5 rounded-xl text-sm transition-colors">
                    Save
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-brand-navy/40">
            <p className="text-xl font-bold mb-1">No jobs match your filters</p>
            <p className="text-sm">Try clearing filters or searching a different term</p>
          </div>
        )}

        {/* Post job CTA */}
        <div className="mt-10 bg-hero-gradient rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-extrabold mb-2">Hiring façade professionals?</h3>
          <p className="text-white/70 mb-5">Post your job to 2,800+ verified façade industry professionals. First 3 posts free.</p>
          <Link to="/#join" className="inline-block bg-brand-orange hover:bg-brand-orange-hover text-white font-bold px-8 py-3 rounded-xl transition-colors">
            Post a Job Free →
          </Link>
        </div>
      </div>
    </div>
  )
}
