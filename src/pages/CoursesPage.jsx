import { useState } from 'react'
import { Link } from 'react-router-dom'

const levels = ['All', 'Beginner', 'Intermediate', 'Advanced']
const topics = ['All Topics', 'Contracts & Law', 'Safety & MCS', 'Technical Systems', 'BIM & Technology', 'Business & Finance']

const courses = [
  {
    id: 1, title: 'SOP Act Explained for Subcontractors',
    topic: 'Contracts & Law', level: 'Beginner', duration: '3 hours',
    cpd: 3, price: 'S$150', seats: 42, rating: 4.8, reviews: 156,
    instructor: 'Satish Kumar', instructorRole: '14-year façade site veteran',
    emoji: '📋',
    desc: 'A complete plain-English walkthrough of Singapore\'s Security of Payment Act. Learn how to submit a valid payment claim, respond to a payment response, and take a dispute to adjudication without a lawyer.',
    modules: ['What the SOP Act covers and who it protects', 'How to write a valid payment claim', 'Understanding the payment response', 'What to do when payment is withheld', 'Adjudication — the process step by step', 'Real case studies from Singapore courts'],
    badge: 'Most Popular',
  },
  {
    id: 2, title: 'Reading & Negotiating a Sub-Contract',
    topic: 'Contracts & Law', level: 'Beginner', duration: '2.5 hours',
    cpd: 2, price: 'S$150', seats: 28, rating: 4.7, reviews: 89,
    instructor: 'Satish Kumar', instructorRole: '14-year façade site veteran',
    emoji: '📝',
    desc: 'Learn to spot the dangerous clauses in a sub-contract before you sign. Covers back-to-back clauses, pay-when-paid traps, defects liability, retention, and variation wording.',
    modules: ['Types of sub-contracts used in Singapore', 'The 10 most dangerous clauses', 'Back-to-back and pay-when-paid explained', 'Variation order procedures', 'Defects liability — what you actually owe', 'How to negotiate better terms'],
    badge: 'New',
  },
  {
    id: 3, title: 'MCS Cyclic Inspection — Complying with BCA Requirements',
    topic: 'Safety & MCS', level: 'Intermediate', duration: '4 hours',
    cpd: 4, price: 'S$150', seats: 15, rating: 4.9, reviews: 67,
    instructor: 'Dr. James Lim', instructorRole: 'Registered Façade Inspector',
    emoji: '🏗️',
    desc: 'Comprehensive guide to Singapore\'s Mandatory Cyclic Structural Inspection (MCS) for façades. Covers inspection methodology, report formats accepted by BCA, and how to manage defects.',
    modules: ['Overview of BCA MCS requirements', 'What triggers an MCS inspection', 'Inspection methodology for different façade types', 'BCA-compliant report format (updated 2026)', 'Classifying and documenting defects', 'Managing rectification works'],
    badge: 'CPD Approved',
  },
  {
    id: 4, title: 'Curtain Wall Systems — Design Principles for Site Teams',
    topic: 'Technical Systems', level: 'Intermediate', duration: '5 hours',
    cpd: 5, price: 'S$150', seats: 31, rating: 4.6, reviews: 44,
    instructor: 'Eng. Priya Nair', instructorRole: 'Façade Engineer, PE Singapore',
    emoji: '🪟',
    desc: 'Bridge the gap between design intent and site execution for unitised and stick curtain wall systems. Covers movement joints, sealant design, drainage, and common site mistakes.',
    modules: ['Unitised vs stick curtain wall — key differences', 'How unitised panels interlock and move', 'Sealant design — structural vs weather vs fire', 'Water management and drainage paths', 'Thermal bridging and condensation risk', 'Top 10 site installation mistakes'],
    badge: null,
  },
  {
    id: 5, title: 'Façade BIM — Revit for Façade Professionals',
    topic: 'BIM & Technology', level: 'Intermediate', duration: '6 hours',
    cpd: 6, price: 'S$150', seats: 19, rating: 4.5, reviews: 38,
    instructor: 'Marcus Loh', instructorRole: 'BIM Manager, 10yr façade experience',
    emoji: '💻',
    desc: 'Learn how to read, check and use Revit façade models on site. Covers coordination workflows, clash detection, shop drawing extraction, and handover documentation.',
    modules: ['Revit basics for non-BIM professionals', 'Reading a façade Revit model', 'Clash detection with Navisworks', 'Extracting shop drawings from Revit', 'COBie data for façade handover', 'BIM coordination workflow on a live project'],
    badge: null,
  },
  {
    id: 6, title: 'Running a Profitable Façade Sub-Con Business',
    topic: 'Business & Finance', level: 'Advanced', duration: '4 hours',
    cpd: 4, price: 'S$150', seats: 23, rating: 4.7, reviews: 52,
    instructor: 'Satish Kumar', instructorRole: '14-year façade site veteran',
    emoji: '💼',
    desc: 'Practical business guide for façade subcontractors. Covers pricing strategy, cash flow management, dealing with main-cons, and how to grow from S$1m to S$5m revenue.',
    modules: ['How to price a façade package profitably', 'Cash flow — the #1 killer of small subs', 'Managing working capital on multiple projects', 'Building a track record and winning repeat work', 'When and how to take on employees', 'Exit or scale — planning for growth'],
    badge: null,
  },
]

