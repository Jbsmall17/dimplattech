'use client'
import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/navigation'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import {app} from "../firebaseConfig"

export function useAuth() {
    const [isAuthenticated,setIsAuthenticated] = useState(false)
    const router = useRouter()
    const auth = getAuth(app)

    useEffect(()=>{
        const subscribe = onAuthStateChanged(auth,(user)=>{
            if(user){
                setIsAuthenticated(true)
            }else{
                setIsAuthenticated(false)
                router.push('/login')
            }
        })
        return ()=> subscribe()
    },[router])

  return isAuthenticated
}
