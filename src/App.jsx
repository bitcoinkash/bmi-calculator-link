// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.scss'
import BmiForm from './Components/BmiForm'
import Header from './Components/Header'
import Result from './Components/Result'

import { useState } from 'react'

import './app1.css'
// import './App.scss'

export default function App () {

  //usestate

  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("") // useState is a function that returns an array with two elements. The first element is the state value, and the second element is a function to update the state value. 
  const [result, setResult] = useState("")

  return (
<div id="root">
    <div className="container">
      <Header />
      
      <BmiForm 
      height={height}
      setHeight={setHeight}
      weight={weight}     
      setWeight={setWeight}
      setResult={setResult} 
      />

      <Result 
        result={result}
  
      />
    </div>

  </div>
  )
  }


