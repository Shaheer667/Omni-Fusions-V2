'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';

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


  const getBudgetOptions = (service, engagement) => {
    if (engagement === 'Ongoing monthly work') {
      return [
        '$1,000–$2,500 / month',
        '$2,500–$5,000 / month',
        '$5,000–$10,000 / month',
        '$10,000+ / month'
      ];
    }

    if (
      service === 'Web Development' ||
      service === 'Multiple Services'
    ) {
      return [
        '$1,000–$2,500',
        '$2,500–$5,000',
        '$5,000–$10,000',
        '$10,000+'
      ];
    }

    return [
      '$500–$1,000',
      '$1,000–$2,500',
      '$2,500–$5,000',
      '$5,000–$10,000',
      '$10,000+'
    ];
  };


  const budgetOptions = useMemo(
    () =>
      getBudgetOptions(
        form.service,
        form.engagement
      ),
    [form.service, form.engagement]
  );


  const update = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value
    }));
  };


  const updateWithBudgetReset = (event) => {
    const { name, value } = event.target;

    setForm((current) => {
      const next = {
        ...current,
        [name]: value
      };

      const nextBudgets =
        getBudgetOptions(
          next.service,
          next.engagement
        );

      next.budget = nextBudgets[0];

      return next;
    });
  };


  const submit = async (event) => {
    event.preventDefault();

    setStatus('submitting');
    setError('');

    try {
      const response = await fetch(
        '/api/contact',
        {
          method: 'POST',

          headers: {
            'Content-Type':
              'application/json'
          },

          body: JSON.stringify(form)
        }
      );


      if (!response.ok) {
        const data =
          await response
            .json()
            .catch(() => ({}));

        throw new Error(
          data.error ||
          'Something went wrong. Please try again.'
        );
      }


      if (window.gtag) {
        window.gtag(
          'event',
          'generate_lead',
          {
            service: form.service,
            engagement:
              form.engagement,
            budget: form.budget
          }
        );
      }


      router.push('/thank-you');

    } catch (err) {

      setStatus('error');

      setError(
        err.message ||
        'Something went wrong. Please email us directly.'
      );
    }
  };


  return (
    <form
      className="projectForm premiumProjectForm"
      onSubmit={submit}
    >

      {/* BASIC DETAILS */}

      <div className="formGrid">

        <label>
          <span>Your name *</span>

          <input
            required
            name="name"
            value={form.name}
            onChange={update}
            autoComplete="name"
            placeholder="Your name"
          />
        </label>


        <label>
          <span>Work email *</span>

          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={update}
            autoComplete="email"
            placeholder="you@company.com"
          />
        </label>


        <label>
          <span>Company / brand</span>

          <input
            name="company"
            value={form.company}
            onChange={update}
            autoComplete="organization"
            placeholder="Company or brand name"
          />
        </label>


        <label>
          <span>Website</span>

          <input
            type="url"
            name="website"
            value={form.website}
            onChange={update}
            placeholder="https://"
            autoComplete="url"
          />
        </label>


        <label>
          <span>What do you need? *</span>

          <select
            required
            name="service"
            value={form.service}
            onChange={
              updateWithBudgetReset
            }
          >
            <option>
              Graphic Design
            </option>

            <option>
              Video Editing
            </option>

            <option>
              Web Development
            </option>

            <option>
              Ongoing Creative Support
            </option>

            <option>
              Multiple Services
            </option>
          </select>
        </label>


        <label>
          <span>Engagement *</span>

          <select
            required
            name="engagement"
            value={form.engagement}
            onChange={
              updateWithBudgetReset
            }
          >
            <option>
              One-time project
            </option>

            <option>
              Ongoing monthly work
            </option>

            <option>
              Not sure yet
            </option>
          </select>
        </label>


        <label>
          <span>Estimated budget *</span>

          <select
            required
            name="budget"
            value={form.budget}
            onChange={update}
          >
            {budgetOptions.map(
              (option) => (
                <option key={option}>
                  {option}
                </option>
              )
            )}
          </select>
        </label>


        <label>
          <span>Ideal timeline *</span>

          <select
            required
            name="timeline"
            value={form.timeline}
            onChange={update}
          >
            <option>
              ASAP / urgent
            </option>

            <option>
              Within 1–2 weeks
            </option>

            <option>
              Within 2–4 weeks
            </option>

            <option>
              Within 1–2 months
            </option>

            <option>
              Flexible / ongoing
            </option>
          </select>
        </label>

      </div>


      {/* PROJECT DESCRIPTION */}

      <label className="fullField">

        <span>
          Tell us about the project *
        </span>

        <textarea
          required
          minLength="20"
          name="details"
          value={form.details}
          onChange={update}
          rows="7"
          placeholder="What are you working on, where do you need support, and what would a successful outcome look like?"
        />

      </label>


      {/* HONEYPOT */}

      <label
        className="honeypot"
        aria-hidden="true"
      >
        <span>
          Leave this field empty
        </span>

        <input
          name="website_confirm"
          value={form.website_confirm}
          onChange={update}
          tabIndex="-1"
          autoComplete="off"
        />
      </label>


      {/* FOOTER */}

      <div className="formFoot premiumFormFoot">

        <div>

          <button
            className="button buttonDark creativeButton"
            type="submit"
            disabled={
              status === 'submitting'
            }
          >
            <span>
              {status === 'submitting'
                ? 'Sending…'
                : 'Send Project Details'}
            </span>

            {status !== 'submitting' && (
              <ArrowUpRight
                size={17}
              />
            )}
          </button>


          {error && (
            <p
              className="formError"
              role="alert"
              aria-live="polite"
            >
              {error}
            </p>
          )}

        </div>


        <p>
          We usually reply within one business day.
          Your project details stay private and are
          only used to respond to your inquiry.
        </p>

      </div>

    </form>
  );
}