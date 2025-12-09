import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Styles/Login/UserLogin.css";

export default function UserLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: validate / call API
    // Example: redirect to dashboard on success
    navigate("/Dashboard");
  };

  return (
    <div className="login-page">
      {/* LEFT: animated text */}
      <aside className="login-left">
        <div className="left-content">
          <h1 className="title">Welcome to LibraryUI</h1>
          <p className="subtitle">
            Fast, secure and beautiful library management — take control of your
            collections, users and reports from one intuitive dashboard.
          </p>
          <ul className="features">
            <li>Modern dashboard</li>
            <li>Realtime notifications</li>
            <li>Easy user management</li>
          </ul>
        </div>
      </aside>

      {/* RIGHT: glass login form */}
      <main className="login-right">
        <div className="glass-card" role="region" aria-label="Login form">
          <div className="brand">
            <img src="/logo192.png" alt="logo" className="brand-logo" />
            <span className="brand-name">LibraryUI</span>
          </div>

          <h2 className="card-title">Sign in</h2>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="you@domain.com"
                aria-required="true"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <div className="password-wrap">
                <input
                  id="password"
                  name="password"
                  type={showPass ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  placeholder="Enter your password"
                  aria-required="true"
                />
                <button
                  type="button"
                  className="toggle-pass"
                  onClick={() => setShowPass((s) => !s)}
                  aria-pressed={showPass}
                  aria-label={showPass ? "Hide password" : "Show password"}
                >
                  {showPass ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="form-row">
              <div className="form-check">
                <input id="remember" type="checkbox" className="form-check-input" />
                <label htmlFor="remember" className="form-check-label">Remember me</label>
              </div>
              <Link to="/forgot" className="forgot-link">Forgot?</Link>
            </div>

            <button className="btn-primary btn-submit" type="submit">Login</button>
          </form>

          <p className="signup-text">
            New here? <Link to="/CreateAccount">Create an account</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
