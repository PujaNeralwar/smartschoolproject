import React from 'react';
import '../GB/Gradeb.css';


const GradeIndicator=()=>{

    
    return(
        <>
       
       <div className="SDheading"><span>Grade Book </span><label> / Manage / Subject Skills Grade Indicator </label> </div>

       <div className='top3'>
     <label>Scholastic Skills Grade Indicator</label>
     <div className='staffbutz'>
       <button className="btn btn-primary">Where can you create Scholastic Skills & Grading Scale?</button>
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

            <div>
            <lable> Structure : </lable>
            <select className="form-select" aria-label="Show Report">
                    <option value="-Select-">--Select --</option>
                    <option >--Select Structure --</option>
                    <option >--Select Structure --</option>

            </select>
            </div>

        <div>
            <lable> Class :  </lable>
            <select className="form-select" aria-label="Show Report">
                    <option value="-Select-">--Select --</option>
                    <option >--Select Class --</option>
                    <option >--Select Class --</option>

            </select>
            
             </div>

            <div>
            <lable> Subject :    </lable>
            <select className="form-select" aria-label="Show Report">
                    <option value="-Select-">--Select  --</option>
                    <option >--Select Subject --</option>
                    <option >--Select Subject --</option>

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
export default GradeIndicator;