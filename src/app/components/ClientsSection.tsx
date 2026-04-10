"use client";

import Image from "next/image";
import styles from "../page.module.css";

/**
 * Props for ClientsSection component
 */
interface ClientsSectionProps {
  /** Array of client objects to display in the carousel */
  clients: Array<{
    name: string;
    initial: string;
    logo_url: string;
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
                <Image
                  src={client.logo_url}
                  alt={`${client.name} logo`}
                  width={120}
                  height={60}
                  className={styles.clientLogoImg}
                  unoptimized={client.logo_url.includes('127.0.0.1') || client.logo_url.includes('localhost')}
                />
              </div>
            ))}
            {/* Duplicate items for seamless scrolling */}
            {clients.map((client, index) => (
              <div key={`duplicate-${index}`} className={styles.clientLogo}>
                <Image
                  src={client.logo_url}
                  alt={`${client.name} logo`}
                  width={120}
                  height={60}
                  className={styles.clientLogoImg}
                  unoptimized={client.logo_url.includes('127.0.0.1') || client.logo_url.includes('localhost')}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
