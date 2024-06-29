import { Outlet, Link } from 'react-router-dom'
import { useState } from 'react'

export default function App() {

  const [example, setExample] = useState('init')

  return (
    <>
      <nav>
        <ul>
          <li><Link to='/' >Home</Link></li>
          <li><Link to='/about' >About</Link></li>
          <li><Link to='/user/1' >User 01</Link></li>
          <li><Link to='/user/2' >User 02</Link></li>
        </ul>
        <p>{example}</p>
      </nav>

      <Outlet context={ {
        setExample: setExample
      } } />
    </>
  )
}