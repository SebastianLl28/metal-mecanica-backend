import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import {
  authRouter,
  customerRouter,
  categoryRouter,
  productRouter,
  orderRouter,
  orderDetailRouter
} from './router/index.js'

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

app.get('/healthcheck', (req, res) => {
  res.status(200).send('server is running')
})
app.use('/api/auth', authRouter)
app.use('/api/customer', customerRouter)
app.use('/api/category', categoryRouter)
app.use('/api/product', productRouter)
app.use('/api/orderDetail', orderDetailRouter)
app.use('/api/order', orderRouter)

export default app
