import React from 'react';
 import '../GB/Gradeb.css';


const StructureC = () => {
  return (
    <>

<div className="SDheading"><span>Grade Book </span><label> / Manage / Structure Creation </label> </div>

        <div className='top3'>
             <label>Structure Creation</label>
             
       </div>

  <div className='gradebreport'>
    <div className='reportd'>
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
          
          <div className='gbbuttondiv'>
            <button className="btn btn-primary gbbutton" style={{marginTop:"30px"}}>Get Students</button>
          </div>
   
      </div>

      </div>      
    </>
  )
}

export default StructureC;