import React from 'react'
import { useState } from 'react';
import CreateBranchUser from './CreateBranchUser';
const Branch = () => {
    const [mgnUser,setMgnUser] = useState(true);
    const[userSetting, setUserSetting]= useState(false);

   const BranchSetting = () => {


    const [data, setData] = useState(undefined);
     
        const options = [
            "Principal",
            "Computer Operator",
            "Accountant",
            "Receptionist",
            "IT",
            "Transport",
            "Communication",
            "Academics",
            
        ];
        const onOptionChangeHandler = (event) => {
            setData(event.target.value);
          
        };
    return(
        <>
        <div className='adminsetting'>
         <div className='userBox'>
            <div className='box1'>
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
            
            <div className='box1' >
            <button>GET</button>
            </div>
            </div>
            </div>

        </>
       );
     }

     const MgnBranchUser = () =>{

        const[ createAdmin,setcreateAdmin] = useState(false);
        const closeAdmin = () => setcreateAdmin(false);
        return(
            <>
            <div className='userButto'> 
     <button onClick={() => setcreateAdmin(true)}>Create Branch User</button>
   
    <input placeholder='Serach in Table'></input>
    </div>
    {createAdmin && <CreateBranchUser  closeAdmin={closeAdmin}/>}
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
       {mgnUser && <MgnBranchUser/>}
       {userSetting && <BranchSetting />}
       
       </div>
    </>
  )
}

export default Branch;