import React from 'react';
import { useState } from 'react';
import "../HR/Hrstyle.css";

const AbsentSummary = () => {

    const [detailedview,setDetailedView] = useState(true);
    const[staffvisedetails, setStaffviseDetails]= useState(false);
    const[datavisedetails,setDataviseDetails]=useState(false);


    const DataviseDetails = () => {

        const[ createAdmin,setcreateAdmin] = useState(false);
        const closeAdmin = () => setcreateAdmin(false);
        return(
            <>
            <div className='twodiv'> 
     {/* <button onClick={() => setcreateAdmin(true)}>Create Branch User</button> */}
     <div className='leftdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
     <div className='rgtdiv'><input placeholder='Serach in Table'></input> </div>
    </div>
    {/* {createAdmin && <CreateBranchUser  closeAdmin={closeAdmin}/>} */}
        <table>
        <tr>
            <th>SR No</th>
            <th>Absent/Leave Date</th>
            <th>No. of Staff on Absent</th>
            <th>No.of Staff on Leave</th>
            
            
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
              
        </tr>
          
         </table>
         </>
         );
        }

   const StaffviseDetails = () => {

    const[ createAdmin,setcreateAdmin] = useState(false);
    const closeAdmin = () => setcreateAdmin(false);
    return(
        <>
        <div className='twodiv'> 
 {/* <button onClick={() => setcreateAdmin(true)}>Create Branch User</button> */}
 <div className='leftdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
 <div className='rgtdiv'><input placeholder='Serach in Table'></input> </div>
</div>
{/* {createAdmin && <CreateBranchUser  closeAdmin={closeAdmin}/>} */}
    <table>
    <tr>
        <th>SR No</th>
        <th>Staff Name</th>
        <th>Staff Code</th>
        <th>No.of Days Absent</th>
        <th>No of Days Leave</th>
        
    </tr>
    <tr>
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

     const DetailedView = () =>{

        const[ createAdmin,setcreateAdmin] = useState(false);
        const closeAdmin = () => setcreateAdmin(false);
        return(
            <>
            <div className='twodiv'> 
     {/* <button onClick={() => setcreateAdmin(true)}>Create Branch User</button> */}
     <div className='leftdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
     <div className='rgtdiv'><input placeholder='Serach in Table'></input> </div>
    </div>
    {/* {createAdmin && <CreateBranchUser  closeAdmin={closeAdmin}/>} */}
        <table>
        <tr>
            <th>SR No</th>
            <th>Absent/Leave Date</th>
            <th>Leave Type</th>
            <th>Leave Remark</th>
            <th>Remark</th>
            <th>Staff Code</th>
            <th>Gender</th>
            <th>Staff Name</th>
            <th>Designation</th>
            <th>Department</th>
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
        <div className='divButton'>
       <button onClick={() => {setDetailedView(!detailedview);setStaffviseDetails(false); setDataviseDetails(false);}}>Detailed View</button>
       <button onClick={() => {setStaffviseDetails(!staffvisedetails);setDetailedView(false);setDataviseDetails(false);}}>Staff Wise Details</button>
       <button  onClick={() => {setDataviseDetails(!datavisedetails);setStaffviseDetails(false);setDetailedView(false);}}>Data Wise Details</button>
       </div>
       <div className='dashmain1'> 
       {detailedview && <DetailedView />}
       {staffvisedetails && <StaffviseDetails />}
       {datavisedetails && <DataviseDetails />}
       
       </div>
    </>
  )
}

export default AbsentSummary;