import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { authRouter, customerRouter } from './router/index.js'

const app = express()

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  })
)

app.disable('x-powered-by')

app.use(express.json())

app.use(morgan('dev'))

app.use('/api/auth', authRouter)
app.use('/api/customer', customerRouter)

export default app
