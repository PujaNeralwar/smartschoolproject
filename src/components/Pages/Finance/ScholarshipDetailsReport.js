import React from 'react';
import "../Finance/FinanceStyle.css";


const ScholarshipDetailsReport = () => {
  return (
    <>
      <div className="ManageFeeHead"><span>Finance </span><label> / Scholarship / Scholarship Details Report </label> </div>

<div className='ManageFeeHeading'>
   <label> Scholarship Fee Receivable Reports</label>
</div>
  
  <div className='AssignFeeStudent'>
    <div className='AssignFee'>
          <div>
            <label> Academic Year </label>
              <select>
                <option selected='selected'>2023-2024</option>
                <option>2022-2023</option>
              </select>
          </div>

          <div>
            <label>Branch </label>
               <select>
                   <option selected='selected'>Ethiken Educational Society</option>
              </select>
          </div>

          <div>
            <label> Scholarship &nbsp;: </label>
               <select>
                  <option selected='selected'>All Scholarships</option>
              </select>
          </div>

          <div>
            <label>Feetypes&nbsp;:</label>
               <select>
                   <option selected='selected'> All Feetypes</option>
                   <option>No results found</option>
              </select>
          </div>
      </div>

      <div className='AssignFee'>    

          <div>
            <label> Segment&nbsp;: </label>
               <select>
               <option selected='selected'>All Segments</option>
                  <option>Competitive NEET</option>
                  <option>Competitive JEE-IIT</option>
                  <option>GENERAL MPC</option>
                  <option>GENERAL BIPC</option>
                  <option>General MEC</option>
                  <option>General CEC</option>
                  <option>LNO REPEATERS</option>
                  <option>CA - CPT</option>
              </select>
          </div>

          <div>
            <label> Class&nbsp;: </label>
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

          <div className='ManageFeeBtnGrp'>
            <button className='AssignFeebtn' >Get</button>
          </div>
      </div>    

       </div>
    </>
  )
}

export default ScholarshipDetailsReport;