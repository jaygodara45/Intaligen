import { Portal } from "@mui/material";
import React from "react";
import { Link } from 'react-router-dom'; // If you're using React Router
import Sidebar from "./Sidebar";
import Mastercard from "./Mastercard";
const Productionchartsnew = () => {
    
  
    return (
      //  <div>
      //   <div>Proplan is here!</div>
      //   <Sidebar/>
      //   <Mastercard/>
      // </div>
      <div className="w-full h-[100%] mt-0 flex flex-col">
          {/* <div className=" flex justify-end flex-row bg-red-500 w-[80%]">
      <Mastercard name="Items" imageSrc="items.png"/>
      <Mastercard name="Resources" imageSrc="items.png"/>
      </div> */}
        <Sidebar/>
        <div className="absolute right-0 w-[80%] h-auto flex flex-row flex-wrap px-10 py-10">
          <Mastercard name="Items" imageSrc="items.png" route="/items"/>
          <Mastercard name="Resources" imageSrc="resources.png" route="/labors"/>
          <Mastercard name="Business P.." imageSrc="partners.png" route="/items"/>
          <Mastercard name="Categories" imageSrc="categories.png" route="/items"/>
          
        </div>
        
      
      </div>
      
    
    )
}

export default Productionchartsnew;