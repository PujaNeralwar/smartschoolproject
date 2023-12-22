import React from 'react';
import '../Finance/FinanceStyle.css';

const Collection = () => {
  return (
    <>
         
          <div  className='subdiv'>
            < div className='firstdiv'>
               <label>Day Fee Collections</label>
                <button className='btn1 '>Today</button>
                <button className='btn1'>Collections (7 Days)</button>
                <button className='btn1'>FY Collections</button>
                <button className='btn1'>FY Advances</button>
                <button className='btn1'>FY Refundable Security Deposits</button>
                <button className='btn2'>Online Payment Gateways</button>
                <button className='btn1'>New Payment Gateways Help ?</button>
                
            </div>
                
                    <div className='thirdiv'>
                      <table className='coltab'>
                        <tr>
                          <td>Collection Account</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>Total</td>
                          
                        </tr>
                        <tr>
                          <td>Grand Total</td>
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
                      
                    </div>
          </div>

          <div className='subdiv'>
          <div div className='firstdiv'>
               <label>Fee Collection Trend(FY:2023-24)</label>
            <select className='colSelect'>
                <option>Ethiken Educational Society</option>
            </select>
           </div>
           <div className='thirdiv'>
                      <table>
                        <tr>
                          <td>Academic Year</td>
                          <td>Type of Fee</td>
                          <td>Total</td>
                          <td>Apr-2023</td>
                          <td>May-2023</td>
                          <td>Jun-2023</td>
                          <td>Jul-2023</td>
                          <td>Aug-2023</td>
                          <td>Sep-2023</td>
                          
                        </tr>
                        <tr>
                          <td>2023-2024</td>
                          <td>Regular Fees</td>
                          <td>10309500.00</td>
                          <td>80000.00</td>
                          <td>1571500.00</td>
                          <td>2127500.00</td>
                          <td>3611000.00</td>
                          <td>2748500.00</td>
                          <td>171000.00</td>
                          
                        </tr>
                        <tr>
                          <td colSpan={2}>Grand Total</td>
                          <td>10309500.00</td>
                          <td>80000.00</td>
                          <td>1571500.00</td>
                          <td>2127500.00</td>
                          <td>3611000.00</td>
                          <td>2748500.00</td>
                          <td>171000.00</td>
                          
                        </tr>
                       
                      </table>
                      
                    </div>

          </div>

          <div className='subdiv'>

          </div>


      </>
   
  )
}

export default Collection;