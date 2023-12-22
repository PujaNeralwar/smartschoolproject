import React from 'react';
import '../GB/Gradeb.css';

const AnTerm =()=>{
    return(
        <>
        <div className="SDheading"><span>Grade Book </span><label> / Analysis / Term Wise Analysis Report </label> </div>

        <div className='top3'>
     <label>Term Wise Analysis Report
        <button style={{border:"none", fontWeight:"600"}}>How to read this Report?</button>
      </label>

</div>


<div className='gradebreport'>
<div className="reportd">
    <div>
        <lable>Branch :</lable>
        <select>
            <option>--Select Branch--</option>
            <option>Ethiken Education Society</option>
        </select>
    </div>

<div>
<lable> Class-Section :  </lable>
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
                        <lable> Term : </lable>
            <select >
                            <option value="-Select-">--Select Term--</option>
                    
                        </select>
                        </div>
                        
                   
                        <div>
                        <lable> Evaluation :  </lable>
            <select >
                            <option value="-Select-">--Select Evaluation--</option>
                            
                        </select>
                        </div>
                       
                        </div>
                        <div className="reportd">
                        
                        <div>
        
                <lable> Subject Type:  </lable>
                    <select >
                            <option value="-Select-">--Select Subject Type--</option>
                    <option >Academic Subject</option>
                    <option >Non-Academic Subject</option>
                    
                    </select>
                        </div>
                       
                      

                        <div>
                        <lable> Subject : </lable>
            <select >
                            <option value="-Select-">--Select Subject--</option>
                    
                        </select>
                        </div>
                    
                      </div>
                        

                        <div className="reportdd">

         <div className="Fformz">
                <input type="checkbox"/>
                <label className="lablewidth">Include Mother Name</label>
         </div>
                   
                   <div>
                    <input type="checkbox"/>
                        <lable className="lablewidth">Include Father Name</lable>
                   
                   </div>
                   </div>

                   <div className="reportdd">
                   <div>
                    <input type="checkbox"></input>
                    <lable className="lablewidth">Evaluation Weightage</lable>
                   </div>

                   <div>
                    <input type="checkbox"></input>
                    <lable className="lablewidth">Evaluation Grade</lable>
                   </div>

                   <div>
                    <input type="checkbox"></input>
                    <lable className="lablewidth">Subject Weightage</lable>
                   </div>

                   <div>
                    <input type="checkbox"></input>
                    <lable className="lablewidth">Subject Grade</lable>
                   </div>
                  </div>
                   <div className="reportdd">
                            <div>
                                <input type="checkbox"></input>
                                <lable className="lablewidth">Show Total</lable>
                            </div>

                            <div>
                                <input type="checkbox"></input>
                                <lable className="lablewidth">Show Attendance</lable>
                            </div>

                        
                            <div>
                                <input type="checkbox"></input>
                                <lable className="lablewidth">Include Grade Entry Tests</lable>
                            </div>

                            <div>
                                <input type="checkbox"></input>
                                <lable className="lablewidth">Round off Marks</lable>
                            </div>
                            </div>
                            <div className="reportdd">
           <div className='gbbuttondiv'>
            <button className="btn btn-primary gbbutton">Get </button>
          </div>


          </div>
                    </div>
                 
      </>
    )
}
export default AnTerm;