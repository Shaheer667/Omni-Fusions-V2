'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

const initial = {
  name: '',
  email: '',
  company: '',
  website: '',
  service: 'Graphic Design',
  engagement: 'One-time project',
  budget: '$500–$1,000',
  timeline: 'Within 2–4 weeks',
  details: '',
  website_confirm: ''
};

export default function StartProjectForm() {
  const router = useRouter();
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const budgetOptions = useMemo(() => {
    if (form.engagement === 'Ongoing monthly work') {
      return ['$1,000–$2,500 / month', '$2,500–$5,000 / month', '$5,000–$10,000 / month', '$10,000+ / month'];
    }
    if (form.service === 'Web Development' || form.service === 'Multiple Services') {
      return ['$1,000–$2,500', '$2,500–$5,000', '$5,000–$10,000', '$10,000+'];
    }
    return ['$500–$1,000', '$1,000–$2,500', '$2,500–$5,000', '$5,000–$10,000', '$10,000+'];
  }, [form.service, form.engagement]);

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const updateWithBudgetReset = (event) => {
    const { name, value } = event.target;
    const next = { ...form, [name]: value };
    if (name === 'engagement' && value === 'Ongoing monthly work') next.budget = '$1,000–$2,500 / month';
    else if (name === 'service' && (value === 'Web Development' || value === 'Multiple Services')) next.budget = '$1,000–$2,500';
    else if (name === 'service' && form.engagement !== 'Ongoing monthly work') next.budget = '$500–$1,000';
    else if (name === 'engagement' && value !== 'Ongoing monthly work') next.budget = form.service === 'Web Development' || form.service === 'Multiple Services' ? '$1,000–$2,500' : '$500–$1,000';
    setForm(next);
  };

  const submit = async (event) => {
    event.preventDefault();
    setStatus('submitting');
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      if (window.gtag) {
        window.gtag('event', 'generate_lead', {
          service: form.service,
          engagement: form.engagement,
          budget: form.budget
        });
      }

      router.push('/thank-you');
    } catch (err) {
      setStatus('error');
      setError(err.message || 'Something went wrong. Please email us directly.');
    }
  };

  return (
    <form className="projectForm" onSubmit={submit}>
      <div className="formGrid">
        <label>
          <span>Your name *</span>
          <input required name="name" value={form.name} onChange={update} autoComplete="name" />
        </label>
        <label>
          <span>Work email *</span>
          <input required type="email" name="email" value={form.email} onChange={update} autoComplete="email" />
        </label>
        <label>
          <span>Company / brand</span>
          <input name="company" value={form.company} onChange={update} autoComplete="organization" />
        </label>
        <label>
          <span>Website</span>
          <input type="url" name="website" value={form.website} onChange={update} placeholder="https://" autoComplete="url" />
        </label>
        <label>
          <span>What do you need? *</span>
          <select name="service" value={form.service} onChange={updateWithBudgetReset}>
            <option>Graphic Design</option>
            <option>Video Editing</option>
            <option>Web Development</option>
            <option>Ongoing Creative Support</option>
            <option>Multiple Services</option>
          </select>
        </label>
        <label>
          <span>Engagement *</span>
          <select name="engagement" value={form.engagement} onChange={updateWithBudgetReset}>
            <option>One-time project</option>
            <option>Ongoing monthly work</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label>
          <span>Estimated budget *</span>
          <select name="budget" value={form.budget} onChange={update}>
            {budgetOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label>
          <span>Ideal timeline *</span>
          <select name="timeline" value={form.timeline} onChange={update}>
            <option>ASAP / urgent</option>
            <option>Within 1–2 weeks</option>
            <option>Within 2–4 weeks</option>
            <option>Within 1–2 months</option>
            <option>Flexible / ongoing</option>
          </select>
        </label>
      </div>
      <label className="fullField">
        <span>Tell us about the project *</span>
        <textarea required minLength="20" name="details" value={form.details} onChange={update} rows="7" placeholder="What are you building, what do you need help with, and what would a successful outcome look like?" />
      </label>
      <label className="honeypot" aria-hidden="true">
        <span>Leave this field empty</span>
        <input name="website_confirm" value={form.website_confirm} onChange={update} tabIndex="-1" autoComplete="off" />
      </label>
      <div className="formFoot">
        <div>
          <button className="button buttonDark" type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : 'Send Project Details'} <span>↗</span>
          </button>
          {error ? <p className="formError" role="alert">{error}</p> : null}
        </div>
        <p>We usually reply within one business day. By submitting, you agree that we can use these details to respond to your inquiry.</p>
      </div>
    </form>
  );
}
