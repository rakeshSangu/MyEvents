import './App.css'

import {BrowserRouter,Route, Routes} from 'react-router-dom'

import {Component} from 'react'

import CalendarView from './components/CalendarView'
import NotFound from './components/NotFound'
// Replace your code here
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<CalendarView/>} />
        <Route component={NotFound} />
      </Routes>
      </BrowserRouter>
    )
  }
}

export default App
