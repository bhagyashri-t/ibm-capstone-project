// import Header from "../Header/Header";
import "./Signup.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

function Signup() {
    return (
        <div className="signup">
            <Card>
                <CardContent>
                <h4>Sign Up</h4>
            <form className="signup-form">
                <select>
                    <option>Role</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                </select>
                <input placeholder="Name" />
                <input placeholder="Phone" />
                <input placeholder="Email" type="email" />
                <input placeholder="Password" type="password" />
            </form>
                </CardContent>
                <CardActions>
                <div className="buttons">
                    <a>Reset</a>
                    <button className="action-button">Sign Up</button>
                </div>
                
                </CardActions>
                <hr />
                <p className="login-option"> <span>Already a Member?</span> <a href="/login" >Log In</a></p>
            </Card>
            
            
        </div>
    )
}

export default Signup;