import { useState } from 'react'
import Navbar from './components/Navbar'


function App() {

  const handleEdit=()=>{
    
  }

  const handleDelete=()=>{

  }

  const handleAdd=()=>{

  }


  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className='text-lg font-bold'>Add a To Do</h2>
          <input type="text" className='w-1/2' />
          <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-6'>Add</button>
        </div>
        <h2 className='text-lg font-bold'>Your To Dos</h2>
        <div className="todos">
          <div className="todo flex">
            <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
            <div className="buttons">
              <button onClick={handleEdit} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'>Edit</button>
              <button onClick={handleDelete} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
