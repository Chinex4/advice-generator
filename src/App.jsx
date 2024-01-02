import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AdviceWrapper from './components/AdviceWrapper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='background w-full flex justify-center items-center px-4 md:px-0 md:pt-0'>
      <AdviceWrapper />
    </div>
  )
}

export default App
