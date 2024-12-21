import express from "express";

import { Book } from "../models/BookModel.js";

const router = express.Router()

//Save book
router.post("/", async (req, res) => {
  try {
    if (!req.body.title ||
      !req.body.author ||
      !req.body.publishYear
    ) {
      return res.send({
        message: "All the fields are not filled!"
      })
    }

    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear
    }

    const book = await Book.create(newBook)
    return res.send(book)
  }
  catch (error) {
    console.log(error.message)
    res.send({ message: error.message })
  }
})

//Get all books
router.get("/", async (req, res) => {
  try {

    const books = await Book.find({});
    return res.json({ count: books.length, data: books })

  } catch (error) {
    console.log(error.message)
    return res.send({ message: error.message })
  }
})


//Get One Book
router.get("/:id", async (req, res) => {
  try {

    const { id } = req.params

    const book = await Book.findById(id);
    return res.send(book)

  } catch (error) {
    console.log(error.message)
    return res.send({ message: error.message })
  }
})


//Update a Book
router.put('/:id', async (req, res) => {
  try {
    if (!req.body.title ||
      !req.body.author ||
      !req.body.publishYear
    ) {
      return res.send({
        message: "All the fields are not filled!"
      })
    }

    const { id } = req.params

    const result = await Book.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.json({ message: "Book not found!" })
    } else {
      return res.json({ message: "Book updated successfully" })
    }

  } catch (error) {
    console.log(error.message)
    return res.send({ message: error.message })
  }
})


//Delete a Book
router.delete('/:id', async (req, res) => {
  try {

    const { id } = req.params;

    const result = await Book.findByIdAndDelete(id)

    if (!result) {
      return res.json({ message: "unsuccessful" })
    } else {
      return res.json({ message: "successfully deleted" })
    }


  } catch (error) {
    console.log(error.message)
    return res.send({ message: error.message })
  }
})


export default router;