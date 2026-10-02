import { motion } from 'motion/react'
import { socialLinks } from '../config/site'
import { Icon } from './Icon'

export function SocialLinks({ iconSize = 22 }) {
  return (
    <div className="socials">
      {socialLinks.map((social) => (
        <motion.a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          aria-label={social.label}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.94 }}
        >
          <Icon name={social.name} size={iconSize} />
        </motion.a>
      ))}
    </div>
  )
}
