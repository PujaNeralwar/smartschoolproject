import React from 'react'

const ThermalTemp = () => {
  return (
    <>
        <div className="SDheading"><span>HR </span><label> / Staff Attendance / Staff Thermal Temperature Record Entry  </label> </div>

<div className='top3'>
<label>Face Recognition and Thermal Temperature Record Entry


</label>

</div>

<div  className="SDashboard">
         <div className='top2'>
            <label style={{fontSize:"15px"}}>Note : Only Biometric  and RFID Activated Branches are shown</label>
             
         </div>
        

          <div className='DailyAt'>
             <div>
            
             <select><option>Ethiken Educational Society</option></select>
             </div>  

             <div>
            
             <select style={{width:"250px"}}><option>Staff Name</option>
             <option>Staff Branch Code</option>
             <option>Biometric Code</option>
             <option>ERP Staff Code</option>
             <option>Staff Ref Code</option></select>
             </div>

             <div>
                <input type="text" placeholder='Staff Name (Please Enter min 3 character)' style={{width:"400px"}}></input> 
             </div>
                
             <button style={{backgroundColor:"blue",color:"#fff",marginTop:"18px"}}>Get Staff</button>
             
          </div>

        

        

        </div>

    </>
  )
}

export default ThermalTemp;