import express, { Router } from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import billRouter from './resources/bill/bill.router'
import userRouter from './resources/user/user.router'

const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/api/bill', billRouter)
app.use('/api/user', userRouter)

export const start = () => {
  app.listen(3000, () => {
    console.log('Server started on port 3000')
  })
}
