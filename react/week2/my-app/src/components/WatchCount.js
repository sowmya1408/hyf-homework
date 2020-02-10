import React, {useState, useEffect } from 'react'

const WatchCount = () => {

    const [ count, setCount ] = useState(0);
    useEffect(() => {
        const timer =  setTimeout(() => setCount(count + 1),1000)
        
         return () => {
             clearTimeout(timer)
         }

     })
   return (
        <h2>
           You have used {count} seconds on this website
        </h2>
    )
}

export default WatchCount
