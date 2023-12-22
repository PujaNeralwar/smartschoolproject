import React from 'react';
import '../GB/Gradeb.css';



const ReflectionEntry=()=>{
   
    return(
        <>

<div className="SDheading"><span>Grade Book </span><label> / Grade Book / Subject wise reflection entry </label> </div>

<div  className="SDashboard">
         <div className='top2'>
            <label>Subject wise reflection entry</label>
             
         </div>
         </div>


         <div className='gradebreport'>
         <div className="reportd">

         <div>
            <lable> Branch:</lable>
            <select >
                    <option value="-Select-">--Select Branch--</option>
                    <option >Ethiken Education Society</option>
                    

            </select>
            </div>
            
            <div>
            <lable> Class-Section : </lable>
            <select >
                    <option value="-Select-">--Select  Class-Section--</option>
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
                    <option>2 Year BPC-NEET 2 Year BPC-NEET(Girls)</option>                    {/* <option >--Select --</option> */}

            </select>
            </div>
            
            <div>
            <lable> Term :</lable>
            <select >
                    <option value="-Select-">--Select Term--</option>
                    <option >--Select Term--</option>
                    <option >--Select Term--</option>

            </select>
            </div>

            <div>
            <lable>  Evaluation :</lable>
            <select >
                    <option value="-Select-">--Select Evaluation --</option>
                    <option >--Evaluation --</option>
                    {/* <option >--Select --</option> */}

            </select>
            </div>
            
    
            </div>

            <div className="reportd">
            <div>
            <lable> Subject :</lable>
            <select >
                    <option value="-Select-">--Select Subject--</option>
                    <option >--All Subject--</option>
                    {/* <option >--Select --</option> */}

            </select>
            </div>

            {/* <div> */}
   {/* <label>Message Type:</label></div> */}
   <div><input type="radio" name="messageType" value="custom" /> Reflection Wise </div>
   <div> <input type="radio" name="messageType" value="common" /> Student Wise</div>
           
            <div>
            <lable> Reflection :</lable>
            <select >
                    <option value="-Select-">--Select Reflection--</option>
                    {/* <option >Enrollement Code</option>
                    <option>Reference Code / Admission Number</option>
                    <option>Student Name (Alphabetical Oreder)</option>
                    <option>Student NAme (Alphabetial Order Shows Boys First)</option>
                    <option>Student NAme (Alphabetial Order Shows Girls First)</option> */}

                    {/* <option >--Select --</option> */}

            </select>
            </div>

            <div><input type="radio" name="messageType" value="custom" /> Reflection  </div>
   <div> <input type="radio" name="messageType" value="common" /> Sub Reflection </div>

            </div>
   <div className="reportd">

   <div> <input type="checkbox" name="messageType" value="common" /> Is Remarks </div>
   <div> <input type="checkbox" name="messageType" value="common" /> Is Reflection Grade </div>


            <div className='gbbuttondiv'>
            <button className="btn btn-primary gbbutton">Get Test</button>
          </div>

        </div>
        </div>

        </>
    )
}
export default ReflectionEntry;