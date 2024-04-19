import './Login.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

function Login() {
    return (
        <div className="login">
            <Card>
                <CardContent>
                <h4>Log In</h4>
                <form className="signup-form">
                    <input placeholder="Email" type="email" />
                    <input placeholder="Password" type="password" /> 
                    <a>Forgot password?</a>
                </form>
                </CardContent>
                <CardActions>
                <div className="buttons">
                    
                    <button className="action-button">Log In</button>
                </div>
                </CardActions>
                <hr />
                <p className="login-option"> <span>Are you a new Member?</span> <a href="/login" >Sign Up</a></p>
            </Card>
        </div>
    )
}

export default Login;