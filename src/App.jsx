import { useState } from 'react'
import Routes from './routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes />
  )
}

export default App
