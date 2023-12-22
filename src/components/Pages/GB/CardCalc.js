import React from 'react';
import '../GB/Gradeb.css';

const CardCalc =()=>{
    return(
        <>
        <div className="SDheading"><span>Grade Book </span><label> / Setting / Term Report Card Calculation Settings </label> </div>

        <div className='top3'>
     <label>Term Report Card Calculation Settings</label>
</div>


<div className='gradebreport'>
<div className="reportd">

<div>
<lable> Branch  :  </lable>
            <select >
                            <option value="-Select-">--Select Branch--</option>
                            <option>Ethiken Education Society</option>
                            <option>Ethiken Education Society</option>
                        </select>
                        </div>
                        
                        <div>
                        <lable> Class : </lable>
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
                        <lable> Term :  </lable>
            <select >
                            <option value="-Select-">--Select Term--</option>
                            <option></option>
                            <option></option>
                        </select>
                        </div>
                   

                        <div>
                <lable> Evaluation :  </lable>
                    <select >
                            <option value="-Select-">--Select Evaluation--</option>
                    {/* <option >1 Year MPC-IIT (BOYS)</option>
                    <option >2 Year MPC-IIT (GIRLS)</option> */}
                    {/* <option>1 Year MPC-General</option>
                    <option>2 Year MPC-General</option>
                    <option>1 Year BPC-NEET</option>
                    <option>2 Year BPC-NEET</option> */}

                        </select>
                        </div>
                        
                        </div>
                        <div className="reportd">
                        <div>
                        <lable> Subject:  </lable>
            <select >
                            <option value="-Select-">--Select Subject--</option>
                            <option></option>
                            <option></option>
                        </select>
                        </div>
                   
                    
          <div className='gbbuttondiv'>
            <button className="btn btn-primary gbbutton">Show Report </button>
          </div>


          </div>
                    </div>
                 
      </>
    )
}
export default CardCalc;