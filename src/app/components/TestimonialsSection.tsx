import styles from "../page.module.css";

/**
 * Props for TestimonialsSection component
 */
interface TestimonialsSectionProps {
  /** Array of testimonial objects to display */
  testimonials: Array<{
    /** The testimonial text */
    text: string;
    /** Author's name */
    author: string;
    /** Author's title/company */
    title: string;
    /** Author's initials for avatar */
    initials: string;
    /** Number of stars (1-5) */
    rating?: number;
  }>;
}

/**
 * TestimonialsSection component
 * Renders a section displaying client testimonials in a grid layout
 * This is a server component for better performance
 * 
 * @param props - Component props containing testimonials array
 * @returns JSX element representing the testimonials section
 */
export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.sectionHeader}>
        <p className={styles.tagline}>Testimoni</p>
        <h2>Apa kata klien kami</h2>
        <p>
          Kepuasan klien adalah prioritas utama kami. Dengarkan pengalaman
          mereka yang telah bekerjasama dengan tim Sentosaku.
        </p>
      </div>
      <div className={styles.testimonialsGrid}>
        {testimonials.map((testimonial, index) => (
          <article key={index} className={`${styles.layeredCard} ${styles.testimonialCard}`}>
            <div className={`${styles.layeredInner} ${styles.testimonialContent}`}>
              <div className={styles.testimonialRating}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className={styles.star}>★</span>
                ))}
              </div>
              <blockquote className={styles.testimonialText}>
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>
                  <div className={styles.avatarPlaceholder}>{testimonial.initials}</div>
                </div>
                <div className={styles.authorInfo}>
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.title}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
