import React from 'react';
import DatePicker from 'react-datepicker';
import { useState } from 'react';

const StaffTrainingPD = () => {
    // const [date, setDate] = useState(new Date());
    // const [startDate, setStartDate] = useState();
    // const [endDate, setEndDate] = useState();
  

  return (
    <>
        <div className="SDheading"><span>HR </span><label> / Staff Details / Staff Training & PD </label> </div>
        
        <div  className="SDashboard">
         <div className='top2'>
            <label>Staff Training</label>
            <div className='staffbut'>
              <button>Add Entry</button>
              <select>
                <option>Ethiken Eduational Society</option>

              </select>
              {/* <DatePicker
        selectsStart
        selected={startDate}
        onChange={date => setStartDate(date)}
        startDate={startDate}
      />
      <DatePicker
        selectsEnd
        selected={endDate}
        onChange={date => setEndDate(date)}
        endDate={endDate}
        startDate={startDate}
        minDate={startDate}
     /> */}
            </div>  
         </div>
         
          <div className='mainbuttons'>
            <button>Training Attended</button>
              <button>Professional Development</button>
              <button>Achievement and Milestone</button>
              <button>Reaserch Log</button>
             
              
          </div>

        <div className='staffcontainer'>

          
        <div className='twodiv'> 
     <div className='leftdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
     <div className='rgtdiv'><input placeholder='Serach in Table'></input> </div>
    </div>
    
        <table>
        <tr>
            <th>SR No</th>
            <th>Name of Teacher</th> 
            <th>Designation</th>
            <th>Department</th>
            <th>Subject Name</th>
            <th>Total</th>
           
            
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
           
            
              
        </tr>
          
         </table>



          </div>


        </div>
    </>
  )
}

export default StaffTrainingPD;