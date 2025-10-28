import Hero from '../components/Hero';
import '../styles/LandingPage.scss'
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

    const navigate = useNavigate()

    const login = () => {
        console.log('first')
        navigate('/login')
    }
    return ( 
        <>
            <div className='logo'>
                <h1 className='logo-name'>EventSnap</h1>
                <Hero/>
                {/* <div className='container'>
                    <div className='main'>
                    </div>
                </div> */}

                <div className='features'>
                    <h2>Why Choose EventSnap?</h2>
                    <div className='features-grid'>
                        <div class="feature-card">
                            <div class="feature-icon">&#x1F3AB;</div>
                            <h3>Create Events Instantly</h3>
                            <p>Set up your event in minutes 
                                with our intuitive interface</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon"> &#x1F4CA;</div>
                            <h3>Track Attendees</h3>
                            <p>
                                Real-time monitoring of ticket sales and attendance
                            </p>
                        </div>
                        <div class="feature-card">
                            <div class="feature-icon">&#x1F4B3;</div>
                            <h3>Manage Sales</h3>
                            <p>Easy ticket management with status tracking</p>
                        </div>
                        <div class="feature-card">
                            <div class="feature-icon">&#x1f4c8;</div>
                            <h3>Real-time Analytics</h3>
                            <p>Get insights on your event performance</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default LandingPage;