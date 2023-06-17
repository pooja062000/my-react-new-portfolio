import { NavLink } from "react-router-dom"

function Header(){
    return(
        <>
        
        <div className="header-row">

            <div className="logo">Pooja Mittal</div>
            <div className="navbarr">
       <NavLink to="/" className='hello'>Home</NavLink>
        <NavLink to="/about" className='hello'>About</NavLink>
        <NavLink to="/skills" className='hello'>Skills</NavLink>
        <NavLink to="/projects" className='hello'> Projects</NavLink>
            <NavLink to="/contact" className='hello'>Contact</NavLink>
            </div>
        </div>
     
        </>
    )
}

export default Header