'use client';

import { homepageTestimonials } from '@/data/site';

export default function TestimonialShowcase() {
  const featured = homepageTestimonials[0];
  const supporting = homepageTestimonials.slice(1, 5);
  const rail = homepageTestimonials.slice(5);

  return (
    <div className="testimonialShowcase">

      {/* FEATURED + SUPPORTING */}
      <div className="testimonialMosaic">

        <article className="featuredTestimonial">
          <div className="testimonialTop">
            <span className="testimonialCategory">
              {featured.category}
            </span>

            <span className="verifiedBadge">
              Verified
            </span>
          </div>

          <div className="testimonialStars">
            ★★★★★ <span>{featured.rating}</span>
          </div>

          <blockquote>
            “{featured.quote}”
          </blockquote>

          <div className="testimonialFooter">
            <div>
              <strong>{featured.note}</strong>
              <span>{featured.source}</span>
            </div>

            <span className="quoteMark">“</span>
          </div>
        </article>


        <div className="supportingTestimonials">
          {supporting.map((item) => (
            <article
              className="testimonialMiniCard"
              key={item.id}
            >
              <div className="testimonialMiniTop">
                <span className="testimonialCategory">
                  {item.category}
                </span>

                <span className="testimonialStars miniStars">
                  ★★★★★
                </span>
              </div>

              <blockquote>
                “{item.quote}”
              </blockquote>

              <div className="testimonialMiniFooter">
                <span>{item.note}</span>
                <small>{item.source}</small>
              </div>
            </article>
          ))}
        </div>
      </div>


      {/* MOVING REVIEW RAIL */}
      <div className="testimonialRailWrapper">
        <div className="testimonialRail">
          {[...rail, ...rail].map((item, index) => (
            <article
              className="testimonialRailCard"
              key={`${item.id}-${index}`}
            >
              <div className="railCardTop">
                <span>{item.category}</span>

                <span className="railStars">
                  ★★★★★
                </span>
              </div>

              <p>
                “{item.quote}”
              </p>

              <div className="railCardBottom">
                <span>{item.note}</span>
                <small>{item.source}</small>
              </div>
            </article>
          ))}
        </div>
      </div>

    </div>
  );
}