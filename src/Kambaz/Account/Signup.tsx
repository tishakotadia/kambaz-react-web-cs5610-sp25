import { Link } from "react-router-dom";
export default function Signup() {
    return (
    <div id="wd-signup-screen">
        <h3>Sign up</h3>
        <input placeholder="username" className="mb-2 form-control" />
        <input placeholder="password" type="password" className="mb-2 form-control" />
        <input placeholder="verify password" type="password" className="mb-2 form-control" />
        <Link to="/Kambaz/Account/Profile" id="wd-signup-btn" className="btn btn-primary w-100 mb-2"> Sign up </Link>
        <Link to="/Kambaz/Account/Signin" >Sign in</Link>
    </div>
);}