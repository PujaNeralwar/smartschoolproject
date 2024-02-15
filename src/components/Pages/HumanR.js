import React from 'react'
import "../common/Header.css";
import { useState } from 'react';


import AttendanceSummary from './HR/AttendanceSummary';
import AbsentSummary from './HR/AbsentSummary';
import QuickAction from './HR/QuickAction';
import LeaveAnalytics from './HR/LeaveAnalytics';
import CreateStaffDetails from './HR/CreateStaffDetails';
import TeacherManagement from './HR/TeacherManagement';
import StaffGroups from './HR/StaffGroups';
import StaffTrainingPD from './HR/StaffTrainingPD';
import UpdateStaffDetails from './HR/UpdateStaffDetails';
import GiveDailyAttendance from './HR/GiveDailyAttendance';
import DailyAttendanceReport from './HR/DailyAttendanceReport';
import StaffWFHAttendance from './HR/StaffWFHAttendance';
import MyAttendance from './HR/MyAttendance';
import StaffAttendanceTimeMod from './HR/StaffAttendanceTimeMod';
import ThermalTemp from './HR/ThermalTemp';
import ManageSAttendance from './HR/ManageSAttendance';
import MonthlyAttendanceR from './HR/MonthlyAttendanceR';
import AssignWFHStaff from './HR/AssignWFHStaff';
import StaffAModification from './HR/StaffAModification';
import DailyBioAttendanceR from './HR/DailyBioAttendanceR';
import LateComeEleaving from './HR/LateComeEleaving';
import PayrollBioAttendanceR from './HR/PayrollBioAttendanceR';
import MAttendanceR from './HR/MAttendanceR';
import StaffBioBetDate from './HR/StaffBioBetDate';
import StaffBioCode from './HR/StaffBioCode';
import StaffMAReport from './HR/StaffMAReport';
import StaffBioABDates from './HR/StaffBioABDates';
import StaffHolidays from './HR/StaffHolidays';
import UpdateStaffMLeaves from './HR/UpdateStaffMLeaves';
import ApplyLeaveFStaff from './HR/ApplyLeaveFStaff';
import ApplyLeaves from './HR/ApplyLeaves';
import AproveLeaves from './HR/AproveLeaves';
import AproveStaffCOCR from './HR/AproveStaffCOCR';
import HRDashboard from './HR/HRDashboard';



