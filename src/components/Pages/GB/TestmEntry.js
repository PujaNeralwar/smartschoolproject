import React from 'react';
import '../GB/Gradeb.css';



const TestmEntry=()=>{
   
    return(
        <>

<div className="SDheading"><span>Grade Book </span><label> / Grade Book / Scholastic Test Marks Entry </label> </div>

<div  className="SDashboard">
         <div className='top2'>
            <label>Test Marks Entry</label>
            <div className='staffbut'>
              <button>Subject Wise Test Marks Entry</button>
              {/* <button>Single Section</button> */}
            </div>  
         </div>
         </div>


         <div className='gradebreport'>
         <div className="reportd">


         <div><input type="radio" name="messageType" value="custom" /> Scholastic</div>
   <div> <input type="radio" name="messageType" value="common" />C0-Scholastic</div>
         </div>
   <div className="reportd">
         <div>
            <lable> Class:</lable>
            <select >
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
            <lable> Sections : </lable>
            <select >
                    <option value="-Select-">--Select  Sections--</option>
                    <option >--All Sections --</option>
                    {/* <option >--Select --</option> */}

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
            <lable>  Subject :</lable>
            <select >
                    <option value="-Select-">--Select Subject --</option>
                    <option >--All Subject --</option>
                    {/* <option >--Select --</option> */}

            </select>
            </div>
            
    
            </div>

            <div className="reportd">
            <div>
            <lable> Evaluation :</lable>
            <select >
                    <option value="-Select-">--Select Evaluation--</option>
                    <option >--All Evaluation--</option>
                    {/* <option >--Select --</option> */}

            </select>
            </div>

            {/* <div> */}
   {/* <label>Message Type:</label></div> */}
   {/* <div><input type="radio" name="messageType" value="custom" /> Scholastic</div> */}
   <div> <input type="checkbox" name="messageType" value="common" />Display tests to accept Grades</div>
           
            <div>
            <lable> Sort By :</lable>
            <select >
                    <option value="-Select-">--Roll Number--</option>
                    <option >Enrollement Code</option>
                    <option>Reference Code / Admission Number</option>
                    <option>Student Name (Alphabetical Oreder)</option>
                    <option>Student NAme (Alphabetial Order Shows Boys First)</option>
                    <option>Student NAme (Alphabetial Order Shows Girls First)</option>

                    {/* <option >--Select --</option> */}

            </select>
            </div>

            
            <div className='gbbuttondiv'>
            <button className="btn btn-primary gbbutton">Get Test</button>
          </div>

        </div>
        </div>

        </>
    )
}
export default TestmEntry;