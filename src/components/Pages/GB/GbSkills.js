import React from'react';
import '../GB/Gradeb.css';



const GbSkills=()=>{
    
    return(
        <>

<div className="SDheading"><span>Grade Book </span><label> / Manage / Grade Book Skills </label> </div>

<div className='top3'>
     <label>Grade Book Skills</label>
    
</div>

<div className='gradebreport'>
<div className="reportd">

            <div>
              <lable> Structure Name:  </lable>
                         <select >
                            <option >--Select Structure--</option>
                            <option >--Select Structure--</option>
                            <option >--Select Structure--</option>

                        </select>
                        </div>
                    
                    <div>
                    <lable> Parts: </lable>
                    <select >
                            <option >--select Parts--</option>
                            <option >--Select Parts--</option>
                            <option >--Select Parts--</option>

                        </select>
                        </div>

            <div>
            <div className='gbbuttondiv'>
            <button className="btn btn-primary gbbutton" style={{marginTop:"-5px"}}>Get Students</button>
          </div>
        </div>

         
         </div>
         </div>

        </>
    );
}
export default GbSkills;