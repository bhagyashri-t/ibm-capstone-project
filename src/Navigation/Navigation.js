import './Navigation.css';

function Navigation() {
    return (
        <nav>
            <ul>
                <li> <a href="/"><button>Home</button></a> </li>
                <li> <a href="/appointments"  ><button>Appointments</button></a> </li>
                <li> <a href="/instant-consultation"><button className='instant-consulation-btn'>Instant Consultation</button></a> </li>
                <li> <a href="/reviews"><button>Reviews</button></a> </li>
                <li> <a href="/signup">Sign Up</a> </li>
                <li> <a href="/login">Login</a> </li>
            </ul>  
        </nav>
    );
}

export default Navigation;