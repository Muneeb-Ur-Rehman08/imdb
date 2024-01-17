'use client'

import { useEffect } from "react"

export default function Error({ error, reset}) {
    
    useEffect(() => {
        console.log(error)
    },[])
    
    return (
        <div className="text-center mt-10">
            <h1>Somthing Went Wrong</h1>
            <button onClick={reset} className="hover:text-amber-600">Try Again</button>
        </div>
    )
}