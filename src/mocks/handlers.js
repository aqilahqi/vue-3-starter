import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('https://api.example.com/message', () => {
    return HttpResponse.json({ message: 'Hello World(MSW)!', tip: 'Add test data using MSW!' })
  }),
  http.get('http://localhost:5173/features', () => {
    return HttpResponse.json({
      features: [
        {
          id: 1,
          icon: 'Documentation',
          title: 'Documentation',
          body: '<>Vue’s <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a> provides you with all information you need to get started.</>'
        }
      ]
    })
  })
]
