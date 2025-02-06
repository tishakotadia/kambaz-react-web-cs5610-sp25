import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap"; 
export default function Dashboard() { 
    return ( 
    <div id="wd-dashboard"> 
    <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
    <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr /> 
    <div id="wd-dashboard-courses">
    <Row className="g-4">
    <Col className="wd-dashboard-course" xs={12} sm={6} md={4} lg={3}> 
        <Card>
            <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark"> 
            <Card.Img variant="top" src="/images/web-development.png" width="100%" height={160} />
            <Card.Body>
            <Card.Title className="wd-dashboard-course-title"> CS5610_Spring_2025 Web Dev </Card.Title> 
            <Card.Text className="wd-dashboard-course-description"> Web Development </Card.Text> 
            <Button variant="primary"> Go </Button> 
            </Card.Body> 
            </Link> 
            </Card>
        </Col> 

        <Col className="wd-dashboard-course" xs={12} sm={6} md={4} lg={3}> 
        <Card>
            <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark"> 
            <Card.Img variant="top" src="/images/algorithms.png" width="100%" height={160} />
            <Card.Body>
            <Card.Title className="wd-dashboard-course-title"> CS5800_Spring_2025 Algorithms </Card.Title> 
            <Card.Text className="wd-dashboard-course-description"> Algorithms </Card.Text> 
            <Button variant="primary"> Go </Button> 
            </Card.Body> 
            </Link> 
            </Card>
        </Col> 
        
        <Col className="wd-dashboard-course" xs={12} sm={6} md={4} lg={3}> 
        <Card>
            <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark"> 
            <Card.Img variant="top" src="/images/coop.png" width="100%" height={160} />
            <Card.Body>
            <Card.Title className="wd-dashboard-course-title"> CS0001_Fall_2024 Career Prep </Card.Title> 
            <Card.Text className="wd-dashboard-course-description"> COOP </Card.Text> 
            <Button variant="primary"> Go </Button> 
            </Card.Body> 
            </Link> 
            </Card>
        </Col>
         
        <Col className="wd-dashboard-course" xs={12} sm={6} md={4} lg={3}> 
        <Card>
            <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark"> 
            <Card.Img variant="top" src="/images/program-design-paradigm.png" width="100%" height={160} />
            <Card.Body>
            <Card.Title className="wd-dashboard-course-title"> CS5010_Fall_2024 Program Design </Card.Title> 
            <Card.Text className="wd-dashboard-course-description"> Program Design Paradigm </Card.Text> 
            <Button variant="primary"> Go </Button> 
            </Card.Body> 
            </Link> 
            </Card>
        </Col>
        
        <Col className="wd-dashboard-course" xs={12} sm={6} md={4} lg={3}> 
        <Card>
            <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark"> 
            <Card.Img variant="top" src="/images/recitation-for-pdp.png" width="100%" height={160} />
            <Card.Body>
            <Card.Title className="wd-dashboard-course-title"> CS5011_Fall_2024 PDP Recitation </Card.Title> 
            <Card.Text className="wd-dashboard-course-description"> Recitation for PDP </Card.Text> 
            <Button variant="primary"> Go </Button> 
            </Card.Body> 
            </Link> 
            </Card>
        </Col>
        
        <Col className="wd-dashboard-course" xs={12} sm={6} md={4} lg={3}> 
        <Card>
            <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark"> 
            <Card.Img variant="top" src="/images/ai-in-action.png" width="100%" height={160} />
            <Card.Body>
            <Card.Title className="wd-dashboard-course-title"> CS0002_Fall_2024 - AI Toolkit </Card.Title> 
            <Card.Text className="wd-dashboard-course-description"> AI in Action : Build AI Toolkit </Card.Text> 
            <Button variant="primary"> Go </Button> 
            </Card.Body> 
            </Link> 
            </Card>
        </Col>
        
        <Col className="wd-dashboard-course" xs={12} sm={6} md={4} lg={3}> 
        <Card>
            <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark"> 
            <Card.Img variant="top" src="/images/segaf-student-training.png" width="100%" height={160} />
            <Card.Body>
            <Card.Title className="wd-dashboard-course-title"> CS3000_Spring_2025 NUTEMPS SEGAF </Card.Title> 
            <Card.Text className="wd-dashboard-course-description"> SEGAF Student Training </Card.Text> 
            <Button variant="primary"> Go </Button> 
            </Card.Body> 
            </Link> 
            </Card>
        </Col>
         
    </Row> 
    </div>
    </div> 
);} 