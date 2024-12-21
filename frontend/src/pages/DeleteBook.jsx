import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import BackButton from '../components/BackButton'

const DeleteBook = () => {

  const [loading, setLoading] = useState(false)
  const nav = useNavigate();
  const { id } = useParams();

  const handleDelete = () => {
    setLoading(true)
    axios.delete(`http://localhost:3000/books/${id}`)
      .then(() => {
        setLoading(false)
        nav('/')
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }


  return (
    <div>
      <BackButton />

      <h1 className='m-8'>Edit Book</h1>
      {loading && <Spinner />}

      <div className="container mx-auto border-[1px] border-sky-400 rounded-lg w-[500px] p-4 text-center">
        <h1 className='mb-2'>Are you sure you want to delete this book?</h1>
        <button onClick={handleDelete} className='bg-red-600 w-full text-white p-2 my-2'>Yes, I am sure</button>

      </div>
    </div>
  )
}

export default DeleteBook
