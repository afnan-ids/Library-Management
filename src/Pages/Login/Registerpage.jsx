import React, { useState } from "react";
import "../../Styles/Login/Registerpage.css";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();
  const [termscheck,settermscheck] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!termscheck) {
      alert("Please accept the terms");
      return;
    }
    navigate("/Pages/Dashboard/Dashboard");
  };

  return (
    <div className="signup-page-wrapper d-flex align-items-center justify-content-center">
      <div className="signup-form-container p-4 shadow bg-white rounded-4">
        {/* Header Section with Icon */}
        <div className="text-center mb-4">
          <div className="profile-icon-outer-ring mx-auto d-flex align-items-center justify-content-center">
            <div className="profile-icon-inner-circle d-flex align-items-center justify-content-center">
              <i className="bi bi-person-fill fs-1 text-white"></i>
            </div>
          </div>
        </div>

        {/* Title with lines separator */}
        <h5 className="text-center mb-4 title-separator">CREATE NEW ACCOUNT</h5>

        {/* Form Fields */}
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-6 mb-3 mb-md-0">
              <input
                type="text"
                className="form-control rounded-pill custom-input"
                placeholder="Name"
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control rounded-pill custom-input"
                placeholder="Surname"
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6 mb-3 mb-md-0">
              <input
                type="text"
                className="form-control rounded-pill custom-input"
                placeholder="City"
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control rounded-pill custom-input"
                placeholder="Country"
              />
            </div>
          </div>

          <div className="mb-3">
            <input
              type="date"
              className="form-control rounded-pill custom-input"
              placeholder="Day/Month/Year"
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control rounded-pill custom-input"
              placeholder="Email"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              className="form-control rounded-pill custom-input"
              placeholder="Password"
            />
          </div>

          {/* Checkbox */}
          <div className="form-check d-flex justify-content-center mb-4">
            <input
              className="form-check-input me-2"
              type="checkbox"
              checked={termscheck}
              onChange={(e) =>settermscheck(e.target.checked)}
              id="termsCheck"
            />
            <label className="form-check-label text-muted" htmlFor="termsCheck">
              I agree to the
              <a href="#" className="text-decoration-none">
                Terms of Service
              </a>
              and
              <a href="#" className="text-decoration-none">
                Privacy Policy
              </a>
              .
            </label>
          </div>

          {/* Submit Button */}
          <div className="d-grid gap-2 col-8 mx-auto">
            <button className="rounded-pill btn-lg custom-btn" type="submit">
              SIGN UP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
