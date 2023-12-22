import React from 'react';
import '../GB/Gradeb.css';

const AnTestwise =()=>{
    return(
        <>
        <div className="SDheading"><span>Grade Book </span><label> / Analysis / Test Wise Analysis Report </label> </div>

        <div className='top3'>
     <label>Test Wise Analysis Report<button style={{border:"none", fontWeight:"600"}}>How to read this Report?</button>


     </label>

</div>


<div className='gradebreport'>
<div className="reportd">

<div>
<lable> Class :  </lable>
            <select >
                            <option value="-Select-">--Select Class Section--</option>
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
                       
                       
                        <div>
                        <lable> Section : </lable>
            <select >
                            <option value="-Select-">--Select Section--</option>
                    
                        </select>
                        </div>
                        
                   
                        <div>
                        <lable> Evaluation :  </lable>
            <select >
                            <option value="-Select-">--Select Evaluation--</option>
                            
                        </select>
                        </div>
                       
                  
                        <div>
        
                <lable> Subject Type:  </lable>
                    <select >
                            <option value="-Select-">--Select Subject Type--</option>
                    <option >Academic Subject</option>
                    <option >Non-Academic Subject</option>
                    
                    </select>
                        </div>
                       
                       </div>
                        <div className="reportd">

                        <div>
                        <lable> Subject : </lable>
            <select >
                            <option value="-Select-">--Select Subject--</option>
                    
                        </select>
                        </div>

                        <div>
                        <lable> Test : </lable>
            <select >
                            <option value="-Select-">--Select Test--</option>
                    
                        </select>
                        </div>

                        <div>
                        <lable> Select Student : </lable>
            <select >
                            <option value="-Select-">--Select Student--</option>
                         <option>All</option>
                         <option>Boys</option>
                         <option>Girls</option>
                        </select>
                        </div>

                        </div>
                        <div className="reportd">

                            <div>
                                <lable>Student Status : </lable>
                                <select>
                                    <option>Select Student Status</option>
                                    <option>All</option>
                                    <option>Active</option>
                                    <option>In-Active</option>
                                </select>
                            </div>

                            <div>
                                <lable>Category : </lable>
                                <select>
                                    <option>Select Category</option>
                                    <option>All category</option>
                                    <option>Day Scholar</option>
                                    <option>recidential / Hostel</option>
                                    <option>Semi Recidential</option>
                                    <option>Weekly Borders</option>
                                </select>
                                 </div>
                                 <div>
                                    <lable>Format : </lable>
                                    <select>
                                        <option>Select Format</option>
                                        <option>Format 1</option>
                                        <option>Format 2</option>
                                        <option>Format 3</option>
                                    </select>
                                 </div>

                                 </div>


                        <div className="reportdd">

         <div className="Fformz">
                <input type="checkbox"/>
                <label className="lablewidth">Percentage</label>
         </div>
                   
                   <div>
                    <input type="checkbox"/>
                        <lable className="lablewidth">Grade</lable>
                   
                   </div>
                   <div>
                    <input type="checkbox"></input>
                    <lable className="lablewidth">Subject Total Max Marks</lable>
                   </div>

                   <div>
                    <input type="checkbox"></input>
                    <lable className="lablewidth">Subject Obtained Marks</lable>
                   </div>


                   </div>
                        <div className="reportdd">
                   <div>
                    <input type="checkbox"></input>
                    <lable className="lablewidth">Subject Overall Grade</lable>
                   </div>

                   <div>
                    <input type="checkbox"></input>
                    <lable className="lablewidth">Total Max Marks</lable>
                   </div>

                            <div>
                                <input type="checkbox"></input>
                                <lable className="lablewidth">Total Obtained Marks</lable>
                            </div>

                            <div>
                                <input type="checkbox"></input>
                                <lable className="lablewidth">Overall Grade</lable>
                            </div>


                            </div>

                        <div className="reportdd">
                            <div>
                                <input type="checkbox"></input>
                                <lable className="lablewidth">Overall Percentage</lable>
                            </div>

                            <div>
                                <input type="checkbox"></input>
                                <lable className="lablewidth">Include Non-CGPA in Total</lable>
                            </div>

                            <div>
                                <input type="checkbox"></input>
                                <lable className="lablewidth">Include Father Name</lable>
                            </div>

                            <div>
                                <input type="checkbox"></input>
                                <lable className="lablewidth">Include Mother Name</lable>
                            </div>

                            </div>
                        <div className="reportdd">

                            <div>
                                <input type="checkbox"></input>
                                <lable className="lablewidth">Include Class Group Name</lable>
                            </div>

                            <div>
                                <input type="checkbox"></input>
                                <lable className="lablewidth">Round off Marks</lable>
                            </div>

                            <div>
                                <input type="checkbox"></input>
                                <lable className="lablewidth">Show Attendance</lable>
                            </div>


           <div className='gbbuttondiv'>
            <button className="btn btn-primary gbbutton">Get </button>
          </div>


          </div>
                    </div>
                 
      </>
    )
}
export default AnTestwise;