import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { Icon } from './Icon'

const links = [['home', 'Início'], ['about', 'Sobre'], ['projects', 'Projetos'], ['contact', 'Contato']]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={`header ${scrolled ? 'header--scrolled' : ''}`}
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <a className="logo" href="#home" aria-label="Lucas Ribeiro — início">
        <img
          className="logo__image"
          src="/assets/projects/logoMini.png"
          alt=""
        />
      </a>
      <nav className={open ? 'nav nav--open' : 'nav'} aria-label="Navegação principal">
        {links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
      <a className="header-cta" href="#contact">Vamos conversar <Icon name="arrow" size={18} /></a>
      <button className="menu" onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open}>
        <Icon name={open ? 'close' : 'menu'} />
      </button>
    </motion.header>
  )
}
