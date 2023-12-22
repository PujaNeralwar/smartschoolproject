import React from 'react'
import "../common/Header.css";
import { useState } from 'react';

import Dashboard from './dashboard/Dashboard';
// import AttendenceSummary from './HR/AttendenceSummary';
import AbsentSummary from './HR/AbsentSummary';
import QuickAction from './HR/QuickAction';
import LeaveAnalytics from './HR/LeaveAnalytics';

// manage
import StructureC from './GB/StructureC';
import GbSkills from './GB/GbSkills';
import CoActivityMaster from './GB/CoActivityMaster';
import SubReflection from './GB/SubReflection';
import GradeIndicator from './GB/GradeIndicator';
import ReportcTemplate from './GB/ReportcTemplate';
import ExamPercent from './GB/ExamPercent';
import TermPercent from './GB/TermPercent';
import CardCalc from './GB/CardCalc';
import UpdateMarks from './GB/UpdateMarks';
import ThreeLevel from './GB/ThreeLevel';
import UpdateResult from './GB/UpdateResult';
import ComexamStudent from './GB/ComexamStudent';
import StudentHall from './GB/StudentHall';
import CreateExam from './GB/CreateExam';
import OtherexamMarks from './GB/OtherexamMarks';
import SetEvaluation from './GB/SetEvaluation';
import OtherAnalysis from './GB/OtherAnalysis';
import OtherComprensive from './GB/OtherComprensive';
import OtherexamReport from './GB/OtherexamReport';
import CardPublish from './GB/CardPublish';
import TeacherRemark from './GB/TeacherRemark';
import TestCreation from './GB/TestCreation';
import GraceMarks from './GB/GraceMarks';
import CoScholasticGrades from './GB/CoScholasticGrades';
import SubwiseRemark from './GB/SubwiseRemark';
import UploadSub from './GB/UploadSub';
import StuRemark from './GB/StuRemark';
import TestmEntry from './GB/TestmEntry';
import StuAttendance from './GB/StuAttendance';
import DigitalSign from './GB/DigitalSign';
import KyaApti from './GB/KyaApti';
import MonthlyAtten from './GB/MonthlyAtten';
import AnTestwise from './GB/AnTestwise';
import AevalReport from './GB/AevalReport';
import AnmarkAnalysis from './GB/AnmarkAnalysis';
import AnTerm from './GB/AnTerm';




