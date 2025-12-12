import React from "react";
import { Form, Button } from "react-bootstrap";
import "../../Styles/Login/UserLogin.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className="login-wrapper">
      <div className="login-box">

        {/* SECTION 1 — HEADER */}
        <div className="section-block mb-3">
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="brand mb-0">
              <span className="brand-orange">Library</span>Manegement
            </h4>
            <div>
              <span className="text-muted small me-2">No account?</span>
              <Button className="btn-signup" onClick={()=>navigate('/Pages/Login/Registerpage')}>Sign Up</Button>
            </div>
          </div>
        </div>

        {/* SECTION 2 — FORM + IMAGE */}
        <div className="section-block mb-3 p-4">
          <div className="row g-4 align-items-center">

            {/* LEFT — FORM */}
            <div className="col-md-6 ps-3">
              <h3 className="login-title mb-3">Log In</h3>

              <Form>

                {/* Email */}
                <div className="input-block">
                  <Form.Label>Email / Username</Form.Label>
                  <div className="glass-input">
                    <Form.Control
                      className="input-inner"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="input-block">
                  <Form.Label>Password</Form.Label>
                  <div className="glass-input">
                    <Form.Control
                      type="password"
                      className="input-inner"
                      placeholder="Enter password"
                    />
                  </div>
                </div>

                <Button type="submit" className="btn-login w-100 mb-2 mt-3" href="/Pages/Dashboard/Dashboard">
                  Log In
                </Button>

                <div className="text-center">
                  <a className="forgot-link" href="#">
                    Forgot Password?
                  </a>
                </div>

              </Form>
            </div>

            {/* RIGHT — IMAGE */}
            <div className="col-md-6 text-center">
              <img
                src="/public/Login/hero-2.png"
                alt="Books Illustration"
                className="illustration-img"
              />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
