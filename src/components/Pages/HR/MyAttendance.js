import React from 'react'

const MyAttendance = () => {
  return (
<>
<div className="SDheading"><span>HR </span><label> / Staff Attendance / My Attendance </label> </div>

<div  className="SDashboard">
         <div className='daTop'>
            <div className='dailyButton'>
                <button>My Attendance</button>
                <button>My Team Attendance</button>
                <button>My Peers</button>
                
            
              <select style={{marginLeft:"400px",marginRight:"20px",backgroundColor:"#d9dbde"}}><option>Ethiken Educational Society</option></select>
              <input type='date'></input>
              
            </div>  
         </div>
        

        <div className='atdiv'> 
        

       
      
       </div>
       <div className='labeldiv'>
        <label>No Data Found</label>
       </div>

        

        </div>
</>
  )
}

export default MyAttendance;