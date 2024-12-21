import React, { useState } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CreateBook = () => {

  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishYear, setPublishYear] = useState('')
  const navigate = useNavigate();


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
      .post('http://localhost:3000/books', book)
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

      <h1 className='m-8'>Create Book</h1>
      {loading && <Spinner />}

      <div className="container mx-auto border-[1px] border-sky-400 rounded-lg w-[500px]">
        <form method='POST' onSubmit={handleSubmit}>

          <div className="p-2 my-2">
            <p className='text-slate-500'>Title</p>
            <input type='text' className=' border-[1px] border-black rounded-sm w-full h-8'
              value={title}
              onChange={(e) => {
                setTitle(e.target.value)
              }}
            />
          </div>

          <div className="p-2 my-2">
            <p className='text-slate-500'>Author</p>
            <input type='text' className=' border-[1px] border-black rounded-sm w-full h-8'
              value={author}
              onChange={(e) => {
                setAuthor(e.target.value)
              }}
            />
          </div>


          <div className="p-2 my-2">
            <p className='text-slate-500'>Publish Year</p>
            <input type='text' className=' border-[1px] border-black rounded-sm w-full h-8'
              value={publishYear}
              onChange={(e) => {
                setPublishYear(e.target.value)
              }}
            />
          </div>

          <div className=''>
            <button type='submit' className='w-1/4 p-2 m-5 bg-sky-500 text-white'>Add</button>
          </div>


        </form>
      </div>
    </div >
  )
}

export default CreateBook



{/* <div className="flex gap-2">
<div className="flex flex-col text-end">
  <p className='m-4 p-1'>Title</p>
  <p className='m-4 p-1'>Author</p>
  <p className='m-4 p-1'>Publication Year</p>
</div>

<div className='flex flex-col w-1/4'>

  <input type='text' name={book.title} value={book.title} onChange={handleChange} className=' m-4 p-1  border-[1px] border-black rounded-lg' />
  <input type='text' name={book.author} value={book.author} onChange={handleChange} className=' m-4 p-1  border-[1px] border-black rounded-lg' />
  <input type='text' name={book.publishYear} value={book.publishYear} onChange={handleChange} className=' p-1 m-4  border-[1px] border-black rounded-lg' />
</div>
</div> */}