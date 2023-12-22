import React from 'react'
 import "./SIS.css"
 
 const Bankaccount = () => {
   return (
    <>
    
  <div className="SDheading"><span>SIS </span><label> / Enrollement / Parent Bank Account Details </label> </div>
  <div  className="SDashboard">
    <div className='parentDetails'>
        <div>
            <h2 className='parent-heading'style={{paddingLeft:"20px"}}>Parent Bank Account Details</h2>
        </div>
        <div className='bank-details'>
            <p>Class & Section</p>
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

        <div>
            <p>Status</p>
            <select className='dropdown-toggle1'>
                <option>
                    Active
                </option>
                <option>
                    Inactive
                </option>
            </select>
        </div>

        <div>
            <p>Relation</p>
            <select className='dropdown-toggle1'>
                <option>
                   Father
                </option>
                <option>
                   Mother
                </option>
                <option>
                  Self (Student)
                </option>
            </select>
        </div>

        <div style={{padding:"20px",marginTop:"15px" }}>
            <button style={{color:"#fff",backgroundColor:"blue",border:"1px solid white", marginRight:"20px"}}>GET</button>
        
            <button style={{}}>Report</button>
        </div>
        

    </div>
    <div className='last'>
    </div> 
        </div></>
   )
 }
 
 export default Bankaccount;