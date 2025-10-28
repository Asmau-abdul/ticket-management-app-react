import { useNavigate, NavLink } from "react-router-dom";
import '../styles/Nav.scss'

const NavBar = () => {
    return ( 
        <>
            <div>
                <nav>
                    <ul>
                        <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
                        <li><NavLink to={'/ticketManagement'}>Ticket Management</NavLink></li>
                        <li><NavLink to={'/'} onClick={() => window.localStorage.clear()} className={'logout'}>Logout</NavLink></li>
                    </ul>
                </nav>
            </div>
        </>
     );
}
 
export default NavBar;