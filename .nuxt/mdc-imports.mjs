import _RemarkEmoji from 'remark-emoji'
import _Highlight from 'E:/Portfolio/node_modules/.pnpm/@nuxtjs+mdc@0.18.3_magicast@0.5.1/node_modules/@nuxtjs/mdc/dist/runtime/highlighter/rehype-nuxt.js'

export const remarkPlugins = {
  'remark-emoji': { instance: _RemarkEmoji },
}

export const rehypePlugins = {
  'highlight': { instance: _Highlight, options: {} },
}

export const highlight = {"theme":{"light":"github-light","default":"github-dark","dark":"github-dark"}}