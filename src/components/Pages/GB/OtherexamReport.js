import React from 'react';
import '../GB/Gradeb.css';

const OtherexamReport =()=>{
    return(
        <>
        <div className="SDheading"><span>Grade Book </span><label> / Create Exams / Other Exam Report Cards </label> </div>


{/* <div  className="SDashboard"> */}
         <div className='top3'>
            <label>Other Exam Report Cards</label>
            
         </div>
         {/* </div> */}
         <div className='gradebreport'>
<div className="reportd">
    <div> 
<lable> Branch:  </lable>
            <select>
                            <option value="-Select-">--Select Branch--</option>
                    <option >--Ethiken Education Society--</option>
                    <option >--Ethiken Education Society--</option>
                    

                        </select>
                        </div>
                   
                        <div>
                    <lable> Type:  </lable>
            <select >
                            <option value="-Select-">--Select Type--</option>
                    <option >--Class Wise--</option>
                    <option >--Class Group Wise--</option>
                    

                        </select>
                        </div>
                   
                        <div>
                    <lable> Group:  </lable>
            <select >
                            <option value="-Select-">--select Group--</option>
                            <option >All Groups</option>
            
                        </select>
                        </div>
                   
                        <div>
                    <lable> Classe :  </lable>
            <select >
                            <option value="-Select-">--Select Classe--</option>
                            <option value="-Select-">--All Classes--</option>
                        
                        </select>
                        </div>
                      
                        </div>
                        <div className="reportd">
                        <div>
                    <lable> Section :  </lable>
            <select>
                            <option value="-Select-">--Select Section--</option>
                            <option>--Section--</option>
                        
                        
                        </select>
                        </div>
                   
                        <div>
                    <lable>  Examinations :  </lable>
            <select >
                            <option value="-Select-">--Select  Examinations--</option>
                            <option>--All  Examinations--</option>
                        
                        
                        </select>
                        </div>
                   
                        <div>
                    <lable>  Format :  </lable>
            <select >
                            <option value="-Select-">--Select  Format--</option>
                            <option>Format-1</option>
                            <option>Format-2</option>
                            <option>Format-3</option>
                            <option>Format-4</option>
                            <option>Format-5</option>
                            <option>Format-6</option>
                            <option>Format-7</option>
                            <option>Format-8</option>
                            <option>Format-9</option>
                            <option>Format-10</option>

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
export default OtherexamReport;