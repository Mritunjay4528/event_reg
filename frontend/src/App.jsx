import { useRef, useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const EMPTY_FORM = { name: '', roll_number: '', branch: '', email: '' };

export default function App() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [banner, setBanner] = useState({ show: false, text: '', type: 'error' });
  const bannerTimer = useRef(null);

  function showBanner(text, type) {
    clearTimeout(bannerTimer.current);
    setBanner({ show: true, text, type });
    bannerTimer.current = setTimeout(() => {
      setBanner((b) => ({ ...b, show: false }));
    }, 4000);
  }

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { name, roll_number, branch, email } = form;

    if (!name.trim() || !roll_number.trim() || !branch.trim() || !email.trim()) {
      showBanner('Please fill in all fields.', 'error');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(`${API_URL}/api/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        showBanner(data.message || 'Something went wrong.', 'error');
        return;
      }

      showBanner('You are registered! See you at the event.', 'success');
      setForm(EMPTY_FORM);
    } catch {
      showBanner('Could not reach the server. Please try again.', 'error');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <div className={`banner ${banner.show ? 'show' : ''} ${banner.type}`}>{banner.text}</div>

{/*
      <header>
        <div className="logo">E LABS</div>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Domain</a>
          <a href="#">Gallery</a>
          <a href="#" className="active">Register</a>
        </nav>
      </header>
*/}
      <main>
        <h1>Register for the Event</h1>
        <p className="sub">Fill in your details below to secure your spot.</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your full name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="roll_number">Roll Number</label>
            <input
              type="text"
              id="roll_number"
              name="roll_number"
              placeholder="e.g. 22051234"
              value={form.roll_number}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="branch">Branch</label>
            <input
              type="text"
              id="branch"
              name="branch"
              placeholder="e.g. CSE, ECE,"
              value={form.branch}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" disabled={submitting}>
            {submitting ? 'Submitting...' : 'REGISTER →'}
          </button>
        </form>
      </main>
    </>
  );
}
