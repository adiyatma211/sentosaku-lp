"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import ProjectModal from "./ProjectModal";
import { Project } from "@/lib/types";

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  function isLocalhostImage(src: string) {
    return src.includes('127.0.0.1') || src.includes('localhost');
  }

  return (
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
        {projects.map((project) => {
          const imageUrl = project.image_url || project.image;
          const isLocalhost = isLocalhostImage(imageUrl);

          return (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={styles.projectButton}
            >
              <article className={`${styles.layeredCard} ${styles.projectCard}`}>
                <div className={styles.projectImage}>
                  <Image
                    src={imageUrl}
                    alt={`${project.title} preview`}
                    fill
                    className={styles.projectImageImg}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized={isLocalhost}
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
                      {'>'}
                    </span>
                  </div>
                </div>
              </article>
            </button>
          );
        })}
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
