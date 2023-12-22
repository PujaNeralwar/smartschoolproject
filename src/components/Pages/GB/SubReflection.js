import React from 'react';
import '../GB/Gradeb.css';

const SubReflection=()=>{
    return(
        <>
        
        <div className="SDheading"><span>Grade Book </span><label> / Manage / Create Subject Reflections </label> </div>

<div className='top3'>
     <label>Create Subject Reflections</label>
     <div className='staffbutz'>
       <button className="btndz btn-secondary">Subject Reflection Grading Scale</button>
       <button className="btndz btn-secondary">Default Reflection</button>
     </div>  
</div>

<div className='gradebreport'>
<div className="reportd">
  <div>
            <lable> Branch : </lable>
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
        </>

    )
}
export default SubReflection;