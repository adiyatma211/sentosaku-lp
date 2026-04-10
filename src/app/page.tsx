import { Suspense } from "react";
import styles from "./page.module.css";
import HeroSection from "./components/HeroSection";
import ClientsSection from "./components/ClientsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ProjectsSection from "./components/ProjectsSection";
import { fetchProjects, fetchTestimonials, fetchStats, fetchClients, fetchProcessInfo } from "@/lib/api";
import type { Project, Testimonial, Stat, Client, ProcessInfo } from "@/lib/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sentosaku Tech - Studio Web & Mobile Full-Stack",
  description: "Kami rancang strategi, desain, hingga kode agar setiap rilis web atau mobile terasa mulus, stabil, dan siap tumbuh.",
  keywords: ["web development", "mobile app", "full-stack", "startup"],
  authors: [{ name: "Sentosaku Tech" }],
  openGraph: {
    title: "Sentosaku Tech - Studio Web & Mobile Full-Stack",
    description: "Kami rancang strategi, desain, hingga kode agar setiap rilis web atau mobile terasa mulus, stabil, dan siap tumbuh.",
    type: "website",
    url: "https://sentosaku.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sentosaku Tech - Web & Mobile Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sentosaku Tech - Studio Web & Mobile",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const dynamic = 'force-dynamic';

const WHATSAPP_URL =
  "https://wa.me/6282226582306?text=Hello%20Sentosaku%20Team%2C%20let%27s%20discuss%20a%20project.";

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

function EmptyHeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.emptyState}>
        <p>Proyek dan statistik akan ditampilkan di sini.</p>
      </div>
    </section>
  );
}

function EmptyProjectsSection() {
  return (
    <section className={styles.projectsSection}>
      <div className={styles.sectionHeader}>
        <p className={styles.tagline}>Proyek</p>
        <h2>Produk full-stack yang siap tumbuh sejak hari pertama.</h2>
        <p>
          Kami gabungkan kecepatan startup dengan disiplin enterprise.
          Design system modular, API tangguh, dan aplikasi mobile rapi siap
          memacu inovasi tim Anda.
        </p>
      </div>
      <div className={styles.emptyState}>
        <p>Belum ada proyek untuk ditampilkan.</p>
      </div>
    </section>
  );
}

function EmptyClientsSection() {
  return (
    <section className={styles.clientsSection}>
      <div className={styles.emptyState}>
        <p>Klien akan ditampilkan di sini.</p>
      </div>
    </section>
  );
}

function EmptyTestimonialsSection() {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.emptyState}>
        <p>Testimoni klien akan ditampilkan di sini.</p>
      </div>
    </section>
  );
}

async function HeroSectionWrapper() {
  try {
    const [stats, processInfo] = await Promise.all([
      fetchStats(),
      fetchProcessInfo()
    ]);

    if (stats.length === 0 && processInfo.length === 0) {
      return <EmptyHeroSection />;
    }

    return (
      <HeroSection
        stats={stats}
        processInfo={processInfo}
        panelTitle="Dashboard Sentosaku"
        panelBadge="Ready Launch"
        primaryPanelActionText="Mulai Proyek Sekarang"
        secondaryPanelActionText="Lihat Portfolio"
        primaryPanelActionHref={WHATSAPP_URL}
        secondaryPanelActionHref="#projects"
      />
    );
  } catch (error) {
    console.error('Failed to fetch hero section data:', error);
    return <EmptyHeroSection />;
  }
}

async function ProjectsSectionWrapper() {
  try {
    const projects = await fetchProjects();

    if (projects.length === 0) {
      return <EmptyProjectsSection />;
    }

    return <ProjectsSection projects={projects} />;
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return <EmptyProjectsSection />;
  }
}

async function ClientsSectionWrapper() {
  try {
    const clients = await fetchClients();

    if (clients.length === 0) {
      return <EmptyClientsSection />;
    }

    return <ClientsSection clients={clients} />;
  } catch (error) {
    console.error('Failed to fetch clients:', error);
    return <EmptyClientsSection />;
  }
}

async function TestimonialsSectionWrapper() {
  try {
    const testimonials = await fetchTestimonials();

    if (testimonials.length === 0) {
      return <EmptyTestimonialsSection />;
    }

    return <TestimonialsSection testimonials={testimonials} />;
  } catch (error) {
    console.error('Failed to fetch testimonials:', error);
    return <EmptyTestimonialsSection />;
  }
}

function FloatingWhatsApp() {
  return (
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
  );
}

export default function Home() {
  return (
    <>
      <link rel="prefetch" href="/logo_bg_color.png" as="image" />
      <div className={styles.page}>
        <main className={styles.main}>
          <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', padding: '100px', color: '#666' }}>Loading...</div>}>
            <HeroSectionWrapper />
          </Suspense>

          <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', padding: '100px', color: '#666' }}>Loading projects...</div>}>
            <ProjectsSectionWrapper />
          </Suspense>

          <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', padding: '100px', color: '#666' }}>Loading clients...</div>}>
            <ClientsSectionWrapper />
          </Suspense>

          <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', padding: '100px', color: '#666' }}>Loading testimonials...</div>}>
            <TestimonialsSectionWrapper />
          </Suspense>

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

      <FloatingWhatsApp />
      </div>
    </>
  );
}
