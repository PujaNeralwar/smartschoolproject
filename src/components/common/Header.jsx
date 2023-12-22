
import "./Header.css";
import { useState } from 'react';


const Header = () => {
    const [click, setClick] = useState(false)
    
  
  return (
    <>
        
        <header>
        <section className='head'>
        <div className='container flexSB'>
          <div className='logo1'>
            <h1>SMART SCHOOL</h1>
            
          </div>

          <div className='social'>
          <label className='colr1'>Under Implementation Track Progress</label>
          <label className='colr2'>Get Help <i class="fa-solid fa-chevron-down"></i></label>
          <label>AY: 2023-2024</label>
          <i class="fa-solid fa-house icon"></i>
          <i class="fa-solid fa-bell icon"></i>
          <i class="fa-solid fa-magnifying-glass icon"></i>
          <i class="fa-solid fa-border-all icon"></i>
          <i class="fa-solid fa-image-portrait fa-beat fa-lg icon"></i>  
          </div>
        </div>
      

            
            </section>
        </header>
         
                
    </>
  )
}



export default Header;