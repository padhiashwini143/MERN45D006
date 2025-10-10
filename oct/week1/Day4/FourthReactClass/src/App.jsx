import { useState } from "react"
import './App.css'
import axios from "axios"
import { useEffect } from "react"


function App() {

  const [data,setData]=useState([])

  const obj={
    name:"xyz",
    age:20,
    title:"this is my title"
  }

  const getData  = async() => {
    try {
      const res=await axios.get("https://jsonplaceholder.typicode.com/posts/1",obj);
      console.log(res?.data)
    }catch(error) {
      console.log("error catched",error)

    }
  }

  // console.log("data are",data)

  
  useEffect(() => {
    getData()
  },[])
  return (
    <div>

      <ul>
        {
          data?map((obj) =>
          (
            <li key={obj.id}>{obj.title}</li>
          )
          )
        }
      </ul>
    </div>
  )
}

export default App
