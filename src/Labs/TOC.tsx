// import { Link } from "react-router-dom";

// export default function TOC() {
//     return (
//     <ul>
//     <li><Link to="/Labs">Labs</Link></li>
//     <li><Link to="/Labs/Lab1">Lab 1</Link></li>
//     <li><Link to="/Labs/Lab2">Lab 2</Link></li>
//     <li><Link to="/Labs/Lab3">Lab 3</Link></li>
//     <li><Link to="/Kambaz">Kambaz</Link></li>
//     <li><Link to="https://github.com/tishakotadia/kambaz-react-web-cs5610-sp25/tree/a1">Github Repository</Link></li>
//     </ul>
//     );
// }

//<Nav.Item> 
//    <Nav.Link href="#/Labs">Default Lab</Nav.Link> 
//</Nav.Item>

import Nav from "react-bootstrap/Nav";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
export default function TOC() {
    const { pathname } = useLocation();
     return (
        <Nav variant="pills" id="wd-toc">  

        <Nav.Item> 
            <Nav.Link as={Link} to="/Labs/Lab1" id="wd-a1" active={pathname.includes("Lab1")}>Lab 1</Nav.Link>
        </Nav.Item> 
                
        <Nav.Item> 
            <Nav.Link as={Link} to="/Labs/Lab2" id="wd-a2" active={pathname.includes("Lab2")}>Lab 2</Nav.Link> 
        </Nav.Item> 

        <Nav.Item> 
            <Nav.Link as={Link} to="/Labs/Lab3" id="wd-a3" active={pathname.includes("Lab3")}>Lab 3</Nav.Link> 
        </Nav.Item> 
        
        <Nav.Item> 
            <Nav.Link as={Link} to="/Labs/Lab4" id="wd-a4" active={pathname.includes("Lab4")}>Lab 4</Nav.Link> 
        </Nav.Item>

        <Nav.Item> 
            <Nav.Link as={Link} to="/Labs/Lab5" id="wd-a5" active={pathname.includes("Lab5")}>Lab 5</Nav.Link> 
        </Nav.Item>

        <Nav.Item> 
            <Nav.Link as={Link} to="/Kambaz">Kambaz</Nav.Link> 
        </Nav.Item> 
        
        <Nav.Item> 
            <Nav.Link href="https://github.com/tishakotadia/kambaz-react-web-cs5610-sp25" 
          id="wd-github-f"
          target="_blank"
          rel="noopener noreferrer"
          active={false}>My GitHub-Frontend</Nav.Link> 
        </Nav.Item> 

        <Nav.Item> 
            <Nav.Link href="https://github.com/tishakotadia/kambaz-node-server-app" 
          id="wd-github-f"
          target="_blank"
          rel="noopener noreferrer"
          active={false}>My GitHub-Backend</Nav.Link> 
        </Nav.Item> 
        
        <Nav.Item> 
            <Nav.Link href="https://kambaz-node-server-app-n9b8.onrender.com" 
          id="wd-render"
          target="_blank"
          rel="noopener noreferrer"
          active={false}>Render</Nav.Link> 
        </Nav.Item>
        
        </Nav> 
            );}
