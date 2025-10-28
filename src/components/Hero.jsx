import '../styles/Hero.scss'
import { useNavigate, Link } from 'react-router-dom';

const Hero = () => {
    return ( 
        <>
            <div class="hero">
                <div class="circle-deco circle-1"></div>
                <h1>EventSnap</h1>
                <p>Snap up tickets, skip the hassle</p>
                <div class="cta-buttons">
                    <Link to={'/signup'} class="btn-primary">Get Started</Link>
                    <Link to={'/login'} class="btn-secondary">Login</Link>
                </div>
                <svg class="wave-svg" viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#f9fafb" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
                </svg>
            </div>
        </>
     );
}
 
export default Hero;