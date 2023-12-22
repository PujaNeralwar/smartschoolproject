import React from 'react';
import '../GB/Gradeb.css';

const ComexamStudent =()=>{
    return(
        <>
        <div className="SDheading"><span>Grade Book </span><label> / Competitive Exams / Competitive Exams Student Result </label> </div>


<div  className="SDashboard">
         <div className='top2'>
            <label>Competitive Exams Student Result</label>
            <div className='staffbut'>
              <button>Competitive Exam Fee Student Report</button>
              {/* <button>Single Section</button> */}
            </div>  
         </div>
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
                    <lable> Term:  </lable>
            <select className="form-select" aria-label="Show Report">
                            <option value="-Select-">--select Term--</option>
                            <option >Term-1</option>
                            <option >Term-2</option>
                            <option>Term-3</option>
                            <option>Consolidated Report</option>

                        </select>
                    </div>

                        <div>
                    <lable> Evaluation:  </lable>
            <select className="form-select" aria-label="Show Report">
                            <option value="-Select-">--Select Evaluation--</option>
                           

                        </select>
                  </div>

                  <div className='gbbuttondiv'>
            <button className="btn btn-primary gbbutton" >Get </button>
          </div>
                    </div>
                    </div>
                 
      </>
    )
}
export default ComexamStudent;