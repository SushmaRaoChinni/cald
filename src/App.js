import React, { useState } from "react";
import './App.css'


function Datepicker(){
  const [date, setDate]=useState();

  console.log("Date" , date);

return(
  <>
   <h1>selected Date : {date} </h1>
   <input type= "date" onchange = {e=> setDate(e.target.value)}/>
  </>

);
}

export default Datepicker;