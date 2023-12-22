import React from 'react';
import '../GB/Gradeb.css';

const ExamPercent =()=>{
    return(
        <>
        <div className="SDheading"><span>Grade Book </span><label> / Setting / Exam Type Percentage </label> </div>

        <div className='top3'>
     <label>Exam Type Percentage</label>
     <p>How does it help?</p>  
</div>


<div className='gradebreport'>
<div className="reportd">
    <div>
<lable> Class:  </lable>
            <select >
                            <option value="-Select-">--Select Class--</option>
                    <option >1 Year MPC-IIT</option>
                    <option >2 Year MPC-IIT</option>
                    <option>1 Year MPC-General</option>
                    <option>2 Year MPC-General</option>
                    <option>1 Year BPC-NEET</option>
                    <option>2 Year BPC-NEET</option>

                        </select>
                        </div>
                    
                        <div>
                    <lable> Academic Term:  </lable>
            <select >
                            <option value="-Select-">--select Academic Planning Term--</option>
                            
                        </select>
                   

                        </div>

                    {/* <lable><button type="button" className="btn btn-primary" 
        >Get</button></lable> */}

                    </div>
                    </div>
                 
      </>
    )
}
export default ExamPercent;