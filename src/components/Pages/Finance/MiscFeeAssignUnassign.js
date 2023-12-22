import React from 'react';
import "../Finance/FinanceStyle.css";

const MiscFeeAssignUnassign = () => {
  return (
    <>
         <div className="ManageFeeHead"><span>Finance </span><label> / Fee Management / Misc.Fee Assign/Unassign </label> </div>

<div className='ManageFeeHeading'>
   <label>Misc.Fee Assign/Unassign</label>
</div>
  
  <div className='ManageFeeDrop ClassWiseDiv'>

         <div>
            <label>Branch </label>
               <select>
                   <option selected='selected'>Ethiken Educational Society</option>
              </select>
          </div>

          <div>
            <label>Misc Fee Types </label>
              <select>
                <option selected='selected'> Select MiscFeeTypes</option>
                <option>Individual student wise fee amount</option>
                <option>Library-Late Fee</option>
                <option>Library-Book Damage charges</option>
                <option>Library-Book Lost charges</option>
              </select>
          </div>

          

          <div>
            <label> Classes </label>
               <select>
                  <option selected='selected'>All Classes</option>
                  <option>1 YEAR MPC-IIT</option>
                  <option>2 YEAR MPC-IIT</option>
                  <option>1 YEAR MPC-GENERAL</option>
                  <option>2 YEAR MPC-GENERAL</option>
                  <option>1 YEAR BPC-NEET</option>
                  <option>2 YEAR BPC-NEET</option>
                  <option>1 YEAR BPC-GENERAL</option>
                  <option>2 YEAR BPC-GENERAL</option>
                  <option>1 YEAR MEC</option>
                  <option>2 YEAR MEC</option>
                  <option>1 YEAR CEC</option>
                  <option>2 YEAR CEC</option>
                  <option>LNO (NEET)</option>
                  <option>LNO (IIT)</option>
              </select>
          </div>

          <div>
            <label>section </label>
               <select>
                     <option>All Section</option>
                     <option>No results found</option>
              </select>
          </div>

          <div>
            <label>Student Status </label>
               <select>
                     <option>Both</option>
                     <option>Active</option>
                     <option>InActive</option>
              </select>
          </div>

          <div className='ManageFeeBtnGrp'>
            <button>Get</button>
          </div>

       </div>
    </>
  )
}

export default MiscFeeAssignUnassign;