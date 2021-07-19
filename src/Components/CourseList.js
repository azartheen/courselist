import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const CourseList = (props) => {
  const [users, setUser] = useState([])

  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers = async () => {
    const result = await axios.get('http://localhost:3003/users')
    setUser(result.data.reverse())
  }

  return (
    <div className='courselist' style={{ height: 'auto', padding: '2rem' }}>
      <h1>List of Courses Available</h1>
      <p>
        You may choose any courses that you like and click on the Enquiry Button
        for more info about that course
      </p>
      <br />
      <div class='courselisttable'>
        <table class='table table-hover'>
          <thead style={{ background: 'black', color: 'white' }}>
            <tr>
              <th scope='col'>No</th>
              <th scope='col'>Course Code</th>
              <th scope='col'>Course Name</th>
              <th scope='col'>More Website</th>
              <th scope='col'>More Info</th>
            </tr>
          </thead>
          <tbody>
            {users.map((users, index) => (
              <tr>
                <th scope='row'>{index + 1}</th>
                <td>{users.course_code}</td>
                <td>{users.course_name}</td>
                <td>{users.website}</td>
                <td>
                  <Link class='btn btn-primary' type='button' to={`/form`}>
                    Enquiry
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CourseList
