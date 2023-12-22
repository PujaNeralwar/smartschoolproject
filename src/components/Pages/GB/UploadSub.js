import React from 'react';
import '../GB/Gradeb.css';

const UploadSub=()=>{

    return(
        <>
       

       <div className="SDheading"><span>Grade Book </span><label> / Grade Book / Upload Subject wise Reflection </label> </div>

<div className='top3'>
     <label>Upload Subject wise Reflection Remarks</label>
</div>

<div className='gradebreport'>
<div className="reportd">
<div>
<lable> Branch :   </lable>
            <select >
                    <option value="-Select-">--Select  Branch--</option>
                    <option >--Ethiken Education Society --</option>
                    <option >--Ethiken Education Society --</option>

                    {/* <option >--Select --</option> */}

            </select>
            </div>
          
            <div>
            <lable> Class Section:  </lable>
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
            <lable> Term :   </lable>
            <select >
                    <option value="-Select-">--Select  Term--</option>
                    <option >--All Term --</option>
                    {/* <option >--Select --</option> */}

            </select>
            </div>
            

            
            <div>
            <lable> Evaluation :  </lable>
            <select >
                    <option value="-Select-">--Select Evaluation--</option>
                    <option >--Term Wise--</option>
                    {/* <option >--Select --</option> */}

            </select>
            </div>
            </div>

           
           <div className="reportd">
            <div>
            <lable>Subject  :  </lable>
            <select >
                    <option value="-Select-">--Select Subject--</option>
                    

                    {/* <option >--Select --</option> */}

            </select>
            </div>
            </div>
            </div>
        </>
    )
}
export default UploadSub;