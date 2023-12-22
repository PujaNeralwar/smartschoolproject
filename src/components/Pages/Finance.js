import React, { useState } from 'react';
import "../common/Header.css";
import Collection from './Finance/Collection';
import Dues from './Finance/Dues';
import Receivables from './Finance/Receivables';
import Concessions from './Finance/Concessions';
import DueProjection from './Finance/DueProjection';
import Tracker from './Finance/Tracker';
import Strength from './Finance/Strength';
import ManageFeePlans from './Finance/ManageFeePlans';
import FeeReceivablesReports from './Finance/FeeReceivablesReports';
import ApplyForStudentBulkFeeRefund from './Finance/ApplyForStudentBulkFeeRefund';
import AssignFeeToStudents from './Finance/AssignFeeToStudents';
import ManageFeeConcessions from './Finance/ManageFeeConcessions';
import FineManagement from './Finance/FineManagement';
import MakePayment from './Finance/MakePayment';
import BranchOtherFeeCollection from './Finance/BranchOtherFeeCollection';
import ApplicationFeeEntry from './Finance/ApplicationFeeEntry';
import ApproveConcessionRequests from './Finance/ApproveConcessionRequests';
import FeePaymentChangeRequest from './Finance/FeePaymentChangeRequest';
import FeeDaySheet from './Finance/FeeDaySheet';
import DishonouredCheques from './Finance/DishonouredCheques';
import FeeLedgerReport from './Finance/FeeLedgerReport';
import ClassWiseDueReport from './Finance/ClassWiseDueReport';
import FeeDueStudentCount from './Finance/FeeDueStudentCount';
import CurrentStatusOFPreviousMonthOS from './Finance/CurrentStatusOFPreviousMonthOS';
import FeePlanDetailsReport from './Finance/FeePlanDetailsReport';
import StudentDueDateChangeLog from './Finance/StudentDueDateChangeLog';
import FeeEditDetailsReport from './Finance/FeeEditDetailsReport';
import FineAmountModificationReport from './Finance/FineAmountModificationReport';
import ApproveStudentFeeRefunds from './Finance/ApproveStudentFeeRefunds';
import ApproveOfflinePayments from './Finance/ApproveOfflinePayments';
import ScholarshipDetailsReport from './Finance/ScholarshipDetailsReport';
import MiscFeeAssignUnassign from './Finance/MiscFeeAssignUnassign';
import ManageFeeInvoiceChallan from './Finance/ManageFeeInvoiceChallan';
import AssignMiscFeeGroupToStudents from './Finance/AssignMiscFeeGroupToStudents';
import ManageLastYearDues from './Finance/ManageLastYearDues';
import AssignTransportFee from './Finance/AssignTransportFee';
import EditDueDates from './Finance/EditDueDates';



