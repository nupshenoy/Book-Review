import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Spinner from '../components/Spinner'

const Home = () => {

  const [loading, setLoading] = useState(false)
  const [books, setBooks] = useState([])

  // const fetchData = async () => {
  //   const res = await fetch('http://localhost:3000/books')
  //   const data = await res.json()
  //   // setBooks(data)
  // }


  // useEffect(() => {
  //   fetch('http://localhost:3000/books')
  //     .then((res) => res.json())
  //     .then(data => setBooks(data))
  // }, [])

  useEffect(() => {
    setLoading(true)
    axios
      .get('http://localhost:3000/books')
      .then((res) => {
        setBooks(res.data.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }, [])


  return (
    <div className='p-8'>
      <div className="navbar flex justify-between items-center">
        <h1 className='text-3xl '>Books List</h1>
        <Link to='/books/create' className='flex items-center gap-2 text-sky-800'>
          <IoIosAddCircleOutline className='text-4xl' /> Add Book
        </Link>
      </div>

      <div className="books mt-8">
        {loading && <Spinner />}
        <table className='w-full border-separate border-spacing-2 '>
          <thead >
            <tr >
              <th className='border-slate-400 border-[1px] rounded-lg'>No</th>
              <th className='border-slate-400 border-[1px] rounded-lg '>Title</th>
              <th className='border-slate-400 border-[1px] rounded-lg'>Author</th>
              <th className='border-slate-400 border-[1px] rounded-lg'>Publish Year</th>
              <th className='border-slate-400 border-[1px] rounded-lg'>Options</th>
            </tr>
          </thead>

          <tbody>
            {
              books.map((item, index) => {

                return < tr key={item._id} className='text-center even:bg-amber-100 odd:bg-blue-100'>
                  <td className='p-1 border-[1px] rounded-lg'>{index + 1}</td>
                  <td className='border-[1px] rounded-lg'>{item.title}</td>
                  <td className=' border-[1px] rounded-lg'>{item.author}</td>
                  <td className=' border-[1px] rounded-lg'>{item.publishYear}</td>
                  <td className='text-center border-[1px] rounded-lg'>
                    <ul className='flex justify-center gap-x-3 text-2xl'>
                      <li className='text-yellow-700'>
                        <Link to={`/books/show/${item._id}`}>
                          <IoMdInformationCircleOutline />
                        </Link>
                      </li>
                      <li className='text-sky-600'>
                        <Link to={`/books/edit/${item._id}`} >
                          <FaEdit />
                        </Link>
                      </li>
                      <li className='text-red-600'>
                        <Link to={`/books/delete/${item._id}`} >
                          <MdDelete />
                        </Link>
                      </li>
                    </ul>
                  </td>

                </tr>
              })
            }
          </tbody>

        </table>
      </div>
    </div >
  )
}

export default Home
