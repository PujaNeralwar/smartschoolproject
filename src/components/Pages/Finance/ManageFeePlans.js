import React from 'react';
import "../Finance/FinanceStyle.css";

const ManageFeePlans = () => {
  return (
   <>
   <div className="ManageFeeHead"><span>Finance </span><label> / Fee Management / Manage Fee plans </label> </div>

   <div className='ManageFeeHeading'>
      <label>Manage Fee Plan</label>

     <div className='ManageFeeBut'>
        <button>Copy Fee Plan</button>
          <select className='ManageFeeSelect'>
           <option>Ethiken Educational Society</option>
         </select>
     </div>  
  </div>
     
     <div className='ManageFeeDrop'>
             <div>
               <label> Academic Year </label>
                 <select>
                   <option>2023-2024</option>
                   <option>2022-2023</option>
                 </select>
             </div>

             <div>
               <label>Type of Fee Plan </label>
                  <select>
                      <option>All Fee Plans</option>
                      <option>Regular Fee Plans</option>
                      <option>Transport Fee Plans</option>
                     <option>Hostel/Mess Fee Plans</option>
                     <option>Lunch Fee Plans</option>

                 </select>
             </div>

             <div>
               <label> Status </label>
                  <select>
                        <option>Active</option>
                        <option>Inactive</option>
                        <option>All</option>
                 </select>
             </div>

             <div className='ManageFeeBtnGrp'>
               <button>Get</button>
               <button className='btnChange'>Change Invoice & Due Dates</button>
             </div>

          </div>

   </>
  )
}

export default ManageFeePlans;