import './DoctorCard.css';
import { Card } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';

function DoctorCard ({name, ratings, speciality, experience}) {
    return (
        <Card className='doctor-card'>
            <div className="avatar">
            <PersonIcon sx={{ fontSize: 100, color: '#808080'}} />
            </div>
            <div className="doctor-name" style={{fontWeight: 'bold', color: '#404040', marginBottom: '3px'}}>{name}</div>
            <div className="speciality" style={{fontSize: 'medium', color: '#404040', marginBottom: '3px'}}>{speciality}</div>
            <div className="experience" style={{fontSize: 'small', color: '#404040', marginBottom: '3px'}} >{experience} years experience</div>
            <div className="ratings" style={{fontWeight: 'bold', color: '#404040', marginBottom: '3px'}}>Ratings: {ratings}</div>
            <button className='action-button'>Book Appointment</button>
        </Card>
    );
}

export default DoctorCard;