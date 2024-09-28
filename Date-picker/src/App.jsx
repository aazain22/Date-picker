import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecurrenceProvider } from './context/RecurrenceContext'
import RecurrenceForm from './components/RecurrenceForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div>

<RecurrenceProvider>
<RecurrenceForm/>
  </RecurrenceProvider>
</div>
    </>
  )
}

export default App
