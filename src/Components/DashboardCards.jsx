import React from "react";

function DashboardCards() {
  return (
    <div className="row g-4">
      <div className="col-md-4">
        <div className="card p-3 shadow-sm text-center">
          <h6 className="text-muted mb-1">Total Students</h6>
          <h2 className="fw-bold">320</h2>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card p-3 shadow-sm text-center">
          <h6 className="text-muted mb-1">Total Teachers</h6>
          <h2 className="fw-bold">25</h2>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card p-3 shadow-sm text-center">
          <h6 className="text-muted mb-1">New Admissions</h6>
          <h2 className="fw-bold">12</h2>
        </div>
      </div>
    </div>
  );
}

export default DashboardCards;
