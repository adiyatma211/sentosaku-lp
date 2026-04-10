import Image from "next/image";
import styles from "../page.module.css";

const WHATSAPP_URL =
  "https://wa.me/6282226582306?text=Hello%20Sentosaku%20Team%2C%20let%27s%20discuss%20a%20project.";

/**
 * WhatsappIcon component
 * Renders the WhatsApp icon SVG
 */
const WhatsappIcon = () => (
  <svg
    className={styles.whatsappIcon}
    viewBox="0 0 24 24"
    role="presentation"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M12.04 2a9.93 9.93 0 0 0-8.5 15.14L2 22l4.95-1.5A9.94 9.94 0 1 0 12.04 2m0 18.18a8.2 8.2 0 0 1-4.18-1.16l-.3-.18-2.94.89.93-2.86-.18-.3a8.2 8.2 0 1 1 6.67 3.61m4.52-6.13c-.25-.12-1.47-.73-1.7-.81s-.4-.12-.56.12-.64.81-.79 1-.29.19-.54.06a6.72 6.72 0 0 1-1.98-1.22 7.42 7.42 0 0 1-1.37-1.7c-.14-.25 0-.38.11-.5l.3-.35c.1-.11.14-.19.2-.32s0-.25 0-.35 0-.31-.11-.5-.56-1.34-.76-1.84-.4-.42-.56-.43h-.48a.92.92 0 0 0-.66.31 2.78 2.78 0 0 0-.86 2.05 4.8 4.8 0 0 0 1 2.52 10.87 10.87 0 0 0 4.62 3.84 5.3 5.3 0 0 0 3.26.68 2.78 2.78 0 0 0 1.85-1.32 2.27 2.27 0 0 0 .15-1.32c-.06-.1-.23-.16-.48-.28"
    />
  </svg>
);

/**
 * Props for HeroSection component
 */
export interface HeroSectionProps {
  /** Array of statistics to display in the hero section */
  stats: Array<{
    value: string;
    label: string;
  }>;
  /** Array of process information items */
  processInfo: Array<{
    label: string;
    value: number;
    unit: string;
  }>;
  /** Title for the panel section */
  panelTitle?: string;
  /** Badge text for the panel section */
  panelBadge?: string;
  /** Text for the primary panel action button */
  primaryPanelActionText?: string;
  /** Text for the secondary panel action button */
  secondaryPanelActionText?: string;
  /** Href for the primary panel action button */
  primaryPanelActionHref?: string;
  /** Href for the secondary panel action button */
  secondaryPanelActionHref?: string;
}

/**
 * HeroSection component
 * Renders the main hero section of the landing page with brand mark, tagline,
 * action buttons, statistics, and a showcase panel
 * 
 * @param props - Component props containing stats, processInfo, and panel info
 * @returns JSX element representing the hero section
 */
export default function HeroSection({ 
  stats, 
  processInfo, 
  panelTitle = "Dashboard Sentosaku", 
  panelBadge = "Ready Launch",
  primaryPanelActionText = "Mulai Proyek Sekarang",
  secondaryPanelActionText = "Lihat Portfolio",
  primaryPanelActionHref = WHATSAPP_URL,
  secondaryPanelActionHref = "#projects"
}: HeroSectionProps) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroText}>
        <div className={styles.brandMark}>
          <Image
            className={styles.brandLogo}
            src="/logo_bg_color.png"
            alt="Sentosakutech logo"
            width={64}
            height={64}
            priority
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjZDFkNWRiIi8+PC9zdmc+"
          />
          <div>
            <p>Sentosakutech</p>
            <span>Web • Mobile • Full-stack</span>
          </div>
        </div>
        <p className={styles.tagline}>Sentosaku Tech - Studio Web & Mobile</p>
        <h1>Bangun produk web dan mobile startup Anda dengan tim full-stack.</h1>
        <p className={styles.description}>
          Kami rancang strategi, desain, hingga kode agar setiap rilis web
          atau mobile terasa mulus, stabil, dan siap tumbuh. Satu tim fokus
          mengawal UX, frontend, backend, dan cloud sehingga Anda tinggal
          mengarahkan visi bisnis.
        </p>
        <div className={styles.heroActions}>
          <a
            className={`${styles.primaryAction} ${styles.whatsappAction}`}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer noopener"
          >
            <WhatsappIcon />
            Chat di WhatsApp
          </a>
          <a className={styles.secondaryAction} href="#projects">
            Lihat proyek
          </a>
          <a
            className={styles.tertiaryAction}
            href="mailto:studio@sentosakutech.com"
          >
            Atur sesi strategi
          </a>
        </div>
        <div className={styles.heroStats}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.statCard}>
              <span className={styles.statValue}>{stat.value}</span>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.heroShowcase}>
        <div className={styles.layeredCard}>
          <div className={`${styles.layeredInner} ${styles.heroPanel}`}>
            <div className={styles.panelHeader}>
              <span>{panelTitle}</span>
              <span className={styles.panelBadge}>{panelBadge}</span>
            </div>
            <div className={styles.processList}>
              {processInfo.map((process) => (
                <div key={process.label} className={styles.processItem}>
                  <div className={styles.processIcon}>
                    ✓
                  </div>
                  <div className={styles.processValue}>{process.value} {process.unit}</div>
                  <div className={styles.processMeta}>
                    <p>{process.label}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.heroBadge}>
              <div>
                <p>Project Success Rate</p>
                <strong>98%</strong>
              </div>
              <p className={styles.badgeDetail}>Client satisfaction guaranteed</p>
            </div>
            <div className={styles.pillars}>
              <span>Web Development</span>
              <span>Mobile Apps</span>
              {/* <span>Cloud Solutions</span> */}
            </div>
            <div className={styles.heroPanelActions}>
              <a
                className={`${styles.primaryAction} ${styles.panelCta}`}
                href={primaryPanelActionHref}
                target="_blank"
                rel="noreferrer noopener"
              >
                <WhatsappIcon />
                {primaryPanelActionText}
              </a>
              <a
                className={styles.secondaryAction}
                href={secondaryPanelActionHref}
              >
                {secondaryPanelActionText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
