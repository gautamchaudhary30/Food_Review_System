import React, { useEffect, useState } from 'react'
import api from "../../api/axiosConfig"
import "./WatchList.css"

const WatchList = () => {

    const [resturant,setResturant] = useState();

    const getAllResturat = async () =>{
        try {
            const reposne = await api.get("/api/v1/foods");
            setResturant(reposne.data);
            console.log("The watch list",reposne);
        }
        catch(err){
            console.log(err);
        }
    }
    console.log(resturant);
useEffect(()=>{
    getAllResturat();
})
  return (
    <div>
      {/* <h1>Watch list of the file</h1> */}
        {
            resturant?.map((e) => {
                return (
                  
                  <div className='cardContainer' >
                         <h2>{e.title}</h2><hr/>
                         <img className='poster' src={e.poster} />
                   </div>
                )
            })
        }
    </div>
  )
}

export default WatchList
