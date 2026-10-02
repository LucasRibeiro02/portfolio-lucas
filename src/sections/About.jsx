import { motion } from 'motion/react'
import { Icon } from '../components/Icon'
import { SectionTitle } from '../components/SectionTitle'
import { reveal } from '../config/motion'

const skills = [
  {
    number: '01',
    title: 'Desenvolvimento Web',
    technologies:
      'React · JavaScript · HTML · CSS · ASP.NET Core · C#',
    description:
      'Criação de interfaces responsivas e sistemas web completos.',
  },
  {
    number: '02',
    title: 'Automação & Power Platform',
    technologies:
      'Power Apps · Power Automate · SharePoint · Teams',
    description:
      'Automação de processos, aprovações e aplicações empresariais.',
  },
  {
    number: '03',
    title: 'Dados & Banco de Dados',
    technologies:
      'PostgreSQL · SQL Server · Power BI · Entity Framework',
    description:
      'Organização, consulta e visualização de informações para apoiar decisões.',
  },
  {
    number: '04',
    title: 'Suporte & Infraestrutura',
    technologies:
      'Help Desk · Windows · Linux · Redes · Integrações',
    description:
      'Diagnóstico de problemas, atendimento ao usuário e sustentação de sistemas.',
  },
]

export function About() {
  return (
    <section
      className="about section"
      id="about"
    >
      <SectionTitle eyebrow="01 / Sobre mim">
        Tecnologia com visão de{' '}
        <span>negócio.</span>
      </SectionTitle>

      <div className="about-grid">
        <motion.div
          className="about-copy"
          {...reveal}
        >
          <p className="lead">
            Sou profissional de tecnologia e
            desenvolvedor em formação, com
            experiência em suporte técnico,
            automação de processos e
            desenvolvimento de sistemas. Essa
            combinação me ensinou a compreender
            primeiro o problema para, então,
            construir a solução adequada.
          </p>

          <p>
            Transformo necessidades reais em
            soluções funcionais — de automações
            com Power Platform a aplicações web
            completas. Busco evoluir
            continuamente, escrever código mais
            organizado e criar experiências que
            realmente façam sentido para quem
            utiliza.
          </p>

          <a
            className="text-link"
            href="/Curriculo-Lucas.pdf"
            download
          >
            Baixar meu currículo

            <Icon
              name="download"
              size={19}
            />
          </a>
        </motion.div>

        <motion.div
          className="skills"
          {...reveal}
        >
          {skills.map((skill) => (
            <article
              className="skill-card"
              key={skill.number}
            >
              <span>
                {skill.number} / {skill.title}
              </span>

              <strong>
                {skill.technologies}
              </strong>

              <p>{skill.description}</p>
            </article>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="stats"
        {...reveal}
      >
        <div>
          <strong>3+</strong>
          <span>projetos apresentados</span>
        </div>

        <div>
          <strong>Web + Automação</strong>
          <span>Soluções integradas</span>
        </div>

        <div>
          <strong>∞</strong>
          <span>aprendizado contínuo</span>
        </div>
      </motion.div>
    </section>
  )
}