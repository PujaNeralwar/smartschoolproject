import React from 'react'
import { useState } from 'react';
const StudentFD = () => {
  const[ createAdmin,setcreateAdmin] = useState(false);
  const [selectedOption, setSelectedOption] = useState('active'); // Initial selected option

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

/**for manage rating */
  const MgnRating = () =>{
    const closeAdmin = () => setcreateAdmin(false);
    const options = ["Option 1", "Option 2", "Option 3"];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };


    return(
      <>
       <div className='modal-wrapper' onClick={closeAdmin}></div>
     <div className="userContainer2">
     <div className='crossicon'> 
        <label>Manage Rating Scale</label>
        <i class="fa-solid fa-xmark" onClick={closeAdmin}></i>
     </div>
      <div className='detailss'> 
      <div className='sbradio'>
          <label>
          <input
          type="radio"
          name="radioGroup"  // Use the same 'name' for all radio buttons to group them
          value="active"
          checked={selectedOption === 'active'}
          onChange={handleOptionChange}
         />
        View Your Rating Scale
      </label>
      
      <label>
        <input
          type="radio"
          name="radioGroup"
          value="inactive"
          checked={selectedOption === 'inactive'}
          onChange={handleOptionChange}
        />
        Default Rating Scale
      </label>
      </div>
      <div className='headbox'>
       <div className='box1'>
        <label> Rating Scale :</label>
        <select>
        <option>Select Rating Scale</option>
          <option value="9">9</option>
          <option value="9">8</option>
          <option value="8">7</option>
          <option value="8">6</option>
          <option value="9">5</option>
          <option value="8">4</option>
          <option value="9">3</option>
          <option value="8">2</option>
        </select>
        </div>
        <div><button> Add New Rating Scale</button>
       </div>
        
      </div>

      
           
      
        </div>

      </div> 

      </>
    );
  }





 
  return (
    <>
      <div className='sbmain'>
        <div className='sbfdiv'>
         <label><p>Dynamic forms</p>/ Feedback Forms / Student Feedback forms</label>
        </div>
        <div className='sbhead'>
          <label>Feedback Form</label>
          <div className='yrdiv'>
          <p>Academic Year</p>
          <select>
            <option>2023-2024</option>
            <option>2022-2023</option>
          </select>
          </div>
          <button onClick={() => setcreateAdmin(true)}>Manage Rating Scale</button>
        </div>
        <div className='sbmainbox'>
        {createAdmin && <MgnRating/>}
          <div className='divbutton'>
            <button>General Feedback</button>
            <button>Subjectwise Feedback</button>
          </div>
          <div className='sbradio'>
          <label>
          <input
          type="radio"
          name="radioGroup"  // Use the same 'name' for all radio buttons to group them
          value="active"
          checked={selectedOption === 'active'}
          onChange={handleOptionChange}
         />
        Active Forms
      </label>
      
      <label>
        <input
          type="radio"
          name="radioGroup"
          value="inactive"
          checked={selectedOption === 'inactive'}
          onChange={handleOptionChange}
        />
        InActive Forms
      </label>
      <div className='sbutton'>
        <button>Create New Form</button>
        <button>Copy From Existing Form</button>
      </div>
      </div>
      <label className='lb'><span>Note: </span>If you want to take Feedback with the same question more than once in a year,please copy feedback form
      from the existing feedback form and define the form visibility and due dates accordingly</label>
      <table>
        <tr>
            <th>SR No</th>
            <th>Form Name</th>
            <th>Enable for Parents on</th>
            <th>Due Date</th>
            <th>Form Created Date</th>
            <th>Created By</th>
            
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            
            
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

export default StudentFD;