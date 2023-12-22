import React from 'react'


function StudentDetails() {
  return (
    <>
     <div className="SDheading"><span>SIS </span><label> / Enrollments / Student Details</label> </div>
    <div className='main-container'>
      
    <div className='student-details'>
        <h4>Student Details</h4>

        <select className='dropdown-toggle'>
          <option>2023-2024</option>
          <option>2022-2023</option>
        </select>
<div className=''>
<button className='uploaddetailsButton'>Upload Student Details</button>
</div>

    </div>
    <hr/>

   
   <div className='button15div'>
    <button className='button15'>students</button>
    <button className='button15'>students (M-O-M)</button>
    <button className='button15'>Gender wise</button>
    <button className='button15'>Transport</button>
    <button className='button15'>Birthdays</button>
    <button className='button15'>Languges</button>
    <button className='button15'>Siblings</button>
    <button className='button15'>New Admission</button>
    <button className='button15'>Houses</button>
    <button className='button15'>Attendence</button>
    <button className='button15'>Absentees</button>
    <button className='button15'>Ancedots</button>
    <button className='button15'>Single parent kids</button>
    <button className='button15'>Residencial Areas</button>
    <button className='button15'>Log</button>


   </div>

   <div className='dropdown'>
   <div className='Student-Status'>
    <h6>Student Status</h6>
    <select className='dropdown-toggle1'>
          <option>Active</option>
          <option>Inactive</option>
          <option>Suspention</option>
        </select>
    
   </div>
   <div className='Student-Status'>
    <h6 className='studentD-h6'>Course</h6>
    <select className='dropdown-toggle1'>
          <option>First Year MPC-IIT</option>
          <option>Second Year MPC-IIT</option>
          <option>First Year MPC-General</option>
          <option>Second Year MPC-General</option>
          <option>First Year BPC-NEET</option>
          <option>Second Year BPC-NEET</option>
          <option>First Year BPC-General</option>
          <option>Second Year BPC-General</option>
        </select>
    
   </div>
   <div className='Student-Status'>
    <h6>Batch</h6>
    <select className='dropdown-toggle1'>
          <option>First Year MPC-IIT (Boys)</option>
          <option>First Year MPC-IIT (Girl)</option>
          
        </select>
    
   </div>
   </div>
   
   <div className='search'>
    <div  className='Student-Status1'>
    <h6>Show <select className='dropdown-toggle2'>
          <option>10</option>
          <option>20</option>
          <option>50</option>
          <option>100</option>
          
        </select>Entries</h6>
        </div>

        <div >
          <label>Search :</label>
          <input type='search'/>
        </div>

        

    
   </div>

   

  <div>
  <table className='table-info'>
        <tr className='student-tr'>
          <th className='student-th'>Sr.No</th>
          <th className='student-th'>Profile Pic</th>
          <th className='student-th'>EntrollmentCode</th>
          <th className='student-th'>Admission No.</th>
          <th className='student-th'>Roll No</th>
          <th className='student-th'>Student Name</th>
          <th className='student-th'>Gender</th>
          <th className='student-th'>Date of Admission</th>
          <th className='student-th'>Date of Birth</th>
          <th className='student-th'>Point of Contact</th>
          <th className='student-th'>Point of Contact No</th>
          <th className='student-th'>Request</th>
        </tr>
        <tr className='student-tr'>
          <td className='student-td'>1</td>
          <td className='student-td'></td>
          <td className='student-td'>214566</td>
          <td className='student-td'>5775</td>
          <td className='student-td'>5</td>
          <td className='student-td'>keshav</td>
          <td className='student-td'>male</td>
          <td className='student-td'>24/12/1993</td>
          <td className='student-td'>24/12/1993</td>
          <td className='student-td'>xszd</td>
          <td className='student-td'>987564812</td>
          <td className='student-td'>rtyj</td>
        </tr>
      </table>
  </div>

  
  
  </div>
  </>
  )

}


export default StudentDetails;