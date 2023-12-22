import React from 'react';
import '../GB/Gradeb.css';

const GraceMarks =()=>{
    return(
        <>
        <div className="SDheading"><span>Grade Book </span><label> / Grade Book / Update Marks for Report Card </label> </div>

        <div className='top3'>
     <label>Update Marks for Report Card</label>
     <p>How does it help?</p>  

</div>


<div className='gradebreport'>
<div className="reportd">

<div>
<lable> Class Section  :  </lable>
            <select >
                            <option value="-Select-">--Select Class Section--</option>
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
                        <lable> Subject : </lable>
            <select >
                            <option value="-Select-">--Select Subject--</option>
                    
                        </select>
                        </div>
                        
                   
                        <div>
                        <lable> Type :  </lable>
            <select >
                            <option value="-Select-">--Select Exam Type--</option>
                            <option>Subject Skill</option>
                            <option>Percent of all Subject Test Marks</option>
                        </select>
                        </div>
                       
                  
                        <div>
        
                <lable> Percentage :  </lable>
                    <select >
                            <option value="-Select-">--Select Percentage--</option>
                    <option >Less Than 33</option>
                    <option >Less Than 35</option>
                    <option>Less Than 40</option>
                    <option>Less Than or Equal To 100</option>
                    

                        </select>
                        </div>
                       
                       </div>
                        <div className="reportd">
                        <div className='gbbuttondiv'>
            <button className="btn btn-primary gbbutton">Get </button>
          </div>


          </div>
                    </div>
                 
      </>
    )
}
export default GraceMarks;