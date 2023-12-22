import React, { useState } from 'react';

import MgnUser from './MgnUser';
import "../dashboard/Dashboard.css";

const Organisation = () => {
  const [mgnUser,setMgnUser] = useState(true);

  const[userSetting, setUserSetting]= useState(false);
   const AdminSetting = () =>{


    const [data, setData] = useState(undefined);
 
    const options = [
        "SysAdmin",
        "Academic Incharge",
        "MCB Support",
        "SysAdmin1",
        
    ];
    const onOptionChangeHandler = (event) => {
        setData(event.target.value);
      
    };
    // setMgnUser(!mgnUser);
    return(
      <>
        <div className='adminsetting'>
        <h6>USER Type</h6>
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
            
        <button>GET</button>
        </div>
      </>
    );
   }
  return (
    <>
        
          
       <div className='divbutton'>
       <button onClick={() => {setMgnUser(!mgnUser);setUserSetting(false);}}>Manage User</button>
       <button onClick={() => {setUserSetting(!userSetting);setMgnUser(false);}}>User Setting</button>
       </div>
       <div className='dashmain1'> 
       {mgnUser && <MgnUser/>}
       {userSetting && <AdminSetting />}
       
       </div>
    </>
  )

}

export default Organisation;