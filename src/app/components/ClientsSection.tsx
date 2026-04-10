"use client";

import styles from "../page.module.css";

/**
 * Props for ClientsSection component
 */
interface ClientsSectionProps {
  /** Array of client objects to display in the carousel */
  clients: Array<{
    name: string;
    initial: string;
  }>;
}

/**
 * ClientsSection component
 * Renders a section displaying client logos in an infinite scrolling carousel
 * This is a client component to handle the scrolling animation
 * 
 * @param props - Component props containing clients array
 * @returns JSX element representing the clients section
 */
export default function ClientsSection({ clients }: ClientsSectionProps) {
  return (
    <section className={styles.clientsSection}>
      <div className={styles.sectionHeader}>
        <p className={styles.tagline}>Klien Percaya</p>
        <h2>Mereka yang telah mempercayai kami</h2>
        <p>
          Kami bangun kolaborasi jangka panjang dengan startup dan enterprise
          untuk menghadirkan solusi digital yang berdampak.
        </p>
      </div>
      <div className={styles.clientsCarouselWrapper}>
        <div className={styles.clientsCarousel}>
          <div className={styles.clientsTrack}>
            {clients.map((client, index) => (
              <div key={index} className={styles.clientLogo}>
                <div className={styles.logoPlaceholder}>
                  <span className={styles.logoInitial}>{client.initial}</span>
                  <span className={styles.logoName}>{client.name}</span>
                </div>
              </div>
            ))}
            {/* Duplicate items for seamless scrolling */}
            {clients.map((client, index) => (
              <div key={`duplicate-${index}`} className={styles.clientLogo}>
                <div className={styles.logoPlaceholder}>
                  <span className={styles.logoInitial}>{client.initial}</span>
                  <span className={styles.logoName}>{client.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
