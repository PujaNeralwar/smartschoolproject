import React from 'react';
import "../Finance/FinanceStyle.css";


const MakePayment = () => {
  return (
    <>
      <div className="ManageFeeHead"><span>Finance </span><label> / Collections / Make Payment </label> </div>

<div className='MakePaymentHeading'>
   <label>Receipt Entry</label>
   <a style={{fontSize:'10pt'}}>View Settings</a>
   <table className='MakePaymentTable1'>
    <tr className='paymenttr'>
        <td style={{fontSize:'7pt'}}><span> Default Search Criteria &nbsp;:&nbsp; </span> <label style={{fontSize:'7pt',width:'65px'}}>Student Name</label><a><i class="fa-solid fa-pencil"></i></a></td>
        <td style={{fontSize:'7pt'}}>SMS Alert &nbsp;<i class="fa-solid fa-circle-question"></i> :&nbsp;&nbsp;<span style={{color:'red'}}>OFF</span></td>
        <td style={{fontSize:'7pt'}}>WhatsApp Alert&nbsp; <i class="fa-solid fa-circle-question"></i> :&nbsp;&nbsp;<span style={{color:'red'}}>OFF</span></td>
        <td style={{fontSize:'7pt'}}>App Notification Alert&nbsp; <i class="fa-solid fa-circle-question"></i> :&nbsp;&nbsp;<span style={{color:'red'}}>OFF</span></td>
        <td style={{fontSize:'7pt',width:'80px'}}>Last Date for applying concession&nbsp;:&nbsp;29 Feb 2024</td>
    </tr>
   </table>
</div>
  
  <div className='MakePaymentDrop'>
          <div>
              <select>
                <option>Nizamabad</option>
                <option>Ethiken Educational Society</option>
              </select>
          </div>

          <div>
               <select >
               <option>All Classes</option>
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
                <select className='MakePaymentSelect'>
                    <option>All Sections</option>
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


          <div>
               <select className='MakePaymentSelect'>
                   <option>All Admission Types</option>
                   <option>Day Scholar</option>
                   <option>Residential / Hostel</option>
                   <option>Semi Residential</option>

              </select>
          </div>

        
          <div>
               <select className='MakePaymentSelect'>
                     <option>Active</option>
                     <option>Both</option>
                     <option>InActive</option>
                     <option>Alumni</option>

              </select>
          </div>

          <div>
               <select>
                     <option>Student Name</option>
                     <option>Application No</option>
                     <option>Enrollment Code</option>
                     <option>Reference Code</option>
                     <option>Unique / GR No</option>
                     <option>Father Name</option>
                     <option>Father Mobile No</option>
                     <option>Father Email ID</option>
                     <option>Mother Name</option>
                     <option>Mother Mobile No</option>
                     <option>Mother Email ID</option>
                     <option>Roll No</option>
                     <option>Student Mobile No</option>
                     <option>Hallticket No</option>
                     <option>Student Aadhaar No</option>
              </select>
          </div>

          <div className='MakePaymentBtnGrp'>
            <input placeholder='Student Name (Please enter Min 3 characters)'></input>
            <button>Search</button>
          </div>
          </div>
    </>
  )
}

export default MakePayment;