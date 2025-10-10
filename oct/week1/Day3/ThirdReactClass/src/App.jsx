import React from 'react'
import Home from '../../../day1/FirstReactClass/src/component/Home'
import About from './component/About'
import GetId from './component/GetId'
import Course from './component/Course'
import Java from './component/Java'

function App() {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/id' element={<GetId/>}></Route>
      <Route path='/course' element={<Course/>}>
      <Route path='java' element={<Java/>}></Route>
        </Route>
        </Routes>

    </div>
  )
}

export default App
