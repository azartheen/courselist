import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'

const Form = () => {
  let history = useHistory()

  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    course_code: '',
    course_name: '',
  })

  const { name, username, email, phone, course_code, course_name } = user

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    await Axios.post('http://localhost:3003/users', user)
    history.push('./')
  }

  return (
    <div
      class='form-group'
      style={{ background: 'white', color: 'black', height: '800px' }}
    >
      <form
        class='text-center border border-light p-5'
        action='#'
        onSubmit={(e) => onSubmit(e)}
      >
        <h1 class='h4 mb-4'>Sign up for the course</h1>
        <p>Please fill up all your details below</p>
        <hr></hr>
        <br />
        <br />
        <div class='form-row mb-4'>
          <div class='col'>
            <input
              type='text'
              id='defaultRegisterFormFirstName'
              class='form-control'
              placeholder='Please Enter Your Name'
              name='name'
              value={name}
              onChange={(e) => onInputChange(e)}
            ></input>
          </div>
          <div class='col'>
            <input
              type='text'
              id='defaultRegisterFormLastName'
              class='form-control'
              placeholder='Please Enter Your Username'
              name='username'
              value={username}
              onChange={(e) => onInputChange(e)}
            ></input>
          </div>
        </div>

        <input
          type='email'
          id='defaultRegisterFormEmail'
          class='form-control mb-4'
          placeholder=' Please Enter Your E-mail'
          name='email'
          value={email}
          onChange={(e) => onInputChange(e)}
        ></input>

        <input
          type='tel'
          id='defaultRegisterPhone'
          class='form-control mb-4'
          placeholder='Please Enter Your Phone Number '
          name='phone'
          value={phone}
          onChange={(e) => onInputChange(e)}
        ></input>

        <input
          type='text'
          id='defaultRegisterCourseCode'
          class='form-control mb-4'
          placeholder='Please Enter Your Course Code eg: TDB5457'
          name='course_code'
          value={course_code}
          onChange={(e) => onInputChange(e)}
        ></input>

        <input
          type='phone'
          id='defaultRegisterCouseName'
          class='form-control mb-4'
          placeholder='Please Enter Your Course Name eg: Artificial Intelligence '
          name='course_name'
          value={course_name}
          onChange={(e) => onInputChange(e)}
        ></input>

        <div class='custom-control custom-checkbox'>
          <input
            type='checkbox'
            class='custom-control-input'
            id='defaultRegisterFormNewsletter'
          ></input>
          <br />
          <br />
          <label
            class='custom-control-label'
            for='defaultRegisterFormNewsletter'
          >
            Subscribe to our newsletter
          </label>
        </div>

        <button class='btn btn-info my-4 btn-block' type='submit'>
          Submit Enquiry
        </button>
      </form>
    </div>
  )
}

export default Form
