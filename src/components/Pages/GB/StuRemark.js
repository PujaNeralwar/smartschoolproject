import React from 'react';
import '../GB/Gradeb.css';

const StuRemark=()=>{

    return(
        <>
       

       <div className="SDheading"><span>Grade Book </span><label> / Grade Book / Student Remarks </label> </div>

<div className='top3'>
     <label>Student Remarks</label>
</div>

<div className='gradebreport'>
<div className="reportd">

<div>
            <lable> Class : </lable>
            <select >
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
            <lable> Section :  </lable>
            <select >
                    <option value="-Select-">--Select  Section--</option>
                    <option > </option>
                    {/* <option >--Select --</option> */}

            </select>
            </div>
           
            <div>
            <lable> Term :  </lable>
            <select >
                    <option value="-Select-">--Select  Term--</option>
                    <option >--All Term --</option>
                    {/* <option >--Select --</option> */}

            </select>
            </div>
           

            
            <div>
            <lable> Evaluation : </lable>
            <select >
                    <option value="-Select-">--Select Evaluation--</option>
                    <option >--Term Wise--</option>
                    {/* <option >--Select --</option> */}

            </select>
            </div>
           
            </div>
            
            <div className="reportd">
            <div>
            <lable>Type  : </lable>
            <select >
                    <option value="-Select-">--Select Type--</option>
                    <option>General Remark</option>
                    <option>My Goals</option>
                    <option>My Strength</option>
                    <option>My Interest</option>
                    <option>General Remark </option>
                    <option>Responsibility</option>
                
            </select>
            </div>
           
       
            <div>
   <label>Message Type:</label></div>
   <div><input type="radio" name="messageType" value="custom" /> Custom Message</div>
   <div> <input type="radio" name="messageType" value="common" /> Common Message</div>




            
            <div className='gbbuttondiv'>
            <button className="btn btn-primary gbbutton" >Get Student</button>
          </div>
          </div>

            </div>
        </>
    )
}
export default StuRemark;