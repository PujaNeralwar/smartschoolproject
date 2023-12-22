import React from 'react';
import '../GB/Gradeb.css';

const UpdateResult =()=>{
    return(
        <>
        <div className="SDheading"><span>Grade Book </span><label> / Setting / Update Result Status (Promotion) </label> </div>

        <div className='top3'>
     <label>Update Result Status</label>
     <p>How does it help?</p>  
</div>


<div className='gradebreport'>
<div className="reportd">
    <div>

      <lable> Student List :    </lable>
    
      </div>
                       
                   <div>
                       <select >
                            <option value="-Select-">--select Academic Year--</option>
                            <option>2023-2024</option>
                            <option>2022-2023</option>
                        </select>
                        </div>
                    

                        <div>
                    <select className="form-select" aria-label="Show Report">
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
                    <select className="form-select" aria-label="Show Report">
                            <option value="-Select-">--Select Class--</option>
                    <option >1 Year MPC-IIT (BOYS)</option>
                    <option >2 Year MPC-IIT (GIRLS)</option>
                    {/* <option>1 Year MPC-General</option>
                    <option>2 Year MPC-General</option>
                    <option>1 Year BPC-NEET</option>
                    <option>2 Year BPC-NEET</option> */}

                        </select>
                        </div>

                    
                        <div className='gbbuttondiv'>
            <button className="btn btn-primary gbbutton">Get </button>
          </div>
          </div>
          <div className="reportd">
<div>
<lable> Pramoting Academic Year:  </lable>
            <select className="form-select" aria-label="Show Report">
                            <option value="-Select-">--select a Section--</option>
                            {/* <option>2023-2024</option>
                            <option>2022-2023</option> */}
                        </select>
                        </div>
                   </div>
                        </div>
                  
                 
      </>
    )
}
export default UpdateResult;