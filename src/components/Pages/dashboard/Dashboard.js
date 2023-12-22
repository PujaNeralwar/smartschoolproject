import React from 'react'

const Dashboard = () => {
  return (
    <div className='dashmain1'>
      <div className="box">
         <div className='smalldash'>
          <div className='dashhead'> 
            <h6> Student  <span><label style={{marginRight:"150px"}}> (638) </label><button style={{color:"red",backgroundColor:"#fff"}}>Data Checker</button>
            </span> <i class="fa-solid fa-arrows-rotate"></i></h6>
          </div>
          <div className=' contained'>

          </div>
         </div>
        <div className='smalldash'>
         <div className='dashhead'>
         <h6> Staff  <span style={{marginLeft:"200px"}}><i class="fa-solid fa-users" style={{marginRight:"10px"}}></i> <label>New Joinee</label> 
            </span></h6>
          </div>
          <div className='contained'>
            <div>
            <p><i class="fa-solid fa-chalkboard-user" style={{marginRight:"20px"}}></i>Teaching staff</p>
            <p><i class="fa-solid fa-user-tie" style={{marginRight:"20px"}}></i>Non Teaching Staff</p>
            <p><i class="fa-solid fa-people-group" style={{marginRight:"20px"}}></i>Total Staff</p>
            <p><i class="fa-solid fa-sitemap" style={{marginRight:"20px"}}></i>Staff Hierarchy</p>
            </div>
            <div style={{marginLeft:"30px"}}>
              <p>21</p>
              <p>12</p>
              <p>33</p>
              <p><i class="fa-solid fa-chevron-right"></i></p>
            </div>

          </div>
         
        </div>
        <div className='smalldash'>
        <div className='dashhead'>
            <label style={{marginRight:"70px"}}><i class="fa-regular fa-comment"></i> SMS</label>
            <label style={{marginRight:"70px"}}><i class="fa-solid fa-microphone"></i> Voice</label>
            <label><i class="fa-brands fa-whatsapp" style={{color:'#52e01f'}}></i> Whatsapp</label>
          </div>
          <div className=' contained'>
            <div>
             <p><i class="fa-solid fa-chalkboard-user"></i>Sender Id</p>
              <p><i class="fa-solid fa-user-tie"></i>SMS Count</p>
             <p><i class="fa-solid fa-people-group"></i>Sms Balance</p>
            
            </div>
            <div style={{marginLeft:"50px"}}>
              {/* <p></p> */}
              <p>0</p>
              <p>0</p>
              <p>Sms Plan</p>
            </div> 
          </div>
          <div style={{marginLeft:"30px", fontSize:"14px"}}>
            <label style={{marginRight:"30px"}}>Recharge</label>
            <label style={{marginRight:"30px"}}>Uses</label>
            <label style={{marginRight:"30px"}}>Know DLT</label>
            <label>Need DLT</label>
          </div>
        </div>
            
     </div>


        <div className="box">
        <div className='smalldash'>
          <div className='dashhead'>
         
            <h6>Branch <label>(1)</label>  <span style={{marginLeft:"70px"}}><button style={{color:"red",backgroundColor:"#fff"}}>Data Checker</button>
            </span> <i class="fa-solid fa-arrows-rotate"></i></h6>
          </div>
          <div className=' contained'>
          <div>
          <p>State<i class="fa-solid fa-chalkboard-user"></i></p>
          </div>
          <div style={{marginLeft:"40px"}}>
            <p>1</p>
          </div>

          </div>
         
        </div>
        <div className='smalldash'>
         <div className='dashhead'>
         <h6> Concern  <span style={{marginLeft:"80px"}}><i class="fa-solid fa-users" style={{marginRight:"10px"}}></i> <label>New Joinee</label> 
            </span></h6>
          </div>
          <div className='contained'>
            <div>
            <p><i class="fa-solid fa-chalkboard-user"></i>Teaching staff</p>
            <p><i class="fa-solid fa-user-tie"></i>Non Teaching Staff</p>
            <p><i class="fa-solid fa-people-group"></i>Total Staff</p>
            <p><i class="fa-solid fa-sitemap"></i>Staff Hierarchy</p>
            </div>
            <div>
              <p>21</p>
              <p>12</p>
              <p>33</p>
              <p><i class="fa-solid fa-chevron-right"></i></p>
            </div>

          </div>
         
        </div>
        <div className='smalldash'>
           <div className='dashhead'>
           <h6>Inventory</h6>
           </div>
          <div className=' contained'>
            <div style={{marginLeft:"20px"}}>
             <p>0</p>
             <p>Item</p>
             <p>0</p> 
             <p>Sub-Category</p> 
            </div>
            <div>
              <p>0</p>
              <p>Category</p>
              <p>0</p>
              <p>Type</p>
            </div> 
          </div>   
        </div>
        <div className='smalldash'>
           <div className='dashhead'>
           
            <label>Login Status</label>
            <label style={{marginLeft:"50px"}}>Never Login list</label>
            
           </div>
          <div className=' contained'>
            <div>
             <p>Staff</p>
              <p>Devices</p>
             
            </div>
            <div>
              
              <p>0</p>
              <p><i class="fa-brands fa-apple"></i></p>
              
            </div> 
          </div>   
        </div>     
       </div>
      <div className='box'>
       <div className='smalldash'>
        <div className='dashhead'>
           <h5>Automated Email Alert<span>
           <label style={{marginLeft:"700px", fontSize:"15px", marginRight:"20px"}}>Login Status</label>
           <label style={{marginLeft:"50px", fontSize:"15px", marginRight:"20px"}}>Never Login list</label>
           </span></h5>
           
          </div>
       </div>
       </div>


        </div> 
  )
}

export default Dashboard;