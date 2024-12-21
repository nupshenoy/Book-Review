import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import axios from 'axios'

const ShowBook = () => {

  const [loading, setLoading] = useState(false)
  const { id } = useParams()
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishYear, setPublishYear] = useState('')

  useEffect(() => {
    axios.get(`http://localhost:3000/books/${id}`)
      .then((res) => {
        setAuthor(res.data.author)
        setPublishYear(res.data.publishYear)
        setTitle(res.data.title)
      })
  }, [])

  return (
    <div>
      <BackButton />

      <div className="container mx-auto">
        <ul>
          <li>Title: {title}</li>
          <li>Author: {author}</li>
          <li>Publish Year: {publishYear}</li>
        </ul>
      </div>
    </div>
  )
}

export default ShowBook;
