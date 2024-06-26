import 'dotenv/config.js'
import app from './app.js'
import db from './config/db.js'
import multer from 'multer'
import setupSwagger from './config/swagger.js'

multer({ dest: 'src/uploads' })

const connectDB = async () => {
  try {
    await db.authenticate()
    await db.sync()
    console.log('Database connected...')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

connectDB()

setupSwagger(app)

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})
