export default function TestimonialCard({ item }) {
  return (
    <article className="testimonialCard">
      <div className="rating" aria-label="5 out of 5 stars">★★★★★ <span>5.0</span></div>
      <p className="testimonialQuote">{item.quote}</p>
      <div className="testimonialMeta">
        <span>Verified Upwork feedback</span>
        <strong>{item.category}</strong>
      </div>
    </article>
  );
}
