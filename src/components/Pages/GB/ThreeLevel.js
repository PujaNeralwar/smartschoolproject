import React from 'react';
import '../GB/Gradeb.css';

const ThreeLevel =()=>{
    return(
        <>
        <div className="SDheading"><span>Grade Book </span><label> / Setting / 3 Level Calculation Settings </label> </div>

        <div className='top3'>
     <label>3 Level Calculation Settings</label>
     <p>How doeas it help?</p>  
</div>


<div className='gradebreport'>
<div className="reportd">
    <div>
<lable> Branch:   </lable>
            <select >
                            <option value="-Select-">--Select Branchr--</option>
                            <option >--Ethiken Education Society--</option>
                            <option >--Ethiken Education Society--</option>

                        </select>
                        </div>
                   
                        <div>
                    <lable> Class:   </lable>
            <select >
                            <option value="-Select-">--select Class--</option>
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
                  

                        <div className='gbbuttondiv'>
            <button className="btn btn-primary gbbutton">Get </button>
          </div>
                    </div>
                    </div>
                 
      </>
    )
}
export default ThreeLevel;