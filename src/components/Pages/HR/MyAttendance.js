import React from 'react';
import { useState  } from 'react';

const MyAttendance = () => {

  const [active, setActive] = useState("");
  const [myatt,setMyatt] = useState("");
  const handleOnClick=(e) =>{
    setMyatt(e);
  }
  const handleClick = (e) => {
    setActive(e.target.id);   
  }

  const MyAttendance = () => {
    return (
      <>
        <select>
          <option>January 2024 (1 jan -31 jan)</option>
          <option>December 2023 (1 dec- 31 dec)</option>
        </select> 
      </>
    )
  }
  const Myteam = () => {
    return (
      <>
        <div>
          <p>Ooops!</p>
          <p>No staff are mapped to you for reporting</p>
          <p>*Please map the designations for the reporting process</p>
        </div>
      </>
    )
  }
  const Mypeer = () => {
    return (
      <>
        <div>
          <p>Ooops!</p>
          <p>No staff are mapped to you for reporting</p>
          <p>*Please map the designations for the reporting process</p>
        </div>
      </>
    )
  }

  return (
<>
<div className="SDheading"><span>HR </span><label> / Staff Attendance / My Attendance </label> </div>

<div  className="SDashboard">
         <div className='daTop'>
            <div className='dailyButton'>
            <button className={active === "a" ? "active" : "inactive"} id={"a"} onClick={(e) => {handleClick(e);handleOnClick('a');}}>My Attendance</button>
            <button className={active === "b" ? "active" : "inactive"} id={"b"} onClick={(e) => {handleClick(e);handleOnClick('b');}}>My Team Attendance</button>
            <button className={active === "c" ? "active" : "inactive"} id={"c"} onClick={(e) => {handleClick(e);handleOnClick('c');}}>My Peers</button>
                
            
              <select style={{marginLeft:"400px",marginRight:"20px",backgroundColor:"#d9dbde"}}><option>Ethiken Educational Society</option></select>
              <input type='date'></input>
              
            </div>  
         </div>
        

        <div className='atdiv'> 
       {myatt === 'a' && <MyAttendance/>} 
       {myatt === 'b' && <Myteam/>} 
       {myatt === 'c' && <Mypeer/>} 
       
       
      
       </div>
       <div className='labeldiv'>
        <label>No Data Found</label>
       </div>

        

        </div>
</>
  )
}

export default MyAttendance;