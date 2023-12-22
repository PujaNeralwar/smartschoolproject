import React from 'react';
import '../GB/Gradeb.css';
// import '../GB/Gradeb.css';


const StuAttendance=()=>{

    return(
        <>
    
       <div className="SDheading"><span>Grade Book </span><label> / Grade Book / Term wise Student Attendance </label> </div>

<div className='top3'>
     <label>Term wise Student Attendance 
     <h5>  Note : This is not calculated from daily attendance, Red Color indicates that student is Inactive</h5>  

     </label>

     <div className='staffbutz'>
       <button className="btndz btn-secondary">Manage WeekOff</button>
     </div>
     {/* <i>  Note: Please click on the student enrolment code to view the report card.Only Academic Promoted Students will appear here..</i>   */}
</div>

<div className='gradebreport'>
<div className="reportd">

        <div>
            <lable> Class :  </lable>
            <select >
            <option value="-Select-">--Select Class--</option>
            <option value="-Select-">--Select Class--</option>
                    <option >1 Year MPC-IIT 1 Year MPC-IIT(Boys)</option>
                    <option >1 Year MPC-IIT 1 Year MPC-IIT(Girls)</option>

                    <option >2 Year MPC-IIT</option>                    
                    <option >2 Year MPC-IIT-2 Year MPC-IIT(Boys)</option>
                    <option >2 Year MPC-IIT-2 Year MPC-IIT(Girls)</option>

                    <option>1 Year MPC-General</option>
                    <option>1 Year MPC-General - 1 Year MPC-General(Boys)</option>
                    <option>1 Year MPC-General - 1 Year MPC-General(Girls)</option>

                    <option>2 Year MPC-General</option>
                    <option>2 Year MPC-General 2 Year MPC-General(Boys)</option>
                    <option>2 Year MPC-General 2 Year MPC-General(Girls)</option>

                    <option>1 Year BPC-NEET</option>
                    <option>1 Year BPC-NEET 1 Year BPC-NEE(Boys)</option>

                    <option>1 Year BPC-NEET 1 Year BPC-NEET(Girls)</option>

                    <option>2 Year BPC-NEET</option>
                    <option>2 Year BPC-NEET 2 Year BPC-NEET(Boys)</option>
                    <option>2 Year BPC-NEET 2 Year BPC-NEET(Girls)</option>

            </select>
            </div>
            
            <div>
            <lable>Section  : </lable>
            <select >
                    <option value="-Select-">--Select Section--</option>
                    <option >1 Year IIT (Boys)</option>
                    <option >2 Year IIT (Girls)</option>

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
            </div>
           
            <div className="reportd">
            <div>
            <lable> Student Status : </lable>
            <select >
                    <option value="-Select-">--Select Student Status --</option>
                    <option >All</option>
                    <option>Active</option>
                    <option>Inactive</option>
                    {/* <option >--Select --</option> */}

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
export default StuAttendance;