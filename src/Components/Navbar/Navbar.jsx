import { Link } from 'react-router-dom'
import './Navbar.css'
import RightDrawerMenu from '../RightDrawerMenu/RightDrawerMenu'

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="navbar-left"> 
                    <Link to='/'><h1 >logo</h1></Link>                   
                </div>
                <div className="navbar-right">
                    {/* <Link to='/register'><button>Register</button></Link> */}
                    <RightDrawerMenu/>
                </div>
            </div>

        </>
    )
}

export default Navbar