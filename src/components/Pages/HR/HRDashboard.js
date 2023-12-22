import React from 'react';
import { ArcElement,Tooltip,Legend,Title } from 'chart.js';
import Chart from 'chart.js/auto';
import { Doughnut,Bar } from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend, Title);
Chart.defaults.plugins.tooltip.backgroundColor = 'rgb(0, 0, 156)';
Chart.defaults.plugins.legend.position = 'bottom';
Chart.defaults.plugins.legend.title.display = true;
Chart.defaults.plugins.legend.title.text = 'Total Staff:45';
Chart.defaults.plugins.legend.title.font = 'Helvetica Neue';


const staffdata = {
    labels: [
      'Male',
      'Female'
    ],
    datasets: [{
      data: [29,16],
      backgroundColor: [
        'rgb(0, 197, 0)',
        'rgb(75,192,192,1)',
        // 'rgb(204, 223, 243)'
      ],
      borderWidth: 2,
      radius: '50%'   
    }]
  };

  const emptype = {
    labels: ['Temporary', 'Permanant'],
    datasets: [
      {
        data: [8,37],
        backgroundColor:['rgba(75,192,192,1)','rgb(0, 197, 0)',],
        // borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        barThickness:25,
        
      }
    ]
  }

  const trainstaff = {
    labels: ['Not Trained', 'TGT','CTET Qualified'],
    
    datasets: [
      {
        data: [8,30,7],
        backgroundColor:['rgba(75,192,192,1)','rgb(0, 197, 0)','rgb(145, 56, 49)'],
        // borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        barThickness:25,
        
      }
    ]
  }

  

const HRDashboard = () => {
  return (
    <>
          <div className='dashmain1'>
      <div className="box">
         <div className='smalldash'>   
         
             <Doughnut data={staffdata} />
          
         </div>




        <div className='smalldash'>
         {/* <div className='dashhead'>
         <h6> Staff  <span style={{marginLeft:"200px"}}><i class="fa-solid fa-users" style={{marginRight:"10px"}}></i> <label>New Joinee</label> 
            </span></h6>
          </div> */}
          <div className='contained'>
          
          <Bar data={emptype} />

          </div>
         
        </div>
        <div className='smalldash'>
        <div className='dashhead'>
            Trained Staff
          </div>
          <div className=' contained'>
           
          <Bar data={trainstaff} />
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
    </>
  )
}

export default HRDashboard;