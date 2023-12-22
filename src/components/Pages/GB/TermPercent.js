import React from 'react';
import '../GB/Gradeb.css';

const TermPercent =()=>{
    return(
        <>
        <div className="SDheading"><span>Grade Book </span><label> / Setting / Term Percentages </label> </div>

        <div className='top3'>
     <label>Term Percentages</label>
     <p>How does it help?</p>  
</div>

<div className='gradebreport'>
<div className="reportd">
            <div>
            <select className="form-select" aria-label="Show Report">
                            <option value="-Select-">--Ethiken Education Society--</option>
                    <option >Ethiken Education Society</option>
                    <option >Ethiken Education Society</option>
                   

                        </select>
                        </div>
                  

                        <div>
            <select className="form-select" aria-label="Show Report">
                            <option value="-Select-"></option>
                            
                        </select>
                        </div>
                    

                        <div className='gbbuttondiv'>
            <button className="btn btn-primary gbbutton">Search </button>
          </div>

                    </div>
                    </div>
                 
      </>
    )
}
export default TermPercent;