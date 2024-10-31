import { Link } from 'react-router-dom'
import './Navbar.css'
import RightDrawerMenu from '../RightDrawerMenu/RightDrawerMenu'
import sambhram_logo from '../../assets/sambhram_logo.png'

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="navbar-left"> 
                    <Link to='/'><img src={sambhram_logo} alt="" /></Link>                   
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