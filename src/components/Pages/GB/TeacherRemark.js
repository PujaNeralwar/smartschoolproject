import React from 'react';
import '../GB/Gradeb.css';



const TeacherRemark=()=>{
    return(
        <>
       
       <div className="SDheading"><span>Grade Book </span><label> / Grade Book / Class Teacher Remarks </label> </div>

<div className='top3'>
     <label>Class Teacher Remarks 
     <h5 style={{font:"7px"}}>  Note: Please click on the student enrolment code to view the report card.Only Academic Promoted Students will appear here..</h5>  

     </label>
</div>

<div className='gradebreport'>
<div className="reportd">
         <div>
            <lable> Academic Year : </lable>
            <select >
                    <option value="-Select-">--Select Academic Year--</option>
                    <option >2023-2024</option>
                    <option >2022-2023</option>

            </select>
            </div>
          
            <div>
            <lable> Class :  </lable>
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
            <lable>Section  : </lable>
            <select >
                    <option value="-Select-">--Select Section--</option>
                    <option >--Select Section--</option>
                    <option >--Select Section--</option>

            </select>
            </div>
           
            <div>
            <lable> Term : </lable>
            <select >
                    <option value="-Select-">--Select Term --</option>
                    <option >--All Term --</option>
                    {/* <option >--Select --</option> */}

            </select>
            </div>
           

            <div className='gbbuttondiv'>
            <button className="btn btn-primary gbbutton">Get Student</button>
          </div>
          </div>
            </div>
        </>
    )
}
export default TeacherRemark;