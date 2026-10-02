import { motion } from 'motion/react'
import { WHATSAPP_URL } from '../config/site'
import { Icon } from './Icon'

export function WhatsAppFloating() {
  return (
    <motion.a
      className="whatsapp-floating"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com Lucas pelo WhatsApp"
      title="Fale comigo pelo WhatsApp"
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, type: 'spring', stiffness: 240, damping: 18 }}
      whileHover={{ y: -5, scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
    >
      <Icon name="whatsapp" size={27} />
    </motion.a>
  )
}
