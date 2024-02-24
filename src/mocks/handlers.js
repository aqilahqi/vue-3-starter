import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('https://api.example.com/message', () => {
    return HttpResponse.json({ title: 'Hello EKCO!', body: "I've completed the test!" })
  }),
  http.get('http://localhost:5173/features', () => {
    return HttpResponse.json({
      features: [
        {
          id: 1,
          icon: 'Documentation',
          title: 'Documentation',
          body: `Vue’s <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a> provides you with all information you need to get started.`
        },
        {
          id: 2,
          icon: 'Tooling',
          title: 'Tooling',
          body: `This project is served and bundled with <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">Vite</a>. The
    recommended IDE setup is <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a> + <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener">Volar</a>. If
    you need to test your components and web pages, check out <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a> and
    <a href="https://on.cypress.io/component" target="_blank">Cypress Component Testing</a>. <br />More instructions are available in <code>README.md</code>.`
        },
        {
          id: 3,
          icon: 'Ecosystem',
          title: 'Ecosystem',
          body: `Get official tools and libraries for your project:
                  <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
                  <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
                  <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
                  <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. If
                  you need more resources, we suggest paying
                  <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
                  a visit.`
        },
        {
          id: 4,
          icon: 'Community',
          title: 'Community',
          body: `Got stuck? Ask your question on
                  <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>, our official
                  Discord server, or
                  <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener"
                    >StackOverflow</a
                  >. You should also subscribe to
                  <a href="https://news.vuejs.org" target="_blank" rel="noopener">our mailing list</a> and follow
                  the official
                  <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
                  twitter account for latest news in the Vue world.`
        },
        {
          id: 1,
          icon: 'Support',
          title: 'Support Vue',
          body: `As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.`
        }
      ]
    })
  })
]
