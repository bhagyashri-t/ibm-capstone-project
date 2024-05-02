import './Appointments.css';
import FindDoctorSearch from "../FindDoctorSearch/FindDoctorSearch";
import DoctorCard from '../DoctorCard/DoctorCard';
import {useState, useEffect} from 'react';


function Appointments() {

    let [doctors, setDoctors] = useState([]);

    const getDoctors = () => {
        fetch('https://api.npoint.io/9a5543d36f1460da2f63')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setDoctors(data);
        });
    };

    useEffect(()=>{
        getDoctors();
    }, []);

    console.log(doctors);
    return (
       <div className="appointments">
        <FindDoctorSearch></FindDoctorSearch>
        <div className='doctor-cards-container'>
            {doctors.length ? doctors.map(doctor =>  <DoctorCard {...doctor}  key={doctor.name}></DoctorCard> ) : <p>No doctors found.</p>}
        </div>
        
       </div>
    )
}

export default Appointments;