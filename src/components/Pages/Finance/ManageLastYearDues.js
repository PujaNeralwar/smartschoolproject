import React from 'react';
import "../Finance/FinanceStyle.css";


const ManageLastYearDues = () => {
  return (
    <>
       <div className="ManageFeeHead"><span>Finance </span><label> / Fee Management /Manage Last Year Dues </label> </div>

<div className='ManageFeeHeading'>
   <label>Manage Last Year Dues</label>
</div>

<div className='ManageFeeDrop'>

         <div>
             <label>Branch </label>
              <select>
              <option selected='selected'>Select Branch</option>
              <option>Nizamabad</option>
              <option>Ethiken Educational Society</option>
               
              </select>
          </div>

          <div>
            <label> Last year dues from AY </label>
              <select>
                <option>2023-2024</option>
                <option selected='selected'>2022-2023</option>
              </select>
          </div>

          <div>
            <label> Dues Transfer to AY </label>
              <select>
                <option selected='selected'>2023-2024</option>
              </select>
          </div>

        <div className='ManageFeeBtnGrp'>
          <button>Get</button>
        </div>

     </div>
    </>
  )
}

export default ManageLastYearDues;