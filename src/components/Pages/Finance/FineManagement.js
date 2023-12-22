import React from 'react';
import "../Finance/FinanceStyle.css";


const FineManagement = () => {
  return (
    <>
    <div className="ManageFeeHead"><span>Finance </span><label> / Fee Management / Fine Management </label> </div>

<div className='ManageFeeConcessionsHeading'>
   <label> Fine Management</label>
   <p>Note:- Use this screen to manage the fine amounts, delete / edit fine amounts</p>

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
            <label>Branch </label>
               <select>
                   <option>Ethiken Educational Society</option>
              </select>
          </div>

          <div>
            <label>Fee Type </label>
               <select>
                     <option>All FeeTypes</option>
                     <option>Tuition fee</option>
                     <option>Books Fee</option>
                     <option>Lab Fee</option>
                     <option>Hostel Fee</option>
              </select>
          </div>

          <div className='ManageFeeBtnGrp'>
            <button>Get</button>
          </div>

       </div>

      
    </>
  )
}

export default FineManagement;