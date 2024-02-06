"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
const [mainTask, setmainTask] = useState([])
  const submitHandler=(e)=>{
e.preventDefault()
setmainTask([...mainTask, {title,desc}])

settitle("")
setdesc("")
console.log(mainTask)

  }
const deleteHandler=(i)=>{
  let copytask=[...mainTask]
  copytask.splice(i,1)
  setmainTask(copytask)
}

  let renderTask=<h2>No Task Available</h2>
 if(mainTask.length>0){
  renderTask= mainTask.map((t,i)=>{
    return (
    <li key={i} className='flex items-center justify-between mb-8'>
      <div className=' w-2/3'>
      <h4 className='text-3xl font-semibold'>{t.title}</h4>
      <p className='text-xl'>{t.desc}</p>
      
       </div>
       <button  onClick={()=>{deleteHandler(i)} }className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
    </li>
    
 )})
 }

  return (
    <>
    <h1 className='bg-black text-white p-5 text-5xl font-bold text-center' >My ToDo List</h1>
    
<form onSubmit={submitHandler}>

<input type="text" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2 ' placeholder='Enter title here'
value={title}
onChange={(e)=>{
settitle(e.target.value)
}}
/>

<input type="text" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2 'placeholder='Add description here'
value={desc}
onChange={(e)=>{
  setdesc(e.target.value)
}}
/>
<button className='bg-black text-white px-4 py-3 text-2xl rounded font-bold m-5'>Add Task</button>
</form>
<hr/>
<div className='p-8 bg-slate-200'>
  <ul>
    {renderTask}
  </ul>
</div>
    </>
  )
}

export default page