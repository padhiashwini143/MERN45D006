import React,{useContext} from 'react'
import { countContext } from '../App'

function Child3() {
    const count=useContext(countContext)
  return (
    <div>Count :{count}</div>
  )
}

export default Child3
