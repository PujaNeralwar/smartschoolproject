import React from 'react';
import '../GB/Gradeb.css';

const CreateExam =()=>{
    return(
        <>
        <div className="SDheading"><span>Grade Book </span><label> / Create Exams / Create Examinations </label> </div>

         <div className='top3'>
            <label>Create Examinations</label>
            
         </div>
        
         <div className='gradebreport'>
<div className="reportd">
    <div>
<lable> Academic Year: </lable>
            <select >
                            <option value="-Select-">--Select Academic Year--</option>
                    <option >--2023-2024--</option>
                    <option >--2022-2023--</option>
                    

                        </select></div>
                  
                        <div>
                    <lable> Class Category: </lable>
            <select >
                            <option value="-Select-">--select Class Category--</option>
                            <option >Pre-primary</option>
                            <option>Primary</option>
                            <option>Secondary</option>
                            <option>Higher-Secondary</option>
                            

                        </select>
                        </div>
                  
                        <div>
                    <lable> Classes : </lable>
            <select >
                            <option value="-Select-">--Select Classes--</option>
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
                        <div className='gbbuttondiv'>
            <button className="btn btn-primary gbbutton">Get Students</button>
          </div>


                    </div>
                    </div>
                 
      </>
    )
}
export default CreateExam;