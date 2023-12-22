import React from 'react';
import "../Finance/FinanceStyle.css";


const ManageFeeInvoiceChallan = () => {
  return (
    <>
     <div className="ManageFeeHead"><span>Finance </span><label> / Fee Management / Manage Fee Invoice/Challan </label> </div>

  <div className='ManageFeeHeading'>
     <label>Manage Fee Invoice/Challan</label>

  <div className='ManageFeeBut'>
     <button>Generate Fee Invoices</button>
     <button>Generate Fee Challan</button>
  </div>  
</div>
  
  <div className='ManageFeeDrop'>

          <div>
             <label>Branch </label>
              <select>
              <option>-Select Branch-</option>
              <option>Nizamabad</option>
              <option selected='selected'>Ethiken Educational Society</option>
               
              </select>
          </div>

          <div>
            <label> Class </label>
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
            <label>Section </label>
              <select>
                <option selected='selected'>All Sections</option>
                <option>No results found</option>
              </select>
          </div>

          <div>
            <label>Invoice Date </label>
               <select>
                   <option selected='selected'>All</option>
                   <option>01 Apr 2023</option>
                   <option>10 Apr 2023</option>
                  <option>31 Jul 2023</option>
                  <option>01 Aug 2023</option>
                  <option>31 Oct 2023</option>
                  <option>01 Dec 2023</option>
                  <option>31 Dec 2023</option>
              </select>
          </div>

          <div>
            <label> Type </label>
               <select>
                     <option selected='selected'>Invoice</option>
                     <option>Challan</option>
              </select>
          </div>

          <div className='ManageFeeBtnGrp'>
            <button>Get</button>
          </div>

       </div>
      
    </>
  )
}

export default ManageFeeInvoiceChallan;