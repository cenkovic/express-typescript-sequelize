import express, {Express} from 'express'
import './dotenv'
import logger from 'morgan'
const app: Express = express()
const port = process.env.PORT


app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/ping', (req, res) => {
  res.json({ pong: true })
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
