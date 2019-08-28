import express from 'express'
import bodyParser from 'body-parser'
import routes from './api'
const app = express()

app.use(bodyParser.json())
app.use(routes)

module.exports = app
