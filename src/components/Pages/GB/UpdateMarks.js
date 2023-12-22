import React from 'react';
import '../GB/Gradeb.css';

const UpdateMarks=()=>{
    return(
        <>
        <div className="SDheading"><span>Grade Book </span><label> / Setting / Update Marks for Report Card </label> </div>

        <div className='top3'>
     <label>Update Marks for Report Card</label>
     <p>How does it help?</p>  
</div>


<div className='gradebreport'>
<div className="reportd">
<div>
           <lable>  Location Branch:    </lable>
            <select >
                            <option value="-Select-">--select Location-Branch--</option>
                            <option>Ethiken Education Society</option>
                            {/* <option>Term-II</option>
                            <option>Term-III</option>
                            <option>Consolidated Report</option> */}
                        </select>
                        </div>

                        <div>
                    
            <lable> Class:    </lable>
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
                    <lable>  Term:    </lable>
            <select >
                            <option value="-Select-">--select Term--</option>
                            <option>Term-I</option>
                            <option>Term-II</option>
                            <option>Term-III</option>
                            <option>Consolidated Report</option>
                        </select>
                        </div>
                
                        <div>
                    <lable>  Type:    </lable>
            <select >
                            <option value="-Select-">--Select Type--</option>
                            <option>Class Highest</option>
                            <option>Parents Subjects (Max Marks)</option>
                            <option>Class Section Rank All Student</option>
                            <option>Class Highest for Parent Subject</option>
                        </select>
                        </div>
                 
                    </div>
                        <div className="reportd">
                        <div className='gbbuttondiv'>
            <button className="btn btn-primary gbbutton">Update Result </button>
          </div>
          </div>
                    </div>
                 
      </>
    )
}
export default UpdateMarks;