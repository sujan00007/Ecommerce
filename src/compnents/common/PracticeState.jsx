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
    <div className="flex items-center gap-4 bg-gradient-to-r from-indigo-50 to-purple-50 px-6 py-4 rounded-xl shadow-lg border border-indigo-100">
      <span className="font-bold text-2xl text-indigo-700 min-w-[3rem] text-center">{count}</span>
      <span className="text-sm font-medium text-gray-600 px-3 py-1 bg-white rounded-full shadow-sm">{name}</span>
      <button
        onClick={increment}
        className="ml-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg px-4 py-2 text-base font-bold hover:from-indigo-700 hover:to-purple-700 transition shadow-md hover:shadow-lg"
      >
        +
      </button>
      <button
        onClick={decrement}
        className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-lg px-4 py-2 text-base font-bold hover:from-gray-200 hover:to-gray-300 transition shadow-md hover:shadow-lg"
      >
        -
      </button>
    </div>
  )
}

export default PracticeState