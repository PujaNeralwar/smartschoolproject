import React from 'react';
import '../GB/Gradeb.css';



const TestCreation=()=>{
   
    return(
        <>

<div className="SDheading"><span>Grade Book </span><label> / Grade Book / Test Creation </label> </div>

<div  className="SDashboard">
         <div className='top2'>
            <label>Test / Marks Entry</label>
            <div className='staffbut'>
              <button>All Sections</button>
              <button>Single Section</button>
            </div>  
         </div>
         </div>


         <div className='gradebreport'>
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
            <lable> Evaluation :</lable>
            <select >
                    <option value="-Select-">--Select Evaluation--</option>
                    <option >--All Evaluation--</option>
                    {/* <option >--Select --</option> */}

            </select>
            </div>
            </div>

            <div className="reportd">
            
            <div>
            <lable>  Subject :</lable>
            <select >
                    <option value="-Select-">--Select Subject --</option>
                    <option >--All Subject --</option>
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
export default TestCreation;