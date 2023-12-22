import React from 'react'
  
  const Assignlanguage = () => {
    return (
      <>
           <div className="SDheading"><span>SIS </span><label> / Enrollments / Assign language</label> </div>
           <div  className="SDashboard">

    <div className='main'>
        <div className='asianLang'>
    <div>
      <h2 className='asian'>Assign Language to Student</h2>
    </div>
    <div><button className='btn btn-primary' style={{marginLeft:"-30px"}} >Copy</button></div>
    </div>
    <hr className='hr'/>

    <div className='a'>
        <button className='asian-btn'>Asian Language</button>
        <button className='asian-btn'> Report</button>
    </div>

    <div className='shuffling-info1'>
        <div>
            <h6>Acadamic Year</h6>
        <select>
           
           
            <option>2023-2024</option>
            
        </select>
        </div>
        <div className='date-ramge'>
            <h6>Class-Section</h6>
            <select className='select1'>
                <option>1YEAR MPC-IIT 1YEAR MPC-IIT (Boys)
                </option>
                <option>1YEAR MPC-IIT 1YEAR MPC-IIT (Girls)</option>
                <option>2YEAR MPC-IIT 1YEAR MPC-IIT (Boys)  
                </option>
                <option>2YEAR MPC-IIT 1YEAR MPC-IIT (Girls)</option>
            </select>
        </div>
        <div className='radio'>
            <input type='radio' className='stdntwise' name='std'/>Student Wise
            <input type='radio'  className='stdntwise1' name='std'/>Subject Wise
        </div>
        <div>
            <button className='btn btn-primary bt'>Get</button>
        </div>
        </div>
        
        </div>
   </div>
      </>
    )
  }
  
  export default Assignlanguage;