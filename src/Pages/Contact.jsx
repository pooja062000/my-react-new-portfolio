import { NavLink } from "react-router-dom"

function Contact(){
    return(
        <>
      <div className="contact-main-row">
        <div className="contact-colum">
            <h1>CONTACT US</h1>
            <div className="contact-box-col">
                <div className="contact-box1">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <div className="link-email">
                  <NavLink to="poojamittal.in">poojamittal.in</NavLink>
                </div>
                </div>
                
                <div className="contact-box2">
                <i class="fa fa-phone" aria-hidden="true"> </i>
                    <div className="phone-no">+9306314660</div>
               
                </div>
                
                <div className="contact-box3">
                <i class="fa fa-location-arrow" aria-hidden="true"></i>
    
                  
                <div className="phone-no">Kosli, Rewari, India</div>  
              
                </div>
            </div>
        </div>
      </div>

      
      <div className="map-row">
        <div className="map-colum">
        <iframe title='map1' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28130.17984081895!2d76.599375617753!3d28.19903295783612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d50719ae37551%3A0xe4c45afc4faedcee!2sRewari%2C%20Haryana%20123401!5e0!3m2!1sen!2sin!4v1686471422172!5m2!1sen!2sin" width="100%" height="495" allowfullscreen=""
         loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      </>
    )
}

export default Contact