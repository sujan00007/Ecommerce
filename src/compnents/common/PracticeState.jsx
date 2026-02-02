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
    <div className="flex items-center gap-4 bg-white/70 px-4 py-2 rounded-lg shadow text-gray-800">
      <span className="font-semibold text-lg">{count}</span>
      <span className="text-sm text-gray-500">{name}</span>
      <button
        onClick={increment}
        className="ml-2 bg-indigo-600 text-white rounded px-3 py-1 text-sm font-bold hover:bg-indigo-700 transition"
      >
        +
      </button>
      <button
        onClick={decrement}
        className="bg-gray-200 text-gray-800 rounded px-3 py-1 text-sm font-bold hover:bg-gray-300 transition"
      >
        -
      </button>
    </div>
  )
}

export default PracticeState