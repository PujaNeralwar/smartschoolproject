import React from 'react'
import "./SIS.css"

function HomePage() {
  return (
    <div className='main-container'>
        <div className='containerBox'>
            <div className='studentContainer'>
                <h5 className='homepage-h5'>Students (AY:2023-24) <span className='span1'>668</span></h5> 
                <hr/>
                <div className='button-div'>
                <button className='higher_button'>Higher...</button> <hr/>
                <button className='button1'>45 <br/> 1YEAR MPC- </button>
                <button className='button2'>37<br/>  I YEAR M </button>
                <button className='button2'>8 <br/> I YEAR M </button>
                <hr/>
                <button className='button1'>33<br/>  2 YEAR MPC- </button>
                <button className='button2'>28<br/>  2 YEAR M </button>
                <button className='button2'>5<br/>  2YEAR M </button>
                <hr/>
                <button className='button1'>6<br/>  1YEAR MPC- </button>
                <button className='button2'>6<br/>  I YEAR M </button>
                <hr/>
                <button className='button1'>115<br/>  1YEAR BPC-</button>
                <button className='button2'>37<br/>  I YEAR B</button>
                <button className='button2'>78<br/>  I YEAR B</button>
                <hr/>
                <button className='button1'>85 <br/> 2YEAR BPC-</button>
                <button className='button2'>24 <br/> 2 YEAR B</button>
                <button className='button2'>61<br/>  2 YEAR B</button>
                <hr/>
                <button className='button1'>53<br/>  1YEAR BPC-</button>
                <button className='button2'> 53<br/>  1 YEAR B</button>
                <hr/>
                <button className='button1'>40<br/>  2YEAR BPC-</button>
                <button className='button2'> 40<br/>  2 YEAR B</button>
                <hr/>
                <button className='button1'>17<br/>  1YEAR MEC-</button>
                <button className='button2'> 14<br/>  I YEAR M</button>
                <button className='button2'>3<br/>  I YEAR M</button>
                </div>



            </div>
            <div className='studentContainer'>
                <div className=''>
                <div className='button-div1'>
                    <button className='todayButton1'>Today</button>
                    <button className='todayButton'>Last 7 Days</button>
                    <button className='todayButton'>Last 30 Days</button>
                    </div>
                    <br/>
                    <h6>Concerns Open</h6> <hr/>
                   
                    <div className='parentconcern'>
                    <img src="https://cdndatastatic.myclassboard.com/img/parents.svg" className='homepage-image' alt="image1"/>
                    <p>Parent Concerns 0</p>
                    </div>
                    <div className='parentconcern'>
                    <img src="https://cdndatastatic.myclassboard.com/img/teacher.svg" className='homepage-image' alt='image2'/>
                    <p>Staff Concerns 0</p>
                    </div>
                    <div className='parentconcern'>
                    <img src="https://cdndatastatic.myclassboard.com/img/staff.svg" className='homepage-image ' alt="image2"/>
                    <p className='home-page-p'>Inter office concern 0</p>
                    </div>
                   
                </div>
            </div>
            <div className='studentContainer'>
            <div className='button-div1'>
                    <button className='todayButton1'>Today</button>
                    <button className='todayButton'>Last 7 Days</button>
                    <button className='todayButton'>Last 30 Days</button>
                    </div>
                    <div className='disciplediv'>
            <button className='disciplinebutton'>Discipline</button>
                    <button className='disciplinebutton'>Anecdotes</button>
                    <button className='disciplinebutton'>Diary Status</button>
            </div>
            <hr/>
            <p className='home-page-p'>Data not found</p>
            </div>
          
            <div className='studentContainer1'>
            <div className='button-div1'>
                    <button className='todayButton1'>Pending request</button>
                    <button className='todayButton'>Student Request</button>
                    
                    </div>
                    <br/>
                    
                   <hr/>
                    <div className='parentconcern'>
                    <img src="https://cdndatastatic.myclassboard.com/img/FeeConcession_sis_1.svg" className='homepage-image' alt="image1"/>
                    <p>Fees Concession 0</p>
                    </div>
                    <hr/>
                    <div className='parentconcern'>
                    <img src="https://cdndatastatic.myclassboard.com/img/FeeRefund_sis_1.svg" className='homepage-image' alt='image2'/>
                    <p>Fee Refund 0</p>
                    </div>
                    <hr/>
                    <div className='parentconcern'>
                    <img src="https://cdndatastatic.myclassboard.com/img/Feeaupdate.svg" className='homepage-image' alt="image2"/>
                    <p>Fee UnAssign 0</p>
                    </div>
                    <hr/>
                    <div className='parentconcern'>
                    <img src="https://cdndatastatic.myclassboard.com/img/StudentInactive_sis_1.svg" className='homepage-image' alt="image2"/>
                    <p>Student Inactive 0</p>
                    </div>
                    <hr/>
                    <div className='parentconcern'>
                    <img src="https://cdndatastatic.myclassboard.com/img/StudentReActive_sis_1.svg" className='homepage-image' alt="image2"/>
                    <p>Student Inactive 0</p>
                    </div>
                 
            </div>

        </div>

<div className='bottomdiv'>
        <div className='big-container'>
            <h5>Student Attendence <span className='span'>Today</span></h5>
            <hr/>
            <div className='images'>
            <img src='https://cdndatastatic.myclassboard.com/img/nodata.svg' alt="images1"/>
            </div>
        </div>
        <div className='big-container'>
        <h5>Staff Attendence <span className='span'>Today</span></h5>
           <div className='attendence'>
            <button className='button5'>Teaching</button>
            <button className='button5'>Non Teaching</button>
            <button className='button5'>Transport</button>
           </div>
            
            
            </div>
            </div>
    </div>
  )
}

export default HomePage;