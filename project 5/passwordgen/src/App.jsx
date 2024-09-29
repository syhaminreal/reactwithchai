import { useState } from 'react'

import './App.css'

function App() {
 const [length, setlength]= useState(8)
 const [numberAllowed, setnumberAllowed]= userState(false)
 const [characterAllowed, setCharacterAllowed] = useState(false)
 const [password, setpassword] = useState("")


 const passwordGenerator=() => {
  
 }

  return (
    <>
    <h1 className='text-4xl text-center 
    text-white'> Password Generartor</h1>
    </>
  )
}

export default App
