import React from 'react'

const ManageProfile = () => {
  return (
<>
<div className="SDheading"><span>SIS </span><label> / Enrollement / Manage Profile Photo </label> </div>

<div className='ManageFeeDrop'>
<div>
            <label className='label-1'>Branch </label>
               <select className='managepic-select'>
                   <option>Ethiken Educational Society</option>
              </select>
          </div>
          <div>
            <label className='label-1'> Class </label>
               <select className='managepic-select1'>
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
            <label className='label-1'> Section </label>
              <select className='managepic-select1'  >
                <option>-All Section-</option>
              
              </select>
          </div>

          <div>
            <label className='label-1'>Type </label>
               <select className='managepic-select1'>
                   <option>Student</option>
                   <option>Father</option>
                   <option>Mother</option>
                   <option>Guardian</option>
              </select>
          </div>

         

        

          <div className=' '>
          <button className='btn btn-primary get get1'>Get</button>
          </div>
          </div>


      
       </>
  )
}

export default ManageProfile;