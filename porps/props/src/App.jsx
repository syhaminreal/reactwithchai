import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Card from './components/card';// Ensure the component name and path are correct

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username : "shayma",
    age: 22
  }
 let newArr = [1,2,3]
  return (
    <>
      <div className='bg-green-400 text-black p-4 rounded-xl mb-4'>
        <h1>Tailwind test</h1>
      </div>
      <Card  username= "chai aur code"/> {/* Use Card with uppercase */}
      <Card username='shyam' />
    </>
  );
}

export default App;
