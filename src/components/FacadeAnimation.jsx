const PANELS = [
  'panel-a','panel-b','panel-c','panel-d',
  'panel-e','panel-f','panel-g','panel-h',
  'panel-b','panel-c','panel-d','panel-e',
  'panel-f','panel-g','panel-h','panel-a',
  'panel-c','panel-d','panel-e','panel-f',
  'panel-g','panel-h','panel-a','panel-b',
]

const TINTS = [
  'from-blue-400/20 to-blue-600/10',
  'from-slate-300/15 to-blue-400/10',
  'from-blue-300/25 to-indigo-500/10',
  'from-cyan-300/20 to-blue-500/10',
  'from-indigo-400/15 to-blue-300/10',
  'from-sky-300/20 to-blue-400/15',
  'from-blue-500/20 to-cyan-300/10',
  'from-slate-400/15 to-indigo-400/10',
]

export default function FacadeAnimation() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl light-sweep" style={{ perspective: '800px' }}>
      {/* Building frame */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-navy-mid to-brand-navy">
        {/* Structural columns */}
        {[0, 1, 2, 3, 4, 5].map(i => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-[2px] bg-white/10"
            style={{ left: `${(i + 1) * (100 / 7)}%` }}
          />
        ))}
        {/* Structural rows */}
        {[0, 1, 2, 3, 4].map(i => (
          <div
            key={i}
            className="absolute left-0 right-0 h-[2px] bg-white/10"
            style={{ top: `${(i + 1) * (100 / 6)}%` }}
          />
        ))}

        {/* Glass panels grid */}
        <div className="absolute inset-[3px] grid gap-[3px]" style={{ gridTemplateColumns: 'repeat(6, 1fr)', gridTemplateRows: 'repeat(5, 1fr)' }}>
          {PANELS.slice(0, 30).map((cls, i) => (
            <div
              key={i}
              className={`facade-panel ${cls} bg-gradient-to-br ${TINTS[i % TINTS.length]} relative overflow-hidden`}
              style={{ borderRadius: '1px' }}
            >
              {/* Reflection line */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20" />
              <div className="absolute top-0 left-0 w-[1px] h-full bg-white/10" />
            </div>
          ))}
        </div>

        {/* Ground floor dark band */}
        <div className="absolute bottom-0 left-0 right-0 h-[10%] bg-brand-navy/80 border-t-2 border-white/10" />

        {/* Sky reflection at top */}
        <div className="absolute top-0 left-0 right-0 h-[15%] bg-gradient-to-b from-blue-900/40 to-transparent" />

        {/* Floating stats on building */}
        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 text-white animate-float" style={{ animationDelay: '0s' }}>
          <p className="text-xs font-medium text-white/70">Active Members</p>
          <p className="text-lg font-bold">2,800+</p>
        </div>
        <div className="absolute bottom-16 left-4 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 text-white animate-float" style={{ animationDelay: '1.5s' }}>
          <p className="text-xs font-medium text-white/70">Projects Listed</p>
          <p className="text-lg font-bold">140+</p>
        </div>
      </div>
    </div>
  )
}
