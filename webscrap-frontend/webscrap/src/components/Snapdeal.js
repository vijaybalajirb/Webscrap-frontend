import React, { useEffect, useState } from 'react'

const Snapdeal = () => {

    const [data,setdata]=useState([])
  
   
    useEffect(()=>{
        const data = async() => {
            let details=await fetch("https://pacific-beach-21152.herokuapp.com/snapdeal")
            let res = await details.json()
            setdata(res)
            
          }
          data()
      },[])
  
console.log(data[0])
return(
    <div>
        
    </div>
)
  

}
export default Snapdeal;