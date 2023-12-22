import React from 'react';
import '../GB/Gradeb.css';

const OtherComprensive =()=>{
    return(
        <>
        <div className="SDheading"><span>Grade Book </span><label> / Create Exams / Other Exams Comprehensive Reports </label> </div>


{/* <div  className="SDashboard"> */}
         <div className='top3'>
            <label>Other Exams Comprehensive Reports</label>
            
         </div>
         {/* </div> */}
         <div className='gradebreport'>
<div className="reportd">
    <div>
<lable> Branch:   </lable>
            <select >
                            <option value="-Select-">--Select Branch--</option>
                    <option >--Ethiken Education Society--</option>
                    <option >--Ethiken Education Society--</option>
                    

                        </select>
                        </div>
                 
                        <div>
                    <lable> Academic Year:   </lable>
            <select >
                            <option value="-Select-">--Select Academic Year--</option>
                    <option >--2023-2024--</option>
                    <option >--2022-2023--</option>
                    

                        </select>
                        </div>
                    
                        <div>
                    <lable> Type :   </lable>
            <select >
                            <option value="-Select-">--Select Type--</option>
                            <option value="-Select-">--Class Wise--</option>
                            <option value="-Select-">--Class Group Wise--</option>

                        
                        </select>
                        </div>
                   
                        <div>
                    <lable>  Class Group:   </lable>
            <select >
                            <option value="-Select-">--select Group--</option>
                            <option >All Groups</option>
            
                        </select>
                        </div>
                   </div>
                        <div className="reportd">
                        <div>
                    <lable> Classe :   </lable>
            <select >
                            <option value="-Select-">--Select Classe--</option>
                            <option value="-Select-">--All Classes--</option>
                        
                        </select>
                        </div>
                   
                        <div>
                    <lable> Section :   </lable>
            <select >
                            <option value="-Select-">--Select Section--</option>
                            <option>--Section--</option>
                        
                        
                        </select>
                        </div>
                 
                        <div>
                    <lable>  Exam Name :   </lable>
            <select >
                            <option value="-Select-">--Select  Exam NAme--</option>
                            <option>--All  Exams--</option>
                        
                        
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
export default OtherComprensive;