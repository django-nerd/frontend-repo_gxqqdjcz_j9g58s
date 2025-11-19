export default function ServicesOverview() {
  const items = [
    {
      title: '3D Product Renders',
      desc: 'Photoreal stills and turntables for PDPs, marketplaces, and ads. Lighting, materials, and variants included.',
      highlights: ['Photoreal materials', 'Colorways & variants', 'Marketplace-ready'],
    },
    {
      title: 'Interactive Viewers',
      desc: 'WebGL/3D viewers and configurators that let customers explore products from every angle.',
      highlights: ['Orbit/zoom controls', 'Hotspots & annotations', 'Configurator options'],
    },
    {
      title: 'Video Ads & Motion',
      desc: 'Short-form motion spots for paid social and awareness. 3D animation, sound design, and captions.',
      highlights: ['Hook-first editing', 'On-brand motion', 'Platform-optimized'],
    },
    {
      title: 'CGI Lifestyle Scenes',
      desc: 'Fully CG environments to showcase products in context without physical shoots.',
      highlights: ['Global lighting', 'Procedural sets', 'Fast iteration'],
    },
  ];

  return (
    <section id="services" className="relative bg-slate-950 text-white py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_0%,rgba(34,211,238,0.15),transparent_50%),radial-gradient(600px_circle_at_80%_0%,rgba(168,85,247,0.15),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <header className="max-w-3xl">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Services at a glance</h2>
          <p className="mt-4 text-cyan-100/80">End-to-end content production designed for ecommerce growth.</p>
        </header>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((card) => (
            <div key={card.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-cyan-400/30 transition">
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm text-white/70">{card.desc}</p>
              <ul className="mt-4 space-y-1 text-sm text-cyan-200/90">
                {card.highlights.map((h) => (
                  <li key={h} className="flex gap-2 items-center">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
