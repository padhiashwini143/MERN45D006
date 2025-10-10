import { createContext, useState } from 'react'
import './App.css'
// import child from '/component/child'
import Navbar from './component/Navbar';

const countContext = createContext();
const colorContext = createContext();

function App() {
  const [count, setCount] = useState(0)
  const[color, setColor] = useState("blue")

  const [data, setData] = useState([])

  // first create the context object
  // add the provider
  // add the value
  // exports the context object

  return (
   <div>
{/*    
    <br />
    <button onClick={()=>setCount(count+1)

    }className='border rounded p-2 bg-black text-white'>
    Increment */}
{/* 
    </button>
    <br />
    <button onClick={()=>setCount(count-1)}>Dec</button>

    <countContext.Provider value={count}>
      <colorContext.Provider value={color}>
      <Child/>
      </colorContext.Provider>
    </countContext.Provider> */}
<Navbar/>
   </div>
  )
}
export {countContext, colorContext}
export default App