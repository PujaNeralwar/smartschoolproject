import React from 'react';
import "../HR/Hrstyle.css";
import { useState,useEffect } from 'react';


const CreateStaffDetails = () => {

  const [selectedOption, setSelectedOption] = useState("teaching") ;
  const [staff, setStaff] = useState(false);
  const [actstaff,setActStaff] = useState(true);
  const [active, setActive] = useState("");
  const [stafflist,setStafList] = useState(true);

  const closeAdmin = () => setAddStaff(false);
  const closeAdmin1 = () => setAddTStaff(false);
  const [addTStaff, setAddTStaff] = useState(false);
  const [addStaff, setAddStaff] = useState(false);
  const [addform , setAddform] =useState(false);
  const [addTform , setAddTform] =useState(false);
  const [ uploadstaff, setUploadStaff] = useState(false);
  const [mgnDept,setMgnDept] = useState(false);
  const [mgnDesign , setMgnDesign] = useState(false);

  const handleRadioChange =(event) => {
    setSelectedOption(event.target.value);
  }
  const handleOnClick=(e) =>{
    setStaff(e);
  }
  const handleClick = (e) => {
    setActive(e.target.id);
    
    
  }

  const ActiveStaff =() => {
    return (
      <>

<div className='innerstcontainer'>

<div className='stafftypediv'>
   <label>Staff type</label>
   <div className='radiocon'>
   <div className="radio">
   <label>
   <input type="radio"  id='teaching' value="teaching" name='stafftype' checked={selectedOption === 'teaching'}
          onChange={handleRadioChange} />
           Teaching
   </label>
 </div>
 <div className="radio">
 <label>
 <input type="radio" id='nonteaching' value="nonteaching"  name='stafftype' checked={selectedOption === 'nonteaching'}
          onChange={handleRadioChange} />
      Non-Teaching
  </label>
  </div>
 <div className="radio">
  <label>
  <input type="radio" id='transport' value="transport" name='stafftype' checked={selectedOption === 'transport'}
          
          onChange={handleRadioChange} />
        Transport
  </label>
  </div>
  </div>

</div>
<div className='stdepartment'>
  <label>Staff Department</label>
  <select>
    <option>All Department</option>
    <option>Teaching</option>
    <option>Non Teaching</option>
    <option>Transport</option>
  </select>
</div>  
</div>    
<div className='twodiv'> 
<div className='leftdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
<div className='rgtdiv'><input placeholder='Serach in Table'></input> </div>
</div>

{selectedOption === 'teaching' && (
  <>
  <table>
<tr>
<th>SR No</th>
<th>Staff Name</th>
<th>Date of Joining</th>
<th>DOB</th>
<th>Staff Branch Code</th>
<th>Designation</th>
<th>Department</th>
<th>Access Level</th>
<th>Edit Basic Details </th>
<th>Edit Full Details</th>
</tr>
<tr>
<td colSpan={10} style={{color:'red'}}>No Data Found !!!...</td> 
</tr>

</table>
  </>
)}

{selectedOption === 'nonteaching' && (
  <>
  <table>
<tr>
<th>SR No</th>
<th>Staff Name</th>
<th>Joining Date</th>
<th>DOB</th>
<th>Staff Branch Code</th>
<th>Reference Code</th>
<th>Designation</th>
<th>Department</th>
<th>Access Level</th>
<th>Edit Basic Details </th>
<th>Edit Full Details</th>
</tr>
<tr>
<td colSpan={11} style={{color:'red'}}>No Data Available ...</td> 
</tr>

</table>
  </>
)}

{selectedOption === 'transport' && (
  <>
  <table>
<tr>
<th>SR No</th>
<th>Staff Name</th>
<th>Joining Date</th>
<th>DOB</th>
<th>Staff Branch Code</th>
<th>Reference Code</th>
<th>Designation</th>
<th>Department</th>
<th>Access Level</th>
<th>Edit Basic Details </th>
<th>Edit Full Details</th>
</tr>
<tr>
<td colSpan={11} style={{color:'red'}}>No Data Available ...</td> 
</tr>

</table>
  </>
)}




      </>
    )

  } 

  const InactiveStaff = () => {
    return(
      <>
      <div className='twodiv'> 
<div className='leftdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
<div className='rgtdiv'><input placeholder='Serach in Table'></input> </div>
</div>

<table>
<tr>
<th>SR No</th>
<th>Staff Name</th>
<th>Date of Joining</th>
<th>DOB</th>
<th>Staff Branch Code</th>
<th>Designation</th>
<th>Department</th>
<th>Access Level</th>
<th>Edit Basic Details </th>
<th>Edit Full Details</th>


</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>

  
</tr>

</table>


      </>
    )
  }
   const StaffDashboard = () =>{
    return(
      <>
      <div className='twodiv'> 
      <div className='leftdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
      <div className='rgtdiv'><input placeholder='Serach in Table'></input> </div>
      </div>
      <table>
        <tr>
          <th></th>
          <th colSpan={4}>2023</th>
          <th colSpan={4}>2024</th>
        </tr>
        <tr>
          <td style={{color:"black",fontSize:"14px",fontWeight:"600"}}>Department</td>
          <td style={{color:"black",fontSize:"14px",fontWeight:"600"}}>Existing Staff (A)</td>
          <td style={{color:"Green",fontSize:"14px",fontWeight:"600"}}>New Staff (B)</td>
          <td style={{color:"red",fontSize:"14px",fontWeight:"600"}}>InActive Staff (l)</td>
          <td style={{color:"blue",fontSize:"14px",fontWeight:"600"}}>Total (A+B-l)</td>
          <td style={{color:"black",fontSize:"14px",fontWeight:"600"}}>Existing Staff (A)</td>
          <td style={{color:"green",fontSize:"14px",fontWeight:"600"}}>New Staff (B)</td>
          <td style={{color:"red",fontSize:"14px",fontWeight:"600"}}>InActive Staff (l)</td>
          <td style={{color:"blue",fontSize:"14px",fontWeight:"600"}}>Total (A+B-l)</td>
        </tr>
        <tr>
          <td>Teaching</td>
          <td>15</td>
          <td>15</td>
          <td>2</td>
          <td>28</td>
          <td>28</td>
          <td>0</td>
          <td>0</td>
          <td>28</td>
        </tr>
        <tr>
          <td>Non Teaching</td>
          <td>8</td>
          <td>9</td>
          <td>0</td>
          <td>17</td>
          <td>17</td>
          <td>0</td>
          <td>0</td>
          <td>17</td>
        </tr>
        <tr>
          <td>Trasport Staff</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
        <td style={{color:"black",fontSize:"14px",fontWeight:"600"}}>Total</td>
          <td style={{color:"black",fontSize:"14px",fontWeight:"600"}}>24</td>
          <td style={{color:"Green",fontSize:"14px",fontWeight:"600"}}>24</td>
          <td style={{color:"red",fontSize:"14px",fontWeight:"600"}}>3</td>
          <td style={{color:"blue",fontSize:"14px",fontWeight:"600"}}>45</td>
          <td style={{color:"black",fontSize:"14px",fontWeight:"600"}}>45</td>
          <td style={{color:"green",fontSize:"14px",fontWeight:"600"}}>0</td>
          <td style={{color:"red",fontSize:"14px",fontWeight:"600"}}>0</td>
          <td style={{color:"blue",fontSize:"14px",fontWeight:"600"}}>45</td>
        </tr>
      </table>


      </>
    )
   }

   const TrainedStaff = () => {
    return(
      <>
      <div className='twodiv'> 
      <div className='leftdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
      <div className='rgtdiv'><input placeholder='Serach in Table'></input> </div>
      </div>
      <table>
        <tr>
          <th>Department Name(Only Teaching Staff Count)</th>
          <th>TGT(Trained Graduate Teacher)</th>
          <th>PGT(Post Graduate Teacher)</th>
          <th>PRT (Primary Teacher Training)</th>
          <th>NTT(Nursery Teacher Training)</th>
          <th>PET(Physical Education Training)</th>
          <th>None</th>
          <th>CTET Qualified</th>
          
        </tr>
        <tr>
          <td>Teaching</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          
        </tr>
        <tr>
          <td>Academic</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          
        </tr>
        <tr>
          <td style={{color:"blue",fontSize:"14px",fontWeight:"600"}}>Total</td>
          <td style={{color:"blue",fontSize:"14px",fontWeight:"600"}}>0</td>
          <td style={{color:"blue",fontSize:"14px",fontWeight:"600"}}>0</td>
          <td style={{color:"blue",fontSize:"14px",fontWeight:"600"}}>0</td>
          <td style={{color:"blue",fontSize:"14px",fontWeight:"600"}}>0</td>
          <td style={{color:"blue",fontSize:"14px",fontWeight:"600"}}>0</td>
          <td style={{color:"blue",fontSize:"14px",fontWeight:"600"}}>28</td>
          <td style={{color:"blue",fontSize:"14px",fontWeight:"600"}}>0</td>
          
        </tr>
      </table>
      </>
    )
   }
    const WorkLoad = () => {
      return(
         <>  
          <div className='DailyAt'>
             <div>
             <label>Academic Year</label>
             <select><option>2023-2024</option></select>
             </div>

             <div>
             <label> Weekly Workload Based Time Table </label>
             <select style={{width:"250px"}}><option>- All -</option>
             <option>Single Day</option>
             <option>Weekly Workload</option>
             <option>Weekly Workload consolidate</option>
             </select>
             </div>

             <div>
             <label>Date</label>
             <input type="date" style={{width:"250px"}}></input>
             </div>
                
             <button style={{backgroundColor:"blue",color:"#fff",marginTop:"40px"}}>Get</button>
             
          </div>
      
         </>
      )
    }

    const EmploymentStatus = () => {
      return(
        <>
      <div className='twodiv'> 
      <div className='leftdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
      <div className='rgtdiv'><input placeholder='Serach in Table'></input> </div>
      </div>
      <table>
      <tr>
      <th>Employee Status</th>
      <th> Teaching </th>
      <th>Non-Teaching</th>
      <th>Transport</th>
      </tr>
      <tr>
      <td>Temporary</td>
      <td>4</td>
      <td>4</td>
      <td>0</td>
      </tr>
      <tr>
      <td>Permanent and full-time</td>
      <td>24</td>
      <td>11</td>
      <td>0</td>
      </tr>
      <tr>
      <td>Executive Staff</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      </tr>
      <tr>
      <td>Contract</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      </tr>
      <tr>
      <td>Consolidated</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      </tr>
      <tr>
      <td>Part Time</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      </tr>
      <tr>
      <td>Outsource Staff</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      </tr>
      <tr>
      <td>Intern</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      </tr>
      <tr>
      <td>Fulltime Virtual</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      </tr>
      <tr>
      <td>ADHOC</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      </tr>
      <tr>
      <td>PROBATION</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      </tr>
      <tr>
      <th>Grand Total</th>
      <th>28</th>
      <th>16</th>
      <th>0</th>
      </tr>
      </table>
       </>
      )
    }

    const Staffkids = () => {
      return(
        <>
      <div className='twodiv'> 
      <div className='leftdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
      <div className='rgtdiv'><input placeholder='Serach in Table'></input> </div>
      </div>
      <table>
        <tr>
          <th>Sr No.</th>
          <th>Staff Name</th>
          <th>Staff Code</th>
          <th>ERP Staff Code</th>
          <th>Department</th>
          <th>Staff Reference Code</th>
          <th>DOJ	</th>
          <th>Staff Mobile No</th>
          <th>Branch Name</th>
          <th>Student Name</th>
          <th>Enrollment Code</th>
          <th>Class/Section</th>
          <th>Total Fee</th>
        </tr>
        <tr>
          <td colSpan={13}>No data Found</td>
        </tr>
      </table>

        </>
      )
    }

    const StaffUsingST = () => {
      return(
        <>
      <div className='twodiv'> 
      <div className='leftdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
      <div className='rgtdiv'><input placeholder='Serach in Table'></input> </div>
      </div>
      <table>
        <tr>
          <th>Sr No.</th>
          <th>Staff Name</th>
          <th>Staff  Branch Code</th>      
          <th>Department</th>
          <th>Staff Reference Code</th>
          <th>Desgnation	</th>
          <th>Access Level</th>   
        </tr>
        <tr>
          <td colSpan={7}>No data Found</td>
        </tr>
      </table>

        </>
      )
    }

    const Logs = () => {
      return(
        <>
      <div className='twodiv'> 
      <div className='leftdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
      <div className='rgtdiv'><input placeholder='Serach in Table'></input> </div>
      </div>
      <table>
        <tr>
          <th>Sr No.</th>
          <th>Staff Name</th>
          <th>Staff Code</th>
          <th>Biometric Code</th>
          <th> Staff Department</th>
          <th>Upadate Data</th>
          <th>Changed Date	</th>
          <th>Changed By</th>
          
        </tr>
        <tr>
          <td colSpan={8}>No data Found</td>
        </tr>
      </table>

        </>
      )
    }
/******************************************************** */






/*********************** Button Click and Add datils*********************************** */

const AddStaff = () => {

  const [createNewStaff,setcreateNewStaff] =useState(false);
  

  // const [data, setData] = useState(undefined);
 
    const options = [
        "Admin",
        "SIS Admin",
        "Tech Admin",
        "React",
        "Redux",
    ];
    // const onOptionChangeHandler = (event) => {
    //     setData(event.target.value);
      
    // };
useEffect(() => {
    document.body.style.overflowY="hidden";
    return () => {
        document.body.style.overflowY="scroll";
    };
},[]);



const CreateStaff = () => {
  return(
    <div>
  <table style={{margin:'10px'}}>
    <tr style={{fontSize:'8px',color:'gray'}}>
      <th>Sr No.</th>
      <th>Branch Name</th>
      <th>Staff Name</th>
      <th>Staff Code</th>
      <th>Staff Unique Id</th>
      <th>Desgnation</th>
      <th>Status</th>
      <th>Mobile No.</th>
      <th>Email</th>  
    </tr>
    <tr>
      <td colSpan={9} style={{color:'red'}}>No Data Found !!!.....</td>
    </tr>
  </table>
  <button style={{border:'1px solid lightblue',margin:'10px',paddingBottom:'10px',color:'blue'}} 
  onClick={() => {setStafList(false);setcreateNewStaff(false); setAddform(true);}}>Continue to Create New</button>
  </div>
  
  )
}

  return (
    <>
     <div className='modal-wrapper1' onClick={closeAdmin}></div>
     <div className="modaluserContainer">
     <div className='modalHeading'> 
        <label>Staff Mobile Number Search</label>
        <i class="fa-solid fa-xmark" onClick={closeAdmin}></i>
     </div>
      <div className='modaldetails'>
      <div className='modalupp'>
      <select>
                <option>-91(IND) -</option>
                {options.map((option, index) => {
                    return (
                        <option key={index}>
                            {option}
                        </option>
                    );
                })}
            </select>
            <input placeholder='Enter Staff Mobile Number Here...' style={{width:'400px'}}></input>
            <button  onClick={() => setcreateNewStaff(true)}>Search</button>
      </div>
        {createNewStaff && <CreateStaff/>}      
        </div> 
   </div> 
    </>
    
  );
};

/******************************************* */

const AddTStaff = () => {

  const [createNewStaff,setcreateNewStaff] =useState(false);
  

  // const [data, setData] = useState(undefined);
 
    const options = [
        "Admin",
        "SIS Admin",
        "Tech Admin",
        "React",
        "Redux",
    ];
    // const onOptionChangeHandler = (event) => {
    //     setData(event.target.value);
      
    // };
useEffect(() => {
    document.body.style.overflowY="hidden";
    return () => {
        document.body.style.overflowY="scroll";
    };
},[]);



const CreateStaff = () => {
  return(
    <div>
  <table style={{margin:'10px'}}>
    <tr style={{fontSize:'8px',color:'gray'}}>
      <th>Sr No.</th>
      <th>Branch Name</th>
      <th>Staff Name</th>
      <th>Staff Code</th>
      <th>Staff Unique Id</th>
      <th>Desgnation</th>
      <th>Status</th>
      <th>Mobile No.</th>
      <th>Email</th>  
    </tr>
    <tr>
      <td colSpan={9} style={{color:'red'}}>No Data Found !!!.....</td>
    </tr>
  </table>
  <button style={{border:'1px solid lightblue',margin:'10px',paddingBottom:'10px',color:'blue'}} 
  onClick={() => {setStafList(false);setcreateNewStaff(false); setAddTform(true);}}>Continue to Create New</button>
  </div>
  
  )
}

  return (
    <>
     <div className='modal-wrapper1' onClick={closeAdmin1}></div>
     <div className="modaluserContainer">
     <div className='modalHeading'> 
        <label>Staff Mobile Number Search</label>
        <i class="fa-solid fa-xmark" onClick={closeAdmin1}></i>
     </div>
      <div className='modaldetails'>
      <div className='modalupp'>
      <select>
                <option>-91(IND) -</option>
                {options.map((option, index) => {
                    return (
                        <option key={index}>
                            {option}
                        </option>
                    );
                })}
            </select>
            <input placeholder='Enter Staff Mobile Number Here...' style={{width:'400px'}}></input>
            <button  onClick={() => setcreateNewStaff(true)}>Search</button>
      </div>
        {createNewStaff && <CreateStaff/>}      
        </div> 
   </div> 
    </>
    
  );
};



/*************************************************** */

const StaffList =() => {
  return(
    <>
       <div  className="SDashboard">
         <div className='top2'>
            <label>Staff List</label>
            <div className='staffbut'>
              <button>Staff Resumes</button>
              <button>Assign Staff to School Transport</button>
            </div>  
         </div>
         <div className='staffbut2'>
              <button  onClick={() => setAddStaff(true)}>Add Staff</button>
              <button onClick={() => setAddTStaff(true)}>Add Transport Staff</button>
              <button onClick={() => {setUploadStaff(true);setStafList(false);}}>Upload Satff</button>
              <button onClick={() => {setMgnDept(true);setStafList(false);}}>Manage Department</button>
              <button onClick={() => {setMgnDesign(true);setStafList(false);}}>Manage Designation</button>
              <button>Manage Qualification</button>


          </div>
          {addStaff  &&  <AddStaff  closeAdmin={closeAdmin}/>}
          {addTStaff  &&  <AddTStaff  closeAdmin={closeAdmin1}/>}



          <div className='mainbuttons'>
            <button  className={active === "a" ? "active" : "inactive"} id={"a"} onClick={(e) => {handleClick(e);handleOnClick('a');setActStaff(true);}}>Active Staff</button>
              <button  className={active === "b" ? "active" : "inactive"} id={"b"} onClick={(e) => {handleClick(e);handleOnClick('b');setActStaff(false);}}>InActive Staff</button>
              <button  className={active === "c" ? "active" : "inactive"} id={"c"} onClick={(e) => {handleClick(e);handleOnClick('c');setActStaff(false);}}>Dashboard</button>
              <button  className={active === "d" ? "active" : "inactive"} id={"d"} onClick={(e) => {handleClick(e);handleOnClick('d');setActStaff(false);}}>Trained Staff</button>
              <button className={active === "e5" ? "active" : "inactive"} id={"e5"} onClick={(e) => {handleClick(e);handleOnClick('e');setActStaff(false);}}>Work Load</button>
              <button className={active === "f" ? "active" : "inactive"} id={"f"} onClick={(e) => {handleClick(e);handleOnClick('f');setActStaff(false);}}>Employement Status</button>
              <button className={active === "g" ? "active" : "inactive"} id={"g"} onClick={(e) => {handleClick(e);handleOnClick('g');setActStaff(false);}}>Staff Kids</button>
              <button className={active === "h" ? "active" : "inactive"} id={"h"} onClick={(e) => {handleClick(e);handleOnClick('h');setActStaff(false);}}>Staff Using Transport</button>
              <button className={active === "i" ? "active" : "inactive"} id={"i"} onClick={(e) => {handleClick(e);handleOnClick('i');setActStaff(false);}}>Log</button>
          </div>

        <div className='staffcontainer'>

          {actstaff && <ActiveStaff/>}
          {staff === 'b' && <InactiveStaff/>}
          {staff === 'c' && <StaffDashboard/>}
          {staff === 'd' && <TrainedStaff/>}
          {staff === 'e' && <WorkLoad/>}
          {staff === 'f' && <EmploymentStatus/>}
          {staff === 'g' && <Staffkids/>}
          {staff === 'h' && <StaffUsingST/>}
          {staff === 'i' && <Logs/>}


          </div>
          </div>

    </>
  )
}
/*********************************** */

const AddStaffForm = () => {
  return(
    <>
       <div  className="SDashboard">
         <div className='top2'>
            <button style={{color:'white',backgroundColor:'blue'}} onClick={()=>{setStafList(true);setAddStaff(false);setAddform(false);}}><i class="fa-solid fa-left-long" style={{color:'#fcfcfd'}}></i> &nbsp;Back</button>
            <label style= {{fontSize:'20px',paddingLeft:'10px'}}>Enroll New Staff </label>
           
          </div>
          <div className='staffbut2'>
              <h5 style={{color:'black',margin:'20px'}}> BRANCH : SHAHEEN JUNIOR COLLEGE</h5>
          </div>
          <div className='staffcontainer'>
           <div className='tophead'>
            <label>Staff Details</label>
           </div>
          
           
          <div className='addStaffContainer'>
           <div className='addcol'>
             <label> Employment Status:</label>
             <select><option>Temporary</option>
             <option>Permanent and Full Time</option>
             </select>

           </div>
           <div className='addcol'>
             <label> Staff Type :</label>
             <div>
              <label> <input type='radio' checked='true'/>Teaching</label>&nbsp; &nbsp;
              <label> <input type='radio'/>Non Teaching</label>&nbsp; &nbsp;
              <label> <input type='radio'/>Transport</label>
             </div>
          </div>
             
             
             <div className='addcol'>
             <label> Staff Department : *</label>
             <select><option>-Select Department -</option>
             <option>Teaching</option>
             <option>Academic</option>
             </select>
             </div>

             <div className='addcol'>
             <label> Employement Category : *</label>
             <select><option>-Select Category-</option>
             <option>HOD</option>
             <option>Supervisor</option>
             <option>Cordinator</option>
             <option>Teacher</option>
             <option>Lecturer</option>
             </select>
             </div>
             <div className='addcol'>
             <label> Designation : *</label>
             <select><option>-Select Department -</option>
             <option>Teaching</option>
             <option>Academic</option>
             </select>
             </div>
            
             <div className='addcol'>
             <label>Qualification  Type: *</label>
             <select><option>-Select Qualification -</option>
             <option>Undergraduate</option>
             <option>Graduate</option>
             <option> Post Graduation</option>
             </select>
             </div>
            
             <div className='addcol'>
             <label> Education Qualification : *</label>
             <select><option>-Select Qualification -</option>
             <option>10th</option>
             <option>12th</option>
             <option>Graduation</option>
             </select>
             </div>
             <div className='addcol'>
             <label> Access Level : *</label>
             <select><option>-Select Access Level -</option>
             <option>Staff</option>
             <option>Accountant</option>
             <option>Class Teacher</option>
             <option>Front Office</option>
             <option>Warden</option>
             <option>Librarian</option>
             </select>
             </div>

             <div className='addcol'>
             <label> Trained As : *</label>
             <select><option>-Select Level -</option>
             <option>TGT</option>
             <option>PGT</option>
             <option>PRT</option>
             <option>NTT</option>
             <option>PNT</option>
             </select>
             </div>
    
             <div className='addcol'>
             <label> CTET Qualified :</label>
             <div>
              <label> <input type='radio' checked='true'/>Yes</label>&nbsp; &nbsp;
              <label> <input type='radio'/>No</label>&nbsp; &nbsp; 
             </div>
          </div>
          </div>


          <div className='tophead'>
            <label>Personal Details</label>
           </div>
          <div className='addStaffContainer'>
          <div className='addcol'>
             <label> First Name : *</label>
             <input type="text"></input>
          </div>
          <div className='addcol'>
             <label> Middle Name : *</label>
             <input type="text"></input>
          </div>
          <div className='addcol'>
             <label> Last Name : *</label>
             <input type="text"></input>
          </div>
          <div className='addcol'>
             <label> Mobile No : *</label>
             <input type="text"></input>
          </div>
          <div className='addcol'>
             <label> Emergency  Contact No : *</label>
             <input type="text"></input>
          </div>
          <div className='addcol'>
             <label> Gender : *</label>
             <div>
              <label><input type='radio'/>Male</label>&nbsp;&nbsp;
              <label><input type='radio'/>Female</label>&nbsp;&nbsp;
              <label><input type='radio'/>Other</label>
             </div>
          </div>
          <div className='addcol'>
             <label> Enter Date of Birth : *</label>
             <input type="date"></input>
          </div>
          <div className='addcol'>
             <label> Email Id: *</label>
             <input type="email"></input>
          </div>
          <div className='addcol'>
             <label> Permanent Address: *</label>
             <textarea></textarea>
          </div>
          <div className='addcol'>
             <label> Corresponding Address: *</label>
             <textarea></textarea>
          </div>
          <div className='addcol'>
             <label> Religion: *</label>
             <select><option>Hindu</option><otipn>Muslim</otipn><option>Cristian</option></select>
          </div>
          <div className='addcol'>
             
          </div>
          

          </div>


          <div className='tophead'>
            <label>Other Details</label>
           </div>
          <div className='addStaffContainer'>
          <div className='addcol'>
             <label> Adhar No : *</label>
             <input type="number"></input>
          </div>
          <div className='addcol'>
             <label> PAN No : *</label>
             <input type="number"></input>
          </div>
          <div className='addcol'>
             <label> Date of Joining : *</label>
             <input type="date"></input>
          </div>
          <div className='addcol'>
             <label> Staff Reference Code: *</label>
             <input type="text"></input>
          </div>
          <div className='addcol'>
             <label>Salary Pay Type : *</label>
             <div>
              <label><input type='radio'/>Consolidate</label>&nbsp;&nbsp;
              <label><input type='radio'/>PAY</label>&nbsp;&nbsp;
              <label><input type='radio'/>Other</label>
             </div>
          </div>
          
          <div className='addcol'>
             <label> Government Id/ Resident No : *</label>
             <input type="number"></input>
          </div>
          <div className='addcol'>
             <label> Citizenship</label>
             <select><option>Indian</option><option>Other</option></select>
          </div>
          <div className='addcol'>
            
          </div>

          <div className='addcol'>
            <button style = {{backgroundColor:'orangered',color:'white',width:'200px',borderRadius:'5px'}}>Save & Continue </button>
          </div>

          </div>

         </div>

         </div>     
    </>
  )
}
/*************************************** */
const AddTStaffForm = () => {
  return(
    <>
       <div  className="SDashboard">
         <div className='top2'>
            <button style={{color:'white',backgroundColor:'blue'}} onClick={()=>{setStafList(true);setAddTStaff(false);setAddTform(false);}}><i class="fa-solid fa-left-long" style={{color:'#fcfcfd'}}></i> &nbsp;Back</button>
            <label style= {{fontSize:'20px',paddingLeft:'10px'}}>Enroll New Staff </label>
           
          </div>
          <div className='staffbut2'>
              <h5 style={{color:'black',margin:'20px'}}> BRANCH : SHAHEEN JUNIOR COLLEGE</h5>
          </div>
          <div className='staffcontainer'>
           <div className='tophead'>
            <label>Add Transport Staff Details</label>
           </div>
          
           
          <div className='addStaffContainer'>

          <div className='addcol'>
             <label> Staff Department : *</label>
             <select><option>-Select Department -</option>
             <option>Teaching</option>
             <option>Academic</option>
             </select>
             </div>
           <div className='addcol'>
             <label> Employment Status: *</label>
             <select><option>Temporary</option>
             <option>Permanent and Full Time</option>
             </select>

           </div>

           <div className='addcol'>
             <label> Employement Category : *</label>
             <select ><option>Transport</option>
             
             </select>
             </div>
             
             <div className='addcol'>
             <label> Designation : *</label>
             <select>
             <option>Driver</option>
             <option>Cleaner</option>
             </select>
             </div>
            
             <div className='addcol'>
             <label>Qualification  Type: *</label>
             <select><option>-Select Qualification -</option>
             <option>Undergraduate</option>
             <option>Graduate</option>
             <option> Post Graduation</option>
             </select>
             </div>
            
             <div className='addcol'>
             <label> Education Qualification : *</label>
             <select><option>-Select Qualification -</option>
             <option>10th</option>
             <option>12th</option>
             <option>Graduation</option>
             </select>
             </div>
             <div className='addcol'>
             <label> Access Level : *</label>
             <select><option>-Select Access Level -</option> 
             <option>Transport Incharge</option>
             <option>Transport Staff</option>
             </select>
             </div>
     
          </div>


          <div className='tophead'>
            <label>Personal Details</label>
           </div>
          <div className='addStaffContainer'>
          <div className='addcol'>
             <label> First Name : *</label>
             <input type="text"></input>
          </div>
          <div className='addcol'>
             <label> Middle Name : *</label>
             <input type="text"></input>
          </div>
          <div className='addcol'>
             <label> Last Name : *</label>
             <input type="text"></input>
          </div>
          <div className='addcol'>
             <label> Mobile No : *</label>
             <input type="text"></input>
          </div>
          <div className='addcol'>
             <label> Emergency  Contact No : *</label>
             <input type="text"></input>
          </div>
          <div className='addcol'>
             <label> Gender : *</label>
             <div>
              <label><input type='radio'/>Male</label>&nbsp;&nbsp;
              <label><input type='radio'/>Female</label>&nbsp;&nbsp;
              <label><input type='radio'/>Other</label>
             </div>
          </div>
          <div className='addcol'>
             <label> Enter Date of Birth : *</label>
             <input type="date"></input>
          </div>
          <div className='addcol'>
             <label> Email Id: *</label>
             <input type="email"></input>
          </div>
          <div className='addcol'>
             <label> Permanent Address: *</label>
             <textarea></textarea>
          </div>
          <div className='addcol'>
             <label> Corresponding Address: *</label>
             <textarea></textarea>
          </div>
          <div className='addcol'>
             <label> Religion: *</label>
             <select><option>Hindu</option><otipn>Muslim</otipn><option>Cristian</option></select>
          </div>
          <div className='addcol'>          
          </div> 
          </div>
          <div className='tophead'>
            <label>Other Details</label>
           </div>
          <div className='addStaffContainer'>
          <div className='addcol'>
             <label> Adhar No : *</label>
             <input type="number"></input>
          </div>
          <div className='addcol'>
             <label> PAN No : *</label>
             <input type="number"></input>
          </div>
          <div className='addcol'>
             <label> Date of Joining : *</label>
             <input type="date"></input>
          </div>
          <div className='addcol'>
             <label> Staff Reference Code: *</label>
             <input type="text"></input>
          </div>
          <div className='addcol'>
             <label>Salary Pay Type : *</label>
             <div>
              <label><input type='radio'/>Consolidate</label>&nbsp;&nbsp;
              <label><input type='radio'/>PAY</label>&nbsp;&nbsp;
              <label><input type='radio'/>Other</label>
             </div>
          </div>
          
          <div className='addcol'>
             <label> Government Id/ Resident No : *</label>
             <input type="number"></input>
          </div>
          <div className='addcol'>
             <label> Citizenship</label>
             <select><option>Indian</option><option>Other</option></select>
          </div>
          <div className='addcol'>
            
          </div>

          <div className='addcol'>
            <button style = {{backgroundColor:'orangered',color:'white',width:'200px',borderRadius:'5px'}}>Save & Continue </button>
          </div>

          </div>

         </div>

         </div>     
    </>
  )
}

/**************************************** */

const UploadStaffForm = () => {
  return(
    <>
       <div  className="SDashboard">
         <div className='top2'>
            <button style={{color:'white',backgroundColor:'blue'}} onClick={()=>{setStafList(true);setAddTStaff(false);setUploadStaff(false);}}><i class="fa-solid fa-left-long" style={{color:'#fcfcfd'}}></i> &nbsp;Back</button>
           
          </div>
          <h2 style={{color:'#353232',margin:'20px'}}>Upload Staff Details</h2>
          <h4 style={{color:'#353232',margin:'40px'}}>Branch : SHAHEEN JUNIOR COLLEGE</h4>
          <div style= {{color:'black',margin:'20px',marginLeft:'40px'}}>
            <lable >Staff Type : &nbsp;
            <input type='radio'/> &nbsp; Teaching Staff &nbsp; &nbsp;
            <input type= 'radio'/>&nbsp; Non Teaching Staff &nbsp;&nbsp;
            <input type= 'radio'/>&nbsp; Trasport Staff</lable><br/><br></br>
            <div >
            <select style={{marginRight:'30px'}}><option>Select Department</option></select>
            <select style={{marginRight:'30px',width:'300px'}}><option>Select Employement Category</option></select>
            <select ><option>Select Designation</option></select>
            </div><br></br>
            <p>CSV File Format : Create a file with the extentsion .csv and enter  staff details.. <span style={{color:'blue'}}>View the File Format</span></p>
          
          <h6>Instruction</h6>
           <label style={{color:'red',fontSize:'14px'}}>If you select "Transport Staff",Please uploading the only Driver and Cleaner staff oly.</label><br></br>
           <div> 
           <ul>
            <li>1) The Number of columns/Fields in the csv file should be 13,all are seperated with comma.</li>
            <li>2) Mandatory Fields are FirstName,LastName,DOB,Gender. These fields must be uploaded otherwise gives the Error Message.</li>
            <li>3) Non Mandatory fields are MiddleName,EmailID,PhoneNo,Referencecode,Address The Non Mandatory Fields can be left blank seperated by comma in the order of sequence mentioned in the sample csv.</li>
            <li>4) Ex:1 Pavan, kumar,Reddy, 02/22/2001, M,,, H.No.20-98, Dilshuknagar, Hyd,</li>
            <li>5) Kiran, kumar,Reddy 02/22/2001, M, test@gmail.com, 9890988988, hno 23,1st lane, As rao nagar.</li>
           </ul>
           </div>
           <label><input type="file"/></label><br></br>
            <button style = {{backgroundColor:'orangered',color:'white',width:'200px',borderRadius:'5px',margin:'20px'}}>Save & Continue </button>
          </div>

          

         </div>     
    </>
  )
}

