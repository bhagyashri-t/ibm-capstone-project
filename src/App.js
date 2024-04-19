import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import Appointments from './Appointments/Appointments';
import Reviews from './Reviews/Reviews';
import Signup from './Signup/Signup';
import Login from './Login/Login';
import InstantConsultation from './InstantConsultationBooking/InstantConsultation';

function App() {
  return (
    <div className="App">
       <Header></Header>
       {/* <div className='app-container'> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/appointments" element={<Appointments></Appointments>}></Route>
          <Route path="/reviews" element={<Reviews></Reviews>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/instant-consultation" element={<InstantConsultation />} />
        </Routes>
       {/* </div> */}
    </div>
  );
}

export default App;

