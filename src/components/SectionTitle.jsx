import { motion } from 'motion/react'
import { reveal } from '../config/motion'

export function SectionTitle({ eyebrow, children, description }) {
  return (
    <motion.div className="section-title" {...reveal}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{children}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  )
}
