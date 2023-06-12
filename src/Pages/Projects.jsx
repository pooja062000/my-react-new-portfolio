import countdown from '../Assets/Images/countimer.png'
import dev from '../Assets/Images/developer.png'
import subcribe from '../Assets/Images/sub.png'
import wheather from '../Assets/Images/wheat.jpg'
import digital from '../Assets/Images/clock.png'
import slider from '../Assets/Images/slick.jpg'
import ice from '../Assets/Images/zamto.jpg'
import laptop from '../Assets/Images/laptop1.jpg'
import shirst from '../Assets/Images/shir.png'
function Projects(){
    return(
        <>
        <div className='project-main-row'>
            <div className='project-col'>
                <h2>Portfolio</h2>
                <h3>Let's See My Work</h3>
                <div className='project-border-main'>
            <div className='project-border'></div>
            <div className='project-border1'></div>
            <div className='project-border1'></div>
            <div className='project-border2'></div>
                </div>
                <div className='project-final-box'>
                    <div className='project-box1'>
                  
                       <img src={countdown} alt='countdown' className='my-img1'/>
                 
                    </div>
                    <div className='project-box2'>
                        <img src={dev} alt='dev' className='my-img2'/>
                    </div>
                    <div className='project-box3'>
                        <img src={subcribe} alt='subcribe' className='my-img3'/>
                    </div>
                </div>

                <div className='project-colum2'>
                <div className='project-box4'>
                    <img src={wheather} alt='wheather' className='my-img4'/>
                </div>
                    <div className='project-box5'>
                        <img src={digital} alt='digital' className='my-img5'/>
                    </div>
                    <div className='project-box6'>
                    <img src={slider} alt='slider' className='my-img6' />    
                    </div>  
                </div>
                
                <div className='project-colum3'>
                    
                <div className='project-box7'>
                    <img src={ice} alt='ice' className='my-img7' />
                </div>
                    <div className='project-box8'>
                        <img src={laptop} alt='laptop' className='my-img8' />
                    </div>
                    <div className='project-box9'>
                    <img  src={shirst} alt='shirst' className='my-img9' />   
                    </div>  
                    </div>

            </div>
        </div>
        </>
    )
}

export default Projects