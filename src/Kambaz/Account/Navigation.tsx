import { Link } from "react-router-dom";
export default function AccountNavigation() {
return (
    <div id="wd-account-navigation">
    <ul>
        <li><Link to={`/Kambaz/Account/Signin`} > Signin </Link> <br/></li>
        <li><Link to={`/Kambaz/Account/Signup`} > Signup </Link> <br/></li>
        <li><Link to={`/Kambaz/Account/Profile`} > Profile </Link> <br/></li>
    </ul> 
    </div>
);}