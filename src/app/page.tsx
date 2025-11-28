"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.css";
import brandLogo from "./assets/logo_bg_color.png";

const WHATSAPP_URL =
  "https://wa.me/6281234567890?text=Hello%20Sentosaku%20Team%2C%20let%27s%20discuss%20a%20project.";

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

const processInfo = [
  { label: "Proyek Selesai", value: 32, unit: "produk" },
  { label: "Kepuasan Klien", value: 98, unit: "%" },
  { label: "Waktu Pengiriman", value: 2.5, unit: "minggu" },
];

const stats = [
  { value: "32", label: "Produk digital sukses" },
  { value: "18", label: "Rilis mobile per kuartal" },
  { value: "3.5x", label: "Iterasi lebih cepat" },
];

const projects = [
  {
    slug: "pulse-market",
    title: "Pulse Market",
    category: "Platform Web Fintech",
    description:
      "Marketplace investasi responsif dengan pembayaran multi-dompet dan dasbor investor yang akurat.",
    status: "Beta publik",
    image: "/api/placeholder/400/250",
    projectUrl: "https://pulse-market.example.com",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    features: ["Multi-wallet payments", "Real-time analytics", "Investor dashboard"]
  },
  {
    slug: "nexa-courier",
    title: "Nexa Courier",
    category: "Suite Mobile Logistik",
    description:
      "Aplikasi kurir dan dispatcher dilengkapi pelacakan armada live serta intelijen rute otomatis.",
    status: "Siap Play Store",
    image: "/api/placeholder/400/250",
    projectUrl: "https://nexa-courier.example.com",
    technologies: ["React Native", "Firebase", "Google Maps API"],
    features: ["Live fleet tracking", "Route optimization", "Real-time dispatch"]
  },
  {
    slug: "lumacare",
    title: "LumaCare",
    category: "SaaS Kesehatan",
    description:
      "Penjadwalan klinik, telekonsultasi, dan portal pasien sesuai standar keamanan kesehatan.",
    status: "Rollout Series B",
    image: "/api/placeholder/400/250",
    projectUrl: "https://lumacare.example.com",
    technologies: ["Vue.js", "Python Django", "PostgreSQL", "WebRTC"],
    features: ["Appointment scheduling", "Teleconsultation", "Patient portal"]
  },
  {
    slug: "orbit-travel",
    title: "Orbit Travel",
    category: "Progressive Web App",
    description:
      "Pengalaman booking offline-first dengan modul loyalti untuk brand perjalanan modern.",
    status: "v2 berjalan",
    image: "/api/placeholder/400/250",
    projectUrl: "https://orbit-travel.example.com",
    technologies: ["PWA", "Service Workers", "IndexedDB"],
    features: ["Offline booking", "Loyalty program", "Modern travel experience"]
  },
  {
    slug: "studiolink",
    title: "StudioLink",
    category: "Alat Kreator",
    description:
      "Workspace lintas perangkat agar kreator bisa briefing, review, dan rilis konten lebih cepat.",
    status: "Review App Store",
    image: "/api/placeholder/400/250",
    projectUrl: "https://studiolink.example.com",
    technologies: ["Next.js", "WebRTC", "Cloudinary", "Figma API"],
    features: ["Cross-device workspace", "Content review", "Quick publishing"]
  },
  {
    slug: "flux-analytics",
    title: "Flux Analytics",
    category: "Dasbor Data",
    description:
      "BI tertanam bagi tim sales & operasional dengan kontrol akses granular dan notifikasi instan.",
    status: "Pilot enterprise",
    image: "/api/placeholder/400/250",
    projectUrl: "https://flux-analytics.example.com",
    technologies: ["React", "D3.js", "Python", "Apache Spark"],
    features: ["Embedded BI", "Granular access control", "Instant notifications"]
  },
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className={styles.heroText}>
            <div className={styles.brandMark}>
              <Image
                className={styles.brandLogo}
                src={brandLogo}
                alt="Sentosakutech logo"
                width={64}
                height={64}
                priority
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
                href="mailto:studio@sentosaku.com"
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
                  <span>Panel Rilis</span>
                  <span className={styles.panelBadge}>Alpha / 09</span>
                </div>
                <div className={styles.signalList}>
                  {signals.map((signal) => (
                    <div key={signal.label} className={styles.signal}>
                      <div className={styles.signalMeta}>
                        <p>{signal.label}</p>
                        <span>{signal.value}%</span>
                      </div>
                      <div className={styles.signalBar}>
                        <span style={{ width: `${signal.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.heroBadge}>
                  <div>
                    <p>Jeda latensi</p>
                    <strong>3.2ms</strong>
                  </div>
                  <p className={styles.badgeDetail}>QA otomatis aktif</p>
                </div>
                <div className={styles.pillars}>
                  <span>Platform web</span>
                  <span>Aplikasi mobile</span>
                  <span>DevOps & cloud</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.projectsSection} id="projects">
          <div className={styles.sectionHeader}>
            <p className={styles.tagline}>Proyek</p>
            <h2>Produk full-stack yang siap tumbuh sejak hari pertama.</h2>
            <p>
              Kami gabungkan kecepatan startup dengan disiplin enterprise.
              Design system modular, API tangguh, dan aplikasi mobile rapi siap
              memacu inovasi tim Anda.
            </p>
          </div>
          <div className={styles.projectGrid}>
            {projects.map((project) => (
              <button
                key={project.title}
                onClick={() => setSelectedProject(project)}
                className={styles.projectButton}
              >
                <article
                  className={`${styles.layeredCard} ${styles.projectCard}`}
                >
                  <div className={styles.projectImage}>
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      className={styles.projectImageImg}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      unoptimized
                    />
                  </div>
                  <div className={`${styles.layeredInner} ${styles.projectBody}`}>
                    <div className={styles.projectMeta}>
                      <span>{project.category}</span>
                      <span>{project.status}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className={styles.cardDivider} />
                    <div className={styles.projectFooter}>
                      <span>Lihat detail</span>
                      <span className={styles.arrow} aria-hidden="true">
                        &gt;
                      </span>
                    </div>
                  </div>
                </article>
              </button>
            ))}
          </div>
        </section>

        <section className={styles.bottomCallout}>
          <div className={styles.layeredCard}>
            <div className={`${styles.layeredInner} ${styles.callout}`}>
              <p className={styles.tagline}>Jadwal rilis berikutnya</p>
              <h3>Mari arsiteki peluncuran web atau mobile Anda.</h3>
              <p>
                Ceritakan roadmap Anda, kami susun rencana sprint yang mencakup
                UX, frontend, backend, hingga infrastruktur dengan QA ketat.
              </p>
              <div className={styles.calloutActions}>
                <a
                  className={`${styles.primaryAction} ${styles.whatsappAction}`}
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <WhatsappIcon />
                  Kirim pesan via WhatsApp
                </a>
                <a
                  className={styles.secondaryAction}
                  href="mailto:studio@sentosaku.com"
                >
                  Email studio
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <a
        className={styles.whatsappFloating}
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Buka chat WhatsApp dengan Sentosaku"
      >
        <WhatsappIcon />
        <span>WhatsApp</span>
      </a>

      {selectedProject && (
        <div className={styles.modalOverlay} onClick={() => setSelectedProject(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.modalClose}
              onClick={() => setSelectedProject(null)}
              aria-label="Tutup modal"
            >
              ×
            </button>

            <div className={styles.modalHeader}>
              <div className={styles.modalImage}>
                <Image
                  src={selectedProject.image}
                  alt={`${selectedProject.title} preview`}
                  fill
                  className={styles.modalImageImg}
                  unoptimized
                />
              </div>
              <div className={styles.modalTitleSection}>
                <h2>{selectedProject.title}</h2>
                <div className={styles.modalMeta}>
                  <span className={styles.modalCategory}>{selectedProject.category}</span>
                  <span className={styles.modalStatus}>{selectedProject.status}</span>
                </div>
              </div>
            </div>

            <div className={styles.modalBody}>
              <p className={styles.modalDescription}>{selectedProject.description}</p>

              <div className={styles.modalSection}>
                <h3>Teknologi</h3>
                <div className={styles.technologyTags}>
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className={styles.technologyTag}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className={styles.modalSection}>
                <h3>Fitur Utama</h3>
                <ul className={styles.featureList}>
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.modalActions}>
              <a
                href={selectedProject.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryAction}
              >
                Kunjungi Project
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.secondaryAction} ${styles.whatsappAction}`}
              >
                <WhatsappIcon />
                Diskusikan Project
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
