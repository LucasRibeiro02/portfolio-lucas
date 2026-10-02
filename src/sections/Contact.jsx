import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'motion/react'
import { Icon } from '../components/Icon'
import { reveal } from '../config/motion'
import { WHATSAPP_URL } from '../config/site'

export function Contact() {

  const [status, setStatus] = useState('idle')

  async function handleSubmit(event) {
    event.preventDefault()

    const form = event.currentTarget

    try {
      setStatus('sending')

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      )

      form.reset()
      setStatus('success')
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error)
      setStatus('error')
    }
  }

  return (
    <section className="contact section" id="contact">
      <motion.div className="contact-box" {...reveal}>
        <span className="eyebrow">03 / Contato</span>
        <h2>Tem uma ideia?<br /><span>Vamos tirá-la do papel.</span></h2>
        <p className="contact-description">Estou aberto a projetos, oportunidades e boas conversas sobre tecnologia.</p>

        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="contact-name">Nome</label>
              <input id="contact-name" name="name" type="text" placeholder="Como você se chama?" autoComplete="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">E-mail</label>
              <input id="contact-email" name="email" type="email" placeholder="seuemail@exemplo.com" autoComplete="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Mensagem</label>
              <textarea id="contact-message" name="message" placeholder="Conte um pouco sobre sua ideia ou oportunidade..." rows="6" required />
            </div>
            <motion.button
              className="contact-submit"
              type="submit"
              disabled={status === 'sending'}
              whileHover={status !== 'sending' ? { y: -3 } : undefined}
              whileTap={status !== 'sending' ? { scale: 0.98 } : undefined}
            >
              {status === 'sending' ? 'Enviando...' : 'Enviar mensagem'}

              {status !== 'sending' && <Icon name="arrow" size={19} />}
            </motion.button>

            {status === 'success' && (
              <p className="form-feedback form-feedback--success" role="status">
                Mensagem enviada com sucesso! Em breve entrarei em contato.
              </p>
            )}

            {status === 'error' && (
              <p className="form-feedback form-feedback--error" role="alert">
                Não foi possível enviar a mensagem. Tente novamente ou fale pelo WhatsApp.
              </p>
            )}

          </form>

          <div className="contact-direct">
            <span className="contact-direct-label">Contato rápido</span>
            <h3>Prefere conversar diretamente?</h3>
            <p>Clique no botão abaixo e fale comigo pelo WhatsApp.</p>
            <motion.a className="whatsapp-contact-button" href={WHATSAPP_URL} target="_blank" rel="noreferrer" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
              <Icon name="whatsapp" size={20} /> Falar pelo WhatsApp
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
