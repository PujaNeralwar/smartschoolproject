import React from 'react';
import '../GB/Gradeb.css';

const CoScholasticGrades=()=>{
    
    return(
        <>
       
       <div className="SDheading"><span>Grade Book </span><label> / Grade Book / CoScholastic Grades </label> </div>

<div className='top3'>
     <label>Manage Co-Scholastic Grade Entry ( 2023-24 )
     <h5 style={{font:"7px"}}>  Note : Only Academic Promoted Students will appear here.</h5>  
     </label>
</div>


<div className='gradebreport'>
<div className="reportd">
  <div>
            <lable> Class Section:</lable>
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
            <lable> Term : </lable>
            <select >
                    <option value="-Select-">--Select  Term--</option>
                    <option >--All Term --</option>
                    {/* <option >--Select --</option> */}

            </select>
            </div>
           
            <div>
            <lable>Co-Scholastic Part :</lable>
            <select >
                    <option value="-Select-">--Select Co-Scholastic Part--</option>
                    <option >--Select Co-Scholastic Part--</option>
                    <option >--Select Co-Scholastic Part--</option>

            </select>
            </div>
           
            <div>
            <lable> Coscholastic Skill :</lable>
            <select >
                    <option value="-Select-">--Select Coscholastic Skill--</option>
                    <option >--All Coscholastic Skill--</option>
                    {/* <option >--Select --</option> */}

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
export default CoScholasticGrades;