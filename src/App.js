import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Components/Home'
import PageNotFound from './PageNotFound/PageNotFound'
import CourseList from './Components/CourseList'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Form from './Components/Form'
import UserEnquiry from './Components/UserEnquiry'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/courselist' component={CourseList} />
          <Route exact path='/userenquiry/:id' component={UserEnquiry} />
          <Route exact path='/form' component={Form} />
          <Route exact path='/*' component={PageNotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
