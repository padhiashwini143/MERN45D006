import React from 'react'

function Home(props) {
  return (
    <div>this is the Home page

        value={props=a}
        String value is : {props.str} <br />
        arr is : {props.arr} <br />
        object name:{props.obj.name}
        <br />
        object Age : {props.obj.age}

        {props.fun()}

    </div>
  )
}

export default Home
