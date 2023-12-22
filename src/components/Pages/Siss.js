import React from 'react'
import "../common/Header.css";
import { useState } from 'react';

//import DashboardSis from './dashboard/Dashboard';


import TeacherManagement from './HR/TeacherManagement';
import Bankaccount from './SIS/Bankaccount'


import Assignlanguage from './SIS/Assignlanguage';
import StudentDetails from './SIS/StudentDetails';
import StudentBShuffling from './SIS/StudentBShuffling';
import HomePage from './SIS/HomePage';

// import StaffTrainingPD from './HR/StaffTrainingPD';
// import UpdateStaffDetails from './HR/UpdateStaffDetails';
// import GiveDailyAttendance from './HR/GiveDailyAttendance';
// import DailyAttendanceReport from './HR/DailyAttendanceReport';
// import StaffWFHAttendance from './HR/StaffWFHAttendance';
// import MyAttendance from './HR/MyAttendance';
// import StaffAttendanceTimeMod from './HR/StaffAttendanceTimeMod';
// import ThermalTemp from './HR/ThermalTemp';
// import ManageSAttendance from './HR/ManageSAttendance';
// import MonthlyAttendanceR from './HR/MonthlyAttendanceR';
// import AssignWFHStaff from './HR/AssignWFHStaff';
// import StaffAModification from './HR/StaffAModification';
// import DailyBioAttendanceR from './HR/DailyBioAttendanceR';
// import LateComeEleaving from './HR/LateComeEleaving';
// import PayrollBioAttendanceR from './HR/PayrollBioAttendanceR';
// import MAttendanceR from './HR/MAttendanceR';
// import StaffBioBetDate from './HR/StaffBioBetDate';
// import StaffBioCode from './HR/StaffBioCode';
// import StaffMAReport from './HR/StaffMAReport';
// import StaffBioABDates from './HR/StaffBioABDates';
// import StaffHolidays from './HR/StaffHolidays';
// import UpdateStaffMLeaves from './HR/UpdateStaffMLeaves';
// import ApplyLeaveFStaff from './HR/ApplyLeaveFStaff';
// import ApplyLeaves from './HR/ApplyLeaves';
// import AproveLeaves from './HR/AproveLeaves';
// import AproveStaffCOCR from './HR/AproveStaffCOCR';



