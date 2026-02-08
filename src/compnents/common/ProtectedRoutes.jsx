import React, { useEffect } from 'react'
import { useAuth } from '../../Hooks/UseAuth'
import { useNavigate } from 'react-router-dom'

function ProtectedRoutes({children}) {
    
    const{isLoggedIn}=useAuth()
    const navigate=useNavigate()

    useEffect(()=>{
    if(!isLoggedIn){
        navigate("/login")
    }
  },[navigate])
  return children
}

export default ProtectedRoutes
