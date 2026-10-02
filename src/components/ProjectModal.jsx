import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Icon } from './Icon'

export function ProjectModal({ project, onClose }) {
  const [currentImage, setCurrentImage] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  const galleryLength = project?.gallery?.length ?? 0

  const goToImage = useCallback(
    (index) => {
      if (!galleryLength) return

      const normalizedIndex =
        (index + galleryLength) % galleryLength

      setCurrentImage(normalizedIndex)
      setIsZoomed(false)
    },
    [galleryLength],
  )

  const showPreviousImage = useCallback(() => {
    goToImage(currentImage - 1)
  }, [currentImage, goToImage])

  const showNextImage = useCallback(() => {
    goToImage(currentImage + 1)
  }, [currentImage, goToImage])

  const handleDragEnd = useCallback(
    (_event, info) => {
      if (isZoomed || galleryLength <= 1) return

      const minimumDistance = 70
      const minimumVelocity = 500

      const movedToLeft =
        info.offset.x < -minimumDistance ||
        info.velocity.x < -minimumVelocity

      const movedToRight =
        info.offset.x > minimumDistance ||
        info.velocity.x > minimumVelocity

      if (movedToLeft) {
        showNextImage()
        return
      }

      if (movedToRight) {
        showPreviousImage()
      }
    },
    [
      galleryLength,
      isZoomed,
      showNextImage,
      showPreviousImage,
    ],
  )

  useEffect(() => {
    setCurrentImage(0)
    setIsZoomed(false)
  }, [project])

  useEffect(() => {
    if (!project) return undefined

    document.body.classList.add('modal-open')

    return () => {
      document.body.classList.remove('modal-open')
    }
  }, [project])

  useEffect(() => {
    if (!project) return undefined

    function handleKeyDown(event) {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        showPreviousImage()
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault()
        showNextImage()
      }

      if (event.key === 'Escape') {
        event.preventDefault()

        if (isZoomed) {
          setIsZoomed(false)
        } else {
          onClose()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener(
        'keydown',
        handleKeyDown,
      )
    }
  }, [
    project,
    isZoomed,
    onClose,
    showPreviousImage,
    showNextImage,
  ])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-label={`Galeria do projeto ${project.title}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.button
            className="modal-backdrop"
            type="button"
            onClick={onClose}
            aria-label="Fechar galeria"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="modal-panel"
            initial={{
              opacity: 0,
              y: 24,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 16,
              scale: 0.98,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <header className="modal-head">
              <div>
                <span>Projeto {project.number}</span>
                <h2>{project.title}</h2>
              </div>

              <div className="modal-head__actions">
                <span className="modal-counter">
                  {String(currentImage + 1).padStart(
                    2,
                    '0',
                  )}
                  {' / '}
                  {String(galleryLength).padStart(
                    2,
                    '0',
                  )}
                </span>

                <button
                  className="modal-close"
                  type="button"
                  onClick={onClose}
                  aria-label="Fechar"
                >
                  <Icon name="close" />
                </button>
              </div>
            </header>

            <div
              className={
                isZoomed
                  ? 'modal-stage modal-stage--zoomed'
                  : 'modal-stage'
              }
            >
              {galleryLength > 1 && (
                <button
                  className="modal-arrow modal-arrow--previous"
                  type="button"
                  onClick={showPreviousImage}
                  aria-label="Imagem anterior"
                >
                  <Icon name="arrow" size={26} />
                </button>
              )}

              <AnimatePresence mode="wait">
                <motion.img
                  key={project.gallery[currentImage]}
                  className={
                    isZoomed
                      ? 'modal-image modal-image--zoomed'
                      : 'modal-image'
                  }
                  src={
                    project.gallery[currentImage]
                  }
                  alt={`${project.title}, imagem ${
                    currentImage + 1
                  }`}
                  onClick={() =>
                    setIsZoomed(
                      (currentZoom) =>
                        !currentZoom,
                    )
                  }
                  drag={
                    isZoomed || galleryLength <= 1
                      ? false
                      : 'x'
                  }
                  dragConstraints={{
                    left: 0,
                    right: 0,
                  }}
                  dragElastic={0.18}
                  onDragEnd={handleDragEnd}
                  initial={{
                    opacity: 0,
                    x: 25,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -25,
                  }}
                  transition={{
                    duration: 0.28,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  title={
                    isZoomed
                      ? 'Clique para remover o zoom'
                      : 'Clique para ampliar'
                  }
                />
              </AnimatePresence>

              {galleryLength > 1 && (
                <button
                  className="modal-arrow modal-arrow--next"
                  type="button"
                  onClick={showNextImage}
                  aria-label="Próxima imagem"
                >
                  <Icon name="arrow" size={26} />
                </button>
              )}
            </div>

            <div className="modal-toolbar">
              <button
                className="modal-zoom-button"
                type="button"
                onClick={() =>
                  setIsZoomed(
                    (currentZoom) =>
                      !currentZoom,
                  )
                }
              >
                {isZoomed
                  ? 'Remover zoom'
                  : 'Ampliar imagem'}
              </button>

              <span>
                Use as setas do teclado para navegar
              </span>
            </div>

            {galleryLength > 1 && (
              <div className="modal-thumbnails">
                {project.gallery.map(
                  (image, index) => (
                    <button
                      key={image}
                      className={
                        index === currentImage
                          ? 'modal-thumbnail modal-thumbnail--active'
                          : 'modal-thumbnail'
                      }
                      type="button"
                      onClick={() =>
                        goToImage(index)
                      }
                      aria-label={`Visualizar imagem ${
                        index + 1
                      }`}
                      aria-current={
                        index === currentImage
                          ? 'true'
                          : undefined
                      }
                    >
                      <img
                        src={image}
                        alt=""
                        loading="lazy"
                      />
                    </button>
                  ),
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}