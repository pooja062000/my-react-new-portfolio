

import countdown from '../Assets/Images/countimer.png'
import dev from '../Assets/Images/developer.png'
import subcribe from '../Assets/Images/sub.png'
import wheather from '../Assets/Images/wheat.jpg'
import digital from '../Assets/Images/clock.png'
import slider from '../Assets/Images/slick.jpg'
import ice from '../Assets/Images/zamto.jpg'
import laptop from '../Assets/Images/laptop1.jpg'
import shirst from '../Assets/Images/shir.png'
import {NavLink} from "react-router-dom";

function Projects(){
    return(
        <>
        <div className='project-main-row'>
            <div className='project-col'>
                <h2 className="proj-heading">Portfolio</h2>
                <h3 className="proj-head2">Let's See My Work</h3>
                <div className='project-border-main'>
            <div className='project-border'></div>
            <div className='project-border1'></div>
            <div className='project-border1'></div>
            <div className='project-border2'></div>
                </div>
                <div className='project-final-box'>
                    <div className='project-box1'>
                  
                       <img src={countdown} alt='countdown' className='my-img1'/>
                       
                       <p  className='dev1'>Countdown Timer</p>
                       <NavLink to="https://profound-gelato-3f7008.netlify.app" className='gitlink1' target='blank'>SEE MORE</NavLink>
                    
 					
                    </div>
                    <div className='project-box1'>
                        <img src={dev} alt='dev' className='my-img1'/>
                        
                  <p  className='dev1'>Developer</p>
                       <NavLink to="https://github.com/pooja062000/developer" className='gitlink1' target='blank'>SEE MORE</NavLink>
                    </div>
                    <div className='project-box1'>
                        <img src={subcribe} alt='subcribe' className='my-img1'/>
                        
                       <p  className='dev1'>Subscription</p>
                       <NavLink to="https://github.com/pooja062000/subscription" className='gitlink1' target='blank'>SEE MORE</NavLink>
                    </div>
                    <div className='project-box1'>
                    <img src={wheather} alt='wheather' className='my-img1'/>
                    <p  className='dev1'>Wheater-app</p>
                       <NavLink to="https://github.com/pooja062000/wheater-app" className='gitlink1' target='blank'>SEE MORE</NavLink>
                </div>
                    <div className='project-box1'>
                        <img src={digital} alt='digital' className='my-img1'/>
                    <p  className='dev1'>Digital-clock</p>
                       <NavLink to="https://github.com/pooja062000/javascript-digital-clock" className='gitlink1' target='blank'>SEE MORE</NavLink>
                    </div>
                    <div className='project-box1'>
                    <img src={slider} alt='slider' className='my-img1' />    
                    
                    <p  className='dev1'>Slick-slider</p>
                       <NavLink to="https://github.com/pooja062000/slick-carousal"className='gitlink1' target='blank'>SEE MORE</NavLink>
                    </div>
                    <div className='project-box1'>
                    <img src={ice} alt='ice' className='my-img1' />
                    
                    <p  className='dev1'>Zomato</p>
                       <NavLink to="https://github.com/pooja062000/single-page-zomato"className='gitlink1' target='blank'>SEE MORE</NavLink>
                </div>
                    <div className='project-box1'>
                        <img src={laptop} alt='laptop' className='my-img1' />
                        
                    <p  className='dev1'>My Portfolio</p>
                       <NavLink to="https://github.com/pooja062000/My-portfolio"className='gitlink1' target='blank'>SEE MORE</NavLink>
                    </div>
                    <div className='project-box1'>
                    <img  src={shirst} alt='shirst' className='my-img1' />
                    
                    <p  className='dev1'>Product-list</p>
                       <NavLink to="https://github.com/pooja062000/Product-List1"className='gitlink1' target='blank'>SEE MORE</NavLink>   
                    </div>  
  
                </div>

                
        </div>
        </div>
        </>
    )
}

export default Projects