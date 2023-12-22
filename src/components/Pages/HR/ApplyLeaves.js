import React from 'react';
import "../HR/Hrstyle.css";

const ApplyLeaves = () => {
  return (
    <>
        <div className="SDheading"><span>HR </span><label> / Staff Leaves / Apply Leaves</label> </div>

<div  className="SDashboard">

<div className='top2'>
<label style={{fontSize:"20px",color:"#474847", marginLeft:"20px"}}>Leave Balances </label>   
<button style={{color:"blue",fontSize:"15px",backgroundColor:"white"}}>HR Academic Month</button>&nbsp; &nbsp;
<button style={{color:"blue",fontSize:"15px",backgroundColor:"white"}}>Payroll Months</button>
 </div>

<div className='applydiv'>
  <div className='tpapply'>
    <select style={{width:"300px",padding:"5px"}}><option>2023-2024</option> <option>2022-2023</option></select>
    <div>
      <button>Request Credit For Compensatory Off</button>
      <button>Apply Leave</button>
    </div>
  </div>
  <div className='btapply'>
  <label style={{fontSize:"15px",color:"#474847", marginLeft:"20px",fontWeight:"600"}}>No Records To Display </label> 
  </div>
</div>


<div className='top2'>
<label style={{fontSize:"20px",color:"#474847", marginLeft:"20px"}}>Leave History </label>   

 </div>

<div className='applydiv'>
  <div className='tpapply'>
    <label><span style={{fontSize:"15px",fontWeight:"600"}}>Academic Year :</span><br></br> 
    <select style={{width:"200px"}}><option>2023-2024</option><option>2022-2023</option></select></label>

    <label><span style={{fontSize:"15px",fontWeight:"600"}}>Leave Type :</span><br></br> 
    <select style={{width:"200px"}}><option>-- All --</option><option>Teaching</option></select></label>
    <button style={{backgroundColor:"blue",color:"white", width:"80px", fontWeight:"600"}}>GET</button>
  </div>
  <div className='btapply'>
  <div>
    <button>Pending</button>
    <button>Aproved</button>
    <button>Reject</button>
  </div>
  </div>
</div>


<div className='applydiv'>
  <div className='tpapply'>
    <label style={{color:"#474847"}}>Leaves Deducted Through Attendance</label>
    
  </div>
  <div className='btapply'>
  <label style={{fontSize:"15px",color:"#474847", marginLeft:"20px",fontWeight:"600"}}>No Records To Display </label> 
  </div>
</div>
  
  
</div>
    </>
  )
}

export default ApplyLeaves;