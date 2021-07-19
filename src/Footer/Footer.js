import React from 'react'

const Footer = () => {
  return (
    <footer
      class='page-footer font-small unique-color-dark pt-4'
      style={{ background: '#141e2f', color: 'white' }}
    >
      <div class='container'>
        <ul class='list-unstyled list-inline text-center py-2'>
          <li class='list-inline-item'>
            <h5 class='mb-1'>See the course NOW</h5>
          </li>
          <li class='list-inline-item'>
            <a
              href='/courselist'
              class='btn btn-primary'
              style={{ color: 'white' }}
            >
              Sign up!
            </a>
          </li>
        </ul>
      </div>
      <div
        class='footer-copyright text-center py-3'
        style={{ background: '#0a0f18', color: 'white' }}
      >
        © 2021 Copyright:
        <a href='/'> khrlrzma</a>
      </div>
    </footer>
  )
}

export default Footer
