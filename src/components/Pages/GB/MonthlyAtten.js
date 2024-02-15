import React from 'react';
import '../GB/Gradeb.css';
// import '../GB/Gradeb.css';


const MonthlyAtten=()=>{

    

    return(
        <>
    
       <div className="SDheading"><span>Grade Book </span><label> / Grade Book / Student Monthly Attendance </label> </div>

<div className='top3'>
     <label>Student Monthly Attendance</label>
     <div className='staffbutz'>
       <button className="btndz btn-secondary">Daily Attendance Report</button>
       <button className="btndz btn-secondary">Manage Weekoffs</button>
     </div>

     </div>

     <div className='gradebreport'>
<div className="reportd">
<div>
            <lable>Branch  : </lable>
            <select >
                    <option value="-Select-">--Select Branch--</option>
                    <option >Ethiken Education Society</option>
                    <option >Ethiken Education Society</option>

            </select>
            </div>
            

            <div>
            <lable> Class :  </lable>
            <select >
            <option value="-Select-">--Select Class--</option>
            <option value="-Select-">--Select Class--</option>
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
            <lable>Section : </lable>
            <select >
                    <option value="-Select-">--Select Section--</option>
                    <option >1 Year MPC-IIT (Boys)</option>
                    <option >1 YEar MPC-IIT(Girls)</option>

            </select>
            </div>
           
            <div>
            <lable>Academic Month  : </lable>
            <select >
                    <option value="-Select-">--Select Month--</option>
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
           </div>

            <div className='reportd'>
            <div>
            <lable>Student Status  : </lable>
            <select >
                    <option value="-Select-">--Select Status--</option>
                    <option >Active</option>
                    <option> Inactive</option>

            </select>
            </div>
           

            <div className='gbbuttondiv'>
            <button className="btn btn-primary gbbutton" >Get</button>
          </div>

            </div>
            </div>
        </>
    )
}
export default MonthlyAtten;