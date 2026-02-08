import React, { useState } from 'react'
import { useAuth } from '../../Hooks/UseAuth'
import { useNavigate } from 'react-router-dom'

function LoginForm() {

    const {login,setEmail,setPassword,email,password,fullname,setFullName}=useAuth()
    const navigate=useNavigate()


    function onSubmit(event){
        event.preventDefault()

        console.log("email",email)
        console.log("password",password)
        console.log("fullname",fullname)

        if(email && password){
            login()
            navigate("/")
        }

        setEmail("")
        setPassword("")


    }

    function setEmailFn(event){
        setEmail(event.target.value)
    }
    
    function setPasswordFn(event){  
        setPassword(event.target.value)
    }
    function setFullNameFn(event){
        setFullName(event.target.value)
    }



  return <form onSubmit={onSubmit} className="max-w-md mx-auto bg-white rounded-2xl shadow-2xl p-8 space-y-6 border border-gray-200"> 
  <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Login</h2>
  
  <div className="space-y-2">
    <label className="block text-sm font-semibold text-gray-700">Full Name</label>
    <input type="text" placeholder="Enter your fullname.." onChange={setFullNameFn} value={fullname} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition"/>
  </div>

  <div className="space-y-2">
    <label className="block text-sm font-semibold text-gray-700">Email</label>
    <input type="email" placeholder="Enter your email.." onChange={setEmailFn} value={email} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition"/>
  </div>
  
  <div className="space-y-2">
    <label className="block text-sm font-semibold text-gray-700">Password</label>
    <input type="password" placeholder="Enter your password.." onChange={setPasswordFn} value={password} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition"/>
  </div>

    <button type='submit' className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 transition transform hover:scale-105">Submit</button>
  </form>
  
    
  
}
  
export default LoginForm
