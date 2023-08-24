import React from 'react'
import StudentRegistrationForm from './StudentCrud/StudentRegistrationForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './StudentCrud/Home'
import DisplayStudent from './StudentCrud/DisplayStudent'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Home/>
      <Routes>
      
        <Route path='/register' element={<StudentRegistrationForm/>}></Route>
        <Route path='/display' element={<DisplayStudent/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App