const ManageDepartment = () => {
  return(
    <>
       <div  className="SDashboard">
         <div className='top2'>
            <button style={{color:'white',backgroundColor:'blue'}} onClick={()=>{setStafList(true);setAddTStaff(false);setMgnDept(false);}}><i class="fa-solid fa-left-long" style={{color:'#fcfcfd'}}></i> &nbsp;Back</button>
            <label style={{color:"#233131",fontSize:'30px',marginLeft:'20px'}}>Manage Department</label>
            <button style={{color:'white',backgroundColor:'blue',borderRadius:'5px'}}>Add Department</button>
          </div>
         
  <div className='twodiv'> 
<div className='leftdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
<div className='rgtdiv'><input placeholder='Serach in Table'></input> </div>
</div>

<table style={{margin:'10px'}}>
<tr>
<th>SR No</th>
<th>Department</th>
<th>Is Teaching</th>
<th>Is Non-Teaching</th>
<th>Is Transport</th>
<th>Action</th>

</tr>
<tr>
<td>1</td>
<td>Teaching</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td><i class="fa-solid fa-pen" style={{color: "#011c4b"}}></i></td>  
</tr>
<tr>
<td>2</td>
<td>Non-Teaching</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td><i class="fa-solid fa-pen" style={{color: "#011c4b"}}></i></td>  
</tr>
<tr>
<td>3</td>
<td>Transport</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td><i class="fa-solid fa-pen" style={{color: "#011c4b"}}></i></td>  
</tr>
<tr>
<td>4</td>
<td>Teaching</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td><i class="fa-solid fa-pen" style={{color: "#011c4b"}}></i></td>  
</tr>
<tr>
<td>5</td>
<td>Administration</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td><i class="fa-solid fa-pen" style={{color: "#011c4b"}}></i></td>  
</tr>
<tr>
<td>6</td>
<td>Academic</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td><i class="fa-solid fa-pen" style={{color: "#011c4b"}}></i></td>  
</tr>

</table>

         
         </div>     
    </>
  )
}
/********************************************** */

