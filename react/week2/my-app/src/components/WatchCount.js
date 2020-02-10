import React, {useState, useEffect } from 'react'

const WatchCount = () => {

    const [ count, setCount ] = useState(0);
    useEffect(() => {
        const interval =  setInterval(() => setCount(count + 1), 1000)

         return () => {
             clearInterval(interval)
         }

     },[count])
   return (
        <h2>
           You have used {count} seconds on this website
        </h2>
    )
}

export default WatchCount
