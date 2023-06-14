import { NavLink } from 'react-router-dom'
import blogimg from '../Assets/Images/blo1.jpg'
import blogimg2 from '../Assets/Images/blo2.jpg'
import blogimg3 from '../Assets/Images/blo3.jpg'

function About(){
    return(

        <>
        <div className='about-row'>
            <div className="about-main-colum">
                <div className='about-box1'>
                  <h2>Expert Web Developer & Designer</h2>
                    <h1>About Me</h1>
                    <div className='about-boder'></div>
                    <p className='about-text'>Hi! I'm Pooja Mittal, a passionate and innovative web developer with 2021 years of 
                    experience in the industry.  I thrive on turning complex ideas into user-friendly and visually appealing websites
                    that leave a lasting impression. With a solid foundation in front-end development, I excel in HTML, CSS, and JavaScript,
                    creating seamless and responsive designs that adapt to different devices and screen sizes.I take pride in writing clean and efficient code, optimizing performance,
                     and ensuring a smooth user experience.  I create successful websites that are fast, easy to use, and built with best practices.
                    </p>
               <div className='educat'>My Education</div>
                    <div className='educ'>Degree: B.Sc</div>
                    <div className='educ1'>Email : poojawebdeveloper2023@gmail.com</div>

                    <button className='butt1'>DOWNLOAD CV</button>
                </div>

                <div className='about-box2'>
                    
                <div className='imgabout'></div>
                </div>
            </div>
        </div>

        <div className='testmonial-row'>
            
          <div className='testmonial-main-col'>
            <div className='testm-heading'>TESTIMONIAL</div>
            <div className='custor'>Customer’s Stories</div>
            <div className='testm-border-main'>
            <div className='testm-border'></div>
            <div className='testm-border1'></div>
            <div className='testm-border1'></div>
            <div className='testmo-border2'></div>
            </div>
            <div className='clients-main-col'>
              <div className='clients-box1'>
                
                <h1>Clients</h1>
                <p className='clients-text'>I have had the opportunity to work with Pooja on several projects and 
                  I have been thoroughly impressed with their dedication and passion for the field.</p>
              </div>
              <div className='clients-box2'>
                
              <div className='clients-color'></div>
                <h1>Clients</h1>
                
                <p className='clients-text'>I have had the opportunity to work with Pooja on several projects and 
                  I have been thoroughly impressed with their dedication and passion for the field.</p>
              </div>
              </div>
              <button className='clients-button'>Let's work together</button>
              </div>
            </div>
            <div className="blogs-row-main">
              <h2>Blogs</h2>
              <h4>Let's See My Work</h4>
              <div className='blog-border-main'>
            <div className='blog-border'></div>
            <div className='blog-border1'></div>
            <div className='blog-border1'></div>
            <div className='blog-border2'></div>
            </div>
              <div className="my-bolgs-colum">
                <div className="blogs-box1">
                  <img src={blogimg} alt="blogimg" className='bloimg1'/>
                  
                  <NavLink to="https://techcrunch.com/" className="design-blog2">What has happened  to all of the Design ideas</NavLink>
            
                <h3>October 15th, 2022</h3>
                </div>
               
                <div className="blogs-box2">
                <img src={blogimg2} alt="blogimg2" className='bloimg1'/>
        
               <NavLink to="https://www.itproportal.com/" className="design-blog2">The  Best Sale Marketer Of The Next Year</NavLink>
               
                <h3>November 18th, 2022</h3>
                </div>
                <div className="blogs-box3">
                  
                <img src={blogimg3} alt="blogimg3" className='bloimg1'/>
               
               <NavLink to="https://www.itproportal.com/" className="design-blog2">What gets in the way of the greate Stategy</NavLink>
            
               <h3>November 25th, 2022</h3>
                </div>
                
              </div>
              </div>
      
        </>
    )
}

export default About