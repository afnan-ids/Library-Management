import React from "react";
import { Container, Row, Col, Card, Button, Nav } from "react-bootstrap";
import { FaBook, FaUser, FaChartBar, FaBell, FaSearch } from "react-icons/fa";
import "../../Styles/Dashboard/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">

      {/* SIDEBAR */}
      <div className="sidebar">
        <div className="sidebar-brand mb-4">
          <h4><span className="brand-orange">Library</span>Manager</h4>
        </div>
        <Nav className="flex-column sidebar-nav">
          <Nav.Link href="#"><FaBook className="me-2"/> Books</Nav.Link>
          <Nav.Link href="#"><FaUser className="me-2"/> Users</Nav.Link>
          <Nav.Link href="#"><FaChartBar className="me-2"/> Reports</Nav.Link>
          <Nav.Link href="#"><FaBell className="me-2"/> Notifications</Nav.Link>
        </Nav>
      </div>

      {/* MAIN CONTENT */}
      <div className="dashboard-main">
        {/* HEADER */}
        <div className="dashboard-header d-flex justify-content-between align-items-center mb-4">
          <h3>Welcome Back</h3>
          <div className="d-flex align-items-center">
            <div className="search-box me-3">
              <FaSearch className="search-icon"/>
              <input type="text" placeholder="Search..." />
            </div>
            <div className="profile-circle">A</div>
          </div>
        </div>

        {/* CARDS */}
        <Container fluid>
          <Row className="g-4">
            <Col md={4}>
              <Card className="dash-card">
                <Card.Body>
                  <Card.Title>Total Books</Card.Title>
                  <h2>1,245</h2>
                  <Button className="btn-card">View</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="dash-card">
                <Card.Body>
                  <Card.Title>Active Users</Card.Title>
                  <h2>312</h2>
                  <Button className="btn-card">View</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="dash-card">
                <Card.Body>
                  <Card.Title>Reports</Card.Title>
                  <h2>27</h2>
                  <Button className="btn-card">View</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

    </div>
  );
};

export default Dashboard;
