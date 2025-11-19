import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 sm:pt-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 ring-1 ring-cyan-400/20 text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            3D Ecommerce Content & Marketing Agency
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight leading-tight">
            We craft interactive 3D brand experiences that convert
          </h1>
          <p className="mt-6 text-cyan-100/80 text-lg">
            From photoreal product renders to immersive configurators and high-converting ad assets — we power your entire ecommerce content pipeline.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#services" className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-900 font-semibold hover:bg-cyan-400 transition">
              Explore services
            </a>
            <a href="#contact" className="px-6 py-3 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition ring-1 ring-white/15">
              Get a quote
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/30 to-slate-950" />
    </section>
  );
}
