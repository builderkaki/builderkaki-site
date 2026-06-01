import WaitlistForm from './WaitlistForm.jsx'

export default function CtaBanner({ submitted, setSubmitted }) {
  return (
    <section id="join" className="bg-brand-cream py-20 md:py-28 border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-5 text-center">
        <div className="section-divider mx-auto mb-5" />
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy leading-tight mb-4">
          Join the waitlist — get the free{' '}
          <span className="gradient-text">Contract Red Flags</span> guide on launch
        </h2>
        <p className="text-brand-navy/60 text-lg mb-10 max-w-xl mx-auto">
          The top 10 contract clauses that cost Singapore façade subs the most money — and exactly what to do about each one.
        </p>

        <div className="max-w-lg mx-auto text-left">
          <WaitlistForm submitted={submitted} setSubmitted={setSubmitted} />
        </div>

        {/* Trust signals */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-brand-navy/50">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Free to join
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Singapore-focused content
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Built by 14yr façade veteran
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            No spam, ever
          </span>
        </div>
      </div>
    </section>
  )
}
