import React from 'react';
import { useState } from 'react';

const Staff = () => {

    const [data, setData] = useState(undefined);
     
    const options = [
        "Staff",
        "Computer Operator",
        "Class Teacher",
        "Principal",
        "Front Officer",
        "Accountant",
        "PRO",
        "Warden",
        
    ];
    const onOptionChangeHandler = (event) => {
        setData(event.target.value);
      
    };

  return (
    <>
         <div className='adminsetting'>
         <div className='userBox'>
            <div className='box1'>
            <h6>User Type</h6>
            <select onChange={onOptionChangeHandler}>
                    <option>-Select Staff -</option>
                    {options.map((option, index) => {
                        return (
                            <option key={index}>
                                {option}
                            </option>
                        );
                    })}
                </select>
                </div>
                <div className='box1'>
                 <h6>Branch</h6>
                <select onChange={onOptionChangeHandler}>
                    <option>-Select Branch -</option>
                    {/* {options.map((option, index) => {
                        return (
                            <option key={index}>
                                {option}
                            </option>
                        );
                    })} */}
                </select>
                </div>
                <div className='box1'>
                 <h6>Staff Department</h6>
                <select onChange={onOptionChangeHandler}>
                    <option>-All Department -</option>
                    {/* {options.map((option, index) => {
                        return (
                            <option key={index}>
                                {option}
                            </option>
                        );
                    })} */}
                </select>
                </div>
            
            <div className='box1' >
            <button>GET</button>
            </div>
            </div>
            </div>
    </>
  )
}

export default Staff;