import React from 'react'

const StudentLeaveIntimation = () => {
  return (
    <>
    <div className="SDheading"><span>SIS </span><label> / Attendance/ Student Leave Intimation</label> </div>
    <div className='std-prf-top3'>
    <h3 className='std-prof-h3 studentmonthlyatt-main'> Student Leave Intimation Dashboard</h3>
    <div className='studentmonthlyatt-div'>
    <button className='studentLeave-button'>Create Student Leave Types</button>
  
    </div>

    </div>

<div className='ManageFeeDrop'>
<div>
            <label className='label-2'>Branch </label>
               <select className='managepic-select1'>
                   <option>Ethiken Educational Society</option>
              </select>
          </div>
          
          <div>
            <label className='label-2'> Date</label>
              <select className='managepic-select1'  >
                <option>Today</option>
                <option>This week</option>
                <option>This Month</option>
              
              </select>
          </div>


       
         

        

          <div className=' '>
          <button className='btn btn-primary get get1'>Get</button>
          </div>
          </div>


    </>

  )
}

export default StudentLeaveIntimation;