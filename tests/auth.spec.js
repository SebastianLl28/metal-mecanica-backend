import { expect } from '@jest/globals'
import app from '../src/app'
import request from 'supertest'

describe('POST /api/auth/login', () => {
  it('should return 200 OK', async () => {
    const user = {
      email: 'admin@admin.com',
      password: '123456789'
    }
    const response = await request(app).post('/api/auth/login').send(user)
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('token')
  })

  it('should return 401 Unauthorized', async () => {
    const user = {
      email: 'admin@admin.com',
      password: '1234567891'
    }
    const response = await request(app).post('/api/auth/login').send(user)
    expect(response.status).toBe(401)
    expect(response.body).toHaveProperty(
      'message',
      'Incorrect email or password'
    )
  })

  describe('should return 400 Bad Request for invalid inputs', () => {
    it('should return 400 Bad Request for missing email', async () => {
      const user = {
        password: '123456789'
      }
      const response = await request(app).post('/api/auth/login').send(user)
      expect(response.status).toBe(400)
      expect(response.body).toBeInstanceOf(Array)
      expect(response.body).toContainEqual({
        path: 'email',
        message: 'Required'
      })
    })

    it('should return 400 Bad Request for missing password', async () => {
      const user = {
        email: 'admin@admin.com'
      }
      const response = await request(app).post('/api/auth/login').send(user)
      expect(response.status).toBe(400)
      expect(response.body).toBeInstanceOf(Array)
      expect(response.body).toContainEqual({
        path: 'password',
        message: 'Required'
      })
    })

    it('should return 400 Bad Request for missing email and password', async () => {
      const user = {}
      const response = await request(app).post('/api/auth/login').send(user)
      expect(response.status).toBe(400)
      expect(response.body).toBeInstanceOf(Array)
      expect(response.body).toContainEqual(
        {
          path: 'email',
          message: 'Required'
        },
        {
          path: 'password',
          message: 'Required'
        }
      )
    })

    it('should return 400 Bad Request for invalid email', async () => {
      const user = {
        email: 'admin',
        password: '123456789'
      }
      const response = await request(app).post('/api/auth/login').send(user)
      expect(response.status).toBe(400)
      expect(response.body).toBeInstanceOf(Array)
      expect(response.body).toContainEqual({
        path: 'email',
        message: 'Invalid email'
      })
    })
  })
})