const ManageDesignation = () => {
  return(
    <>
       <div  className="SDashboard">
         <div className='top2'>
            <button style={{color:'white',backgroundColor:'blue'}} onClick={()=>{setStafList(true);setAddTStaff(false);setMgnDesign(false);}}><i class="fa-solid fa-left-long" style={{color:'#fcfcfd'}}></i> &nbsp;Back</button>
            <label style={{color:"#233131",fontSize:'30px',marginLeft:'20px'}}>Manage Role & Responsibility</label>
            <button style={{color:'white',backgroundColor:'blue',borderRadius:'5px'}}>Add Department</button>
          </div>
         
  <div className='twodiv'> 
<div className='leftdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
<div className='rgtdiv'><input placeholder='Serach in Table'></input> </div>
</div>

<table style={{margin:'10px'}}>
<tr>
<th>SR No</th>
<th>Staff Type</th>
<th>Designation</th>
<th>Level</th>
<th>Employement Category</th>
<th>Manage Role and Responsibility</th>
<th>Manage Task</th>

</tr>
<tr>
<td>1</td>
<td>Teaching</td>
<td>Teacher</td>
<td>Level 0</td>
<td>Teacher</td>
<td style={{color:"blue"}} > Add Task</td>
<td></td>  
</tr>
<tr>
<td>2</td>
<td>Non-Teaching</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td><i class="fa-solid fa-pen" style={{color: "#011c4b"}}></i></td>  
</tr>
<tr>
<td>3</td>
<td>Transport</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td><i class="fa-solid fa-pen" style={{color: "#011c4b"}}></i></td>  
</tr>
<tr>
<td>4</td>
<td>Teaching</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td><i class="fa-solid fa-pen" style={{color: "#011c4b"}}></i></td>  
</tr>
<tr>
<td>5</td>
<td>Administration</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td><i class="fa-solid fa-pen" style={{color: "#011c4b"}}></i></td>  
</tr>
<tr>
<td>6</td>
<td>Academic</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td><i class="fa-solid fa-pen" style={{color: "#011c4b"}}></i></td>  
</tr>

</table>

         
         </div>     
    </>
  )
}





/********************************************** */



  return (
    <> 
        <div className="SDheading"><span>HR </span><label> / Staff Details / Create Staff Details </label> </div>
        {stafflist && <StaffList />}
        {addform && <AddStaffForm/>}
        {addTform && <AddTStaffForm />}
        {uploadstaff && <UploadStaffForm/>}
        {mgnDept && <ManageDepartment />}
        {mgnDesign && <ManageDesignation />}
        
    </>
  )
}

export default CreateStaffDetails;