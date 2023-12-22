import React from 'react';
import '../GB/Gradeb.css';
// import '../GB/Gradeb.css';


const DigitalSign=()=>{

    

    return(
        <>
    
       <div className="SDheading"><span>Grade Book </span><label> / Grade Book / Digital Signatures </label> </div>

       <div  className="SDashboard">
         <div className='top2'>
            <label>Digital Signatures</label>
            
         </div>
         </div>

         <div className='gradebreport'>
<div className="reportd">
<div>
            <lable>Branch  : </lable>
            <select >
                    <option value="-Select-">--Select Branch--</option>
                    <option >Ethiken Education Society</option>

            </select>
            </div>
            
            <div>
            <lable> Academic Year : </lable>
            <select >
                    <option value="-Select-">--Select Academic Year --</option>
                    <option >2023-2024</option>
                    <option>2022-2023</option>
                    {/* <option >--Select --</option> */}

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
export default DigitalSign;