import React from 'react'
import MainRoutes from './routes/MainRoutes'
import { useMatch } from 'react-router-dom'
import Navbar from './components/students/Navbar';

const App = () => {

  const isEducatorRoute = useMatch('/educator/*');

  return (
    <div className='text-default min-h-screen bg-white dark:bg-gray dark:text-white'>
      {!isEducatorRoute && <Navbar/>}
      <MainRoutes/>
      
    </div>
  )
}

export default App