const Finance = () => {

    const closeAdmin = () => setShowDiv(false);
  
    const [click, setClick] = useState(false);
    const [active, setActive] = useState("");

    const[collection,setCollection]= useState(true);
    const[dues,setDues]= useState(false);
    const[receivables,setReveivables]= useState(false);
    const[concessions,setConcessions]= useState(false);
    const[dueprojection,setDueprojection] =useState(false);
    const[tracker,setTracker]=useState(false);
    const[strength,setStrength]=useState(false);
  
    
    const[financedash,setFinancedash] =useState(true);
  
  
  
    const [showDiv, setShowDiv] = useState(false);
    const [showFinancePage, setShowFinancePage] =useState(false);

    const handleMouseEnter = (e) => {
      // e.target.style.background = "grey"
      setShowDiv(e);
    }
    const handleMouseLeave = e => {
      // e.target.style.background = "maroon"
      // setShowDiv(false);
    }
  
    const handleClick = (e) => {
      setActive(e.target.id);
      
      
    }
   const handleOnClick = (event) => {
    setShowFinancePage(event);
   }
  
   
  
    const FeeManagementMenu = () => {
      return(
        <>
         <div>
           {/* <div className='modal-wrapper'></div>   */}
       <div className="userContainer1">
       <div className='crossicon'> 
          <label>Fee Management</label>
          <i class="fa-solid fa-xmark" style={{color:"#fff"}} onClick={closeAdmin}></i>
       </div>
        <div className='details'>
  
         <div className='divbutt'>
         <button onClick={() => {handleOnClick('1');setShowDiv(false);setFinancedash(false) ;}}>Manage Fee plans</button>
         <button onClick={() => {handleOnClick('2');setShowDiv(false);setFinancedash(false) ;}}>Assign Fee to Students</button>
         <button onClick={() => {handleOnClick('3');setShowDiv(false);setFinancedash(false) ;}}>Manage Fee Concessions</button>
         <button onClick={() => {handleOnClick('4');setShowDiv(false);setFinancedash(false) ;}}>Fine Management</button>
         <button onClick={() => {handleOnClick('5');setShowDiv(false);setFinancedash(false) ;}}>Misc.Fee Assign/Unassign</button>
         <button onClick={() => {handleOnClick('6');setShowDiv(false);setFinancedash(false) ;}}>Manage Fee invoice/Challan</button>



         </div>
  
         <div className='divbutt'>
         <button  onClick={() => {handleOnClick('7');setShowDiv(false);setFinancedash(false) ;}}>Fee Receivables Report</button>
         <button onClick={() => {handleOnClick('8');setShowDiv(false);setFinancedash(false) ;}}>Assign Misc.fee group to Students</button>
         <button onClick={() => {handleOnClick('9');setShowDiv(false);setFinancedash(false) ;}}>Manage Last year Dues</button>
         <button onClick={() => {handleOnClick('10');setShowDiv(false);setFinancedash(false); }}>Assign Transport Fee (Based on Previous Year)</button>
         <button onClick={() => {handleOnClick('11');setShowDiv(false);setFinancedash(false); }}>GST Settings</button>
         <button onClick={() => {handleOnClick('12');setShowDiv(false);setFinancedash(false); }}>Edit Due Dates</button>

         </div>
         
         <div className='divbutt'>
         <button onClick={() => {handleOnClick('13');setShowDiv(false);setFinancedash(false) ;}}>Apply for Student Bulk Fee Refund</button>
         <button onClick={() => {handleOnClick('14');setShowDiv(false);setFinancedash(false) ;}}>Due Departments</button>
         <button onClick={() => {handleOnClick('15');setShowDiv(false);setFinancedash(false); }}>Assign Competitive Exam Fee</button>
         <button onClick={() => {handleOnClick('16');setShowDiv(false);setFinancedash(false); }}>Manage fees for Shuffled out students</button>
         <button onClick={() => {handleOnClick('17');setShowDiv(false);setFinancedash(false); }}>Enrichment Program Attendance</button>
         <button onClick={() => {handleOnClick('18');setShowDiv(false);setFinancedash(false); }}>Bulk Installment wise Fee Assign/Unassign</button>

         </div>
        </div>
  
       </div> 
          
          </div> 
        </>
      );
    }
  
    const CollectionsMenu = () => {
      return(
        <>
         <div>
           {/* <div className='modal-wrapper'></div>   */}
       <div className="userContainer1">
       <div className='crossicon'> 
          <label>Collections</label>
          <i class="fa-solid fa-xmark" style={{color:"#fff"}} onClick={closeAdmin}></i>
       </div>
        <div className='details'>
        <div className='divbutt'>
         <button onClick={() => {handleOnClick('19');setShowDiv(false);setFinancedash(false) ;}}>Make Payment</button>
         <button onClick={() => {handleOnClick('20');setShowDiv(false);setFinancedash(false) ;}}>Fee Collection Reports</button>
         <button onClick={() => {handleOnClick('21');setShowDiv(false);setFinancedash(false) ;}}>Inventory Item Sales</button>
         <button onClick={() => {handleOnClick('22');setShowDiv(false);setFinancedash(false); }}>Bank Reconciliation</button>
         <button onClick={() => {handleOnClick('23');setShowDiv(false);setFinancedash(false); }}>Bank Reconciliation Clearance</button>
         <button onClick={() => {handleOnClick('24');setShowDiv(false);setFinancedash(false); }}>Cheque Deposit Dashboard</button>

         </div>
  
         <div className='divbutt'>
         <button onClick={() => {handleOnClick('25');setShowDiv(false);setFinancedash(false) ;}}>Branch Other fee Collections</button>
         <button onClick={() => {handleOnClick('26');setShowDiv(false);setFinancedash(false) ;}}>Student Deposits / Transaction</button>
         <button onClick={() => {handleOnClick('27');setShowDiv(false);setFinancedash(false) ;}}>Upload feepayment Details</button>
         <button onClick={() => {handleOnClick('28');setShowDiv(false);setFinancedash(false) ;}}>Inventory Issue and Returns</button>
         <button onClick={() => {handleOnClick('29');setShowDiv(false);setFinancedash(false); }}>Upload Misc Fee Collections</button>
         <button onClick={() => {handleOnClick('30');setShowDiv(false);setFinancedash(false); }}>Unknown Internet Payments Entry</button>

         </div> 
         
         <div className='divbutt'>
         <button onClick={() => {handleOnClick('31');setShowDiv(false);setFinancedash(false); }}>Application Fee Entry</button>
         <button onClick={() => {handleOnClick('32');setShowDiv(false);setFinancedash(false); }}>Admitted Students Application Entry</button>
         <button onClick={() => {handleOnClick('33');setShowDiv(false);setFinancedash(false); }}>UPI payment link-SMS</button>
         <button onClick={() => {handleOnClick('34');setShowDiv(false);setFinancedash(false); }}>Collection Follow up</button>
         <button onClick={() => {handleOnClick('35');setShowDiv(false);setFinancedash(false); }}>UPI payment link-Whatsapp</button>

         </div> 
        </div>
         
          </div>
  
       </div> 
          
        
        </>
      );
    }
  
  
    const ApprovalsMenu = () => {
      return(
        <>
         <div>
           {/* <div className='modal-wrapper'></div>   */}
       <div className="userContainer1">
       <div className='crossicon'> 
          <label>Approvals</label>
          <i class="fa-solid fa-xmark" style={{color:"#fff"}} onClick={closeAdmin}></i>
       </div>
        <div className='details'>
        <div className='divbutt'>
         <button onClick={() => {handleOnClick('36'); setShowDiv(false);}}>Approve Concession Requests</button>
         <button onClick={() => {handleOnClick('37'); setShowDiv(false);}}>Approve Unassign Fee Requests</button>
         
         </div>
  
         <div className='divbutt'>
         <button onClick={() => {handleOnClick('38'); setShowDiv(false);}}>Fee Payment Change Request</button>
         <button onClick={() => {handleOnClick('39'); setShowDiv(false);}}>Approve Student Fee Refunds</button>
         
         
         </div> 
         
         <div className='divbutt'>
         <button onClick={() => {handleOnClick('40'); setShowDiv(false);}}>Approve Offline Payments</button>
         <button onClick={() => {handleOnClick('41'); setShowDiv(false);}}>Approve Branch Shuffling Requests</button>
         
         
        </div>
             
         
          </div>
  
       </div> 
          
          </div> 
        </>
      );
    }
  
    const CollectionReportMenu = () => {
      return(
        <>
         <div>
          {/* <div className='modal-wrapper'></div>   */}
       <div className="userContainer1">
       <div className='crossicon'> 
          <label>Collection Reports</label>
          <i class="fa-solid fa-xmark" style={{color:"#fff"}} onClick={closeAdmin}></i>
       </div>
        <div className='details'>
        <div className='divbutt'>
         <button onClick={() => {handleOnClick('42'); setShowDiv(false);}}>Fee Day Sheet</button>
         <button onClick={() => {handleOnClick('43'); setShowDiv(false);}}>Bank submission form</button>
         <button onClick={() => {handleOnClick('44'); setShowDiv(false);}}>Online Payments</button>
         <button onClick={() => {handleOnClick('45'); setShowDiv(false);}}>Receipt Book</button>
         <button onClick={() => {handleOnClick('46'); setShowDiv(false);}}>Fee head wise student list</button>
         <button onClick={() => {handleOnClick('47'); setShowDiv(false);}}>Fee collection Trends</button>

         </div>
  
         <div className='divbutt'>
         <button onClick={() => {handleOnClick('48'); setShowDiv(false);}}>Dishonoured Cheques</button>
         <button onClick={() => {handleOnClick('49'); setShowDiv(false);}}>Month wise fee reports</button>
         <button onClick={() => {handleOnClick('50'); setShowDiv(false);}}>Cheque Statement</button>
         <button onClick={() => {handleOnClick('51'); setShowDiv(false);}}>Advance Fee Paid Report</button>
         <button onClick={() => {handleOnClick('52'); setShowDiv(false);}}>Fee Balance Details</button>
         <button onClick={() => {handleOnClick('53'); setShowDiv(false);}}>Fee Transaction Summary</button>

       
         </div> 
         
         <div className='divbutt'>
         <button onClick={() => {handleOnClick('54'); setShowDiv(false);}}>Fee Ledger Report</button>
         <button onClick={() => {handleOnClick('55'); setShowDiv(false);}}>Fee Deposits Register</button>
         <button onClick={() => {handleOnClick('56'); setShowDiv(false);}}>Studetn wise Fee payments(Academic Year)</button>
         <button onClick={() => {handleOnClick('57'); setShowDiv(false);}}>Misc Fee Collection Details</button>
         <button onClick={() => {handleOnClick('58'); setShowDiv(false);}}>Other Fee Collection Details</button>
         <button onClick={() => {handleOnClick('59'); setShowDiv(false);}}>Fee Payments</button>

         
         </div> 
         
          </div>
  
       </div> 
          
          </div> 
        </>
      );
    }
  
    const DueReportMenu = () => {
      return(
        <>
         <div>
          {/*  <div className='modal-wrapper'></div>   */}
       <div className="userContainer1">
       <div className='crossicon'> 
          <label>Due Reports</label>
          <i class="fa-solid fa-xmark" style={{color:"#fff"}} onClick={closeAdmin}></i>
       </div>
        <div className='details'>
        <div className='divbutt'>
         <button onClick={() => {handleOnClick('60'); setShowDiv(false);}}>Class wisse due report</button>
         <button onClick={() => {handleOnClick('61'); setShowDiv(false);}}>Total Paid and due report</button>
         <button onClick={() => {handleOnClick('62'); setShowDiv(false);}}>Due Fee Details</button>
         <button onClick={() => {handleOnClick('63'); setShowDiv(false);}}>Branch wise due report</button>
         <button onClick={() => {handleOnClick('64'); setShowDiv(false);}}>Fee due report with scholarship</button>

         </div>
  
         <div className='divbutt'>
         <button onClick={() => {handleOnClick('65'); setShowDiv(false);}}>Fee Reminder Slip</button>
         <button onClick={() => {handleOnClick('66'); setShowDiv(false);}}>Fee Outstanding Report</button>
         <button onClick={() => {handleOnClick('67'); setShowDiv(false);}}>Misc Fee Due Details</button>
         <button onClick={() => {handleOnClick('68'); setShowDiv(false);}}>All years Fee due report</button>

       
         </div> 
         
         <div className='divbutt'>
         <button onClick={() => {handleOnClick('69'); setShowDiv(false);}}>Fee due students count</button>
         <button onClick={() => {handleOnClick('70'); setShowDiv(false);}}>Aging Due Report</button>
         <button onClick={() => {handleOnClick('71'); setShowDiv(false);}}>Batch wise Fee Due Report</button>
         <button onClick={() => {handleOnClick('72'); setShowDiv(false);}}>Month wise Dues Report</button>

         
         </div> 
        
         
          </div>
  
       </div> 
          
          </div> 
        </>
      );
    }
    

    const AuditReportsMenu = () => {
      return(
        <>
         <div>
          {/*  <div className='modal-wrapper'></div>   */}
       <div className="userContainer1">
       <div className='crossicon'> 
          <label>Audit Reports</label>
          <i class="fa-solid fa-xmark" style={{color:"#fff"}} onClick={closeAdmin}></i>
       </div>
        <div className='details'>
        <div className='divbutt'>
         <button onClick={() => {handleOnClick('73'); setShowDiv(false);}}>Current status of Previous month OS</button>
         <button onClick={() => {handleOnClick('74'); setShowDiv(false);}}>OS as at a particular Month</button>
         <button onClick={() => {handleOnClick('75'); setShowDiv(false);}}>Month wise Concession</button>
         <button onClick={() => {handleOnClick('76'); setShowDiv(false);}}>Cancelled Fee Payment</button>
         <button onClick={() => {handleOnClick('77'); setShowDiv(false);}}>Month wise consolidate report</button>
         <button onClick={() => {handleOnClick('78'); setShowDiv(false);}}>Fee Concessions Reports</button>


         </div>
  
         <div className='divbutt'>
         <button onClick={() => {handleOnClick('79'); setShowDiv(false);}}>Fee Plan details report</button>
         <button onClick={() => {handleOnClick('80'); setShowDiv(false);}}>Fee Transaction Summary</button>
         <button onClick={() => {handleOnClick('81'); setShowDiv(false);}}>Inactive Students</button>
         <button onClick={() => {handleOnClick('82'); setShowDiv(false);}}>Total Paid and due report</button>
         <button onClick={() => {handleOnClick('83'); setShowDiv(false);}}>Pre-admission Details</button>


       
         </div> 
         
         <div className='divbutt'>
         <button onClick={() => {handleOnClick('84'); setShowDiv(false);}}>AY Collections Report</button>
         <button onClick={() => {handleOnClick('85'); setShowDiv(false);}}>Consolidated Misc Fee Details</button>
         <button onClick={() => {handleOnClick('86'); setShowDiv(false);}}>Admission Detaisl Report</button>
         <button onClick={() => {handleOnClick('87'); setShowDiv(false);}}>Consolidated Monthwise OS Report</button>
         <button onClick={() => {handleOnClick('88'); setShowDiv(false);}}>Monthwise Student strength</button>


         
         </div> 
        
         
          </div>
  
       </div> 
          
          </div> 
        </>
      );
    }
    
   
    const ScholarshipMenu  = () => {
      return(
        <>
         <div>
          {/*  <div className='modal-wrapper'></div>   */}
       <div className="userContainer1">
       <div className='crossicon'> 
          <label>scholarship</label>
          <i class="fa-solid fa-xmark" style={{color:"#fff"}} onClick={closeAdmin}></i>
       </div>
        <div className='details'>
        <div className='divbutt'>
         <button onClick={() => {handleOnClick('89'); setShowDiv(false);}}>Assign Scholarship to Students</button>
        

         </div>
  
         <div className='divbutt'>
         <button onClick={() => {handleOnClick('90'); setShowDiv(false);}}>Scholarship Details Report</button>
         
       
         </div> 
        
         
          </div>
  
       </div> 
          
          </div> 
        </>
      );
    }
    

    const LogMenu = () => {
      return(
        <>
         <div>
          {/*  <div className='modal-wrapper'></div>   */}
       <div className="userContainer1">
       <div className='crossicon'> 
          <label>Log</label>
          <i class="fa-solid fa-xmark" style={{color:"#fff"}} onClick={closeAdmin}></i>
       </div>
        <div className='details'>
        <div className='divbutt'>
         <button onClick={() => {handleOnClick('91'); setShowDiv(false);}}>Fee Unassign/Change Request Report</button>
         <button onClick={() => {handleOnClick('92'); setShowDiv(false);}}>Student Due Date Change Log</button>
         

         </div>
  
         <div className='divbutt'>
         <button onClick={() => {handleOnClick('93'); setShowDiv(false);}}>Fee Edit Details Report</button>
        
       
         </div> 
         
         <div className='divbutt'>
         <button onClick={() => {handleOnClick('94'); setShowDiv(false);}}>Fine Amount Modification Report</button>

         
         </div> 
        
         
          </div>
  
       </div> 
          
          </div> 
        </>
      );
    }

    const ReportsMenu = () => {
      return(
        <>
         <div>
          {/*  <div className='modal-wrapper'></div>   */}
       <div className="userContainer1">
       <div className='crossicon'> 
          <label>Reports</label>
          <i class="fa-solid fa-xmark" style={{color:"#fff"}} onClick={closeAdmin}></i>
       </div>
        <div className='details'>
        <div className='divbutt'>
         <button onClick={() => {setShowDiv(false);}}>Fee Concession Report</button>
         <button>Tally Report</button>
         <button>Student Projection Report</button>
         <button>Card Swipe Charges Report</button>
         <button>Last Year Due Report(Promoted Students)</button>
         <button>Offline Payments</button>
         <button>Date wise financial year collections</button>
         <button>Collection Follow up Report</button>
         <button>Finance Reports NEW!</button>


         </div>
  
         <div className='divbutt'>
         <button>Fine Amount Details Report</button>
         <button>Cheque Bounce Report</button>
         <button>Date wise Monthly payments</button>
         <button>ECS Report & Parent Bank Account Details</button>
         <button>Ledger Transaction Report</button>


       
         </div>
        
         
          </div>
  
       </div> 
          
          </div> 
        </>
      );
    }
  
  
  
    const Financedash = () => {
      return(
        <>
        <div className='divbutton'>
         <button  key={"1"} className={active === "1" ? "active" : "inactive"} id={"1"}
         onClick={(e) => {handleClick(e);setCollection(!collection);setDues(false);setReveivables(false);setConcessions(false);setDueprojection(false); setTracker(false); setStrength(false);}}>Collections</button>
         
         <button key={"2"} className={active === "2" ? "active" : "inactive"} id={"2"}
         onClick={(e) => {handleClick(e);setDues(!dues);setCollection(false);setReveivables(false);setConcessions(false);setDueprojection(false); setTracker(false); setStrength(false);}}>Dues</button>
        
         <button key={"3"} className={active === "3" ? "active" : "inactive"} id={"3"}
          onClick={(e) =>{handleClick(e); setReveivables(!receivables); setCollection(false);setDues(false);setConcessions(false);setDueprojection(false); setTracker(false); setStrength(false);}}>Receivables</button>
         
         <button key={"4"} className={active === "4" ? "active" : "inactive"} id={"4"} 
         onClick={(e) => {handleClick(e);setConcessions(!concessions);setCollection(false);setDues(false);setReveivables(false);setDueprojection(false); setTracker(false); setStrength(false);}} >Concessions</button>
        
         <button  key={"5"} className={active === "5" ? "active" : "inactive"} id={"5"}
         onClick={(e) => {handleClick(e);setDueprojection(!dueprojection);setCollection(false);setDues(false);setReveivables(false);setConcessions(false);setTracker(false); setStrength(false);}}>Dues Projection</button>
         
         <button key={"6"} className={active === "6" ? "active" : "inactive"} id={"6"}
         onClick={(e) => {handleClick(e);setTracker(!tracker);setCollection(false);setDues(false);setReveivables(false);setConcessions(false);setDueprojection(false);setStrength(false);}}>Collection Tracker</button>

        <button key={"7"} className={active === "7" ? "active" : "inactive"} id={"7"}
          onClick={(e) => {handleClick(e);}}>Student Strength</button>
         
         </div>
         <div className='dashmain1'> 
        { collection && <Collection/>}
        { dues && <Dues />}
        { receivables && <Receivables />}
        { concessions && <Concessions />}
        { dueprojection && <DueProjection />}
        { tracker && <Tracker />}
        { strength && <Strength />}

         </div>
  
        </>
      );
    }
  
  
  
  
  
    return (
      <>
         <div className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSBhr "} onClick={() => setClick(false)}>
              
              <li onMouseEnter={() => handleMouseEnter('1')} onMouseLeave={handleMouseLeave}>Fee Management</li>  
              <li onMouseEnter={() => handleMouseEnter('2')} onMouseLeave={handleMouseLeave}>Collections </li> 
              <li onMouseEnter={() => handleMouseEnter('3')}>Approvals</li>
              <li onMouseEnter={() => handleMouseEnter('4')}>Collection Reports</li>
              <li onMouseEnter={() => handleMouseEnter('5')}>Due Reports</li>
              <li onMouseEnter={() => handleMouseEnter('6')}>Audit Reports</li>
              <li onMouseEnter={() => handleMouseEnter('7')}>scholarship</li>
              <li onMouseEnter={() => handleMouseEnter('8')}>Log</li>
              <li onMouseEnter={() => handleMouseEnter('9')}>Reports</li>


              </ul>
              {showDiv === '1' && <FeeManagementMenu />}
              {showDiv === '2' && <CollectionsMenu />}
              {showDiv === '3' && <ApprovalsMenu />}
              {showDiv === '4' && <CollectionReportMenu />}
              {showDiv === '5' && <DueReportMenu />}
              {showDiv === '6' && <AuditReportsMenu />}
              {showDiv === '7' && <ScholarshipMenu />}
              {showDiv === '8' && <LogMenu />}
              {showDiv === '9' && <ReportsMenu />}


         </div>
  
         <div className='dashmain'>
         { financedash && <Financedash />}

         {showFinancePage === '1' && <ManageFeePlans/>}
         {showFinancePage === '7' && <FeeReceivablesReports/>}
         {showFinancePage === '13' && <ApplyForStudentBulkFeeRefund/>}
         {showFinancePage === '2' && <AssignFeeToStudents/>}
         {showFinancePage === '3' && <ManageFeeConcessions/>}
         {showFinancePage === '4' && <FineManagement/>}
         {showFinancePage === '19' && <MakePayment/>}
         {showFinancePage === '25' && <BranchOtherFeeCollection/>}
        {showFinancePage === '31' && <ApplicationFeeEntry/>}
        {showFinancePage === '36' && <ApproveConcessionRequests/>}
         {showFinancePage === '38' && <FeePaymentChangeRequest/>}
         {showFinancePage === '42' && <FeeDaySheet/>}
         {showFinancePage === '48' && <DishonouredCheques/>}
         {showFinancePage === '54' && <FeeLedgerReport/>}
         {showFinancePage === '60' && <ClassWiseDueReport />}
  

         {showFinancePage === '69' && <FeeDueStudentCount />}
        {showFinancePage === '73' && <CurrentStatusOFPreviousMonthOS/>}
         {showFinancePage === '79' && <FeePlanDetailsReport />}
         {showFinancePage === '92' && <StudentDueDateChangeLog/>}
         {showFinancePage === '93' && <FeeEditDetailsReport />}
         {showFinancePage === '94' && <FineAmountModificationReport />}
        {showFinancePage === '39' && <ApproveStudentFeeRefunds />}
       {showFinancePage === '40' && <ApproveOfflinePayments/>}
       {showFinancePage === '90' && <ScholarshipDetailsReport />}
       {showFinancePage === '5' && <MiscFeeAssignUnassign />}
       {showFinancePage === '6' && <ManageFeeInvoiceChallan />}
       {showFinancePage === '8' && <AssignMiscFeeGroupToStudents/>}
       {showFinancePage === '9' && <ManageLastYearDues />}
       {showFinancePage === '10' && <AssignTransportFee />}
       {showFinancePage === '12' && <EditDueDates />}
       {/* {showFinancePage === '14' && <DueDepartments />} */}
         </div>
          
      </>
    )
  }
  

export default Finance;