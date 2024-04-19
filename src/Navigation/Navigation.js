import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <ul>
                <li> <Link to="/" style={{ textDecoration: 'none'}}><button>Home</button></Link> </li>
                <li> <Link to="/appointments"  style={{ textDecoration: 'none'}}><button>Appointments</button></Link> </li>
                <li> <Link to="/instant-consultation"  style={{ textDecoration: 'none'}}><button>Instant Consultation</button></Link> </li>
                <li> <Link to="/reviews"  style={{ textDecoration: 'none'}}><button>Reviews</button></Link> </li>
                <li> <Link to="/signup"  style={{ textDecoration: 'none'}}><a href="#">Sign Up</a></Link> </li>
                <li> <Link to="/login"  style={{ textDecoration: 'none'}}><a href="#">Login</a></Link> </li>
            </ul>  
        </nav>
    );
}

export default Navigation;