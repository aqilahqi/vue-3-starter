import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('https://api.example.com/message', () => {
    return HttpResponse.json({ message: 'Hello World(MSW)!', tip: 'Add test data using MSW!' })
  })
]
