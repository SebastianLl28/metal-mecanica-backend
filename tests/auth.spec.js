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

describe('GET api/auth/verifyToken', () => {
  it('should return 200 OK', async () => {
    const user = {
      email: 'admin@admin.com',
      password: '123456789'
    }
    const responseLogin = await request(app).post('/api/auth/login').send(user)
    const token = responseLogin.body.token
    const response = await request(app)
      .get('/api/auth/verifyToken')
      .set('Authorization', `Bearer ${token}`)
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('message', 'Token is valid')
  })

  it('should return 401 Unauthorized', async () => {
    const response = await request(app)
      .get('/api/auth/verifyToken')
      .set('Authorization', 'Bearer invalidToken')
    expect(response.status).toBe(401)
    expect(response.body).toHaveProperty('message', 'Unauthorized')
  })

  it('should return 401 Unauthorized without token', async () => {
    const response = await request(app).get('/api/auth/verifyToken')
    expect(response.status).toBe(401)
  })
})
