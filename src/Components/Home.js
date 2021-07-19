import React from 'react'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img7 from '../assets/img7.jpg'
import './Carousel.css'

const Home = () => {
  return (
    <div>
      <div
        id='carouselExampleIndicators'
        className='carousel slide'
        data-ride='carousel'
      >
        <ol className='carousel-indicators'>
          <li
            data-target='#carouselExampleIndicators'
            data-slide-to='0'
            className='active'
          ></li>
          <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
          <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
        </ol>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img
              id='img1'
              className='d-block w-100'
              src={img3}
              alt='First slide'
            ></img>
          </div>
          <div className='carousel-item'>
            <img
              id='img2'
              className='d-block w-100'
              src={img7}
              alt='Second slide'
            ></img>
          </div>
          <div className='carousel-item'>
            <img
              id='img3'
              className='d-block w-100'
              src={img2}
              alt='Third slide'
            ></img>
          </div>
        </div>
        <a
          className='carousel-control-prev'
          href='#carouselExampleIndicators'
          role='button'
          data-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Previous</span>
        </a>
        <a
          className='carousel-control-next'
          href='#carouselExampleIndicators'
          role='button'
          data-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Next</span>
        </a>
      </div>
      <br></br>
      <div classNameName='title' style={{ height: '100px', padding: '1rem' }}>
        <h1>Welcome to the HomePage of CourseList</h1>
      </div>
      <div classNameName='content' style={{ height: 'auto', padding: '2rem' }}>
        <div className='container'>
          <div className='row'>
            <div className=''></div>
            <div
              className='card'
              style={{
                width: '20rem',
                padding: '1rem',
                margin: '1rem',
                borderRadius: '5rem',
              }}
            >
              <img
                style={{ borderRadius: '5rem' }}
                className='card-img-top'
                src={img7}
                alt=''
              ></img>
              <div className='card-body'>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div
              className='card'
              style={{
                width: '20rem',
                padding: '1rem',
                margin: '1rem',
                borderRadius: '5rem',
              }}
            >
              <img
                style={{ borderRadius: '5rem' }}
                className='card-img-top'
                src={img3}
                alt=''
              ></img>
              <div className='card-body'>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div
              className='card'
              style={{
                width: '20rem',
                padding: '1rem',
                margin: '1rem',
                borderRadius: '5rem',
              }}
            >
              <img
                style={{ borderRadius: '5rem' }}
                className='card-img-top'
                src={img2}
                alt=''
              ></img>
              <div className='card-body'>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <hr />
        <div
          style={{
            background: '#F2F3F4',
            borderRadius: '3rem',
          }}
        >
          {/* <div class='container my-5 z-depth-1'>
            <section class='dark-grey-text'>
              <div class='row pr-lg-5'>
                <div class='col-md-7 mb-4'>
                  <div class='view'>
                    <img
                      src='https://mdbootstrap.com/img/illustrations/graphics(4).png'
                      class='img-fluid'
                      alt=''
                    ></img>
                  </div>
                </div>
                <div class='col-md-5 d-flex align-items-center'>
                  <div>
                    <h3 class='font-weight-bold mb-4'>
                      Material Design Blocks
                    </h3>

                    <p>
                      Lorem ipsum dolor sit amet consectetur adip elit. Maiores
                      deleniti explicabo voluptatem quisquam nulla asperiores
                      aspernatur aperiam voluptate et consectetur minima
                      delectus, fugiat eum soluta blanditiis adipisci, velit
                      dolore magnam.
                    </p>

                    <button
                      type='button'
                      class='btn btn-orange btn-rounded mx-0'
                    >
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div> */}
        </div>
        <div
          style={{
            borderRadius: '3rem',
          }}
        >
          <div class='container my-5 py-5 z-depth-1'>
            <section class='px-md-5 mx-md-5 dark-grey-text text-center text-lg-left'>
              <div class='row'>
                <div class='col-lg-9 mb-2 mb-lg-0'>
                  <img
                    src='https://mdbootstrap.com/wp-content/uploads/2018/06/logo-mdb-jquery-small.png'
                    class='img-fluid mb-5'
                    alt=''
                  ></img>

                  <h3 class='font-weight-bold'>
                    Choosing a right course for your Future !!!
                    <hr></hr>
                  </h3>

                  <p class='text-muted'>
                    Many students find it difficult in choosing what course to
                    take in college. For seniors or graduating high schools
                    students, the pressure goes higher as the end of their term
                    is coming because the time is running and decreasinh for
                    deciding what course will take.
                  </p>
                  <p class='text-muted'>
                    This is the first step in your life as an independent person
                    and this is the first step for your success
                  </p>
                  <p class='text-muted'>
                    <i>
                      Choose the right course for your future by clicking this
                      button
                    </i>
                  </p>

                  <a
                    class='btn btn-primary btn-md ml-0'
                    href='/courselist'
                    role='button'
                  >
                    Start now<i class='fa fa-magic ml-2'></i>
                  </a>
                </div>
                <div class='col-lg-5 mb-4 mb-lg-0 d-flex align-items-center justify-content-center'>
                  <i class='fas fa-gem fa-10x blue-text'></i>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
