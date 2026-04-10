import styles from "../page.module.css";

/**
 * Props for StatsSection component
 */
interface StatsSectionProps {
  /** Array of statistics to display */
  stats: Array<{
    value: string;
    label: string;
  }>;
  /** Optional section title */
  title?: string;
  /** Optional section description */
  description?: string;
}

/**
 * StatsSection component
 * Renders a section displaying key statistics/metrics
 * This is a server component for better performance
 * 
 * @param props - Component props containing stats array and optional title/description
 * @returns JSX element representing the stats section
 */
export default function StatsSection({ stats, title, description }: StatsSectionProps) {
  return (
    <section className={styles.statsSection}>
      {(title || description) && (
        <div className={styles.sectionHeader}>
          {title && <p className={styles.tagline}>{title}</p>}
          {description && <p>{description}</p>}
        </div>
      )}
      <div className={styles.heroStats}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.statCard}>
            <span className={styles.statValue}>{stat.value}</span>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
