import React from 'react'

const LateComeEleaving = () => {
  return (
    <>
        <div className="SDheading"><span>HR </span><label> / Biometric Attendance / Late Comers - Early Leaving</label> </div>

<div className='top3'>
<label>Late Comers -Early Leaving
<button style={{border:"none", fontWeight:"600"}}>How it Work ?</button>
</label>


</div>

<div  className="SDashboard">
 <div className='top2'>
    <label style={{fontSize:"15px",color:"#474847"}}><sapn style={{color:"black"}}>Note : </sapn>Only Biometric Activated Branches will be shown</label>
     
 </div>


  <div className='DailyAt'>
     <div>
     <label> Branch </label>
     <select><option>Ethiken Educational Society</option></select>
     </div>

     

     <div>
     <label> Staff Department </label>
     <select style={{width:"250px"}}><option>- All -</option>
     <option>Teaching</option>
     <option>Non-Teaching</option>
     <option>Transport</option>
     <option>Administration</option></select>
     </div>

     <div>
                <label>Type</label>
                <select><option>Last 7 Days</option><option>Last 30 Days</option></select>
             </div>
     
     
    
        
     <button style={{backgroundColor:"blue",color:"#fff",marginTop:"40px"}}>Show Report</button>
     
  </div>





</div>

    </>
  )
}

export default LateComeEleaving;