const Siss = () => {

  const closeAdmin = () => setShowDiv(false);

  const [click, setClick] = useState(false);
 
  
  //const[dashboardsis,setDashboard]= useState(true);
  
//   const[absentSummary,setAbsentSummary]= useState(false);
//   const[quickaction,setQuickAction]= useState(false);
//   const[leaveanalytics,setLeaveAnalytics] =useState(false);
//   const[homepage,setHomePage]= useState(false);
//   const[studentdetails,setStudentDetails] =useState(false);
// const[studentbranchshuffeling,Studentbranchshuffeling]=useState(false)
  
  const[hrdashborad,setHrdashboard] =useState(true);



  const [showDiv, setShowDiv] = useState(false);
  const [showSisPage, setShowPage] =useState(false);
  // const [showPage1, setShowPage1] =useState(false);
  const handleMouseEnter = (e) => {
    // e.target.style.background = "grey"
    setShowDiv(e);
  }
  const handleMouseLeave = e => {
    // e.target.style.background = "maroon"
    // setShowDiv(false);
  }

  // const handleClick = (e) => {
  //   setActive(e.target.id);
    
    
  // }
 const handleOnClick = (event) => {
  setShowPage(event);
 }

//  const handleClickON1 = (event1) => {
//   setShowPage1(event1);
//  }

 

  const EnrollmentMenu = () => {
    return(
      <>
       <div>
        {/* <div className='modal-wrapper'></div>  */}
     <div className="userContainer1">
     <div className='crossicon'> 
        <label>Enrollments</label>
        <i class="fa-solid fa-xmark" style={{color:"#fff"}} onClick={closeAdmin}></i>
     </div>
      <div className='details'>

       <div className='divbutt'>
       <button onClick={() => {handleOnClick('1');setShowDiv(false);setHrdashboard(false) ;}}>Student Details</button>
       <button onClick={() => {handleOnClick('2');setShowDiv(false);setHrdashboard(false) ;}}>Class Group Photos</button>
       <button onClick={() => {handleOnClick('3');setShowDiv(false);setHrdashboard(false) ;}}>Update Student  Details</button>
       <button onClick={() => {handleOnClick('4');setShowDiv(false);setHrdashboard(false) ;}}>Email Syntax Validator</button>

       <button onClick={() => {handleOnClick('5');setShowDiv(false);setHrdashboard(false) ;}}>Student Class/Section Shufling</button>
       <button onClick={() => {handleOnClick('6');setShowDiv(false);setHrdashboard(false) ;}}>Student Branch Shuffling</button>

       </div>

       <div className='divbutt'>
       <button  onClick={() => {handleOnClick('7');setShowDiv(false);setHrdashboard(false) ;}}>Aprove Shuffling Request</button>
       <button onClick={() => {handleOnClick('8');setShowDiv(false);setHrdashboard(false) ;}}>Assign Language</button>
       <button onClick={() => {handleOnClick('9');setShowDiv(false);setHrdashboard(false) ;}}>student Groups</button>
       <button onClick={() => {handleOnClick('10');setShowDiv(false);setHrdashboard(false) ;}}>Assign Sub Groups to students</button>

       <button onClick={() => {handleOnClick('11');setShowDiv(false);setHrdashboard(false) ;}}>Assign Segment to students</button>
       <button onClick={() => {handleOnClick('12');setShowDiv(false);setHrdashboard(false) ;}}>Parent Book Account details</button>

       </div>
       
       <div className='divbutt'>
       <button onClick={() => {handleOnClick('13');setShowDiv(false);setHrdashboard(false) ;}}>Pramoting Studnts</button>
       <button onClick={() => {handleOnClick('14');setShowDiv(false);setHrdashboard(false) ;}}>Map Students to staff</button>
       <button onClick={() => {handleOnClick('15');setShowDiv(false);setHrdashboard(false) ;}}>Manage Profile photos</button>
       <button onClick={() => {handleOnClick('16');setShowDiv(false);setHrdashboard(false) ;}}>Student Profile Cards</button>

       <button onClick={() => {handleOnClick('17');setShowDiv(false);setHrdashboard(false) ;}}>Anecdotes Entry</button>

       </div>
      </div>

     </div> 
        
        </div> 
      </>
    );
  }

  const AttendanceMenu = () => {
    return(
      <>
       <div>
        {/* <div className='modal-wrapper'></div>  */}
     <div className="userContainer1">
     <div className='crossicon'> 
        <label>Attendance</label>
        <i class="fa-solid fa-xmark" style={{color:"#fff"}} onClick={closeAdmin}></i>
     </div>
      <div className='details'>
      <div className='divbutt'>
       <button onClick={() => {handleOnClick('18');setShowDiv(false);setHrdashboard(false) ;}}>Attendance Timings</button>
       <button onClick={() => {handleOnClick('19');setShowDiv(false);setHrdashboard(false) ;}}>Give Daily Attendance</button>
       <button onClick={() => {handleOnClick('20');setShowDiv(false);setHrdashboard(false) ;}}>Update Student Absentees</button>
       </div>

       <div className='divbutt'>
       <button onClick={() => {handleOnClick('21');setShowDiv(false);setHrdashboard(false) ;}}>Student Monthly Attendance</button>
       <button onClick={() => {handleOnClick('22');setShowDiv(false);setHrdashboard(false) ;}}>Send SMS to Absent students</button>
       <button onClick={() => {handleOnClick('23');setShowDiv(false);setHrdashboard(false) ;}}>Student Leave intimation Report</button>
       </div> 
       
       <div className='divbutt'>
       <button onClick={() => {handleOnClick('24');setShowDiv(false);setHrdashboard(false) ;}}>Period wise Attendance</button>
       <button onClick={() => {handleOnClick('25');setShowDiv(false);setHrdashboard(false) ;}}>Attendance for Professional Student</button>
       <button onClick={() => {handleOnClick('26');setShowDiv(false);setHrdashboard(false) ;}}>Online Classes Monthly Attendance</button>
       </div> 
      </div>
       
        </div>

     </div> 
        
      
      </>
    );
  }


  const TimeTableMenu = () => {
    return(
      <>
       <div>
        {/* <div className='modal-wrapper'></div>  */}
     <div className="userContainer1">
     <div className='crossicon'> 
        <label>Timetable</label>
        <i class="fa-solid fa-xmark" style={{color:"#fff"}} onClick={closeAdmin}></i>
     </div>
      <div className='details'>
      <div className='divbutt'>
       <button onClick={() => {handleOnClick('27');setShowDiv(false);setHrdashboard(false) ;}}>Timetable Structure</button>
       {/* <button onClick={() => {handleOnClick('18');setShowDiv(false);setHrdashboard(false) ;}}>Daily Biometric Attendance Report</button>
       <button onClick={() => {handleOnClick('19');setShowDiv(false);setHrdashboard(false) ;}}>Late Comers-Early Leaving</button> */}
       {/* <button onClick={() => {handleOnClick('20');setShowDiv(false);setHrdashboard(false) ;}}>Aprove Staff Attendance Regularizations</button> */}
       </div>

       <div className='divbutt'>
       <button onClick={() => {handleOnClick('28');setShowDiv(false);setHrdashboard(false) ;}}>Teacher Management</button>
       {/* <button onClick={() => {handleOnClick('21');setShowDiv(false);setHrdashboard(false) ;}}>Modified Attendance Report</button>
       <button onClick={() => {handleOnClick('22');setShowDiv(false);setHrdashboard(false) ;}}>Staff Biometric Between Dates</button> */}
       
       </div> 
       
      
           
       
        </div>

     </div> 
        
        </div> 
      </>
    );
  }

  const PTMMenue = () => {
    return(
      <>
       <div>
        {/* <div className='modal-wrapper'></div>  */}
     <div className="userContainer1">
     <div className='crossicon'> 
        <label>PTM</label>
        <i class="fa-solid fa-xmark" style={{color:"#fff"}} onClick={closeAdmin}></i>
     </div>
      <div className='details'>
      <div className='divbutt'>
       <button onClick={() => {handleOnClick('26');setShowDiv(false);setHrdashboard(false) ;}}>Shedule PTM</button>
       </div>

       <div className='divbutt'>
       <button onClick={() => {handleOnClick('29');setShowDiv(false);setHrdashboard(false) ;}}>PTM Feedback</button>
     
       </div> 
       
       <div className='divbutt'>
       <button onClick={() => {handleOnClick('31');setShowDiv(false);setHrdashboard(false) ;}}>PTM Communication</button>
       
       </div> 
       
        </div>

     </div> 
        
        </div> 
      </>
    );
  }

  const ApprovelMenu = () => {
    return(
      <>
       <div>
        {/* <div className='modal-wrapper'></div>  */}
     <div className="userContainer1">
     <div className='crossicon'> 
        <label>Approvels</label>
        <i class="fa-solid fa-xmark" style={{color:"#fff"}} onClick={closeAdmin}></i>
     </div>
      <div className='details'>
      <div className='divbutt'>
       <button onClick={() => {setShowDiv(false);}}>Approvel Inactive/ Reactive request</button>
      
      
       </div>

       <div className='divbutt'>

       <button>Approve Student Registration</button>
     
       </div> 
       
       
       
        </div>

     </div> 
        
        </div> 
      </>
    );
  }

  const StudentDocuMenue = () => {
    return(
      <>
       <div>
        {/* <div className='modal-wrapper'></div>  */}
     <div className="userContainer1">
     <div className='crossicon'> 
        <label>Student Documents</label>
        <i class="fa-solid fa-xmark" style={{color:"#fff"}} onClick={closeAdmin}></i>
     </div>
      <div className='details'>
      <div className='divbutt'>
       <button onClick={() => {handleOnClick('26');setShowDiv(false);setHrdashboard(false) ;}}>Existing Student Documents</button>
       </div>

       <div className='divbutt'>
       <button onClick={() => {handleOnClick('29');setShowDiv(false);setHrdashboard(false) ;}}>New Students Documents</button>
     
       </div> 
       
       <div className='divbutt'>
       <button onClick={() => {handleOnClick('31');setShowDiv(false);setHrdashboard(false) ;}}>Fee Contract</button>
       
       </div> 
       
        </div>

     </div> 
        
        </div> 
      </>
    );
  }



  // const HrDashboard = () => {
  //   return(
  //     <>
     
  //      <div className='dashmain1'> 
        

       
  //      </div>

  //     </>
  //   );
  // }





  return (
    <>
       <div className='flexSB'>
        <ul className={click ? "mobile-nav" : "flexSBhr "} onClick={() => setClick(false)}>
            
            <li onMouseEnter={() => handleMouseEnter('1')} onMouseLeave={handleMouseLeave}>Enrollment</li>  
            <li onMouseEnter={() => handleMouseEnter('2')} onMouseLeave={handleMouseLeave}>Attendence </li> 
            <li onMouseEnter={() => handleMouseEnter('3')}>TimeTable</li>
            <li onMouseEnter={() => handleMouseEnter('4')}>PTM</li>
            <li onMouseEnter={() => handleMouseEnter('5')}>Approvals</li>
            <li onMouseEnter={() => handleMouseEnter('6')}>Student Document</li>
            <li onMouseEnter={() => handleMouseEnter('7')}>Report</li>
            </ul>
            {showDiv === '1' && <EnrollmentMenu/>}
            {showDiv === '2' && <AttendanceMenu/>}
            {showDiv === '3' && <TimeTableMenu/>}
            {showDiv === '4' && <PTMMenue/>}
            {showDiv === '5' && <ApprovelMenu/>}
             {showDiv === '6' && <StudentDocuMenue />}
            

       </div>

       <div className='dashmain'>
       {hrdashborad && <HomePage/>}
       {showSisPage === '1' && <StudentDetails/>}
       {showSisPage === '4' && <TeacherManagement/>}
       {showSisPage === "6" &&  <StudentBShuffling/>}
       {showSisPage ==='12' && <Bankaccount/>}
       {showSisPage === '8' && <Assignlanguage/>}
       {/* {showPage === '5' && <Studentbranchshuffeling/>} */}
       {/* {showPage === '4' && <StaffTrainingPD/>}
       {showPage === '5' && <UpdateStaffDetails/>}
       {showPage === '7' && <GiveDailyAttendance/>}
       {showPage === '8' && <MyAttendance/>}
       {showPage === '9' && <ManageSAttendance/>}
       {showPage === '10' && <DailyAttendanceReport/>}
       {showPage === '11' && <StaffAttendanceTimeMod/>}
       {showPage === '12' && <MonthlyAttendanceR/>}
       {/* {showPage === '11'} */}
       {/* {showPage === '14' && <StaffWFHAttendance/>} */}
       {/* {showPage === '15' && <ThermalTemp/>} */}
       {/* {showPage === '16' && <AssignWFHStaff/>} */}
       {/* {showPage === '17' && <StaffAModification/>} */}
       {/* {showPage === '18' && <DailyBioAttendanceR/>} */}
       {/* {showPage === '19' && <LateComeEleaving/>} */}
       {/* {showPage === '20' && <PayrollBioAttendanceR/>} */}
       {/* {showPage === '21' && <MAttendanceR/>} */}
       {/* {showPage === '22' && <StaffBioBetDate/>} */}
       {/* {showPage === '23' && <StaffBioCode/>} */}
       {/* {showPage === '24' && <StaffMAReport/>} */}
       {/* {showPage === '25' && <StaffBioABDates/>} */}
       {/* {showPage === '26' && <StaffHolidays/>} */}
       {/* {showPage === '27' && <ApplyLeaves/>} */}
       {/* {showPage === '28' && </>}  */}
       {/* {showPage === '29' && <UpdateStaffMLeaves/>} */}
       {/* {showPage === '30' && <AproveLeaves/>} */}
       {/* {showPage === '31' && <ApplyLeaveFStaff/>} */}
       {/* {showPage === '32' && <AproveStaffCOCR/>}  */}






       

       </div>
        
    </>
  )
}

export default Siss;