import React, { useState } from 'react'
import "../HR/Hrstyle.css"
const StaffGroups = () => {
  const [general,setGeneral]= useState(true);
  const [active, setActive] = useState("");
  const [staffg,setStaffg] = useState("");
  const [staffmainpage ,SetStaffMainPage] = useState(true);
  const [mgnstaffG, setMgnStaffG] =useState(false);
  const [staffroll,setStaffRole] = useState(false);
  const handleOnClick=(e) =>{
    setStaffg(e);
  }
  const handleClick = (e) => {
    setActive(e.target.id);
    
    
  }


const General = () => {
  return(
    <>
      <div className='twodiv'> 
     <div className='leftdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
     <div className='rgtdiv'><input placeholder='Serach in Table'></input> </div>
    </div>
    
        <table>
        <tr>
            <th>SR No</th>
            <th>Branch Name</th>
            <th>Group Name</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Access level</th>
            <th style={{color:'green'}}>Total Staff</th>
            <th style={{color:'red'}}>Teaching</th>
            <th style={{color:'blue'}}>Non Teaching</th>
            <th style={{color:'violet'}}>No. Of Topic</th>

            
        </tr>
        <tr>
            <td>1</td>
            <td style={{color:'blue'}}>SHAHEEN JUNIOR COLLEGE</td>
            <td style={{color:'blue'}}>etheken</td>
            <td>Teacher</td>
            <td>Teaching</td>
            <td>Class Teacher</td>
            <td style={{color:'green'}}>0</td>
            <td style={{color:'red'}}>0</td>
            <td style={{color:'blue'}}>0</td>
            <td style={{color:'violet'}}>0</td>
            
              
        </tr>
          
         </table>


    </>
  )
}
const ReportingAssignment = () => {
  return(
    <>
      <table>
        <tr>
          <th>Sr No.</th>
          <th>Group Name</th>
          <th style={{color:'green'}}>Total Staff</th>
          <th style={{color:'red'}}>Teaching</th>
         <th style={{color:'blue'}}>Non Teaching</th>
         <th>Owner</th>
        </tr>
        <tr>
           <td>1</td>
            <td style={{color:'blue'}}>Principal</td> 
            <td style={{color:'green'}}>0</td>
            <td style={{color:'red'}}>0</td>
            <td style={{color:'blue'}}>0</td>
            <td style={{color:'blue'}}>K Choudhary</td>
            
        </tr>
      </table>
    </>
  )
}

const SystemGroups = () => {
  return (
    <>
      <div>
      <table>
        <tr>
          <th>Sr No.</th>
          <th>Group Name</th>
          <th></th>
          <th style={{color:'green'}}>Total Staff</th>
          <th style={{color:'red'}}>No of Topics</th>
        </tr>
        <tr>
           <td>1</td>
            <td style={{color:'blue'}}>Class Teacher</td> 
            <td style={{color:'orange'}}>send message</td>
            <td style={{color:'green'}}>13</td>
            <td style={{color:'blue'}}>0</td>    
        </tr>
        <tr>
           <td>2</td>
            <td style={{color:'blue'}}>Subject Teacher</td> 
            <td style={{color:'orange'}}>send message</td>
            <td style={{color:'green'}}>0</td>
            <td style={{color:'blue'}}>0</td>    
        </tr>
        <tr>
           <td>3</td>
            <td style={{color:'blue'}}>Language Teacher</td> 
            <td style={{color:'orange'}}>send message</td>
            <td style={{color:'green'}}>0</td>
            <td style={{color:'blue'}}>0</td>    
        </tr>
        <tr>
           <td>4</td>
            <td style={{color:'blue'}}>House Incharge</td> 
            <td style={{color:'orange'}}>send message</td>
            <td style={{color:'green'}}>0</td>
            <td style={{color:'blue'}}>0</td>    
        </tr>
        <tr>
           <td>5</td>
            <td style={{color:'blue'}}>Class Coordinator</td> 
            <td style={{color:'orange'}}>send message</td>
            <td style={{color:'green'}}>0</td>
            <td style={{color:'blue'}}>0</td>    
        </tr>
        <tr>
           <td>6</td>
            <td style={{color:'blue'}}>Class Categories Incharge</td> 
            <td style={{color:'orange'}}>send message</td>
            <td style={{color:'green'}}>0</td>
            <td style={{color:'blue'}}>0</td>    
        </tr>
        <tr>
           <td>7</td>
            <td style={{color:'blue'}}>Head Of Department</td> 
            <td style={{color:'orange'}}>send message</td>
            <td style={{color:'green'}}>0</td>
            <td style={{color:'blue'}}>0</td>    
        </tr>
        <tr>
           <td>8</td>
            <td style={{color:'blue'}}>Activity Skill Teacher</td> 
            <td style={{color:'orange'}}>send message</td>
            <td style={{color:'green'}}>0</td>
            <td style={{color:'blue'}}>0</td>    
        </tr>
        <tr>
           <td>9</td>
            <td style={{color:'blue'}}>Activity Skill Incharge</td> 
            <td style={{color:'orange'}}>send message</td>
            <td style={{color:'green'}}>0</td>
            <td style={{color:'blue'}}>0</td>    
        </tr>
        <tr>
           <td>10</td>
            <td style={{color:'blue'}}>Co scholastic Skill Teacher</td> 
            <td style={{color:'orange'}}>send message</td>
            <td style={{color:'green'}}>0</td>
            <td style={{color:'blue'}}>0</td>    
        </tr>
      </table>

      </div>
    </>
   )
}



/************************************** */
const MgnStaffGroups = () =>{
 const [generalGroups,setGeneralGroups] = useState(true);
 const [systemGrups,setSystemGroups] = useState(false);

const GeneralGroups = () => {
  return(
    <>
    <div className='twodiv'> 
     <div className='leftdiv'><button style={{width:'150px',backgroundColor:'blue',color:'white'}}>Add Staff Groups</button></div>
     <div className='rgtdiv'><input placeholder='Serach in Table' style={{marginLeft:'-80px'}}></input> </div>
    </div>
    
        <table>
        <tr>
            
            <th>Branch Name</th>
            <th>Group Name</th>
            <th>Discribtion</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Access level</th>
            <th>No Of Topic</th>
            <th style={{color:'red'}}>Action</th>
            

            
        </tr>
        <tr>
            
            <td style={{color:'blue'}}>SHAHEEN JUNIOR COLLEGE</td>
            <td style={{color:'blue'}}>etheken</td>
            <td></td>
            <td>Teacher</td>
            <td>Teaching</td>
            <td>Class Teacher</td>
            <td style={{color:'green'}}>0</td>
            <td style={{color:'red'}}>0</td>
            
            
              
        </tr>
          
         </table>


    </>
  )
  

}

const SystemGrup = () => {
  return(
    <>
    <div className='twodiv'> 
     <div className='rgtdiv'><input placeholder='Serach in Table'></input> </div>
    </div>
    
        <table>
        <tr>
            
            <th>Branch Name</th>
            <th> Staff Group </th>
            <th>No. of Topics</th>       
        </tr>
        <tr>
            <td style={{color:'green'}}>All Branch</td>
            <td> Class Teacher</td>
            <td>0</td>      
        </tr>
        <tr>
            <td style={{color:'green'}}>All Branch</td>
            <td>subject Teacher</td>
            <td>0</td>      
        </tr>
        <tr>
            <td style={{color:'green'}}>All Branch</td>
            <td>LanguageTeacher</td>
            <td>0</td>      
        </tr>
        <tr>
            <td style={{color:'green'}}>All Branch</td>
            <td>House Incharge</td>
            <td>0</td>      
        </tr>
        <tr>
            <td style={{color:'green'}}>All Branch</td>
            <td>Class Cordinator</td>
            <td>0</td>      
        </tr>
        <tr>
            <td style={{color:'green'}}>All Branch</td>
            <td>Class Category Incharge</td>
            <td>0</td>      
        </tr>
        <tr>
            <td style={{color:'green'}}>All Branch</td>
            <td>Head of Department</td>
            <td>0</td>      
        </tr>
        <tr>
            <td style={{color:'green'}}>All Branch</td>
            <td>Activity Skill Teacher</td>
            <td>0</td>      
        </tr>
          
         </table>


    </>
  )
  

}

  return(
    <>
     <div className='top3'>
      <button style={{backgroundColor:'blue',color:'white',width:'100px'}} onClick={() =>{setMgnStaffG(false);SetStaffMainPage(true);}}>Back</button>
      <label>Staff Groups </label>  
     </div>
     <div  className="SDashboard">   

       <div className='mainbuttons'>
          <button className={active === "x" ? "active" : "inactive"} id={"x"} onClick={(e) => {handleClick(e);handleOnClick('x');setGeneralGroups(true); setSystemGroups(false);}}>General Groups<i class="fa-solid fa-circle-question"></i></button>
          <button className={active === "y" ? "active" : "inactive"} id={"y"} onClick={(e) => {handleClick(e);handleOnClick('y');setGeneralGroups(false); setSystemGroups(true);}}>System Groups<i class="fa-solid fa-circle-question"></i></button>
          </div>

        <div className='staffcontainer'>
         {generalGroups && <GeneralGroups/>}
         {systemGrups && <SystemGrup />}
        
           
    


          </div>


        </div>

    </>
  )
}

/************************************** */
const StaffRole = () => {
  return(
    <>

    <div className='top3'>
      <button style={{backgroundColor:'blue',color:'white',width:'100px'}} onClick={() =>{setStaffRole(false);SetStaffMainPage(true);}}>Back</button>
      <label>Staff Rolls </label>  
     </div>
     <div className='twodiv'> 
     <div className='leftdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
     <div className='rgtdiv'><input placeholder='Serach in Table'></input> </div>
    </div>
    
        <table>
        <tr>
            <th>SR No</th>
             <th>Staff Name</th>
             <th>Staff Code</th>
             <th>Department</th>
             <th>Designation</th>
             <th>Class Teacher</th>
             <th>Subject teacher</th>
             <th>Language Teacher</th>
             <th>House Incharge</th>
             <th>Student Club Incharge</th>
             <th>Class Coordinator</th>
             <th>Class Category Incharge</th>
             <th>Head Of Department</th>      
        </tr>
        <tr>
            <td colSpan={13} style={{color:'red'}}> No Records Found !!!....</td>       
        </tr>
          
         </table>

     

    </>
  )
}



/********************************************* */

const StaffGroupMainPage = () => {
  return(
    <>
    <div className='top3'>
     <label>Staff Groups
      <button onClick={() => {SetStaffMainPage(false);setMgnStaffG(true);}}>Manage Staff Group</button>
      <button>View Staff Wall</button>
      <button onClick={() => {setStaffRole(true);SetStaffMainPage(false);}}>Staff Role</button>
      </label>
     <div className='staffbut'>
       <button>Staff Work Load</button>
       <button>Staff Work Allocation</button>
     </div>  
     </div>
     

     <div  className="SDashboard">   

       <div className='mainbuttons'>
          <button className={active === "a" ? "active" : "inactive"} id={"a"} onClick={(e) => {handleClick(e);handleOnClick('a');setGeneral(true);}}>General<i class="fa-solid fa-circle-question"></i></button>
          <button className={active === "b" ? "active" : "inactive"} id={"b"} onClick={(e) => {handleClick(e);handleOnClick('b');setGeneral(false);}}>Reporting and Assignment<i class="fa-solid fa-circle-question"></i></button>
          <button className={active === "c" ? "active" : "inactive"} id={"c"} onClick={(e) => {handleClick(e);handleOnClick('c');setGeneral(false);}}>System Groups<i class="fa-solid fa-circle-question"></i></button>
                
          </div>

        <div className='staffcontainer'>
         {general && <General/>}
         {staffg === 'b' && <ReportingAssignment />}
         {staffg === 'c' && <SystemGroups />}
          </div>
        </div>  

    </>
  )
}
  return (
    <>
        <div className="SDheading"><span>HR </span><label> / Staff Details / Staff Groups </label> </div>
         {staffmainpage && <StaffGroupMainPage/>}
         {mgnstaffG && <MgnStaffGroups/>}
         {staffroll && <StaffRole/>}
      

    </>
  )
}

export default StaffGroups;