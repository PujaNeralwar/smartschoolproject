import React, { useState } from 'react';
// import { useState } from 'react';
import "../dashboard/Dashboard.css";
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Organisation from './Organisation';
import Zonal from './Zonal';
import Branch from './Branch';
import Staff from './Staff';

const CreateUser = () => {
   const[organisation,setOrganisation]= useState(true);
   const[zonal, setZonal] = useState(false);
   const[branch,setBranch] = useState (false);
   const[staff,setStaff] = useState (false);

  return (
    <>
    {/* <div className='dashmain1'> */}
    <div className='divbutton'>
       <button onClick={() => {setOrganisation(!organisation);setZonal(false); setBranch(false); setStaff(false)}}>Organisation</button>
       <button onClick={() => {setZonal(!zonal);setOrganisation(false); setBranch(false); setStaff(false)}}>Zonal</button>
       <button onClick={() =>{setBranch(!branch);setOrganisation(false);setZonal(false); setStaff(false)}}>Branch</button>
       <button onClick={() => {setStaff(!staff) ;setBranch(false);setOrganisation(false);setZonal(false);}}>Staff</button>
       </div>
       <div className='dashmain1'> 
       {organisation && <Organisation/>}
       {zonal && <Zonal/>}
       {branch && <Branch/>}
       {staff && <Staff/>}
       

   

{/* <div className='dashmain1'> 
          <Link to="Organisation">Organisation</Link>
          <Link to='Zonal'>Zonal</Link>
          <Link to="Branch">Branch</Link>
          <Link to ="Staff">Staff</Link>
        
         
        
       <Outlet />
       </div> */}
    </div>

    </>
  )
}

export default CreateUser;