
import resume from '../Assets/pooja-resume.pdf'

function About(){
    return(

        <>
        <div className='about-row'>
            <div className="about-main-colum">
                <div className='about-box1'>
                  <h2 className="about-heading">Expert Web Developer & Designer</h2>
                    <h1 className='about-textin'>About Me</h1>
                    <div className='about-boder'></div>
                    <p className='about-text'>Hello! My name is Pooja Mittal, and I am an enthusiastic and innovative web developer with over 2021 years of experience in the industry. I am truly passionate about my work and take great pride in my ability to transform complex ideas into user-friendly and visually stunning websites that leave a lasting impression on users.

        My expertise lies in front-end development, where I have honed my skills in HTML, CSS, JavaScript, Jquery, React.js, Sass, Git, Github and Bootstrap. These powerful tools allow me to create seamless and responsive designs that adapt effortlessly to various devices and screen sizes, ensuring an optimal user experience across the board.
        <a href="https://www.sundayschool.co.in/" className="sunday" target="blank">Sunday School</a>
                    </p>
               <div className='educat'>My Education</div>
                    <div className='educ'>Degree: B.C.A</div>
                    <div className='educ1'>Email : poojawebdeveloper2023@gmail.com</div>

                    {/*<button className='butt1'>DOWNLOAD CV</button>*/}
                    <a href={resume} className='butt1'>Download Resume</a>
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
                <p className='clients-text'>As a project manager overseeing multiple web development initiatives, I had the pleasure of working with Pooja on a critical project, and I am
                 thrilled to provide this testimonial for their outstanding work. - Neha Yadav</p>
              </div>
              <div className='clients-box2'>
                
              <div className='clients-color'></div>
                <h1>Clients</h1>
                
                <p className='clients-text'>Pooja is an exceptionally talented and skilled frontend developer. From the moment they joined our team, it was evident that they possess an in-depth understanding of modern web technologies and a keen eye for design aesthetics. -Dinesh Kumar</p>
              </div>
              </div>
              </div>
            </div>
           
      
        </>
    )
}

export default About