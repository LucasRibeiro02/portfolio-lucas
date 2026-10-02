import { SocialLinks } from '../components/SocialLinks'

export function Footer() {
  return (
    <footer>
      <a className="logo" href="#home" aria-label="Lucas Ribeiro — voltar ao início">
        <img
          className="logo__image"
          src="/assets/projects/logoMini.png"
          alt=""
        />
      </a>
      <p className="footer-copy">
        © 2026 Lucas Ribeiro. Desenvolvido com React, JavaScript, HTML, CSS,
        Motion e <span>algumas latas de Monster.</span>
      </p>
      <SocialLinks iconSize={20} />
    </footer>
  )
}
