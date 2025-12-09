import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../../../Styles/Login/CreateAccount.css";

function CreateAccountForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = (field) => {
    if (field === "password") setShowPassword(!showPassword);
    if (field === "confirmPassword")
      setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Container
      fluid
      className="form-background d-flex justify-content-center align-items-center"
    >
      <Card
        className="form-card p-3 p-md-4 shadow-lg"
        style={{ maxWidth: "600px" }}
      >
        <h2 className="text-center mb-3 ">Create Account</h2>
        <p className="text-muted mb-3"> Required Field *</p>

        <Form>
          {/* Name Row */}
          <Row className="mb-2">
            <Col md={6}>
              <Form.Control type="text" placeholder="First Name *" required />
            </Col>
            <Col md={6}>
              <Form.Control type="text" placeholder="Middle Name" />
            </Col>
          </Row>

          <Row className="mb-2">
            <Col md={6}>
              <Form.Control type="text" placeholder="Last Name *" required />
            </Col>
            <Col md={6}>
              <Form.Control type="email" placeholder="Email *" required />
            </Col>
          </Row>

          <Row className="mb-2">
            <Col md={6}>
              <Form.Control type="tel" placeholder="Mobile No *" required />
            </Col>
            <Col md={6}>
              <Form.Control
                type="text"
                placeholder="Date of Birth *"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
              />
            </Col>
          </Row>

          <Row className="mb-2">
            <Col md={6}>
              <Form.Control type="text" placeholder="City *" required />
            </Col>
            <Col md={6}>
              <Form.Control type="text" placeholder="Country *" required />
            </Col>
          </Row>

          {/* Gender & Password */}
          <Row className="mb-2">
            <Col md={6}>
              <Form.Select required>
                <option value="">Select Gender *</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Form.Select>
            </Col>

            <Col md={6}>
              <div className="position-relative">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Password *"
                  required
                  className="pe-5"
                />
                <span
                  className="password-toggle"
                  onClick={() => togglePasswordVisibility("password")}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </Col>
          </Row>

          {/* Confirm Password */}
          <Row className="mb-2">
            <Col md={6}>
              <div className="position-relative">
                <Form.Control
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password *"
                  required
                  className="pe-5"
                />
                <span
                  className="password-toggle"
                  onClick={() => togglePasswordVisibility("confirmPassword")}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </Col>
          </Row>

          {/* Bottom Row */}
          <Row className="mt-3 align-items-center">
            <Col xs={7}>
              <a
                href="#"
                className="text-primary text-decoration-none fw-semibold"
              >
                I already have an account
              </a>
            </Col>
            <Col xs={5} className="d-flex justify-content-end">
              <Button type="submit" variant="primary" className="w-100">
                Register
              </Button>
            </Col>
          </Row>
        </Form>
        <div className="text-center mt-3" style={{ fontSize: "15px" }}>
         <i className=" me-1"> Designed & Developed by</i> 
          <a
            href="https://i-diligence.com/"
            className="font-weight-bold text-decoration-none fw-semibold"
          >
            iDiligence Solutions Pvt. Ltd.
          </a>
        </div>
      </Card>
    </Container>
  );
}

export default CreateAccountForm;
