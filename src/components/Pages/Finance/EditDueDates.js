import React from 'react';
import "../Finance/FinanceStyle.css";


const EditDueDates = () => {
  return (
    <>
      <div className="ManageFeeHead"><span>Finance </span><label> / Fee Management / Edit Due Dates </label> </div>

<div className='ManageFeeHeading'>
   <label> Due Date Change</label>
</div>
  
  <div className='AssignFeeStudent'>
    <div className='AssignFee'>

         <div>
               <select>
                   <option selected='selected'>Ethiken Educational Society</option>
              </select>
          </div>

          <div>
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
                <select >
                    <option selected='selected'>All Sections</option>
                    <option>1 YEAR MPC-IIT-1 YEAR MPC-IIT (BOYS)</option>
                    <option>1 YEAR MPC-IIT-1 YEAR MPC-IIT (GIRLS)</option>
                    <option>2 YEAR MPC-IIT-2 YEAR MPC-IIT (BOYS)</option>
                    <option>2 YEAR MPC-IIT-2 YEAR MPC-IIT (GIRLS)</option>
                    <option>1 YEAR MPC-GENERAL-1 YEAR MPC-GENERAL (GIRLS)</option>
                    <option>2 YEAR MPC-GENERAL-2 YEAR MPC-GENERAL (GIRLS)</option>
                    <option>1 YEAR BPC-NEET-1 YEAR BPC-NEET (BOYS)</option>
                    <option>1 YEAR BPC-NEET-1 YEAR BPC-NEET (GIRLS)</option>
                    <option>2 YEAR BPC-NEET-2 YEAR BPC-NEET (BOYS)</option>
                    <option>2 YEAR BPC-NEET-2 YEAR BPC-NEET (GIRLS)</option>
                    <option>1 YEAR BPC-GENERAL-No Need</option>
                    <option>1 YEAR BPC-GENERAL-1 YEAR BPC-GENERAL (GIRLS)</option>
                    <option>2 YEAR BPC-GENERAL-2 YEAR BPC-GENERAL (GIRLS)</option>
                    <option>1 YEAR MEC-1 YEAR MEC (BOYS)</option>
                    <option>1 YEAR MEC-1 YEAR MEC (GIRLS)</option>
                    <option>2 YEAR MEC-2 YEAR MEC (BOYS)</option>
                    <option>2 YEAR MEC-2 YEAR MEC (GIRLS)</option>
                    <option>1 YEAR CEC-1 YEAR CEC (BOYS)</option>
                    <option>1 YEAR CEC-1 YEAR CEC (GIRLS)</option>
                    <option>2 YEAR CEC-2 YEAR CEC (BOYS)</option>
                    <option>2 YEAR CEC-2 YEAR CEC (GIRLS)</option>
                    <option>LNO (NEET)-LNO (NEET) (BOYS)</option>
                    <option>LNO (NEET)-LNO (NEET) (GIRLS)</option>
                    <option>LNO (IIT)-LNO (IIT) (BOYS)</option>
                    <option>LNO (IIT)-No Need</option>
                </select>
            </div>
    </div>
    <div className='AssignFee'>
        <div>
               <select>
                   <option selected='selected'>Student Name</option>
                   <option>Application No</option>
                   <option>Enrollment Code</option>
                   <option>Reference Code</option>
                   <option>Unique /GR No</option>
                   <option>Father Name</option>
                   <option> Father Mobile No</option>
                   <option>Mother Name</option>
                   <option>Mother Mobile No</option>
                   <option>Roll No</option>
              </select>
          </div>

          <div className='EditDueDateBtnGrp'>
            <input placeholder='Student Name (Please enter Min 3 characters)'></input>
            <button>Search</button>
          </div>
      </div>

       </div>
    </>
  )
}

export default EditDueDates;