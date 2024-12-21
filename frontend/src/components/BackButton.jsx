import React from 'react'

import { IoArrowBackCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';

const BackButton = () => {
  return (
    <div className=' m-8 text-4xl text-sky-600'>
      <Link to="/">
        <IoArrowBackCircle />
      </Link>
    </div>
  )
}

export default BackButton
