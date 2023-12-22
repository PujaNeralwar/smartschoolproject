import React from 'react'
import "./SIS.css"
const PramotingStudents = () => {
  return (
    <>
    <div className="SDheading"><span>SIS </span><label> / Enrollement / Pramoting Student </label> </div>
    <div className='std-prf-top3'>
    <h3 className='std-prof-h3'>Pramoting Student</h3>      
       </div>
    
    <div className='ManageFeeDrop'>
    <div>
                <label className='label-1'>Current AY </label>
                   <select className='managepic-select1'>
                       <option>2023-2024</option>
                  </select>
              </div>
              <div>
                <label className='label-1'>Current Class </label>
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
                <label className='label-1'>Current Section </label>
                  <select className='managepic-select1'  >
                    <option>-All Section-</option>
                    <option>I Year MPC IIT (Boys)</option>
                    <option>I Year MPC IIT (Girls)</option>
                  </select>
              </div>
    
              <div>
                <label className='label-1'>Pramoting AY( <span>Strat date: <span className='pramoting-span'>01 JUN 2023</span></span>) </label>
                   <select className='managepic-select'>
                       <option>-All Section-</option>
                      
                  </select>
              </div>
    
             
    
            
    
              <div className=''>
                <button className='btn btn-primary get get1'>Get</button>
              </div>
              </div>
    
    
          
           </>
  )
}

export default PramotingStudents;