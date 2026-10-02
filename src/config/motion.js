export const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
}

export const stagger = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.18 },
  variants: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09 } },
  },
}

export const staggerItem = {
  variants: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  },
}
