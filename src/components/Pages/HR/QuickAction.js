import React from 'react';
import "../HR/Hrstyle.css";
const QuickAction = () => {
  return (
    <>
        <div className='innerdash'>
        <div className='leftinnerdash'>
            <div className='fdiv'>
             On Leave Today<br></br>
             <br></br>
             <br></br>
             <label className='btlabel'>No one is on  leave today</label>
            </div>
            <div className='sdiv'>
             Shift Days :
             <br></br>
             <br></br>
             <div>
             &nbsp; &nbsp; &nbsp;<label className='btlabel'>Check in Time </label>&nbsp; &nbsp; &nbsp; 
             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<label className='btlabel'>Check out Time</label>
             <br></br>
             &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;<label>-</label>&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
             &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;<label>-</label>
             </div>
            </div>
            <div className='tdiv'>
              Working Remotely
              <br></br>
              <br></br>
              <h6>Everyone is at Office</h6>
              <label className='btlabel'>No one is working remote Today</label>
            </div>
        </div>
        <div className='rightinnerdash'>
         <div className='top'>
         <button><i class="fa-solid fa-users fa-fade" style={{color:"#6db305"}}></i>  Staff Wall</button>
         <button><i class="fa-solid fa-users fa-fade" style={{color:"#6db305"}}></i>  Class Wall</button>
         <button><i class="fa-solid fa-pen-to-square fa-fade" style={{color:"#9702c0"}}></i> Feedback & Praises</button>
         <button><i class="fa-solid fa-cake-candles fa-fade" style={{color: "#ff0088"}}></i> Birthdays</button>
         <button><i class="fa-solid fa-users-viewfinder fa-fade" style={{color: "#472598"}}></i> Staff Attendance</button>
         </div>
     
         &nbsp;&nbsp;&nbsp;Note : Latest staff Messages
        </div>

        </div>
    </>
  )
}

export default QuickAction;