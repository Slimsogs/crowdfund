import heroDesktop from './images/heroDesktop.jpg';
import heroMobile from './images/heroMobile.jpg';
import hamburger from './images/hamburger.svg';


const Nav = ({handleModal1Click, open}) => {
    return(
        
        <div className={`nav ${open ? 'nav-active' : '' }`}>
                <picture className='photo'>
                    <source srcSet= {heroDesktop}
                    media='(min-width:600px)' id='desk'
                    />
                    <img src= {heroMobile} alt="" id='mobile'/>
                </picture>
                <div className="navCon">
                    <input type="checkbox" id='check' />
                    <label for ="check" className={`checkbtn ${open ? 'checkbtn-active' : '' }`} onClick={handleModal1Click}>
                        <img src= {hamburger} alt="" />
                    </label>
                    <label className="logo"> crowdfund </label>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Discover</a></li>
                        <li><a href="#">Get Started</a></li>

                    </ul>
                    
                </div>
            
        </div>
        
    )
}
export default Nav