import { expect } from '@jest/globals'
import app from '../src/app'
import request from 'supertest'

describe('GET /healthcheck', () => {
  it('should return 200 OK', async () => {
    const response = await request(app).get('/healthcheck').send()
    expect(response.status).toBe(200)
  })
})
