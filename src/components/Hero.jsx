import WaitlistForm from './WaitlistForm.jsx'
import FacadeAnimation from './FacadeAnimation.jsx'

export default function Hero({ submitted, setSubmitted }) {
  return (
    <section className="relative bg-hero-gradient min-h-screen flex items-center overflow-hidden">
      {/* Background geometric pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-5 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Singapore's #1 Façade Industry Platform
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
              The Complete Hub for<br />
              <span className="gradient-text">Façade Professionals</span>
            </h1>

            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-lg">
              Where contractors, engineers, architects, consultants, suppliers and authorities
              connect, collaborate, and grow — all under one roof.
            </p>

            {/* Audience pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['Contractors','Engineers','Architects','Consultants','Suppliers','Authorities'].map(tag => (
                <span key={tag} className="bg-white/10 border border-white/20 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {/* Waitlist form */}
            <div id="join">
              <WaitlistForm submitted={submitted} setSubmitted={setSubmitted} dark />
            </div>
          </div>

          {/* Right: Facade Animation */}
          <div className="hidden lg:block h-[500px] animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <FacadeAnimation />
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '2,800+', label: 'BCA-Registered Firms' },
            { value: 'S$34bn', label: 'SG Construction Output' },
            { value: '6', label: 'Audience Types' },
            { value: 'Free', label: 'To Join & Start' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-extrabold text-white">{stat.value}</p>
              <p className="text-white/50 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
