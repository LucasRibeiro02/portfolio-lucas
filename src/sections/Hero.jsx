import { motion } from 'motion/react'
import { reveal, stagger, staggerItem } from '../config/motion'
import { Icon } from '../components/Icon'
import { SocialLinks } from '../components/SocialLinks'

const technologies = ['React', 'JavaScript', 'C#', '.NET', 'Power Platform', 'PostgreSQL']

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow" aria-hidden="true" />

      <motion.div className="hero-copy" {...stagger}>
        <motion.p className="availability" {...staggerItem}>
          <i aria-hidden="true" /> Disponível para novos projetos
        </motion.p>
        <motion.p className="hero-kicker" {...staggerItem}>Olá, eu sou Lucas Ribeiro</motion.p>
        <motion.h1 {...staggerItem}>Transformo problemas em <em>soluções digitais.</em></motion.h1>
        <motion.p className="hero-text" {...staggerItem}>
          Desenvolvo sistemas, automações e experiências digitais que simplificam processos e geram resultados reais.
        </motion.p>
        <motion.div className="hero-actions" {...staggerItem}>
          <a className="button button--primary" href="#projects">Conheça meu trabalho <Icon name="arrow" size={19} /></a>
          <a className="button button--ghost" href="/Curriculo-Lucas.pdf" target="_blank" rel="noreferrer">Ver currículo <Icon name="external" size={18} /></a>
        </motion.div>
        <motion.div {...staggerItem}><SocialLinks /></motion.div>
      </motion.div>

      <motion.div className="hero-visual" {...reveal} transition={{ ...reveal.transition, delay: 0.15 }}>
        <motion.div className="tech-panel" animate={{ y: [0, -7, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
          <div className="tech-panel__bar">
            <div className="window-dots"><i /><i /><i /></div>
            <span>🟦/in/lucas-ribeiro1</span>
            <span className="tech-panel__status"><i /> online</span>
          </div>
          <div className="tech-panel__body">
            <div className="code-line"><span className="line-number">01</span><span><span className="code-muted">&lt;</span><span className="code-purple">developer</span><span className="code-muted">&gt;</span></span></div>
            <div className="code-line code-line--indent"><span className="line-number">02</span><span className="code-white">Construindo sistemas para</span></div>
            <div className="code-line code-line--indent"><span className="line-number">03</span><strong>simplificar processos.<span className="typing-cursor">_</span></strong></div>
            <div className="code-line"><span className="line-number">04</span><span><span className="code-muted">&lt;/</span><span className="code-purple">developer</span><span className="code-muted">&gt;</span></span></div>
          </div>
          <div className="tech-stack">{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
          <div className="tech-panel__footer"><span>MEUPORTFOLIO.JSX</span><span>UTF-8</span></div>
        </motion.div>
        <div className="floating-card floating-card--top"><span>Foco atual</span><strong>Web &amp; Automação</strong></div>
        <div className="floating-card floating-card--bottom"><span>Experiência</span><strong>Suporte &amp; Sistemas</strong></div>
        <span className="orbit orbit--one" /><span className="orbit orbit--two" />
      </motion.div>

      <a className="scroll-hint" href="#about"><span>Role para explorar</span><i /></a>
    </section>
  )
}
