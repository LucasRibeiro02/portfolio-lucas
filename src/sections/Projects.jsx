import { useRef, useState } from 'react'
import { motion } from 'motion/react'
import { Icon } from '../components/Icon'
import { SectionTitle } from '../components/SectionTitle'
import { reveal } from '../config/motion'
import { projects } from '../data/projects'

export function Projects({ onSelectProject }) {
  const [currentProject, setCurrentProject] = useState(0)
  const touchStartX = useRef(0)

  function goToProject(index) {
    const normalizedIndex =
      (index + projects.length) % projects.length

    setCurrentProject(normalizedIndex)
  }

  function showPreviousProject() {
    goToProject(currentProject - 1)
  }

  function showNextProject() {
    goToProject(currentProject + 1)
  }

  function handleTouchStart(event) {
    touchStartX.current =
      event.changedTouches[0].clientX
  }

  function handleTouchEnd(event) {
    const touchEndX =
      event.changedTouches[0].clientX

    const distance =
      touchEndX - touchStartX.current

    if (Math.abs(distance) < 45) return

    if (distance < 0) {
      showNextProject()
    } else {
      showPreviousProject()
    }
  }

  return (
    <section
      className="projects section"
      id="projects"
    >
      <SectionTitle
        eyebrow="02 / Projetos"
        description="Projetos desenvolvidos ao longo da minha trajetória, reunindo soluções profissionais e iniciativas pessoais."
      >
        Meus <span>projetos.</span>
      </SectionTitle>

      <motion.div
        className="project-carousel"
        {...reveal}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="project-slider">
          <div className="project-viewport">
            <motion.div
              className="project-track"
              animate={{
                x: `-${currentProject * 100}%`,
              }}
              transition={{
                type: 'spring',
                stiffness: 170,
                damping: 24,
              }}
            >
              {projects.map((project, index) => (
                <article
                  className="project-card"
                  key={project.id}
                  aria-hidden={
                    index !== currentProject
                  }
                >
                  <div className="project-media">
                    <img
                      src={project.cover}
                      alt={project.title}
                      loading={
                        index === 0
                          ? 'eager'
                          : 'lazy'
                      }
                    />

                    <span className="project-number">
                      {project.number}
                    </span>
                  </div>

                  <div className="project-info">
                    <div className="project-tags">
                      {project.tags.map((tag) => {
                        const isHighlighted =
                          project.highlightedTags?.includes(tag)

                        return (
                          <span
                            key={tag}
                            className={
                              isHighlighted
                                ? 'project-tag--featured'
                                : undefined
                            }
                          >
                            {tag}
                          </span>
                        )
                      })}
                    </div>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    {project.gallery.length > 0 && (
                      <button
                        className="text-link"
                        type="button"
                        onClick={() =>
                          onSelectProject(project)
                        }
                      >
                        Explorar projeto

                        <Icon
                          name="arrow"
                          size={19}
                        />
                      </button>
                    )}
                  </div>
                </article>
              ))}
            </motion.div>
          </div>

          <button
            className="carousel-arrow carousel-arrow--side carousel-arrow--previous"
            type="button"
            onClick={showPreviousProject}
            aria-label="Projeto anterior"
          >
            <Icon name="arrow" size={22} />
          </button>

          <button
            className="carousel-arrow carousel-arrow--side carousel-arrow--next"
            type="button"
            onClick={showNextProject}
            aria-label="Próximo projeto"
          >
            <Icon name="arrow" size={22} />
          </button>
        </div>

        <div className="carousel-controls">
          <div
            className="carousel-dots"
            role="tablist"
            aria-label="Selecionar projeto"
          >
            {projects.map((project, index) => (
              <button
                key={project.id}
                className={
                  index === currentProject
                    ? 'carousel-dot carousel-dot--active'
                    : 'carousel-dot'
                }
                type="button"
                onClick={() => goToProject(index)}
                aria-label={`Ver projeto ${project.title}`}
                aria-selected={
                  index === currentProject
                }
                role="tab"
              />
            ))}
          </div>

          <span className="carousel-counter">
            <strong>
              {String(currentProject + 1).padStart(
                2,
                '0',
              )}
            </strong>

            {' / '}

            {String(projects.length).padStart(
              2,
              '0',
            )}
          </span>
        </div>
      </motion.div>
    </section>
  )
}