const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()

const auth = require('./routes/auth')
const cinema = require('./routes/cinema')

mongoose.set('strictQuery', false)
mongoose
	.connect(process.env.DATABASE, { autoIndex: true })
	.then(() => {
		console.log('mongoose connected!')
	})
	.catch((err) => console.log(err))

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: true, credentials: true }))

app.use('/auth', auth)
app.use('/cinema', cinema)

const port = process.env.PORT || 8080

app.listen(port, () => console.log(`start server in port ${port}`))
