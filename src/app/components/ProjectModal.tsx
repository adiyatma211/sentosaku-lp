"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "../page.module.css";
import { Project } from "@/lib/types";

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

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  const isLocalhostImage = (project.image_url || project.image).includes('127.0.0.1') ||
                          (project.image_url || project.image).includes('localhost') ||
                          (project.image_url || project.image).includes('dashboard.sentosakutech.com');

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.modalClose}
          onClick={onClose}
          aria-label="Tutup modal"
        >
          ×
        </button>

        <div className={styles.modalHeader}>
          <div className={styles.modalImage}>
            <Image
              src={project.image_url || project.image}
              alt={`${project.title} preview`}
              fill
              className={styles.modalImageImg}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              unoptimized={isLocalhostImage}
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2QxZDVkYiIvPjwvc3ZnPg=="
            />
          </div>
          <div className={styles.modalTitleSection}>
            <h2>{project.title}</h2>
            <div className={styles.modalMeta}>
              <span className={styles.modalCategory}>{project.category}</span>
              <span className={styles.modalStatus}>{project.status}</span>
            </div>
          </div>
        </div>

        <div className={styles.modalBody}>
          <p className={styles.modalDescription}>{project.description}</p>

          <div className={styles.modalSection}>
            <h3>Teknologi</h3>
            <div className={styles.technologyTags}>
              {project.technologies.map((tech, index) => (
                <span key={index} className={styles.technologyTag}>{tech}</span>
              ))}
            </div>
          </div>

          <div className={styles.modalSection}>
            <h3>Fitur Utama</h3>
            <ul className={styles.featureList}>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className={styles.modalActions}>
            <a
              href={project.project_url}
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
    </div>
  );
}
