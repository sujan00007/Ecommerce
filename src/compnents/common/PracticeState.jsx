import React, { useState } from 'react'

function PracticeState() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Sujan")

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }

  return (
    <div className="flex items-center gap-3 bg-white/60 px-3 py-2 rounded-md shadow-sm text-gray-800">
      {count},{name}
      <button
        onClick={increment}
        className="ml-2 bg-indigo-600 text-white rounded px-3 py-1 text-sm hover:bg-indigo-700 transition"
      >
        +
      </button>
      <button
        onClick={decrement}
        className="bg-gray-200 text-gray-800 rounded px-3 py-1 text-sm hover:bg-gray-300 transition"
      >
        -
      </button>
    </div>
  )
}

export default PracticeState