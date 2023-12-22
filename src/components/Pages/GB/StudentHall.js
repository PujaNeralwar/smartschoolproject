import React from 'react';
import '../GB/Gradeb.css';

const StudentHall =()=>{
    return(
        <>
        <div className="SDheading"><span>Grade Book </span><label> / Competitive Exams / Competitive Exam Hall Tickets Report </label> </div>


{/* <div  className="SDashboard"> */}
         <div className='top3'>
            <label>Competitive Exam Hall Tickets Report</label>
            <div className='staffbutz'>
       <button>Back</button>
     </div>  
         </div>
        
         <div className='gradebreport'>
<div className="reportd">
    <div>
<lable> Academic Year:  </lable>
            <select >
                            <option value="-Select-">--Select Academic Year--</option>
                    <option >--2023-2024--</option>
                    <option >--2022-2023--</option>
                    

                        </select>
                        </div>
                  
<div>
                    <lable> Location:  </lable>
            <select >
                            <option value="-Select-">--select Location--</option>
                            <option >Nizamabad</option>
                            

                        </select>
                        </div>
                    
                        <div>
                    <lable> Branch :  </lable>
            <select >
                            <option value="-Select-">--Select Branch--</option>
                            <option>Ethiken Education Society</option>
                        
                        </select>
                        </div>
                  
                        <div>
                    <lable> Class Type :  </lable>
            <select >
                            <option value="-Select-">--Select Class Type--</option>
                            <option>Pre-primary</option>
                            <option>Primary</option>
                            <option>Secondary</option>
                            <option>Higher-secondary</option>
                        
                        </select>
                        </div>
                        </div>
                   
                        <div className='reportd'>

                        <div>
                    <lable> Class  :  </lable>
            <select >
                            <option value="-Select-">--Select Class --</option>
                            <option>lK-1</option>
                            <option>lK-2</option>
                            <option>lK-3</option>
                            <option>Class-1</option>
                            <option>Class-2</option>
                        
                        </select>
                        </div>
                 
                        <div>
                    <lable> Competitive Exam Type :  </lable>
            <select >
                            <option value="-Select-">--Select Competitive Exam Type--</option>
                            <option></option>
                        
                        </select>
                        </div>
                   
                        <div>
                    <lable> Show Report  :  </lable>
            <select >
                            <option value="-Select-">--Select Report--</option>
                            <option>Download to CSV</option>
                        
                        </select>
                        </div>
                   

                    <div className='gbbuttondiv'>
            <button className="btn btn-primary gbbutton" >Get </button>
          </div>
                    </div>
                    </div>
                    

                 
      </>
    )
}
export default StudentHall;