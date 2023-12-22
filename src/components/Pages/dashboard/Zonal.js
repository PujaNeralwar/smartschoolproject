import React from 'react'
import { useState } from 'react';
import CreateAdmin from './CreateAdmin';
import CreateZonal from './CreateZonal';
const Zonal = () => {

    const [mgnUser,setMgnUser] = useState(true);
    const[userSetting, setUserSetting]= useState(false);


    const ZonalSetting = () =>{


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
       };
   

       const MgnZonalUser = () =>{

        const[ createAdmin,setcreateAdmin] = useState(false);
        const closeAdmin = () => setcreateAdmin(false);
        return(
            <>
            <div className='userButto'> 
     <button onClick={() => setcreateAdmin(true)}>Create Zonal User</button>
   
    <input placeholder='Serach in Table'></input>
    </div>
    {createAdmin && <CreateZonal  closeAdmin={closeAdmin}/>}
        <table>
        <tr>
            <th>SR No</th>
            <th>User Type</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Phone No</th>
            <th>Email Id</th>
            <th>Smart School App MPIN</th>
            <th>Created Date</th>
            <th>Reset Password</th>
            <th>Access Type</th>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
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
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
            
       
    </table>

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
       {mgnUser && <MgnZonalUser/>}
       {userSetting && <ZonalSetting />}
       
       </div>
    </>
  )
}

export default Zonal;