const GradeBook = () => {

  const closeAdmin = () => setShowDiv(false);

  const [click, setClick] = useState(false);

  // const [active, setActive] = useState("");
  // const[dashboard,setDashboard]= useState(true);
  // const[attendanceSummary,setAttendaceSummary]= useState(false);
  // const[absentSummary,setAbsentSummary]= useState(false);
  // const[quickaction,setQuickAction]= useState(false);
  // const[leaveanalytics,setLeaveAnalytics] =useState(false);
  const [displayedSection, setDisplayedSection] = useState('Storecreation');
const[hrdashborad,setHrdashboard] =useState(true);

  const [showDiv, setShowDiv] = useState(false);
  const [showGrade, setShowGrade] =useState(false);

  const handleMouseEnter = (e) => {
    
    setShowDiv(e);
  }
  const handleMouseLeave = e => {
  
  
  }



  // const handleBook = (e) => {
  //   setActive(e.target.id);
    
    
  // }

  const handleClick = (section) => {
    setDisplayedSection(section);
  };
 const handleOnBook = (event) => {
  setShowGrade(event);
 }

 

  const StaffdetailsMenu = () => {
    return(
      <>
       <div>
        {/* {/ <div className='modal-wrapper'></div>  /} */}
     <div className="userContainer1">
     <div className='crossicon'> 
        <label>Manage</label>
        <i class="fa-solid fa-xmark" style={{color:"#fff"}} onClick={closeAdmin}></i>
     </div>
      <div className='details'>

       <div className='divbutt'>
       <button onClick={() => {handleOnBook('1');setShowDiv(false);setHrdashboard(false) ;}}>Structure Creation</button>
       <button onClick={() => {handleOnBook('2');setShowDiv(false);setHrdashboard(false) ;}}>Grade Book Skills</button>
       </div>

       <div className='divbutt'>
       <button  onClick={() => {handleOnBook('3');setShowDiv(false);setHrdashboard(false) ;}}>CoScholastic Activity Master</button>
       <button onClick={() => {handleOnBook('4');setShowDiv(false);setHrdashboard(false) ;}}>Create Subject Reflections</button>
       </div>
       
       <div className='divbutt'>
       <button onClick={() => {handleOnBook('5');setShowDiv(false);setHrdashboard(false) ;}}>Subject Skills Grade Indicator</button>
       <button onClick={() => {handleOnBook('6');setShowDiv(false);setHrdashboard(false) ;}}>ReportCard Templates</button>
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
        {/* {/ <div className='modal-wrapper'></div>  /} */}
     <div className="userContainer1">
     <div className='crossicon'> 
        <label>Grade Book</label>
        <i class="fa-solid fa-xmark" style={{color:"#fff"}} onClick={closeAdmin}></i>
     </div>
      <div className='details'>
      <div className='divbutt'>
       <button onClick={() => {handleOnBook('b1');setShowDiv(false);setHrdashboard(false) ;}}>Test Creation</button>
       <button onClick={() => {handleOnBook('b2');setShowDiv(false);setHrdashboard(false) ;}}>Copy Test</button>
       <button onClick={() => {handleOnBook('b3');setShowDiv(false);setHrdashboard(false) ;}}>Assign Languages</button>
       <button onClick={() => {handleOnBook('b4');setShowDiv(false);setHrdashboard(false) ;}}>Scholastic Test Marks Entry</button>
       <button onClick={() => {handleOnBook('b5');setShowDiv(false);setHrdashboard(false) ;}}>Subject Wise Grace Marks Entry</button>


       </div>

       <div className='divbutt'>
       <button onClick={() => {handleOnBook('b6');setShowDiv(false);setHrdashboard(false) ;}}>CoScholastic Grades</button>
       <button onClick={() => {handleOnBook('b7');setShowDiv(false);setHrdashboard(false) ;}}>Subject  wise remark</button>
       <button onClick={() => {handleOnBook('b8');setShowDiv(false);setHrdashboard(false) ;}}>Subject wise Reflection Entry</button>
       <button onClick={() => {handleOnBook('b9');setShowDiv(false);setHrdashboard(false) ;}}>Upload Subject wise Reflection</button>
       <button onClick={() => {handleOnBook('b10');setShowDiv(false);setHrdashboard(false) ;}}>Student Remarks</button>

       </div> 
       
       <div className='divbutt'>
       <button onClick={() => {handleOnBook('15');setShowDiv(false);setHrdashboard(false) ;}}>Class Teacher Remarks</button>
       <button onClick={() => {handleOnBook('b12');setShowDiv(false);setHrdashboard(false) ;}}>Term Wise Student  Attendance</button>
       <button onClick={() => {handleOnBook('b13');setShowDiv(false);setHrdashboard(false) ;}}>Digital Signature</button>
       <button onClick={() => {handleOnBook('b14');setShowDiv(false);setHrdashboard(false) ;}}>KYA(Aptitude Tests)</button>
       <button onClick={() => {handleOnBook('b15');setShowDiv(false);setHrdashboard(false) ;}}>Student Monthly Attendance</button>

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
        {/* {/ <div className='modal-wrapper'></div>  /} */}
     <div className="userContainer1">
     <div className='crossicon'> 
        <label>Settings</label>
        <i class="fa-solid fa-xmark" style={{color:"#fff"}} onClick={closeAdmin}></i>
     </div>
      <div className='details'>
      <div className='divbutt'>
       {/* <button onClick={() => {setShowDiv(false);}}>Evaluation Percentages</button> */}
       <button onClick={() => {handleOnBook('21');setShowDiv(false);setHrdashboard(false) ;}}>Evaluation Percentages</button>

       <button onClick={() => {handleOnBook('22');setShowDiv(false);setHrdashboard(false) ;}}>Exam Type Percentage</button>
       <button onClick={() => {handleOnBook('23');setShowDiv(false);setHrdashboard(false) ;}}>Term Percentages</button>
       <button onClick={() => {handleOnBook('24');setShowDiv(false);setHrdashboard(false) ;}}>Remark Publish Settings</button>

       </div>

       <div className='divbutt'>
       <button onClick={() => {handleOnBook('25');setShowDiv(false);setHrdashboard(false) ;}}>Evaluation Report Card Publish Settings</button>
       <button onClick={() => {handleOnBook('26');setShowDiv(false);setHrdashboard(false) ;}}>Term Report Card Publish Settings</button>
       <button onClick={() => {handleOnBook('27');setShowDiv(false);setHrdashboard(false) ;}}>Update Result Status(Pramotion)</button>
       
       </div> 
       
       <div className='divbutt'>
       <button onClick={() => {handleOnBook('28');setShowDiv(false);setHrdashboard(false) ;}}>3 level Calculation Settings</button>
       <button onClick={() => {handleOnBook('29');setShowDiv(false);setHrdashboard(false) ;}}>Update Marks for Report Card</button>
       <button onClick={() => {handleOnBook('30');setShowDiv(false);setHrdashboard(false) ;}}>Term Report Card Calculation Settings</button>
       
      </div>
           
       
        </div>

     </div> 
        
        </div> 
      </>
    );
  }

// Analysis

  const AnalysisMenu = () => {
    return(
      <>
       <div>
        {/* {/ <div className='modal-wrapper'></div>  /} */}
     <div className="userContainer1">
     <div className='crossicon'> 
        <label>Analysis</label>
        <i class="fa-solid fa-xmark" style={{color:"#fff"}} onClick={closeAdmin}></i>
     </div>
      <div className='details'>
      <div className='divbutt'>
       <button onClick={() => {handleOnBook('d1');setShowDiv(false);setHrdashboard(false) ;}}>Test Wise Analysis Report</button>
       <button onClick={() => {handleOnBook('d2');setShowDiv(false);setHrdashboard(false) ;}}>Evaluation Report</button>
       <button onClick={() => {handleOnBook('d3');setShowDiv(false);setHrdashboard(false) ;}}>Evaluation Marks Analysis</button>
       <button onClick={() => {handleOnBook('d4');setShowDiv(false);setHrdashboard(false) ;}}>Term Wise Anlysis Report</button>
       <button onClick={() => {handleOnBook('d5');setShowDiv(false);setHrdashboard(false) ;}}>Exam Marks Report</button>
       <button onClick={() => {handleOnBook('d6');setShowDiv(false);setHrdashboard(false) ;}}>Grade Wise Report</button>

       </div>

       <div className='divbutt'>
       <button onClick={() => {handleOnBook('10');setShowDiv(false);setHrdashboard(false) ;}}>Exam Marks And Grade Report</button>
       <button onClick={() => {handleOnBook('11');setShowDiv(false);setHrdashboard(false) ;}}>Rank Wise Analysis</button>
       <button onClick={() => {handleOnBook('12');setShowDiv(false);setHrdashboard(false) ;}}>Teacher Wise Analysis</button>
       <button onClick={() => {handleOnBook('13');setShowDiv(false);setHrdashboard(false) ;}}>Subject And Class Wise Analysis</button>
       <button onClick={() => {handleOnBook('14');setShowDiv(false);setHrdashboard(false) ;}}>Consolidated Marks Sheet</button>
       <button onClick={() => {handleOnBook('15');setShowDiv(false);setHrdashboard(false) ;}}>CoScholastic Analysis Report</button>


       </div> 
       
       <div className='divbutt'>
       <button>Report Card Analysis</button>
       <button>Student Academic Report</button>
       <button>Student Wise Analysis Report</button>
       <button>GPA Wise Exam Analysis</button>
       <button>3 Level Calculation Settings Analysis Report</button>
       <button>House Group wise Analysis Report</button>

       </div> 
      </div>
       
        </div>

     </div> 
        
      
      </>
    );
  }


// competitive Exam
  const StaffLevesMenu = () => {
    return(
      <>
       <div>
        {/* {/ <div className='modal-wrapper'></div>  /} */}
     <div className="userContainer1">
     <div className='crossicon'> 
        <label>Competitive Exams</label>
        <i class="fa-solid fa-xmark" style={{color:"#fff"}} onClick={closeAdmin}></i>
     </div>
      <div className='details'>
      <div className='divbutt'>
       {/* <button onClick={() => {setShowDiv(false);}}>Competitive Exam Student Result</button> */}
       <button onClick={() => {handleOnBook('51');setShowDiv(false);setHrdashboard(false) ;}}>Competitive Exam Student Result</button>

       
       {/* <button>Apply Leave</button>
       <button>Assign Staff Reporting Managers</button> */}
       </div>

       <div className='divbutt'>
       <button onClick={() => {handleOnBook('52');setShowDiv(false);setHrdashboard(false) ;}}>Student Hall Tickets Report</button>
       {/* <button>Aprove Leaves</button> */}
     
       </div> 
       
       {/* <div className='divbutt'>
       <button>Apply Leaves For Staff</button>
       <button>Aprove Staff off Credit Request</button>
       
       </div>  */}
       
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
        {/* {/ <div className='modal-wrapper'></div>  /} */}
     <div className="userContainer1">
     <div className='crossicon'> 
        <label>Other Exams</label>
        <i class="fa-solid fa-xmark" style={{color:"#fff"}} onClick={closeAdmin}></i>
     </div>
      <div className='details'>
      <div className='divbutt'>
       <button onClick={() => {handleOnBook('61');setShowDiv(false);setHrdashboard(false) ;}}>Create Examinations</button>
       <button onClick={() => {handleOnBook('62');setShowDiv(false);setHrdashboard(false) ;}}>Other Exams Marks Entry Dashboard</button>
       {/* <button>Assign Staff Reporting Managers</button> */}
       </div>

       <div className='divbutt'>
       <button onClick={() => {handleOnBook('63');setShowDiv(false);setHrdashboard(false) ;}}>Other Exam Report Cards</button>
       <button onClick={() => {handleOnBook('64');setShowDiv(false);setHrdashboard(false) ;}}>Other Exams Comprehensive Reports</button>
     
       </div> 
       
       <div className='divbutt'>
       <button onClick={() => {handleOnBook('65');setShowDiv(false);setHrdashboard(false) ;}}>Other Exam Analysis Reports</button>
       {/* <button>Aprove Staff off Credit Request</button> */}
       
       </div> 
      
       
        </div>

     </div> 
        
        </div> 
      </>
    );
  }


//   Report

  const ReportMenu = () => {
    return(
      <>
       <div>
        {/* {/ <div className='modal-wrapper'></div>  /} */}
     <div className="userContainer1">
     <div className='crossicon'> 
        <label>Reports</label>
        <i class="fa-solid fa-xmark" style={{color:"#fff"}} onClick={closeAdmin}></i>
     </div>
      <div className='details'>
      <div className='divbutt'>
       <button onClick={() => {handleOnBook('7');setShowDiv(false);setHrdashboard(false) ;}}>Bulk Report Cards</button>
       <button onClick={() => {handleOnBook('8');setShowDiv(false);setHrdashboard(false) ;}}>Bulk Revaluation Wise Report Card </button>
       <button onClick={() => {handleOnBook('8');setShowDiv(false);setHrdashboard(false) ;}}>Bulk Test Wise Report Card</button>
       <button onClick={() => {handleOnBook('8');setShowDiv(false);setHrdashboard(false) ;}}>Optional Subject Report Card</button>
       <button onClick={() => {handleOnBook('8');setShowDiv(false);setHrdashboard(false) ;}}>Subject Syllabus Report Card</button>
       <button onClick={() => {handleOnBook('8');setShowDiv(false);setHrdashboard(false) ;}}>Marks Entry Status</button>
       <button onClick={() => {handleOnBook('9');setShowDiv(false);setHrdashboard(false) ;}}>Download Hall Tickets</button>
       <button onClick={() => {handleOnBook('8');setShowDiv(false);setHrdashboard(false) ;}}>CCE Exam Results Report</button>


       </div>

       <div className='divbutt'>
       <button onClick={() => {handleOnBook('10');setShowDiv(false);setHrdashboard(false) ;}}>Evaluation wise Bulk Report Card </button>
       <button onClick={() => {handleOnBook('11');setShowDiv(false);setHrdashboard(false) ;}}>Student Consolidated Report Card</button>
       <button onClick={() => {handleOnBook('12');setShowDiv(false);setHrdashboard(false) ;}}>Academic Performance Graphs</button>
       <button onClick={() => {handleOnBook('13');setShowDiv(false);setHrdashboard(false) ;}}>Final Marks Calculation Report</button>
       <button onClick={() => {handleOnBook('13');setShowDiv(false);setHrdashboard(false) ;}}>Overall Result Analysis Report</button>
       <button onClick={() => {handleOnBook('13');setShowDiv(false);setHrdashboard(false) ;}}>Bulk Subject Reflection Report</button>
       <button onClick={() => {handleOnBook('13');setShowDiv(false);setHrdashboard(false) ;}}>Student CoScholastic Skills Details</button>
       <button onClick={() => {handleOnBook('13');setShowDiv(false);setHrdashboard(false) ;}}>Student  Language and Optional Subjects Report</button>


       </div> 
       
       <div className='divbutt'>
       <button>Branch Shuffled Students Report Cards</button>
       <button>Class Exam Topper</button>
       <button> Religious Subjects Report Card</button>
       

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
      {/* <div className='divbutton'> */}
      
      <div className="outer-container">
        <div className="mainp">

        <div className="btna">
            {/* <input  className="inputb dropdown-toggle" type="text" placeholder="Ethiken Education Society"></input> */}
            <div class="dropdown">

            <div className='staffbutza' style={{marginLeft:"1100px", padding:"5px 40px"}}>
       <button className="btndz btn-secondary">Ethiken Education Society</button>
     </div>
    
    </div>
        </div>
        
          
        <div className="bb">
        <div className="divbutton">
            <button onClick={() => handleClick('Storecreation')}>Exam Structure Summary</button>
            <button onClick={() => handleClick('Assignstore')}>Subject and Class Wise Analysis Report</button>
            <button onClick={() => handleClick('Stockchecking')}>Class Exam Topper Report</button>

        </div>
        </div>
        </div>
        

        {displayedSection === 'Storecreation' && (

<div className="Diff">

<div className='gradebreport' style={{marginTop:"20px"}}>
<div className="reportd">

  <p style={{marginTop:"40px", marginLeft:"40px"}}>No data found</p>

       </div>
       </div> 
</div>
 )}

{/* //second click */}

{displayedSection === 'Assignstore' && (
    <div className="Diff">

<div className='gradebreport' style={{marginTop:"20px"}}>
<div className="reportd">

<div>
            <lable> Class : </lable>
            <select >
                    <option value="-Select-">--Select Class--</option>
                    <option >1 Year MPC-IIT</option>
                    <option >2 Year MPC-IIT</option>
                    <option>1 Year MPC-General</option>
                    <option>2 Year MPC-General</option>
                    <option>1 Year BPC-NEET</option>
                    <option>2 Year BPC-NEET</option>



            </select>
            </div>
            
            <div>
            <lable> Section :  </lable>
            <select >
                    <option value="-Select-">--Select  Section--</option>
                    <option >1 Year MPC-IIT 1 Year MPC-IIT(Boys)</option>
                    <option >1 Year MPC-IIT 1 Year MPC-IIT(Girls)</option>

                    <option >2 Year MPC-IIT</option>                    
                    <option >2 Year MPC-IIT-2 Year MPC-IIT(Boys)</option>
                    <option >2 Year MPC-IIT-2 Year MPC-IIT(Girls)</option>

                    <option>1 Year MPC-General</option>
                    <option>1 Year MPC-General - 1 Year MPC-General(Boys)</option>
                    <option>1 Year MPC-General - 1 Year MPC-General(Girls)</option>

                    <option>2 Year MPC-General</option>
                    <option>2 Year MPC-General 2 Year MPC-General(Boys)</option>
                    <option>2 Year MPC-General 2 Year MPC-General(Girls)</option>

                    <option>1 Year BPC-NEET</option>
                    <option>1 Year BPC-NEET 1 Year BPC-NEE(Boys)</option>

                    <option>1 Year BPC-NEET 1 Year BPC-NEET(Girls)</option>

                    <option>2 Year BPC-NEET</option>
                    <option>2 Year BPC-NEET 2 Year BPC-NEET(Boys)</option>
                    <option>2 Year BPC-NEET 2 Year BPC-NEET(Girls)</option>

            </select>
            </div>
           
            <div>
            <lable> Term :  </lable>
            <select >
                    <option value="-Select-">--Select  Term--</option>
                    <option >--Select Term --</option>

            </select>
            </div>
           

            
            <div>
            <lable> Evaluation : </lable>
            <select >
                    <option value="-Select-">--Select Evaluation--</option>
                    <option >--Select Evaluation--</option>

            </select>
            </div>
           
            </div>
            
            <div className="reportd">
            <div>
            <lable>Subject  : </lable>
            <select >
                    <option value="-Select-">--Select Subject--</option>
                    <option>--All--</option>
            </select>
            </div>
            <div className='gbbuttondiv'>
            <button className="btn btn-primary gbbutton" >Show Report</button>
          </div>
          </div>

            </div>
     </div> 
)}


{/* Third Click */}

{displayedSection === 'Stockchecking' && (
    <div className="Diff">

<div className='gradebreport' style={{marginTop:"20px"}}>
<div className="reportd">

<div>
            <lable> Class : </lable>
            <select >
                    <option value="-Select-">--Select Class--</option>
                    <option >1 Year MPC-IIT</option>
                    <option >2 Year MPC-IIT</option>
                    <option>1 Year MPC-General</option>
                    <option>2 Year MPC-General</option>
                    <option>1 Year BPC-NEET</option>
                    <option>2 Year BPC-NEET</option>



            </select>
            </div>
            
            <div>
            <lable> Section :  </lable>
            <select >
                    <option value="-Select-">--Select  Section--</option>
                    <option >1 Year MPC-IIT 1 Year MPC-IIT(Boys)</option>
                    <option >1 Year MPC-IIT 1 Year MPC-IIT(Girls)</option>

                    <option >2 Year MPC-IIT</option>                    
                    <option >2 Year MPC-IIT-2 Year MPC-IIT(Boys)</option>
                    <option >2 Year MPC-IIT-2 Year MPC-IIT(Girls)</option>

                    <option>1 Year MPC-General</option>
                    <option>1 Year MPC-General - 1 Year MPC-General(Boys)</option>
                    <option>1 Year MPC-General - 1 Year MPC-General(Girls)</option>

                    <option>2 Year MPC-General</option>
                    <option>2 Year MPC-General 2 Year MPC-General(Boys)</option>
                    <option>2 Year MPC-General 2 Year MPC-General(Girls)</option>

                    <option>1 Year BPC-NEET</option>
                    <option>1 Year BPC-NEET 1 Year BPC-NEE(Boys)</option>

                    <option>1 Year BPC-NEET 1 Year BPC-NEET(Girls)</option>

                    <option>2 Year BPC-NEET</option>
                    <option>2 Year BPC-NEET 2 Year BPC-NEET(Boys)</option>
                    <option>2 Year BPC-NEET 2 Year BPC-NEET(Girls)</option>

            </select>
            </div>
           
            <div>
            <lable> Term :  </lable>
            <select >
                    <option value="-Select-">--Select  Term--</option>
                    <option >--Select Term --</option>

            </select>
            </div>
           

            
            <div>
            <lable> Evaluation : </lable>
            <select >
                    <option value="-Select-">--Select Evaluation--</option>
                    <option >--Select Evaluation--</option>

            </select>
            </div>
           
            </div>
            
            <div className="reportd">
            <div>
            <lable>Subject  : </lable>
            <select >
                    <option value="-Select-">--Select Subject--</option>
                    <option>--All--</option>
            </select>
            </div>
            <div className='gbbuttondiv'>
            <button className="btn btn-primary gbbutton" >Get</button>
          </div>
          </div>

            </div>
       </div> 
       )} 
      </div>
      </>
    );
   }





  return (
    <>
       <div className='flexSB'>
        <ul className={click ? "mobile-nav" : "flexSBhr "} onClick={() => setClick(false)}>
            
            <li onMouseEnter={() => handleMouseEnter('1')} onMouseLeave={handleMouseLeave}>Manage</li>  
            <li onMouseEnter={() => handleMouseEnter('2')} onMouseLeave={handleMouseLeave}>Grade Book </li> 
            <li onMouseEnter={() => handleMouseEnter('3')}>Settings</li>
            <li onMouseEnter={() => handleMouseEnter('4')}>Analysis</li>
            <li onMouseEnter={() => handleMouseEnter('5')}>Competitive Exam</li>
            <li onMouseEnter={() => handleMouseEnter('6')}>Other Exams</li>
            <li onMouseEnter={() => handleMouseEnter('7')}>Reports</li>
            </ul>
            {showDiv === '1' && <StaffdetailsMenu/>}
            {showDiv === '2' && <StaffAttendanceMenu/>}
            {showDiv === '3' && <BioAttendaceMenu/>}
            {showDiv === '4' &&  <AnalysisMenu/>}   
            {showDiv === '5' && <StaffLevesMenu/>}
            {showDiv === '6' && <StaffTaskMenu/>}
            {showDiv === '7' && <ReportMenu/>}

       </div>

       <div className='dashmain'>
       {hrdashborad && <HrDashboard/>}
       {showGrade === '1' && <StructureC/>}
       {showGrade === '2' && <GbSkills/>}
       {showGrade === '3' && <CoActivityMaster/>}
       {showGrade === '4' && <SubReflection/>}
       {showGrade === '5' && <GradeIndicator/>}
       {showGrade === '6' && <ReportcTemplate/>}

      {showGrade === 'b1' && <TestCreation/>}
      {showGrade === 'b4' && <TestmEntry/>}
      {showGrade === 'b5' && <GraceMarks/>}
       {showGrade === 'b6' && <CoScholasticGrades/>}
       {showGrade === 'b7' && <SubwiseRemark/>}
       {showGrade === 'b9' && <UploadSub/>}
       {showGrade === 'b10' && <StuRemark/>}
       {showGrade === '15' && <TeacherRemark/>}
       {showGrade === 'b12' && <StuAttendance/>}
       {showGrade === 'b13' && <DigitalSign/>}
       {showGrade === 'b14' && <KyaApti/>}
       {showGrade === 'b15' && <MonthlyAtten/>}
       





       {showGrade === '21' && <SetEvaluation/>}
       {showGrade === '22' && <ExamPercent/>}
       {showGrade === '23' && <TermPercent/>}
       {/* {showGrade === '24' && < Remark/>} */}
       {/* {showGrade === '25' && <EvalReport/>} */}
       {showGrade === '26' && <CardPublish/>}
       {showGrade === '27' && <UpdateResult/>}
       {showGrade === '28' && <ThreeLevel/>}
       {showGrade === '29' && <UpdateMarks/>}
       {showGrade === '30' && <CardCalc/>}



       {showGrade === '51' && <ComexamStudent/>}
       {showGrade === '52' && <StudentHall/>}

       {showGrade === '61' && <CreateExam/>}
       {showGrade === '62' && <OtherexamMarks/>}
       {showGrade === '63' && <OtherexamReport/>}
       {showGrade === '64' && <OtherComprensive/>}
       {showGrade === '65' && <OtherAnalysis/>}


       {showGrade === 'd1' && <AnTestwise/>}
       {showGrade === 'd2' && <AevalReport/>}
       {showGrade === 'd3' && <AnmarkAnalysis/>}
       {showGrade === 'd4' && <AnTerm/>}


       </div>
        
    </>
  )
}

export default GradeBook;