import HospitalLogo from './hospital_logo.png';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header() {
    return (
        <div className="header">
            <a href=""><img alt="Hospital logo" src={HospitalLogo} width="150" height="90" /></a>
            <Navigation></Navigation>
        </div>
    );
}

export default Header;