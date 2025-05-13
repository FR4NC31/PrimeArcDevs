import React, { useEffect } from 'react'

function error() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
      document.title = "Error | PrimeArc Devs";
    }, [])
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-9xl font-bold text-violet-500">404</h1>
      <p className="text-2xl font-poppins mt-4 text-gray-800">Page Not Found</p>
      <p className="text-lg mt-2 text-gray-600">The page you are looking for does not exist.</p>
    </div>
  )
}

export default error

