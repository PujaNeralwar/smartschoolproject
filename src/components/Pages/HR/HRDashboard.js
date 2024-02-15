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
  };

  const EmployeeAge = {

    labels: ["<18", "18-21", "22-25", "26-30","31-40","41-55","55+"],
    datasets: [
      {
        label: 'Female',
        data:[0,0,6,4,2,2,0],
        backgroundColor: '#61DBFB',
        barThickness: 25,
      },
      {
        label: 'Male',
        data:[0,1,1,6,7,7,4],
        backgroundColor: 'darkgreen',
        barThickness: 25,
      }
    ]
  };
  const options2 = {
    scales: {
      x: {
        stacked: true
      },
      y:{
        stacked: true
      }
    }
  }

  const YrOrg = {

    labels: ["0-2", "2-4", "4-6", "6-8","8-10","10-12","12-14","14+"],
    datasets: [
      {
        
        data:[35,3,2,5,0,0,0,0],
        backgroundColor: 'green',
        barThickness: 25,
      },
      
    ]
  };
  

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
         <Bar data={EmployeeAge} options ={options2}

         />
          
          
        </div>


        <div className='smalldash'>
        
          <div className='contained'>
            <Bar data={YrOrg}/>
            
          </div>
         
        </div>
       
         
       </div>
      


        </div> 
    </>
  )
}

export default HRDashboard;