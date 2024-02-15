import React from 'react'
import "../HR/Hrstyle.css";
import { useState } from 'react';
const UpdateStaffDetails = () => {

  const [staffDetails,setStaffDetails]= useState(true);
  const [active, setActive] = useState("");
  const [staffU,setStaffU] = useState("");
  const handleOnClick=(e) =>{
    setStaffU(e);
  }
  const handleClick = (e) => {
    setActive(e.target.id);   
  }

  const StaffDetail = () => {
    return (
      <>
       <div className='leftside'>
           <ul>
            <li>Personal Details</li>
            <li>Family Details</li>
            <li>Health Details</li>
            <li>Staff Designations</li>
            <li>CTET Qualified or Trained</li>
            <li>Staff Employement Status</li>
            <li>Staff Qualifications</li>
            <li>DOB / DOJ</li>
            <li>Staff Bank Account Details</li>
            <li>Manage OutSource Staff</li>
            <li>Address Details</li>
            <li>Reference Code</li>
            <li>BioMetric Code</li>
            <li>Blood Group</li>
            <li>Caste or Sub Caste</li>
            <li>Staff WhatsApp No Details</li>
            <li>Staff Joining Security Deposite</li>
            <li>Microsoft Team EmailIDs</li>
            <li>Google EmailIDs</li>


           </ul>
         </div>
         <div className='rightside'>
          
         <div className='twodivstaff'> 
          <button>Download Staff Personal Details</button>
          <button style={{backgroundColor:'white', color:"black" , border:"1px solid blue"}}><i class="fa-solid fa-folder-open" style={{color: "#3f7fee"}}></i> Browse (.csv only)</button>
         
        </div>

         <div className='twodivstaff'> 
         <div className='ltdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
         <div className='rtdiv'><input placeholder='Serach in Table'></input> </div>
        </div>
    
        <table>
        <tr>
            <th>Sr No.</th>
            <th>Branch Code</th>
            <th>Reference Code</th>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Marital Status</th>
            <th>Divorced</th>
            <th>Aniversary Date</th>
            <th>Action</th>
            
        </tr>
        <tr>
            <td colSpan={11} style={{color:'red'}}>No record Found!!!....</td>
           
        </tr>
          
         </table>
         </div>

      </>
    )
  }
  const ContactDetails = () =>{
    return(
      <>
      <div className='rightside1'>
      <div className='twodivstaff'> 
          <button>Download Staff Contact Details</button>
          <button style={{backgroundColor:'white', color:"black" , border:"1px solid blue"}}><i class="fa-solid fa-folder-open" style={{color: "#3f7fee"}}></i> Browse (.csv only)</button>
         
        </div>
        <br></br>
         <div className='twodivstaff'> 
         <div className='ltdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
         <div className='rtdiv'><input placeholder='Serach in Table'></input> </div>
        </div>
    
        <table>
        <tr>
            <th>Sr No.</th>
            <th>Branch Code</th>
            <th>Reference Code</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile No.</th>
            <th>Emergency No.</th>
            <th>Aletrnative No.</th>
            <th>Alternative Email</th>  
            <th>Action</th>
            
        </tr>
        <tr>
            <td colSpan={10} style={{color:'red'}}>No record Found!!!....</td>
           
        </tr>
          
         </table>

         </div>

      </>
    )
  }

  const UANno = () =>{
    return(
      <>
      <div className='rightside1'>
      <div className='twodivstaff'> 
          <button>Download Staff PF Details</button>
          <button style={{backgroundColor:'white', color:"black" , border:"1px solid blue"}}><i class="fa-solid fa-folder-open" style={{color: "#3f7fee"}}></i> Browse (.csv only)</button>
         
        </div>
        <br></br>
         <div className='twodivstaff'> 
         <div className='ltdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
         <div className='rtdiv'><input placeholder='Serach in Table'></input> </div>
        </div>
    
        <table>
        <tr>
            <th>Sr No.</th>
            <th>Branch Code</th>
            <th>Reference Code</th>
            <th>Name</th>
            <th>Payroll Entry</th>
            <th>UAN</th>
            <th>PF</th>
            <th>ESI</th>
            
            <th>Action</th>
            
        </tr>
        <tr>
            <td colSpan={9} style={{color:'red'}}>No record Found!!!....</td>
           
        </tr>
          
         </table>

         </div>

      </>
    )
  }

  const Adhar = () =>{
    return(
      <>
      <div className='rightside1'>
      <div className='twodivstaff'> 
          <button>Download Staff Adhar / PAN / Passport / Government Id Details</button>
          <button style={{backgroundColor:'white', color:"black" , border:"1px solid blue"}}><i class="fa-solid fa-folder-open" style={{color: "#3f7fee"}}></i> Browse (.csv only)</button>
         
        </div>
        <br></br>
         <div className='twodivstaff'> 
         <div className='ltdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
         <div className='rtdiv'><input placeholder='Serach in Table'></input> </div>
        </div>
    
        <table>
        <tr>
            <th>Sr No.</th>
            <th>Branch Code</th>
            <th>Reference Code</th>
            <th>Name</th>
            <th>Adhar No</th>
            <th>PAN No.</th>
            <th>Passport No.</th>
            <th>GovernmentId / Resident No.</th>  
            <th>Action</th>   
        </tr>
        <tr>
            <td colSpan={9} style={{color:'red'}}>No record Found!!!....</td>
           
        </tr>   
         </table>
         </div>

      </>
    )
  }

  const Nationality = () =>{
    return(
      <>
      <div className='rightside1'>
      <div className='twodivstaff'> 
          <button>Download Staff Nationality / Religion Details</button>
          <button style={{backgroundColor:'white', color:"black" , border:"1px solid blue"}}><i class="fa-solid fa-folder-open" style={{color: "#3f7fee"}}></i> Browse (.csv only)</button>
         
        </div>
        <br></br>
         <div className='twodivstaff'> 
         <div className='ltdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
         <div className='rtdiv'><input placeholder='Serach in Table'></input> </div>
        </div>
    
        <table>
        <tr>
            <th>Sr No.</th>
            <th>Branch Code</th>
            <th>Reference Code</th>
            <th>Name</th>
            <th>Nationality</th>
            <th>Citizenship</th>
            <th>Religion</th>
            <th>Action</th>   
        </tr>
        <tr>
            <td colSpan={8} style={{color:'red'}}>No record Found!!!....</td>
           
        </tr>   
         </table>
         </div>

      </>
    )
  }




  return (
    <>
 <div className="SDheading"><span>HR </span><label> / Staff Details / Update Staff Details </label> </div>

<div className='top4'>
<label>Update Staff Details

<select className="ethselect"><option>Ethiken Educational Society</option></select>
<select><option>Teaching</option>
<option>Non Teaching</option>
<option>Transport</option>
</select>
<select><option>Active</option><option>InActive</option></select>

<button>GET</button>

</label>
</div>

<div  className="SDashboard">
   <div className='mainbuttons'>
    <button className={active === "a" ? "active" : "inactive"} id={"a"} onClick={(e) => {handleClick(e);handleOnClick('a');setStaffDetails(true);}}>Staff Details</button>
    <button className={active === "b" ? "active" : "inactive"} id={"b"} onClick={(e) => {handleClick(e);handleOnClick('b');setStaffDetails(false);}}>Contact Details</button>
    <button className={active === "c" ? "active" : "inactive"} id={"c"} onClick={(e) => {handleClick(e);handleOnClick('c');setStaffDetails(false);}}>UAN / PF / ESI</button>
    <button className={active === "d" ? "active" : "inactive"} id={"d"} onClick={(e) => {handleClick(e);handleOnClick('d');setStaffDetails(false);}}>Adhar / PAN / Passport / GovernmentId</button>
    <button className={active === "e" ? "active" : "inactive"} id={"e"} onClick={(e) => {handleClick(e);handleOnClick('e');setStaffDetails(false);}}>Nationality / Religion</button>
              
          </div>

        <div className='updatestaffcontainer'>
        {staffDetails && <StaffDetail/>}
        {staffU === 'b' && <ContactDetails/>}
        {staffU === 'c' && <UANno />}
        {staffU === 'd' && <Adhar />}
        {staffU === 'e' && <Nationality />}
         
         </div>  
        
</div>

    </>
  )
}

export default UpdateStaffDetails;