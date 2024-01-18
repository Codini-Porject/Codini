"use client"

import React from "react"




interface Course {
    desc:string;
    price:number;
    rate:number
  }

  const Create: React.FC = () => {


 return(
    <div>
         <input
                name="name"
                type="text"
                style={{ color: 'black' }}
                required
              />
              <input
                name="name"
                type="text"
                style={{ color: 'black' }}
                required
              /> 
               <input
                name="name"
                type="text"
                style={{ color: 'black' }}
                required
              />
    </div>
 )   


  }

  export default Create;