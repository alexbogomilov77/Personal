const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection
connection.once('open', () => {
  console.log("MongoDB database connection established successfully")
})

const carsRouter = require('./routes/cars')
const fixesRouter = require('./routes/fixes')
const problemsRouter = require('./routes/problems')
const actionsRouter = require('./routes/actions')
const partsRouter = require('./routes/parts')

app.use('/cars', carsRouter)
app.use('/fixes', fixesRouter)
app.use('/problems', problemsRouter)
app.use('/actions', actionsRouter)
app.use('/parts', partsRouter)

app.listen(port, () => {
  console.log(`Server is running on port:${port}`)
})
