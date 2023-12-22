import React from 'react';
import '../GB/Gradeb.css';
// import '../GB/Gradeb.css';


const KyaApti=()=>{


    return(
        <>
    
       <div className="SDheading"><span>Grade Book </span><label> / Grade Book / KYA(Aptitude Tests) </label> </div>

<div className='top3'>
     <label>KYA(Aptitude Tests) 

     </label>

     </div>

     <div className='gradebreport'>
<div className="reportd">
<div>
<lable>Academic Year  : </lable>
            <select >
                    <option value="-Select-">--Select Academic Year--</option>
                    <option >2023-2024</option>
                    <option >2022-2023</option>

            </select>
            </div>
           
            <div>
            <lable>Branch  : </lable>
            <select >
                    <option value="-Select-">--Select Branch--</option>
                    <option ></option>
                    <option ></option>

            </select>
            </div>
           
            <div>
            <lable>Board  : </lable>
            <select >
                    <option value="-Select-">--Select Board--</option>
                    <option >State</option>
                    <option >State Board</option>

            </select>
            </div>
            </div>
            
            <div className="reportd">
          
            <div>
            <lable> Class / Section :  </lable>
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
           

            <div className='gbbuttondiv'>
            <button className="btn btn-primary gbbutton" >Get</button>
          </div>

            </div>
            </div>
        </>
    )
}
export default KyaApti;