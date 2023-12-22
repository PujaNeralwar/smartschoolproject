import React from 'react';
import '../GB/Gradeb.css';

const OtherexamMarks =()=>{
    return(
        <>
        <div className="SDheading"><span>Grade Book </span><label> / Create Exams / Other Exams Marks Entry Dashboard </label> </div>



         <div className='top3'>
            <label>Other Exams Marks Entry Dashboard</label>
            
         </div>
         
         <div className='gradebreport'>
<div className="reportd">
<div>
<lable> Academic Year: </lable>
            <select >
                            <option value="-Select-">--Select Academic Year--</option>
                    <option >--2023-2024--</option>
                    <option >--2022-2023--</option>
                    
                </select>
                        </div>
                    

                        <div>
                    <lable> Month : </lable>
                    <select >
                            <option value="-Select-">--Select Class Type--</option>
                            <option>June-2023</option>
                            <option>july-2023</option>
                            <option>August-2023</option>
                            <option>September-2023</option>
                            <option>October-2023</option>
                            <option>November-2023</option>
                            <option>December-2023</option>
                            <option>January-2024</option>
                            <option>February-2024</option>
                            <option>March-2024</option>
                            <option>April-2024</option>
                            <option>May-2024</option>
                        
                        </select>
                        </div>
                   
                        <div>
                    <lable> Type: </lable>
            <select >
                            <option value="-Select-">--Select Type--</option>
                    <option >--Class Wise--</option>
                    <option >--Class Group Wise--</option>
                     </select>
                   </div>


                   <div className='gbbuttondiv'>
            <button className="btn btn-primary gbbutton">Get</button>
          </div>
                    </div>
                    </div>
                 
      </>
    )
}
export default OtherexamMarks;