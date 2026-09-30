/* 404 Page - Displays when a user attempts to access a non-existent route - translate to the language of the user */
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const NotFound = () => {
  const location = useLocation()

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname)
  }, [location.pathname])

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#121218] text-white px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-slate-300 mb-4">Não encontrei esta página.</p>
        <Link to="/" className="text-[#ffd54f] underline">
          Voltar ao meu portfólio
        </Link>
      </div>
    </div>
  )
}

export default NotFound
