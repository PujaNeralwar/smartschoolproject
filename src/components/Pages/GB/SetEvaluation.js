import React from 'react';
import '../GB/Gradeb.css';

const SetEvaluation =()=>{
    return(
        <>
        <div className="SDheading"><span>Grade Book </span><label> / Setting / Evaluation Percentages </label> </div>

        <div className='top3'>
     <label>Evaluation Percentages</label>
     <p>How doeas it help?</p>  
</div>

<div className='gradebreport'>
<div className="reportd">
    <div>
<lable> Academic Year:  </lable>
            <select className="form-select" aria-label="Show Report">
                            <option value="-Select-">--Select Academic Year--</option>
                            <option >2023-2022</option>
                            <option >2022-2021</option>

                        </select>
                        </div>
                    
                        <div>
                    <lable> Branch:  </lable>
                        <select >
                            <option value="-Select-">--select Academic Year--</option>
                            <option >--Ethiken Education Society--</option>
                            <option >--Ethiken Education Society--</option>

                        </select>
                        </div>
                        </div>
                    </div>
                 
      </>
    )
}
export default SetEvaluation;