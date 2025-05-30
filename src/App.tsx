import { useState } from 'react'
import './App.css'
import ListComponent from './components/ListComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>THE React Todo App</h1>
      <ListComponent />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
