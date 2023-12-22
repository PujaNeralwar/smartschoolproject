import React from 'react'
import "./SIS.css"

const StudentProfilecard = () => {
  return (
    <> <div className="SDheading"><span>SIS </span><label> / Enrollement / Student Profile Card </label> </div>
    <div className='std-prf-top3'>
    <h3 className='std-prof-h3'> Student Profile Cards</h3>
        <p className='std-prof-p'> Student Profile Cards can be printed, share with the parent of checking the data, and collection the requiredcorrections.</p>

             
       </div>
    <div  className="SDashboard std-pf">

        <div className='std-prf-ca'>
    <div className='bank-details'>
            <p className='label-1'>Class</p>
            <select className='dropdown-toggle1'>
           
               <option>-Select Class-</option>
                  <option>1 YEAR MPC-IIT</option>
                  <option>2 YEAR MPC-IIT</option>
                  <option>1 YEAR MPC-GENERAL</option>
                  <option>2 YEAR MPC-GENERAL</option>
                  <option>1 YEAR BPC-NEET</option>
                  <option>2 YEAR BPC-NEET</option>
                  <option>1 YEAR BPC-GENERAL</option>
                  <option>2 YEAR BPC-GENERAL</option>
                  <option>1 YEAR MEC</option>
                  <option>2 YEAR MEC</option>
                  <option>1 YEAR CEC</option>
                  <option>2 YEAR CEC</option>
                  <option>LNO (NEET)</option>
                  <option>LNO (IIT)</option>
        
        </select>
        </div>

        <div>
            <p className='label-1'>All student</p>
            <select  className='std-prf-card-select'>
                <option value="0"> All Students </option><option value="24510">SYED ZAINUL ABIDEEN (23EES0021)</option><option value="24521">MOHAMMED MUNAWWER KHAN (23EES0032)</option><option value="24528">MOHAMMED AZHARUDDIN ANSARI (23EES0039)</option><option value="24530">SHAIK MOHAMMED ANAS (23EES0041)</option><option value="24555">SYED RAFAY AHMED (23EES0066)</option><option value="24556">SYED AMAN HASHAM AHMED (23EES0067)</option><option value="24558">SYED YASEEN MUZAMMIL (23EES0069)</option><option value="24567">MOHD NUMAN QURESHI (23EES0078)</option><option value="24579">MOHAMMED REHAN (23EES0090)</option><option value="24586">MOHAMMED OWAIS KHAN (23EES0097)</option><option value="24588">SYED AQEEB (23EES0099)</option><option value="24606">MOHAMMED ABDUL SABEE (23EES0117)</option><option value="24614">MD KAREEM UDDIN (23EES0125)</option><option value="24624">JAWWAD AHMED (23EES0135)</option><option value="24629">MD NABEEL ANSARI (23EES0140)</option><option value="24645">SHAIK ANAS AHMED (23EES0156)</option><option value="24651">MOHD ABDUL URMAN (23EES0162)</option><option value="24652">MOHAMMED ANAS (23EES0163)</option><option value="24658">MOHAMMED ABDUL RAHMAN ALI (23EES0169)</option><option value="24665">SHAIK MOHAMMAD KAIF (23EES0176)</option><option value="24671">MOHAMMED JUNAID AHMED (23EES0182)</option><option value="24688">MIRZA NAYYAR BAIG (23EES0199)</option><option value="24693">MOHAMMED MUSTAFA JUNAID (23EES0204)</option><option value="24701">MOHAMMED SAAD (23EES0212)</option><option value="24705">MOHAMMAD HAMMAD ALI SHUJAH (23EES0216)</option><option value="24708">MOHAMMED MUSSAQQAB (23EES0219)</option><option value="24710">SHAIK HUZEFA YAMAN (23EES0221)</option><option value="24713">MIRZA ANAS BAIG (23EES0224)</option><option value="24723">MOHAMMED ATIF (23EES0234)</option><option value="24728">SYED ANAS AHMED (23EES0239)</option><option value="24745">MOHAMMED ABRAR AHMED (23EES0256)</option><option value="24747">MOHAMMAD BASHEER (23EES0258)</option><option value="24751">SHAIK ADIL UDDIN (23EES0262)</option><option value="24772">SYED ANAS ALI (23EES0283)</option><option value="24789">MOHD ABDUL SUFIYAN SIDDQUE (23EES0300)</option><option value="24796">MOHAMMED ATAUL MOIN RAUFI (23EES0307)</option><option value="24798">SHAIK SHAZAB (23EES0309)</option>
                </select>
        </div>

        <button className='btn btn-primary get'>Get</button>
        </div>


    </div>
    </>
  )
}

export default StudentProfilecard;