import React, { useEffect, useState } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const EditBook = () => {

  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishYear, setPublishYear] = useState('')
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    axios.get(`http://localhost:3000/books/${id}`)
      .then((res) => {
        setTitle(res.data.title)
        setAuthor(res.data.author)
        setPublishYear(res.data.publishYear)
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        console.log(err)
      })
  }, [])


  const handleSubmit = (event) => {
    event.preventDefault();


    if (!title || !author || !publishYear) {
      alert('Please fill in all fields.');
      return;
    }
    setLoading(true)

    const book = {
      title,
      author,
      publishYear
    }

    axios
      .put(`http://localhost:3000/books/${id}`, book)
      .then(() => {
        setLoading(false)
        console.log("Navigating to home...")
        navigate('/')
      })
      .catch((err) => {
        setLoading(false)
        console.log(err)
      })

  }



  return (
    <div >

      <BackButton />

      <h1 className='m-8'>Edit Book</h1>
      {loading && <Spinner />}

      <div className="container mx-auto border-[1px] border-sky-400 rounded-lg w-[500px]">
        <form method='POST' onSubmit={handleSubmit}>

          <div className="p-2 my-2">
            <p className='text-slate-500'>Title</p>
            <input type='text' className=' border-[1px] border-black rounded-sm w-full h-8 p-2'
              value={title}
              onChange={(e) => {
                setTitle(e.target.value)
              }}
            />
          </div>

          <div className="p-2 my-2">
            <p className='text-slate-500'>Author</p>
            <input type='text' className=' border-[1px] border-black rounded-sm w-full h-8 p-2'
              value={author}
              onChange={(e) => {
                setAuthor(e.target.value)
              }}
            />
          </div>


          <div className="p-2 my-2">
            <p className='text-slate-500'>Publish Year</p>
            <input type='text' className=' border-[1px] border-black rounded-sm w-full h-8 p-2'
              value={publishYear}
              onChange={(e) => {
                setPublishYear(e.target.value)
              }}
            />
          </div>

          <div className=''>
            <button type='submit' className='w-1/4 p-2 m-5 bg-sky-500 text-white'>Save</button>
          </div>


        </form>
      </div>
    </div >
  )
}

export default EditBook
