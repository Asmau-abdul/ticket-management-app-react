import { useNavigate, Link, NavLink } from "react-router-dom";
import NavBar from "../components/Nav.jsx";
import '../styles/Dashboard.scss'

const TicketManagement = () => {

    const navigate = useNavigate()
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))

    let count = 0
    let sold = 0

    if(!currentUser) navigate('/')

    return ( 
        <>
            <div className="dashboard">
                <div className="navBar">
                    <h2>Welcome back, Asmau! &#128075;</h2>
                    <NavBar/>
                </div>
                <div className="ticket">
                    <div className="ticketHeading">
                        <h1>Event Management</h1>
                        <p>Manage all your events</p>
                    </div>
                    <div className="eventTicketList">
                        <div className="eventTicket">
                            <div>
                                <h2>Summer Music Festival</h2>
                                <p>&#128197;  November 15, 2025</p>
                                <p>&#128205; Central Park, Abuja</p>
                                <p>&#127903; 120/500 tickets sold</p>
                                <h3>&#x20A6;5,000</h3>
                            </div>

                            <div>
                                <p className="status">On Sale</p>
                            </div>
                            <div>
                                <button className="edit">Edit</button>
                                <button className="delete">Delete</button>
                            </div>
                        </div>
                        <div className="eventTicket">
                            <div>
                                <h2>Tech Conference 2025</h2>
                                <p>&#128197;  October 28, 2025</p>
                                <p>&#128205; Eko Hotel, V.I</p>
                                <p>&#127903; 300/3000 tickets sold</p>
                                <h3>&#x20A6;15,000</h3>
                            </div>
                            <div>
                                <p className="status">Happening</p>
                            </div>
                            <div>
                                <button className="edit">Edit</button>
                                <button className="delete">Delete</button>
                            </div>
                        </div>
                        <div className="eventTicket">
                            <div>
                                <h2>Food & Wine Expo</h2>
                                <p>&#128197;  September 20, 2025</p>
                                <p>&#128205; Kwali Arts Center, Abuja</p>
                                <p>&#127903; 450/500 tickets sold</p>
                                <h3>&#x20A6;8,000</h3>
                            </div>
                            <div>
                                <p className="status">Ended</p>
                            </div>
                            <div>
                                <button className="edit">Edit</button>
                                <button className="delete">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default TicketManagement;