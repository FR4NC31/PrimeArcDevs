import React from 'react'
import Navbar from '../components/navbar'
import { FaFolderOpen } from 'react-icons/fa'

function portfolio() {
  return (
    <div>
      <Navbar />

      <main className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-10">
          <FaFolderOpen className="w-20 h-20 text-violet-500" />
          <h1 className="text-4xl font-bold mt-5">Portfolio</h1>
          <p className="text-lg mt-2">We're currently working on dynamic projects and mobile applications. Stay tuned for updates!</p>
        </div>
      </main>
    </div>
  )
}

export default portfolio

