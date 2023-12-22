import React from 'react';
import "../dashboard/Dashboard.css";

const RoomAllocation = () => {
  return (
    <>
    <div className='dashmain1'>
      <div className='dropdown-container'>
                 <select name="subject" id="subject" className='hh'>
                    <option value="" selected="selected" className='active'>Ethiken education society</option>
                    <option value="" selected="selected">Ethiken education society</option>
                     <option value="" selected="selected">Ethiken education society</option>
                     <option value="" selected="selected">Ethiken education society</option>
                 </select>
            </div>
            
           
          <div className="room-container">
          <button className='button2'>Building/Block Information</button>
           <button className='button2'>Class Room Allocations</button>
          </div>

          <div className="table-container">
            <table className="table">
                <thead className="table-he">
                  <tr className="table-row">
                    <th className="th">Block Name +</th>
                    <th  className="th">Floor Name</th>
                    <th  className="th">Room Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                  </tr>
                </tbody>
                </table>
          </div>
          </div>

    </>
  )
}

export default RoomAllocation;