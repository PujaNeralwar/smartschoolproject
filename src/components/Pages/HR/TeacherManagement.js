import React, { useState } from 'react'
import "../HR/Hrstyle.css";
const TeacherManagement = () => {
  
  const [clteacher,setclteacher] = useState(true);
  const [teachermgn,setteacherMgn] = useState(false);
  const [active, setActive] = useState("");

  const handleButtonClick=(e) =>{
    setteacherMgn(e);
  }
  const handleClick = (e) => {
    setActive(e.target.id);
    
    
  }


   const ClassTeacher  = () => {
    return(
      <>
       <div className='leftsd'>
            State
           </div>
           <div className='rightsd'>
           
           <div className='tmdiv'>
            <select>
              <option>All Classes</option>
              <option> 1 Year MPC-IIT</option>
              <option> 2 Year MPC-IIT</option>
            </select>
            <select>
              <option>All Section</option>
            </select>
            <button>Assign Class Teacher</button>
           </div>

           <div className='twodiv'> 
         <div className='leftdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
         {/* <div className='rgtdiv'><input placeholder='Serach in Table'></input> </div> */}
        </div>
    
        <table>
        <tr>
            <th>Grade</th>
            <th>Section</th>
            <th>Class Teacher Name</th>
            <th>CTET Qualified</th>
            <th>Training (TGT/PGT)</th>
            <th>Status</th>
            
        </tr>
        <tr>
            <td colSpan={6}></td>      
        </tr>
          
         </table>
           </div>

      </>
    )
   }

    const SubjectTeacher = () => {
      return(
        <>
        <div>
        <label style={{fontSize:'12px',color:'red'}}>
        <span style={{color:'red',backgroundColor:'yellow'}}>Note:</span> The subjects avaialable is based on the subjects created / assigned subjects to the branch.<br/>
        If any subjects are missing, please contact administrator / support to assign the subjects to your branch or need to create subjects.
        </label>
        <br></br>

        <div className='rightsd'>
           
           {/* <div className='tmdiv'> */}
            <select>
              <option>All Classes</option>
              <option> 1 Year MPC-IIT</option>
              <option> 2 Year MPC-IIT</option>
            </select>
           
            <button style={{marginLeft:'700px',color:'white',backgroundColor:'#313131'}}>Assign Subject Teacher</button>
           {/* </div> */}

          <label style={{color:'#313131',marginLeft:'500px',fontWeight:'600'}}>No Data Found !!!...........</label>
           </div>

           </div>
          
        </>
      )
    }

    const CoOrdinators =() => {
      return(
        <>
        <div className='rightsd'>
           
           <div className='tmdiv'>
           
            <button style={{marginLeft:'900px'}}>Assign Co-Ordinators</button>
           </div>

           <div className='twodiv'> 
         <div className='leftdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
         {/* <div className='rgtdiv'><input placeholder='Serach in Table'></input> </div> */}
        </div>
    
        <table>
        <tr>
            <th>Grade</th>
            <th>Name</th>
            <th>Can Approve TC/LC Request</th>
            <th>CTET Qualified</th>
            <th>Training (TGT/PGT)</th>
            
            
        </tr>
        <tr>
            <td colSpan={5} style={{color:'red'}}>No Data Found !!!................</td>      
        </tr>
          
         </table>
           </div>

        </>
      )
    }

    const HodDepartment = () => {
      return(
        <>
          <table>
        <tr>
            <th>Sr No.</th>
            <th>Department</th>
            <th>Department Head</th>
            <th>Master Subject</th>
            <th>Class Category</th>
            
            
        </tr>
        <tr>
            <td colSpan={5} style={{color:'red'}}>No Data Found !!!................</td>      
        </tr>
          
         </table>
        </>
      )
    }
    const HouseIncharge = () => {
      return(
        <>
      <div className='rightsd'>
           
           <div className='tmdiv'>
            <lable>Note :Student can be tagged only in one undefined group.</lable>
           
            <button style={{marginLeft:'300px'}}>Add Staff as a Group Mentor</button>
            <input placeholder='Search In Table' style={{marginLeft:'20px'}}></input>
           </div>

           <div className='twodiv'> 
         <div className='leftdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
         {/* <div className='rgtdiv'><input placeholder='Serach in Table'></input> </div> */}
        </div>
    
        <table>
        <tr>
            <th>SR No.</th>
            <th>Group Name</th>
            <th>Group Mentors</th>
            <th>Responsibilities</th>
            <th>Applicable Classes</th>
            <th>Total Student</th>
            <th style={{color:'blue'}}>Boys</th>
            <th style={{color:'violet'}}>Girls</th>
            
        </tr>
        <tr>
            <td colSpan={8} style={{color:'red',fontWeight:'600'}}> No Records To Display ...</td>      
        </tr>
          
         </table>
           </div>


        </>
      )
    }
      const ActivitySkill = () => {
        return(
          <>
             <table>
        <tr>
            <th>Activity Skill</th>
            <th>Skill Incharge</th>
            <th>Skill Teacher</th>
            
            
        </tr>
        <tr>
            <td colSpan={3} style={{color:'#313131',fontWeight:'600'}}>Please assign skills to Branch (or) create skills</td>      
        </tr>
          
         </table>
          </>
        )
      }

      const StaffRoles = () => {
        return(
          <>
          <div>
            <label>
            <div className='leftdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
            <div className='rgtdiv'><input placeholder='Serach in Table'></input> </div>
            </label>
            <div >
            <table>
           <tr>
            <th>Sr No.</th>
            <th>Staff Name</th>
            <th>Staff Code</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Class Teacher</th>
            <th>Subject Teacher</th>
            <th>Language Teacher</th>
            <th>House Incharge</th>
            <th>Student Club Incharge</th>
            <th>Class Co-ordinators</th>
            <th>Class Category Incharge</th>
            <th>Head Of Department</th>
            <th>Activity Skill Teacher</th>
            <th>Activity Skill Incharge</th>
            <th>Physical Education Teacher</th>
            <th>Co Scholastic Teacher</th>
            
            
        </tr>
        <tr>
            <td colSpan={17} style={{color:'red',fontWeight:'600'}}>No Records Found ...</td>      
        </tr>
          
         </table>
          </div>
          </div>

          </>
        )
      }

 const CategoryIncharge = () => {
    return(
     <>
     <div className='rightsd'>
           
           <div className='tmdiv'>
            <label style={{color:'#313131'}}>No Data Found !!!...........</label>
            <button style={{marginLeft:'800px'}}>Class Category Incharge</button>
           </div>

           </div>

     </>
    )
  }

  const [techerMgnPage , setTeacherMgnPage] = useState (true);
  const [staffWorkLoad , setStaffWorkLoad] = useState (false);
  const [staffWorkAll , setStaffWorkAll] = useState (false);

  const StaffWorkLoad = () => {
    return(
      <>
      <div className='top3'>
            <label> <button style= {{color:'white',backgroundColor:'blue', width:'80px',borderRadius:'5px'}} onClick={()=>{setStaffWorkLoad(false);setTeacherMgnPage(true);setshowdiv(false);}}>Back</button> &nbsp;&nbsp;
            Staff Work Load</label>
            
       </div>
       <div className='teachmgn'>
        <div className='addcols'>
            <label>Academic Year</label>
            <select><option>2023-2024</option></select>
        </div>
        <div className='addcols' >
        <label>Branch</label>
        <div style={{backgroundColor:'gray',color:'white'}}>SHAHEEN JUNIOR COLLEGE</div>
        </div>
        <div className='addcols'>
          <label>Weekly workload based on timetable</label>
          <select>
            <option>Single Day</option>
            <option>Weekly Workload</option>
            <option>Weekly Workload Consolidate</option>
          </select>
        </div>
        <div className='addcols'>
          <label>Date</label>
          <input type='date'/>
        </div>
        <div className='addcols'>
          <label> </label>
          <button style={{backgroundColor:'rgb(57, 85, 247)', color:'white',marginTop:'22px',width:'50px'}} onClick={() =>{setshowdiv(true);}}>GET</button>
        </div>

       </div>
       {showdiv && (
        <>
        <div className='emptyDiv'>
           <label style={{color:'red', fontWeight:'600'}}>No Data Found !!!...</label>
        </div>

        </>
       )}


      </>
    )
  }
  const [showdiv,setshowdiv] = useState (false);

  const StaffWorkAllocation = () => {
    const today = new Date();
    return(
      <>
      <div className='top3'>
      <label> <button style= {{color:'white',backgroundColor:'blue', width:'80px',borderRadius:'5px'}} 
      onClick={()=>{setStaffWorkAll(false);setTeacherMgnPage(true); setshowdiv(false);}}>Back</button> &nbsp;&nbsp;
            Staff Work Allocation</label>
            
       </div>
       <div className='teachmgn'>
        <div className='addcols'>
            <label>Academic Year</label>
            <select><option>2023-2024</option></select>
        </div>
        <div className='addcols' >
        <label>Branch</label>
        <div style={{backgroundColor:'gray',color:'white'}}>SHAHEEN JUNIOR COLLEGE</div>
        </div>
        <div className='addcols'>
          <label>Weekly workload based on timetable</label>
          <select>
            <option>Single Day</option>
            <option>Weekly Workload</option>
            <option>Weekly Workload Consolidate</option>
          </select>
        </div>
        <div className='addcols'>
          <label>Date</label>
          <input type='date' defaultValue={today}/>
        </div>
        <div className='addcols'>
          <label> </label>
          <button style={{backgroundColor:'rgb(57, 85, 247)', color:'white',marginTop:'22px',width:'50px'}} onClick={() =>{setshowdiv(true);}}>GET</button>
        </div>

       </div>
       {showdiv && (
        <>
        <div className='emptyDiv'>
           <label style={{color:'red', fontWeight:'600'}}>No Data Found !!!...</label>
        </div>

        </>
       )}

      </>
    )
  }


  const TeacherMgnMainPage = () => {
    return(
      <>
       <div className='top3'>
            <label>Assign Teachers / Subjects / Co-Ordinators</label>
            <div className='staffbut'>
              <button onClick={() => {setTeacherMgnPage(false); setStaffWorkLoad(true)}}>Staff Work Load</button>
              <button onClick={() => {setTeacherMgnPage(false); setStaffWorkAll(true)}}>Staff Work Allocation</button>
            </div>  
       </div>

       <div className='maibuttons1'>
       <button className={active === "1" ? "active" : "inactive"} id={"1"} onClick={(e) => {handleClick(e);handleButtonClick('1');setclteacher(true);}}>Class Teacher</button>
       <button className={active === "2" ? "active" : "inactive"} id={"2"} onClick={(e) => {handleClick(e);handleButtonClick('2');setclteacher(false);}}>Subject Teacher</button>
       <button className={active === "3" ? "active" : "inactive"} id={"3"} onClick={(e) => {handleClick(e);handleButtonClick('3');setclteacher(false);}}>Co-Ordinators</button>
       <button className={active === "4" ? "active" : "inactive"} id={"4"} onClick={(e) => {handleClick(e);handleButtonClick('4');setclteacher(false);}}>Class Categories Incharge</button>
       <button className={active === "5" ? "active" : "inactive"} id={"5"} onClick={(e) => {handleClick(e);handleButtonClick('5');setclteacher(false);}}>HOD Department</button>
       <button className={active === "6" ? "active" : "inactive"} id={"6"} onClick={(e) => {handleClick(e);handleButtonClick('6');setclteacher(false);}}>House Incharge</button>
       <button className={active === "7" ? "active" : "inactive"} id={"7"} onClick={(e) => {handleClick(e);handleButtonClick('7');setclteacher(false);}}>Activity Skill Teacher /Activity Skill Incharge</button>
       <button className={active === "8" ? "active" : "inactive"} id={"8"} onClick={(e) => {handleClick(e);handleButtonClick('8');setclteacher(false);}}>Staff Role</button>
              
        </div>

        <div className="SDashboard1">   
        {clteacher && <ClassTeacher/>}
        {teachermgn === '2' && <SubjectTeacher/>}
        {teachermgn === '3' && <CoOrdinators/>}
        {teachermgn === '4' && <CategoryIncharge/>}
        {teachermgn === '5' && <HodDepartment/>}
        {teachermgn === '6' && <HouseIncharge/>}
        {teachermgn === '7' && <ActivitySkill/>}
        {teachermgn === '8' && <StaffRoles/>}
          
        </div>

      </>
    )
  }


  return (
    
    <>
       <div className="SDheading"><span>HR </span><label> / Staff Details / Teacher Management </label> </div>
       {techerMgnPage && <TeacherMgnMainPage/> }
       {staffWorkLoad && <StaffWorkLoad/>}
       {staffWorkAll && <StaffWorkAllocation/>}
      
    </>

  )
}

export default TeacherManagement;