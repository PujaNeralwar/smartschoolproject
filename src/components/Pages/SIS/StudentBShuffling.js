import React from 'react'

const StudentBShuffling = () => {
  return (
  <>
  <div className="SDheading"><span>SIS </span><label> / Enrollement / Student Branch Shuflling </label> </div>
  
  <div className='shufle-first-div'>
        <div>
            <h3>Student Branch Shuffeling</h3>
            <p className='red'>Note:The student transfer request to other branches within the organization are dipslyed.</p>
        </div>
        <div>
            <button className='shuffle-bton'>Pending Inward Request</button>
            <button  className='shuffle-bton'>New Request</button>
            <button  className='shuffle-bton'>Shuffled Student</button>
        </div>
    </div>
    <hr className='kr'/>
    <div className='shuffling-info'>
        <div>
            <h6>Acadamic Year</h6>
        <select>
            <option>2015-2016</option>
            <option>2016-2017</option>
            <option>2017-2018</option>
            <option>2018-2019</option>
            <option>2020-2021</option>
            <option>2021-2022</option>
            <option>2022-2023</option>
            <option>2023-2024</option>
            <option>2024-2025</option>
            <option>2025-2026</option>
            <option>2026-2027</option>
            <option>2027-2028</option>
        </select>
        </div>
        <div className='date-ramge'>
            <h6>Date Range</h6>
            <select>
                <option>Today  
                </option>
                <option>Till Date</option>
                <option>Between Date</option>
            </select>
        </div>
        <div>
            <button className='btn btn-primary bt'>Gate</button>
        </div>
    </div></>
  )
}

export default StudentBShuffling;