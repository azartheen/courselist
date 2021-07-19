import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Navbar = () => {
  const [user, setUser] = useState([])

  const { id } = useParams()

  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`)
    setUser(result.data.reverse())
  }
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link className='navbar-brand' to='#'>
          Course List
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <NavLink className='nav-link' exact to='/'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' exact to='courselist'>
                Course List
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' exact to={`userenquiry/${user.id}`}>
                User Enquiry
              </NavLink>
            </li>
            {/* <li className='nav-item'>
              <NavLink
                className='nav-link disabled'
                to='#'
                tabindex='-1'
                aria-disabled='true'
              >
                Contact Us
              </NavLink>
            </li> */}
          </ul>
          <form className='form-inline my-2 my-lg-0'>
            <input
              className='form-control mr-sm-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            ></input>
            <button
              className='btn btn-outline-success my-2 my-sm-0'
              type='submit'
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
