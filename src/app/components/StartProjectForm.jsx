'use client';

import { useMemo, useState } from 'react';
import { site } from '@/data/site';

const initial = {
  name: '',
  email: '',
  company: '',
  service: 'Graphic Design',
  engagement: 'One-time project',
  budget: '$500–$1,000',
  details: ''
};

export default function StartProjectForm() {
  const [form, setForm] = useState(initial);
  const budgetOptions = useMemo(() => (
    form.service === 'Web Development'
      ? ['$1,000–$2,500', '$2,500–$5,000', '$5,000–$10,000', '$10,000+']
      : ['$500–$1,000', '$1,000–$2,500', '$2,500–$5,000', '$5,000–$10,000', '$10,000+']
  ), [form.service]);

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submit = (event) => {
    event.preventDefault();
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Company: ${form.company || 'Not provided'}`,
      `Service: ${form.service}`,
      `Engagement: ${form.engagement}`,
      `Budget: ${form.budget}`,
      '',
      'Project details:',
      form.details
    ].join('\n');
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Project inquiry — ${form.service}`)}&body=${encodeURIComponent(body)}`;
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
          <span>What do you need? *</span>
          <select name="service" value={form.service} onChange={(e) => {
            update(e);
            const next = e.target.value === 'Web Development' ? '$1,000–$2,500' : '$500–$1,000';
            setForm((current) => ({ ...current, service: e.target.value, budget: next }));
          }}>
            <option>Graphic Design</option>
            <option>Video Editing</option>
            <option>Web Development</option>
            <option>Ongoing Creative Support</option>
            <option>Multiple Services</option>
          </select>
        </label>
        <label>
          <span>Engagement *</span>
          <select name="engagement" value={form.engagement} onChange={update}>
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
      </div>
      <label className="fullField">
        <span>Tell us about the project *</span>
        <textarea required name="details" value={form.details} onChange={update} rows="7" placeholder="What are you building, what do you need help with, and what does a successful outcome look like?" />
      </label>
      <div className="formFoot">
        <p>Creative projects typically start at $500. Web projects typically start at $1,000.</p>
        <button className="button buttonDark" type="submit">Send Project Brief <span>↗</span></button>
      </div>
      <p className="formNote">V1 note: this opens a pre-filled email. Before launch, connect the form to your CRM/email backend and GA4 conversion events.</p>
    </form>
  );
}
