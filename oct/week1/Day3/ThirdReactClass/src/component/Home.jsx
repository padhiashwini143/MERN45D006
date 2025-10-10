import React, { useEffect, useState } from 'react'

import "./Home.css"

function Home() {

  const [count, setCount] = useState(0)


  // !syntax
  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])


  // * this is execute at the first render only
  // useEffect(() => {
  //   alert("this is execute at the first render only")
  // },[])

  // * this is execute at the  every render
  // useEffect(() => {
  //   alert("this is execute at every render")
  // })

  // * this is execute based on dependeincies
  // useEffect(() => {
  //   alert("it will execute when count value update")

  //   return()=>{
  //     alert("it will execute when the state variable unmounted")
  //   }
  // }, [count])

  return (
    <div>

      {/* Home

      <br />
      Count :{count}
      <br />
      <button onClick={() => setCount(count + 1)}> Click</button> */}

      //grid example
      <div className='container'>
        <div className="item item1">1</div>
        <div className="item">2</div>
        <div className="item">3</div>
        <div className="item item4 ">4</div>
        <div className="item item5">5</div>
      </div>
    </div>
  )
}

export default Home