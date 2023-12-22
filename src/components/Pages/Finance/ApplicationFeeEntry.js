import React from 'react';
import "../Finance/FinanceStyle.css";


const ApplicationFeeEntry = () => {
  return (
    <>
      <div className="ManageFeeHead"><span>Finance </span><label> / Collections / Application Fee Entry </label> </div>

<div className='ManageFeeHeading'>
   <label>Application Fee Entry</label> 
</div>
  
  <div className='MakePaymentDrop'>
          <div>
              <select>
                <option>2022-2023</option>
                <option>2023-2024</option> 
              </select>
          </div>

          <div>
               <select>
                   <option>From Enquiry</option>
                   <option>From Application</option>
              </select>
          </div>

          <div>
               <select>
                   <option>Enquiry Code</option>
                   <option>Student Name</option>
                   <option>Mobile Number</option>
                   <option>Application Number</option>
                   <option>Receipt Number</option>
              </select>
          </div>

         
          <div className='MakePaymentBtnGrp'>
            <input placeholder='Application No' />
            <button>Search</button>
          </div>

       </div>
    </>
  )
}

export default ApplicationFeeEntry;