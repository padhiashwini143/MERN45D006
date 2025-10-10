import './App.css'
import Dashboard from './component/Dashboard'
import Home from './component/Home'

function App() {

  let ab=80;
  function A() {}

  return (
    <div>
      This is My app Page
      {/* Component calling */}
      <Home a={2} str="string" arr={[1,2,3,4]} obj={{name:"xyz",age:20}}/>
      {/* Component calling */}
      <Dashboard a={a}/>
    </div>
  )
}

export default App