import { useState } from 'react';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Contact() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(`${BACKEND_URL}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || 'Failed to submit');
      setStatus({ ok: true, message: 'Thanks! We\'ll be in touch within 24 hours.' });
      e.currentTarget.reset();
    } catch (err) {
      setStatus({ ok: false, message: err.message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="bg-slate-950 text-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="max-w-2xl">
          <h3 className="text-3xl sm:text-5xl font-bold tracking-tight">Contact us</h3>
          <p className="mt-3 text-white/70">Tell us about your product and what you want to achieve. We\'ll propose a plan and timeline.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/5 border border-white/10 p-6 rounded-2xl">
          <input name="name" required placeholder="Your name" className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <input name="email" type="email" required placeholder="Email" className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <input name="company" placeholder="Company" className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <input name="project_type" placeholder="Service category" className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <input name="budget" placeholder="Budget range" className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <input name="timeline" placeholder="Timeline" className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <textarea name="message" placeholder="Project brief" className="sm:col-span-2 px-4 py-3 rounded-xl bg-white/10 border border-white/10 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <div className="sm:col-span-2 flex items-center gap-4">
            <button disabled={loading} className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-900 font-semibold hover:bg-cyan-400 transition disabled:opacity-60">
              {loading ? 'Sending…' : 'Send message'}
            </button>
            {status && (
              <p className={status.ok ? 'text-cyan-300' : 'text-rose-300'}>{status.message}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
