export default function ServiceCategories() {
  const categories = [
    {
      name: 'Ecommerce Essentials',
      items: ['PDP renders', '360° spins', 'Variant packs', 'AR-ready assets'],
    },
    {
      name: 'Launch & Growth',
      items: ['Hero videos', 'Paid social ads', 'UGC + CGI hybrids', 'Landing visuals'],
    },
    {
      name: 'Experience',
      items: ['3D viewers', 'Configurators', 'Interactive hotspots', 'Story microsites'],
    },
    {
      name: 'Studio',
      items: ['Lookdev', 'Material library', 'Scene kits', 'Reusable pipelines'],
    },
  ];

  return (
    <section className="bg-slate-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <div className="lg:w-1/3">
            <h3 className="text-2xl sm:text-4xl font-bold">Service categories</h3>
            <p className="mt-3 text-white/70">Pick a lane or mix-and-match — we tailor deliverables to your growth goals.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
            {categories.map((c) => (
              <div key={c.name} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
                <h4 className="text-lg font-semibold">{c.name}</h4>
                <ul className="mt-3 space-y-2 text-sm text-white/80">
                  {c.items.map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
