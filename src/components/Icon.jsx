const paths = {
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  close: <><path d="m6 6 12 12M18 6 6 18" /></>,
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  download: <><path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14" /></>,
  external: <><path d="M15 4h5v5M20 4l-9 9M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" /></>,
  github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.5 5.5 0 0 0 19.3 4 5.2 5.2 0 0 0 19.1.5S18 0 15 2a13 13 0 0 0-7 0C5-.1 3.9.5 3.9.5A5.2 5.2 0 0 0 3.7 4a5.5 5.5 0 0 0-1.5 3.8c0 5.3 3.5 6.5 6.8 6.9A4.8 4.8 0 0 0 7.5 18v4M7.5 19c-3 .9-3-1.5-4.2-2" /></>,
  linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z" /><path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /></>,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
  whatsapp: <><path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.5L3 21l1.7-4.7A8.5 8.5 0 1 1 20.5 11.8Z" /><path d="M8.2 7.8c.2-.4.4-.4.7-.4h.4c.1 0 .3 0 .4.4l.8 2c.1.3 0 .5-.1.7l-.6.8c-.2.2-.1.4 0 .6.7 1.2 1.7 2.2 2.9 2.8.2.1.4.1.6-.1l.9-1c.2-.2.4-.2.7-.1l1.9.9c.3.1.4.3.4.5 0 .4-.2 1.2-.6 1.6-.5.5-1.2.8-2 .8-1 0-2.4-.5-4.2-2-2.3-2-3.7-4.5-3.8-5.7 0-.8.2-1.4.6-1.8Z" /></>,
}

export function Icon({ name, size = 22 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}
