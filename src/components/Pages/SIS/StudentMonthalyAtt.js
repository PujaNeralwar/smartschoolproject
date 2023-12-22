import React from 'react'
import "../SIS/SIS.css";
const StudentMonthalyAtt = () => {
  return (
    <>
    <div className="SDheading"><span>SIS </span><label> / Attendance/ Student Monthly Attendance </label> </div>
    <div className='std-prf-top3'>
    <h3 className='std-prof-h3 studentmonthlyatt-main'> Student Monthly Attendence</h3>
    <div className='studentmonthlyatt-div'>
    <button className='studentMonthyatt-button'>Daily Attendence Report</button>
    <button className='studentMonthyatt-button'>Manage WeeksOff</button>
    </div>

    </div>

<div className='ManageFeeDrop'>
<div>
            <label className='label-2'>Branch </label>
               <select className='studentAtt-select1'>
                   <option>Ethiken Educational Society</option>
              </select>
          </div>
          <div>
            <label className='label-2'> Class </label>
               <select className='managepic-select1'>
               
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
            <label className='label-2'> Section </label>
              <select className='managepic-select1'  >
                <option>I YEAR MPC- (BOYS)</option>
                <option>I YEAR MPC- (GIRLS)</option>
              
              </select>
          </div>

          <div>
            <label className='label-2'>Acadamic Month </label>
               <select className='managepic-select1'>
                   <option>June-2023</option>
                   <option>July-2023</option>
                   <option>Aug-2023</option>
                   <option>Sept-2023</option>
                   <option>Oct-2023</option>
                   <option>Nov-2023</option>
                   <option>Dec-2023</option>
              
              </select>
          </div>

          <div>
            <label className='label-2'>Student Status </label>
               <select className='managepic-select1'>
                   <option>All</option>
                   <option>Active</option>
                   <option>Inactive</option>
                  
              </select>
          </div>
         

        

          <div className=' '>
          <button className='btn btn-primary get get1'>Get</button>
          </div>
          </div>


    </>
  )
}

export default StudentMonthalyAtt;