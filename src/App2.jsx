// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.scss'
import BmiForm2 from './Components/BmiForm2'
import Header from './Components/Header'
import Result2 from './Components/Result2'

import { useState } from 'react'

import './app1.css'
import BmiForm2 from './Components/BmiForm2'
// import './App.scss'

export default function App2 () {

  //usestate

  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("") // useState is a function that returns an array with two elements. The first element is the state value, and the second element is a function to update the state value. 
  const [result, setResult] = useState("")

  const [state, setState] = useState({
    height: "",
    weight: "",
    result: ""
  })

  return (
<div id="root">
    <div className="container">
      <Header />
      
      <BmiForm2
      state={state}
        setState={setState}
  
      />

      <Result2 
        state={state}
  
      />
    </div>

  </div>
  )
  }


