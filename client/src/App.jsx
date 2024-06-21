/* eslint-disable react/react-in-jsx-scope */
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function App() {
  const [data, setData] = useState([]);

   const afunction = async()=>{
       try{
        await axios.get('/api/data').then((res)=>{
         setData(res.data)
        })
       }catch(err){console.error()}
   }

  useEffect(() => {
     afunction()
   
  }, 
  []);

  
 

  return (
   <>
      <Navbar />
      <Body data={data} />
   </>
    
  );
}
