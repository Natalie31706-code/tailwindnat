import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className="pt-20">
      <div className="bg-red-600 p-5 text-white text-5xl font-bold text-center h-screen flex flex-col justify-center items-center">
        This page does not exist
        <Link
          to="/home"
          className="rounded-md bg-cyan-500 p-7 text-lg font-semibold text-white shadow hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 mt-10"
        >
        Go Back To Home
       </Link>
      </div>
    </div>
  )
}
