import React from 'react';
import '../GB/Gradeb.css';

const CardPublish=()=>{
    return(
        <>
        <div className="SDheading"><span>Grade Book </span><label> / Setting / Term Report Card Publish Settings </label> </div>

        <div className='top3'>
     <label>Term Report card / Result date publish settings</label>
     <p>How does it help?</p>  
</div>

<div className='gradebreport'>
<div className="reportd">
    <div>
<lable> Class:  </lable>
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
                    <lable>  Term:  </lable>
            <select >
                            <option value="-Select-">--select Term--</option>
                            <option>Term-I</option>
                            <option>Term-II</option>
                            <option>Term-III</option>
                            <option>Consolidated Report</option>
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
export default CardPublish;