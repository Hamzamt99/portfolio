import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Services from '../services/Services'
import Main from '../main/Main'


export default function Router() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Main/>}/>
        <Route exact path='#services' element={<Services/>}/>
      </Routes>
    </div>
  )
}
