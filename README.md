# Portfólio — Lucas Ribeiro

Portfólio pessoal desenvolvido com React, Vite e Motion. A interface usa Inter como fonte principal e JetBrains Mono nos detalhes técnicos.

## Executar localmente

```bash
npm install
npm run dev
```

Abra o endereço informado pelo Vite, normalmente `http://localhost:5173`.

## Gerar a versão de produção

```bash
npm run build
npm run preview
```

## Estrutura

- `src/components`: componentes reutilizáveis;
- `src/sections`: seções principais da página;
- `src/config`: links, constantes e configurações de animação;
- `src/data`: conteúdo dos projetos;
- `src/styles`: tokens, base, componentes, seções e responsividade;
- `public`: currículo e imagens públicas.

## Onde editar

- Projetos: `src/data/projects.js`;
- WhatsApp e redes sociais: `src/config/site.js`;
- Cores, fontes e medidas: `src/styles/tokens.css`;
- Animações compartilhadas: `src/config/motion.js`.