export default function CoursesPage() {
  const [activeLevel, setActiveLevel] = useState('All')
  const [activeTopic, setActiveTopic] = useState('All Topics')

  const filtered = courses.filter(c => {
    const matchLevel = activeLevel === 'All' || c.level === activeLevel
    const matchTopic = activeTopic === 'All Topics' || c.topic === activeTopic
    return matchLevel && matchTopic
  })

  return (
    <div className="bg-brand-cream min-h-screen pt-16">
      {/* Header */}
      <div className="bg-hero-gradient text-white py-14 px-5">
        <div className="max-w-5xl mx-auto">
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-2">Learn</p>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Façade Micro-Learning</h1>
          <p className="text-white/70 text-lg max-w-xl">
            Short, practical video courses built for busy façade professionals. Earn CPD points and completion certificates.
          </p>
          <div className="mt-6 flex flex-wrap gap-5 text-sm">
            {[['S$150', 'per course'], ['3–6 hrs', 'per course'], ['CPD Points', 'on completion'], ['Certificate', 'included']].map(([val, label]) => (
              <div key={label}>
                <p className="text-white font-bold">{val}</p>
                <p className="text-white/50">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 py-10">
        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-card p-5 mb-6">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="text-xs font-bold text-brand-navy/50 uppercase tracking-wider self-center mr-2">Level:</span>
            {levels.map(l => (
              <button key={l} onClick={() => setActiveLevel(l)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${activeLevel === l ? 'bg-brand-navy text-white' : 'bg-gray-100 text-brand-navy/70 hover:bg-gray-200'}`}>
                {l}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-bold text-brand-navy/50 uppercase tracking-wider self-center mr-2">Topic:</span>
            {topics.map(t => (
              <button key={t} onClick={() => setActiveTopic(t)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${activeTopic === t ? 'bg-brand-orange text-white' : 'bg-gray-100 text-brand-navy/70 hover:bg-gray-200'}`}>
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map(course => (
            <div key={course.id} className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-200 overflow-hidden flex flex-col">
              {/* Course header */}
              <div className="bg-gradient-to-br from-brand-navy to-brand-navy-mid p-6 text-white relative">
                {course.badge && (
                  <span className="absolute top-4 right-4 text-xs font-bold bg-brand-orange text-white px-2.5 py-1 rounded-full">{course.badge}</span>
                )}
                <div className="text-4xl mb-3">{course.emoji}</div>
                <h3 className="font-bold text-lg leading-snug mb-1">{course.title}</h3>
                <p className="text-white/60 text-sm">{course.topic} · {course.level}</p>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <p className="text-sm text-brand-navy/65 leading-relaxed mb-4">{course.desc}</p>

                {/* Modules preview */}
                <div className="mb-4">
                  <p className="text-xs font-bold text-brand-navy/50 uppercase tracking-wider mb-2">What you'll learn</p>
                  <ul className="flex flex-col gap-1.5">
                    {course.modules.slice(0, 3).map(m => (
                      <li key={m} className="flex items-start gap-2 text-xs text-brand-navy/65">
                        <svg className="w-3.5 h-3.5 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {m}
                      </li>
                    ))}
                    <li className="text-xs text-brand-navy/40 pl-5">+{course.modules.length - 3} more modules</li>
                  </ul>
                </div>

                {/* Instructor */}
                <div className="flex items-center gap-2 mb-4 text-sm">
                  <div className="w-7 h-7 rounded-full bg-brand-orange text-white flex items-center justify-center text-xs font-bold">
                    {course.instructor.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-brand-navy text-xs">{course.instructor}</p>
                    <p className="text-brand-navy/50 text-xs">{course.instructorRole}</p>
                  </div>
                </div>

                {/* Meta row */}
                <div className="flex items-center gap-3 text-xs text-brand-navy/50 mb-5">
                  <span>⏱️ {course.duration}</span>
                  <span>🎓 {course.cpd} CPD pts</span>
                  <span>⭐ {course.rating} ({course.reviews})</span>
                  <span>{course.seats} enrolled</span>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-extrabold text-brand-navy">{course.price}</span>
                  <Link to="/#join" className="bg-brand-orange hover:bg-brand-orange-hover text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors">
                    Enrol Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bundle CTA */}
        <div className="mt-10 bg-hero-gradient rounded-2xl p-8 text-white flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h3 className="text-2xl font-extrabold mb-2">Want to teach on BuilderKaki?</h3>
            <p className="text-white/70">Share your expertise with 2,800+ façade professionals. We handle the platform, you keep 70% of course revenue.</p>
          </div>
          <a href="mailto:courses@builderkaki.sg" className="shrink-0 bg-white text-brand-orange font-bold px-6 py-3 rounded-xl hover:bg-white/90 transition-colors text-sm">
            Become an Instructor →
          </a>
        </div>
      </div>
    </div>
  )
}
