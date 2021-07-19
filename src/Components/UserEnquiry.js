import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const UserEnquiry = () => {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    course_code: '',
    course_name: '',
  })

  const { id } = useParams()

  useEffect(() => {
    loadUser()
  }, [])

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`)
    setUser(res.data)
  }

  return (
    <div>
      <br />
      <h3>Display Course List as you registered</h3>
      <h5>
        <i>This is only softcopy</i>
      </h5>

      <hr></hr>
      <h3 className=''>User ID : {id}</h3>
      <div
        className='posts'
        style={{
          height: '800px',
          textAlign: 'center',
          width: '1800px',
          margin: '3rem',
          paddingLeft: '4rem',
        }}
      >
        <ul className='list-group '>
          <li className='list-group-item'>name: {user.name}</li>
          <li className='list-group-item'>username: {user.username}</li>
          <li className='list-group-item'>email: {user.email}</li>
          <li className='list-group-item'>phone: {user.phone}</li>
          <li className='list-group-item'>course code: {user.course_code}</li>
          <li className='list-group-item'>course name: {user.course_name}</li>
        </ul>
      </div>
    </div>
  )
}

export default UserEnquiry