const HumanR = () => {

  const closeAdmin = () => setShowDiv(false);

  const [click, setClick] = useState(false);
  const [active, setActive] = useState("");
  
  const[dashboard,setDashboard]= useState(true);
  const[attendanceSummary,setAttendaceSummary]= useState(false);
  const[absentSummary,setAbsentSummary]= useState(false);
  const[quickaction,setQuickAction]= useState(false);
  const[leaveanalytics,setLeaveAnalytics] =useState(false);

  
  const[hrdashborad,setHrdashboard] =useState(true);



  const [showDiv, setShowDiv] = useState(false);
  const [showPage, setShowPage] =useState(false);
  // const [showPage1, setShowPage1] =useState(false);
  const handleMouseEnter = (e) => {
    // e.target.style.background = "grey"
    setShowDiv(e);
  }
  const handleMouseLeave = e => {
    // e.target.style.background = "maroon"
    // setShowDiv(false);
  }

  const handleClick = (e) => {
    setActive(e.target.id);
    
    
  }
 const handleOnClick = (event) => {
  setShowPage(event);
 }

//  const handleClickON1 = (event1) => {
//   setShowPage1(event1);
//  }

 

  const StaffdetailsMenu = () => {
    return(
      <>
      
       <div>
       
        {/* <div className='modal-wrapper'></div>  */}
     <div className="userContainer1">
     <div className='crossicon'> 
        <label>Staff Details</label>
        <i class="fa-solid fa-xmark" style={{color:"#fff"}} onClick={closeAdmin}></i>
     </div>
      <div className='details'>

       <div className='divbutt'>
       <button onClick={() => {handleOnClick('1');setShowDiv(false);setHrdashboard(false) ;}}>Create Staff Details</button>
       <button onClick={() => {handleOnClick('2');setShowDiv(false);setHrdashboard(false) ;}}>Teacher Management</button>
       </div>

       <div className='divbutt'>
       <button onClick={() => {handleOnClick('3');setShowDiv(false);setHrdashboard(false) ;}}>Staff Group</button>
       <button onClick={() => {handleOnClick('4');setShowDiv(false);setHrdashboard(false) ;}}>Staff Training and PD</button>
       </div>
       
       <div className='divbutt'>
       <button onClick={() => {handleOnClick('5');setShowDiv(false);setHrdashboard(false) ;}}>Upadate Staff Details</button>
       <button onClick={() => {handleOnClick('6');setShowDiv(false);setHrdashboard(false) ;}}>Continuous Feedback</button>
       </div>
      </div>

     </div> 
        
        </div> 
      </>
    );
  }

  const StaffAttendanceMenu = () => {
    return(
      <>
       <div>
        {/* <div className='modal-wrapper'></div>  */}
     <div className="userContainer1">
     <div className='crossicon'> 
        <label>Staff Attendance Details</label>
        <i class="fa-solid fa-xmark" style={{color:"#fff"}} onClick={closeAdmin}></i>
     </div>
      <div className='details'>
      <div className='divbutt'>
       <button onClick={() => {handleOnClick('7');setShowDiv(false);setHrdashboard(false) ;}}>Give Daily Attendance</button>
       <button onClick={() => {handleOnClick('8');setShowDiv(false);setHrdashboard(false) ;}}>My Attendance</button>
       <button onClick={() => {handleOnClick('9');setShowDiv(false);setHrdashboard(false) ;}}>Manage Staff Attendance Shift & Sessions</button>
       </div>

       <div className='divbutt'>
       <button onClick={() => {handleOnClick('10');setShowDiv(false);setHrdashboard(false) ;}}>Daily Attendance Report</button>
       <button onClick={() => {handleOnClick('11');setShowDiv(false);setHrdashboard(false) ;}}>Staff Attendance Timing Modification</button>
       <button onClick={() => {handleOnClick('12');setShowDiv(false);setHrdashboard(false) ;}}>Monthly Attendance Report</button>
       <button onClick={() => {handleOnClick('13');setShowDiv(false);setHrdashboard(false) ;}}>My Team Attendance</button>
       </div> 
       
       <div className='divbutt'>
       <button onClick={() => {handleOnClick('14');setShowDiv(false);setHrdashboard(false) ;}}>Staff Work From Home Attendance Marking</button>
       <button onClick={() => {handleOnClick('15');setShowDiv(false);setHrdashboard(false) ;}}>Thermal Temperature Record Entry</button>
       <button onClick={() => {handleOnClick('16');setShowDiv(false);setHrdashboard(false) ;}}>Assign Work From Home to Staff</button>
       </div> 
      </div>
       
        </div>

     </div> 
        
      
      </>
    );
  }


  const BioAttendaceMenu = () => {
    return(
      <>
       <div>
        {/* <div className='modal-wrapper'></div>  */}
     <div className="userContainer1">
     <div className='crossicon'> 
        <label>Biometric Attendance</label>
        <i class="fa-solid fa-xmark" style={{color:"#fff"}} onClick={closeAdmin}></i>
     </div>
      <div className='details'>
      <div className='divbutt'>
       <button onClick={() => {handleOnClick('17');setShowDiv(false);setHrdashboard(false) ;}}>Staff Attendance Modification</button>
       <button onClick={() => {handleOnClick('18');setShowDiv(false);setHrdashboard(false) ;}}>Daily Biometric Attendance Report</button>
       <button onClick={() => {handleOnClick('19');setShowDiv(false);setHrdashboard(false) ;}}>Late Comers-Early Leaving</button>
       {/* <button onClick={() => {handleOnClick('20');setShowDiv(false);setHrdashboard(false) ;}}>Aprove Staff Attendance Regularizations</button> */}
       </div>

       <div className='divbutt'>
       <button onClick={() => {handleOnClick('20');setShowDiv(false);setHrdashboard(false) ;}}>Payroll Biometric Attendance Report</button>
       <button onClick={() => {handleOnClick('21');setShowDiv(false);setHrdashboard(false) ;}}>Modified Attendance Report</button>
       <button onClick={() => {handleOnClick('22');setShowDiv(false);setHrdashboard(false) ;}}>Staff Biometric Between Dates</button>
       
       </div> 
       
       <div className='divbutt'>
       <button onClick={() => {handleOnClick('23');setShowDiv(false);setHrdashboard(false) ;}}>Staff Biometric Code</button>
       <button onClick={() => {handleOnClick('24');setShowDiv(false);setHrdashboard(false) ;}}>Staff Monthly Attendance Report</button>
       <button onClick={() => {handleOnClick('25');setShowDiv(false);setHrdashboard(false) ;}}>Staff Biometric Attendance Between Dates</button>
       
      </div>
           
       
        </div>

     </div> 
        
        </div> 
      </>
    );
  }

  const StaffLevesMenu = () => {
    return(
      <>
       <div>
        {/* <div className='modal-wrapper'></div>  */}
     <div className="userContainer1">
     <div className='crossicon'> 
        <label>Staff Leaves Details</label>
        <i class="fa-solid fa-xmark" style={{color:"#fff"}} onClick={closeAdmin}></i>
     </div>
      <div className='details'>
      <div className='divbutt'>
       <button onClick={() => {handleOnClick('26');setShowDiv(false);setHrdashboard(false) ;}}>Staff Holidays</button>
       <button onClick={() => {handleOnClick('27');setShowDiv(false);setHrdashboard(false) ;}}>Apply Leave</button>
       <button onClick={() => {handleOnClick('28');setShowDiv(false);setHrdashboard(false) ;}}>Assign Staff Reporting Managers</button>
       </div>

       <div className='divbutt'>
       <button onClick={() => {handleOnClick('29');setShowDiv(false);setHrdashboard(false) ;}}>Upadate Staff Monthly Leaves</button>
       <button onClick={() => {handleOnClick('30');setShowDiv(false);setHrdashboard(false) ;}}>Aprove Leaves</button>
     
       </div> 
       
       <div className='divbutt'>
       <button onClick={() => {handleOnClick('31');setShowDiv(false);setHrdashboard(false) ;}}>Apply Leaves For Staff</button>
       <button onClick={() => {handleOnClick('32');setShowDiv(false);setHrdashboard(false) ;}}>Aprove Staff off Credit Request</button>
       
       </div> 
       
        </div>

     </div> 
        
        </div> 
      </>
    );
  }

  const StaffTaskMenu = () => {
    return(
      <>
       <div>
        {/* <div className='modal-wrapper'></div>  */}
     <div className="userContainer1">
     <div className='crossicon'> 
        <label>Staff Task Details</label>
        <i class="fa-solid fa-xmark" style={{color:"#fff"}} onClick={closeAdmin}></i>
     </div>
      <div className='details'>
      <div className='divbutt'>
       <button onClick={() => {setShowDiv(false);}}>Staff Task Manager</button>
       <button>Staff  Task Updation</button>
      
       </div>

       <div className='divbutt'>
       <button>My Team Task</button>
       <button>Staff Task Report</button>
     
       </div> 
       
       <div className='divbutt'>
       <button>Staff Task Detailed Report</button>
       
       
       </div> 
      
       
        </div>

     </div> 
        
        </div> 
      </>
    );
  }


  const HrDashboard = () => {
    return(
      <>
      <div className='divbutton'>
       <button  key={"1"} className={active === "1" ? "active" : "inactive"} id={"1"}
       onClick={(e) => {handleClick(e);setDashboard(!dashboard);setQuickAction(false);setAbsentSummary(false);setAttendaceSummary(false);setLeaveAnalytics(false);}}>Dashboard</button>
       
       <button key={"2"} className={active === "2" ? "active" : "inactive"} id={"2"}
       onClick={(e) => {handleClick(e);setAttendaceSummary(!attendanceSummary);setQuickAction(false);setAbsentSummary(false);setDashboard(false); setLeaveAnalytics(false);}}>Attendance Summary</button>
      
       <button key={"3"} className={active === "3" ? "active" : "inactive"} id={"3"}
        onClick={(e) =>{handleClick(e); setAbsentSummary(!absentSummary);setDashboard(false);setAttendaceSummary(false);setQuickAction(false);setLeaveAnalytics(false);}}>Absent Summary</button>
       
       <button key={"4"} className={active === "4" ? "active" : "inactive"} id={"4"} 
       onClick={(e) => {handleClick(e);setQuickAction(!quickaction);setAbsentSummary(false);setDashboard(false);setAttendaceSummary(false);setLeaveAnalytics(false);}} >Quick Actions</button>
      
       <button  key={"5"} className={active === "5" ? "active" : "inactive"} id={"5"}
       onClick={(e) => {handleClick(e);setLeaveAnalytics(!leaveanalytics);setQuickAction(false);setAbsentSummary(false);setDashboard(false);setAttendaceSummary(false);}}>Leaves Analytics</button>
       
       <button key={"6"} className={active === "6" ? "active" : "inactive"} id={"6"}
       onClick={(e) => {handleClick(e);}}>Attendance Analytics</button>
       </div>
       <div className='dashmain1'> 
       {dashboard && <HRDashboard />}
       {attendanceSummary && <AttendanceSummary />}
       {absentSummary && <AbsentSummary/>}
       {quickaction && < QuickAction/>}
       {leaveanalytics && < LeaveAnalytics/>}

       
       </div>

      </>
    );
  }





  return (
    <>
       <div className='flexSB'>
        <ul className={click ? "mobile-nav" : "flexSBhr "} onClick={() => setClick(false)}>
            
            <li onMouseEnter={() => handleMouseEnter('1')} onMouseLeave={handleMouseLeave}>Staff Details</li>  
            <li onMouseEnter={() => handleMouseEnter('2')} onMouseLeave={handleMouseLeave}>Staff Atttendance </li> 
            <li onMouseEnter={() => handleMouseEnter('3')}>Biometric Attendance</li>
            <li onMouseEnter={() => handleMouseEnter('4')}>Feedback</li>
            <li onMouseEnter={() => handleMouseEnter('5')}>Staff Leaves</li>
            <li onMouseEnter={() => handleMouseEnter('6')}>Staff</li>
            <li onMouseEnter={() => handleMouseEnter('7')}>Report</li>
            </ul>
            {showDiv === '1' && <StaffdetailsMenu/>}
            {showDiv === '2' && <StaffAttendanceMenu/>}
            {showDiv === '3' && <BioAttendaceMenu/>}
            {showDiv === '5' && <StaffLevesMenu/>}
            {showDiv === '6' && <StaffTaskMenu/>}

       </div>

       <div className='dashmain'>
       {hrdashborad && <HrDashboard/>}
       {showPage === '1' && <CreateStaffDetails/>}
       {showPage === '2' && <TeacherManagement/>}
       {showPage === '3' && <StaffGroups/>}
       {showPage === '4' && <StaffTrainingPD/>}
       {showPage === '5' && <UpdateStaffDetails/>}
       {showPage === '7' && <GiveDailyAttendance/>}
       {showPage === '8' && <MyAttendance/>}
       {showPage === '9' && <ManageSAttendance/>}
       {showPage === '10' && <DailyAttendanceReport/>}
       {showPage === '11' && <StaffAttendanceTimeMod/>}
       {showPage === '12' && <MonthlyAttendanceR/>}
       {/* {showPage === '11'} */}
       {showPage === '14' && <StaffWFHAttendance/>}
       {showPage === '15' && <ThermalTemp/>}
       {showPage === '16' && <AssignWFHStaff/>}
       {showPage === '17' && <StaffAModification/>}
       {showPage === '18' && <DailyBioAttendanceR/>}
       {showPage === '19' && <LateComeEleaving/>}
       {showPage === '20' && <PayrollBioAttendanceR/>}
       {showPage === '21' && <MAttendanceR/>}
       {showPage === '22' && <StaffBioBetDate/>}
       {showPage === '23' && <StaffBioCode/>}
       {showPage === '24' && <StaffMAReport/>}
       {showPage === '25' && <StaffBioABDates/>}
       {showPage === '26' && <StaffHolidays/>}
       {showPage === '27' && <ApplyLeaves/>}
       {/* {showPage === '28' && </>}  */}
       {showPage === '29' && <UpdateStaffMLeaves/>}
       {showPage === '30' && <AproveLeaves/>}
       {showPage === '31' && <ApplyLeaveFStaff/>}
       {showPage === '32' && <AproveStaffCOCR/>}






       

       </div>
        
    </>
  )
}

export default HumanR;