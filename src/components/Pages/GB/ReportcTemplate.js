import React from 'react';
import '../GB/Gradeb.css';

const ReportcTemplate=()=>{
    return(
        <>
        
        <div className="SDheading"><span>Grade Book </span><label> / Manage / Subject Skills Grade Indicator </label> </div>

        <div className='top3'>
     <label>Reportcard Templates</label>
     <div className='staffbutz'>
       {/* <button className="btn btn-primary" onClick={openBt}>Where can you create Scholastic Skills & Grading Scale?</button> */}
     </div>  
</div>

<div className='gradebreportd' style={{marginTop:"40px"}}>
<div className='maibuttons1dtz'>
     <button>Your School Report Card Template</button>
       <button> Report Card Url Setting</button>
       <button>MCB Term Report Card Template Gallery</button>
       <button>MCB Evaluation Card Template Gallery</button>
       </div>


       <div className='gradebreport' style={{marginTop:"30px"}}>
     <div className="reportd">
          <div>

          <lable> Academic Year : </lable>
            <select className="form-select" aria-label="Show Report">
                    <option value="-Select-">--Select Academic Year--</option>
                    <option >2023-2024 </option>
                    <option >2022-2023 </option>

            </select>
            </div>

          <div>
            <lable> Branch :  </lable>
            <select className="form-select" aria-label="Show Report">
                    <option value="-Select-">--Select --</option>
                    <option >--Ethiken Education Society --</option>
                    <option >--Ethiken Education Society --</option>

            </select>
            </div>
        
            <div className='gbbuttondiv'>
            <button className="btn btn-primary gbbutton" >Get</button>
          </div>

     </div>
     </div>
     </div>
        </>
    )
}
export default ReportcTemplate;