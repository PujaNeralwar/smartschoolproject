import React from 'react';
import "../Finance/FinanceStyle.css";


const AssignMiscFeeGroupToStudents = () => {
  return (
    <>
      <div className="ManageFeeHead"><span>Finance </span><label> / Fee Management /Assign Misc. fee group to Students </label> </div>

<div className='ManageFeeHeading'>
   <label>Assign Miscellaneous FeeGroup To Students</label>
</div>

<div className='ManageFeeDrop'>

        <div>
          <label> Class </label>
             <select>
                <option selected='selected'>-select-</option>
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
          <label>Section </label>
            <select>
              <option selected='selected'>-Select Section-</option>
              <option>No results found</option>
            </select>
        </div>

        <div>
          <label>Misc Fee Group</label>
             <select>
                 <option selected='selected'>-All-</option>
            </select>
        </div>

        <div className='ManageFeeBtnGrp'>
          <button>Get</button>
        </div>

     </div>
    </>
  )
}

export default AssignMiscFeeGroupToStudents;