import { Link } from "react-router-dom";
export default function Signin() {
return (
    <div id="wd-signin-screen">
        <h3>Sign in</h3>
        <input placeholder="username" className="mb-2 form-control" /> 
        <input placeholder="password" type="password" className="mb-2 form-control" /> 
        <Link to="/Kambaz/Dashboard" id="wd-signin-btn" className="btn btn-primary w-100 mb-2"> Sign in </Link> 
        <Link to="/Kambaz/Account/Signup" id="wd-signup-link">Sign up</Link>
    </div>
);}