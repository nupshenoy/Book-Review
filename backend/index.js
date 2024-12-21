import express from "express";
import { mongoDBURL, PORT } from "./config.js";
import mongoose from "mongoose";
import BooksRoute from './routes/BooksRoute.js'
import cors from 'cors'

const app = express();

app.use(express.json())
app.use(cors())

app.use('/books', BooksRoute)

app.get('/', (req, res) => {
  res.send("Hello world")
})




mongoose.connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database")
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}...`)
    })
  })
  .catch((error) => {
    console.log(error)
  })