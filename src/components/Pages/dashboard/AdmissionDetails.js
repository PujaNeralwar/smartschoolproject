import React from 'react';
import { useState } from 'react';
import AdmissionForm from './AdmissionForm';
const AdmissionDetails = () => {
    const[student,setStudent]= useState(true);
   const[parents, setParents] = useState(false);
   const[documnets,setdocumnets] = useState (false);
   const[course,setcourse] = useState (false);
  return (
       <>
        <div className='divbutton'>
       <button onClick={() => {setStudent(true)}}>Student Details</button>
       {/* <button onClick={() => {setZonal(!zonal);setOrganisation(false); setBranch(false); setStaff(false)}}>Parents Details</button>
       <button onClick={() =>{setBranch(!branch);setOrganisation(false);setZonal(false); setStaff(false)}}>Course Details</button>
       <button onClick={() => {setStaff(!staff) ;setBranch(false);setOrganisation(false);setZonal(false);}}>Documents</button> */}
       </div>
       <div className='dashmain1'> 
       {student && <AdmissionForm/>}
       {/* {zonal && <Zonal/>}
       {branch && <Branch/>}
       {staff && <Staff/> */}
       </div>
    </>
  )
}

export default AdmissionDetails;