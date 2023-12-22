import React from 'react';
import "../Finance/FinanceStyle.css";


const FeeReceivablesReports = () => {
  return (
    <>
     <div className="ManageFeeHead"><span>Finance </span><label> / Fee Management /Fee Receivables Report </label> </div>
  
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
         <label> Classes </label>
            <select>
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

       <div className='ManageFeeBtnGrp'>
         <button>Get</button>
       </div>
      
    </div>
    </>
  );
};

export default FeeReceivablesReports;