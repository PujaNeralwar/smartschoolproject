import React from 'react';
import '../GB/Gradeb.css';


const AnmarkAnalysis = () => {
  return (
    <>
         <div className="SDheading"><span>Grade Book </span><label> / Analysis / Evaluation Marks Analysis</label> </div>

<div className='top3'>
<label>Evaluation Marks Analysis
<button style={{border:"none", fontWeight:"600"}}>How to read this Report?</button>
</label>


</div>

<div className='gradebreport'>
<div className="reportd">

   <div>
      <lable>Branch :</lable>
      <select>
         <option>--Ethiken Education Society--</option>
         <option>--Ethiken Education Society--</option>

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
                        <lable> Subject : </lable>
                        <select >
                            <option value="-Select-">--Select Subjects--</option>
                    
                        </select>
                        </div>

      
                        </div>
                        
                        <div className="reportdd">

         <div className="Fformz">
                <input type="checkbox"/>
                <label className="lablewidth">Include Non-CGPA in Total</label>
         </div>

                    <div>
                    <input type="radio"/>
                        <lable className="lablewidth">Max Marks Round off to 100</lable>
                   
                    </div>

                    <div>
                    <input type="radio"/>
                        <lable className="lablewidth">Test Max Marks</lable>
                   
                    </div>
                   
                   <div>
                    <input type="checkbox"/>
                        <lable className="lablewidth">Consider Subject Result</lable>
                   
                   </div>
                  
                   <div className='gbbuttondiv'>
            <button className="btn btn-primary gbbutton">Get </button>
          </div>
                   </div>
                  
          </div>
                    
  

    </>
  )
}

export default AnmarkAnalysis;