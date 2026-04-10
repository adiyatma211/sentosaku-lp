"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../page.module.css";
import ProjectModal from "./ProjectModal";
import { Project } from "@/lib/types";

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const router = useRouter();

  const prefetchProject = useCallback((slug: string) => {
    router.prefetch(`/projects/${slug}`);
  }, [router]);

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
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              prefetch={true}
              onMouseEnter={() => prefetchProject(project.slug)}
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
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2QxZDVkYiIvPjwvc3ZnPg=="
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
            </Link>
          );
        })}
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
