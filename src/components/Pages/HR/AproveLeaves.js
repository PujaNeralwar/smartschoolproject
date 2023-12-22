import React from 'react'

const AproveLeaves = () => {
  return (
    <>
<div className="SDheading"><span>HR </span><label> / Staff Leaves / Approves Leaves</label> </div>

<div className='top3'>
<label>Approves Leave Application
{/* <button style={{border:"none", fontWeight:"600"}}>How it Work ?</button> */}
</label>


</div>

<div  className="SDashboard">



  <div className='DailyAt'>
     <div>
     <label>Select  Branch </label>
     <select><option>Ethiken Educational Society</option></select>
     </div>

     <div>
     <label> Leave Apply Date </label>
     <select style={{width:"150px"}}><option>- Today -</option>
     <option>Last 7 Days</option> <option>Last 15 Days</option></select>
    </div> 
     
     <div>
     <label> Staff Department </label>
     <select style={{width:"150px"}}><option>- All -</option>
     <option>Teaching</option>
     <option>Non-Teaching</option>
     <option>Transport</option>
     <option>Administration</option></select>
     </div>
        
     <button style={{backgroundColor:"blue",color:"#fff",marginTop:"40px" ,width:"60px"}}>Show</button>
     
  </div>

  <div>
      <div>
        <button>Pending Leaves Application</button>
        <button>Recommended / Decision Making Leave Application</button>
        <button>Approved / Rejected Leave Application</button>
      </div>

  </div>
  
</div>
    </>
  )
}

export default AproveLeaves;