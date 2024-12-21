import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CreateBook from './pages/CreateBook'
import DeleteBook from './pages/DeleteBook'
import ShowBook from './pages/ShowBook'
import EditBook from './pages/EditBook'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books/create' element={<CreateBook />} />
        <Route path='/books/delete/:id' element={<DeleteBook />} />
        <Route path='/books/show/:id' element={<ShowBook />} />
        <Route path='/books/edit/:id' element={<EditBook />} />
      </Routes>

    </>
  )
}

export default App
