import React from 'react'
import { useState } from 'react';
import RoomAllocation from './dashboard/RoomAllocation';
import Dashboard from './dashboard/Dashboard';
import StudentMOM from './dashboard/StudentMOM';
import EmailNotification from './dashboard/EmailNotification';
import Email from './dashboard/Email';
import CreateUser from './dashboard/CreateUser';

import "../Pages/dashboard/Dashboard.css";



const Home = () => {
  const [showDiv, setShowDiv] = useState(false)
 
 
  const [active, setActive] = useState("");
  
  const[dashboard,setDashboard]= useState(true);
  
  const[studentmom, setStudentMom] = useState(false);
  const[roomAllocation,setRoomAllocation] = useState (false);
  const[emailnot,setEmailnot] = useState (false);
  const[email,setEmail] =useState(false);
  const[createuser,setCreateUser] = useState(false);
  


  const handleClick = (e) => {
    setActive(e.target.id);
    
  }

  return (
    <>
      <div className='dashmain'>
      
      <div className='divbutton'>
       <button  key={"1"} className={active === "1" ? "active" : "inactive"} id={"1"}
       onClick={(e) => {handleClick(e);setDashboard(!dashboard);setStudentMom(false); setRoomAllocation(false); setEmailnot(false);setEmail(false);setCreateUser(false);}}>Dashboard</button>
       
       <button key={"2"} className={active === "2" ? "active" : "inactive"} id={"2"}
       onClick={(e) => {handleClick(e);setStudentMom(!studentmom);setDashboard(false); setRoomAllocation(false); setEmailnot(false);setEmail(false);setCreateUser(false);}}>StudentMOM</button>
      
       <button key={"3"} className={active === "3" ? "active" : "inactive"} id={"3"}
        onClick={(e) =>{handleClick(e);setRoomAllocation(!roomAllocation);setDashboard(false);setStudentMom(false); setEmailnot(false);setEmail(false);setCreateUser(false);}}>Room Allocation</button>
       
       <button key={"4"} className={active === "4" ? "active" : "inactive"} id={"4"} 
       onClick={(e) => {handleClick(e);setEmailnot(!emailnot) ;setDashboard(false);setStudentMom(false);setRoomAllocation(false);setEmail(false);setCreateUser(false);}}>Email Notification</button>
      
       <button  key={"5"} className={active === "5" ? "active" : "inactive"} id={"5"}
       onClick={(e) => {handleClick(e);setEmail(!email) ;setDashboard(false);setStudentMom(false);setRoomAllocation(false); setEmailnot(false);setCreateUser(false);}}>Email</button>
       
       <button key={"6"} className={active === "6" ? "active" : "inactive"} id={"6"}
       onClick={(e) => {handleClick(e);setCreateUser(!createuser);setEmail(false);setEmailnot(false) ;setDashboard(false);setStudentMom(false);setRoomAllocation(false);}}>Create User</button>
       
       
       </div>
       <div className='dashmain1'> 
       {dashboard && <Dashboard />}
       {studentmom && <StudentMOM />}
       {roomAllocation && <RoomAllocation />}
       {emailnot && <EmailNotification />}
       {email && <Email />}
       {createuser && <CreateUser />}
       
       </div>
       </div>
       
    </>
  )
}

export default Home;