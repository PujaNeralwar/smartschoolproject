import React from 'react'
import { useState,useEffect } from 'react';
const CreateBranchUser = ({closeAdmin}) => {

    const [data, setData] = useState(undefined);
    const [data1,setData1] = useState(undefined);
    const options1 = [
        "Nizabbad",
        "Delhi",
        "Mumbai",
        "Hyderabad",
        "Pune",
    ];
    const onOptionChangeHandler1 = (event) => {
        setData1(event.target.value);
      
    };
    const options = [
        "Principal",
        "Computer Operator",
        "Accountant",
        "IT",
        "Receptionist",
        "Co-class Teacter",
        "School Manager",
        "Director",
        "Computer Staff",
        "Visitor Mgnt",
    ];
    const onOptionChangeHandler = (event) => {
        setData(event.target.value);
      
    };
useEffect(() => {
    document.body.style.overflowY="hidden";
    return () => {
        document.body.style.overflowY="scroll";
    };
},[]);
  return (
    <>
    <div className='modal-wrapper' onClick={closeAdmin}></div>
     <div className="userContainer">
     <div className='crossicon'> 
        <label>Create/Edit Branch User Details</label>
        <i class="fa-solid fa-xmark" onClick={closeAdmin}></i>
     </div>
      <div className='details'>
      <select onChange={onOptionChangeHandler1}>
        <option>-Select Location-</option>
        {options1.map((option, index) => {
                    return (
                        <option key={index}>
                            {option}
                        </option>
                    );
                })}
      </select>
      <select onChange={onOptionChangeHandler}>
                <option>-Select User Type -</option>
                {options.map((option, index) => {
                    return (
                        <option key={index}>
                            {option}
                        </option>
                    );
                })}
            </select>
            {/* <i class="fa-solid fa-xmark" onClick={closeAdmin}></i> */}
           
       <div className='userBox'>
        <div className='box1'>
            <label>Name :</label>
            <input type='text' placeholder='Name'></input>
        </div>
        <div className='box1'>
            <label>Mobile No.</label>
            <input type='text' placeholder='Phone No'></input>
        </div>
        <div className='box1'>
            <label> Email ID :</label>
            <input type='text' placeholder='Email'></input>
        </div>
        <button type='submit'>GO</button>
        </div>
        </div>

</div> 

    </>
  )
}

export default CreateBranchUser;