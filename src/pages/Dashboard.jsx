import { useNavigate, Link, NavLink } from "react-router-dom";
import '../styles/Dashboard.scss'
import NavBar from "../components/Nav.jsx";
import { useState } from "react";

const Dashboard = () => {
    const navigate = useNavigate()
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    // const [active, setActive] = useState(0)
    // const [sold, setSold] = useState()
    let count = 0
    let sold = 0

    if(!currentUser) navigate('/')

    currentUser.events.forEach((event) => {
        console.log(event.status)
        if(event.status == 'open'){
            count += 1
        }

        sold += event.ticketsSold

    })

    
    console.log(currentUser)
    return ( 
        <>
            <div className="dashboard">
                <div className="navBar">
                    <h2>Welcome back, Asmau! &#128075;</h2>
                    <NavBar/>
                </div>
                <div className="dashboardEvents">
                    <div className="events">
                        <h1>{currentUser.events.length}</h1>
                        <p>Total Events</p>
                    </div>
                    <div className="events">
                        <h1>{count}</h1>
                        <p>Active Events</p>
                    </div>
                    <div className="events">
                        <h1>{sold}</h1>
                        <p>Tickets Sold</p>
                    </div>
                </div>
                <div className="newEvent">
                    <Link to={'/newEvent'}>
                            + Create New Event
                    </Link>
                </div>
            </div>
        </>
     );
}
 
export default Dashboard;