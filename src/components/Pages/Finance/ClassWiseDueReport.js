import React from 'react';
import "../Finance/FinanceStyle.css";


const ClassWiseDueReport = () => {
  return (
    <>
      <div className="ManageFeeHead"><span>Finance </span><label> / Due Reports / Class Wise due report</label> </div>

    <div className='ManageFeeHeading'>
      <label>Class Wise due report</label>
    </div>
  
  <div className='AssignFeeStudent'>

    <div className='AssignFee ClassWiseDiv '>
      
         <div>
            <label>Academic Year </label>
               <select>
                   <option selected='selected'>2023-2024</option>
                  <option >2022-2023</option>
              </select>
          </div>

          <div>
            <label> Installment </label>
              <select >
                <option selected='selected'>-All Installments-</option>
                <option >Installment 1</option>
                <option >Installment 2</option>
                <option >Installment 3</option>
                <option >One Time</option>
              </select>
          </div>

          <div>
            <label> Status</label>
              <select >
                <option selected='selected'>Active students</option>
                <option >Inactive students</option>
                <option >Both</option>
              </select>
          </div>

          <div >
            <label>Paid date on or before</label>
            <div className='FeeDayDate'>
               <i class="fa-solid fa-calendar-days"></i>
               <input type='date' value="2023-12-08" />
            </div>
         </div>

          <div >
                <input className='ClassWiseIn' type='checkbox' />
                <label >For dues calculation, consider Past dated cheques (PDC) also as collection?</label>
          </div>

    </div>

      <div className='AssignFee'>    
          <div>
                <input className='ClassWiseIn' type='checkbox' />
                <label >For dues calculation, consider scholarship also as collection?</label>
          </div>

          <div className='ManageFeeBtnGrp'>
            <button className='ClassWiseBtn'>Show Report</button>
          </div>
      </div>    

       </div>
    </>
  )
}

export default ClassWiseDueReport;