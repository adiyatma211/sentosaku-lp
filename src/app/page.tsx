"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.css";
import brandLogo from "./assets/logo_bg_color.png";
import LPGading from "./assets/LPGading.png";
import managemenSurat from "./assets/managemenSurat.png";
import PaddleWeb from "./assets/PaddleWeb.png";
import PosGading from "./assets/Pos Gading.png";
import SentosaPos from "./assets/SentosaPos.png";

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
  { label: "Proyek Selesai", value: 150, unit: "produk" },
  { label: "Kepuasan Klien", value: 98, unit: "%" },
  { label: "Waktu Rilis", value: 7, unit: "hari" },
];

const stats = [
  { value: "32", label: "Produk digital sukses" },
  { value: "18", label: "Rilis mobile per kuartal" },
  { value: "3.5x", label: "Iterasi lebih cepat" },
];

const projects = [
  {
    slug: "lp-gading",
    title: "LP Gading",
    category: "Landing Page Digital Printing",
    description:
      "Landing page profesional untuk layanan digital printing dengan portfolio galeri dan sistem quote online.",
    status: "Produktif",
    image: LPGading,
    projectUrl: "https://lp-gading.example.com",
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js"],
    features: ["Online quote system", "Portfolio gallery", "Contact forms"]
  },
  {
    slug: "managemen-surat",
    title: "Manajemen Surat",
    category: "Sistem Arsip Digital",
    description:
      "Sistem arsip surat masuk dan keluar dengan pencarian cepat, kategorisasi otomatis, dan approval workflow.",
    status: "Produktif",
    image: managemenSurat,
    projectUrl: "https://managemen-surat.example.com",
    technologies: ["Next.js", "PostgreSQL", "Document AI", "Prisma"],
    features: ["Surat tracking", "Digital archive", "Approval workflow"]
  },
  {
    slug: "paddle-web",
    title: "Paddle Web",
    category: "Booking Lapangan Padel",
    description:
      "Landing page booking lapangan padel dengan jadwal real-time, pemilihan slot waktu, dan integrasi pembayaran.",
    status: "Produktif",
    image: PaddleWeb,
    projectUrl: "https://paddle-web.example.com",
    technologies: ["React", "Node.js", "Calendar API", "Stripe API"],
    features: ["Real-time booking", "Schedule management", "Payment gateway"]
  },
  {
    slug: "sentosa-pos",
    title: "Sentosa POS",
    category: "Sistem Kasir Retail",
    description:
      "Aplikasi kasir untuk retail general dengan inventory management, laporan penjualan, dan member loyalty program.",
    status: "Produktif",
    image: SentosaPos,
    projectUrl: "https://sentosa-pos.example.com",
    technologies: ["React Native", "Firebase", "Cloud Functions", "Redux"],
    features: ["Inventory tracking", "Sales analytics", "Loyalty program"]
  },
  {
    slug: "pos-gading",
    title: "POS Gading",
    category: "Sistem Kasir Digital Printing",
    description:
      "Aplikasi kasir khusus untuk usaha printing dengan project tracking, pricing calculator, dan order history.",
    status: "Produktif",
    image: PosGading,
    projectUrl: "https://pos-gading.example.com",
    technologies: ["React Native", "Node.js", "PostgreSQL", "API"],
    features: ["Printing calculator", "Order tracking", "Custom pricing"]
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
                  <span>Dashboard Sentosaku</span>
                  <span className={styles.panelBadge}>Ready Launch</span>
                </div>
                <div className={styles.processList}>
                  {processInfo.map((process) => (
                    <div key={process.label} className={styles.processItem}>
                      <div className={styles.processIcon}>
                        ✓
                      </div>
                      <div className={styles.processValue}>{process.value}{process.unit}</div>
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
                  <span>Cloud Solutions</span>
                </div>
                <div className={styles.heroPanelActions}>
                  <a
                    className={`${styles.primaryAction} ${styles.panelCta}`}
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <WhatsappIcon />
                    Mulai Proyek Sekarang
                  </a>
                  <a
                    className={styles.secondaryAction}
                    href="#projects"
                  >
                    Lihat Portfolio
                  </a>
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
                {[
                  { name: "TechCorp", initial: "TC" },
                  { name: "FinanceHub", initial: "FH" },
                  { name: "HealthPlus", initial: "HP" },
                  { name: "EduSmart", initial: "ES" },
                  { name: "LogisticsPro", initial: "LP" },
                  { name: "RetailMax", initial: "RM" },
                  { name: "DataFlow", initial: "DF" },
                  { name: "CloudBase", initial: "CB" },
                ].map((client, index) => (
                  <div key={index} className={styles.clientLogo}>
                    <div className={styles.logoPlaceholder}>
                      <span className={styles.logoInitial}>{client.initial}</span>
                      <span className={styles.logoName}>{client.name}</span>
                    </div>
                  </div>
                ))}
                {/* Duplicate items for seamless scrolling */}
                {[
                  { name: "TechCorp", initial: "TC" },
                  { name: "FinanceHub", initial: "FH" },
                  { name: "HealthPlus", initial: "HP" },
                  { name: "EduSmart", initial: "ES" },
                  { name: "LogisticsPro", initial: "LP" },
                  { name: "RetailMax", initial: "RM" },
                  { name: "DataFlow", initial: "DF" },
                  { name: "CloudBase", initial: "CB" },
                ].map((client, index) => (
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
            <article className={`${styles.layeredCard} ${styles.testimonialCard}`}>
              <div className={`${styles.layeredInner} ${styles.testimonialContent}`}>
                <div className={styles.testimonialRating}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className={styles.star}>★</span>
                  ))}
                </div>
                <blockquote className={styles.testimonialText}>
                  "Tim Sentosaku sangat profesional dalam mengembangkan aplikasi mobile kami. Proses yang transparan dan hasil yang melebihi ekspektasi."
                </blockquote>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorAvatar}>
                    <div className={styles.avatarPlaceholder}>JD</div>
                  </div>
                  <div className={styles.authorInfo}>
                    <h4>John Doe</h4>
                    <p>CEO, TechCorp Indonesia</p>
                  </div>
                </div>
              </div>
            </article>

            <article className={`${styles.layeredCard} ${styles.testimonialCard}`}>
              <div className={`${styles.layeredInner} ${styles.testimonialContent}`}>
                <div className={styles.testimonialRating}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className={styles.star}>★</span>
                  ))}
                </div>
                <blockquote className={styles.testimonialText}>
                  "Platform web yang dikembangkan Sentosaku meningkatkan efisiensi operasional kami hingga 40%. Highly recommended!"
                </blockquote>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorAvatar}>
                    <div className={styles.avatarPlaceholder}>SR</div>
                  </div>
                  <div className={styles.authorInfo}>
                    <h4>Sarah Rahman</h4>
                    <p>CTO, FinanceHub Asia</p>
                  </div>
                </div>
              </div>
            </article>

            <article className={`${styles.layeredCard} ${styles.testimonialCard}`}>
              <div className={`${styles.layeredInner} ${styles.testimonialContent}`}>
                <div className={styles.testimonialRating}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className={styles.star}>★</span>
                  ))}
                </div>
                <blockquote className={styles.testimonialText}>
                  "Kolaborasi yang sangat menyenangkan. Tim yang responsif dan solutif, selalu siap membantu kami mencapai target digital."
                </blockquote>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorAvatar}>
                    <div className={styles.avatarPlaceholder}>MP</div>
                  </div>
                  <div className={styles.authorInfo}>
                    <h4>Michael Pratama</h4>
                    <p>Founder, HealthPlus</p>
                  </div>
                </div>
              </div>
            </article>
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
