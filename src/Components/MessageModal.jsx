import React from "react";

function MessageModal() {
  return (
    <>
      {/* Trigger Button */}
      <button
        className="btn btn-primary mb-3"
        data-bs-toggle="modal"
        data-bs-target="#messageModal"
      >
        Open Messages
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="messageModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">

            {/* Header */}
            <div className="modal-header">
              <h5 className="modal-title fw-bold">Messages</h5>
              <button
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            {/* Body */}
            <div className="modal-body">
              <div className="list-group">

                <div className="list-group-item">
                  <h6 className="fw-bold mb-1">New Student Enrolled</h6>
                  <small className="text-muted">2 hours ago</small>
                </div>

                <div className="list-group-item">
                  <h6 className="fw-bold mb-1">Fee Reminder</h6>
                  <small className="text-muted">5 hours ago</small>
                </div>

                <div className="list-group-item">
                  <h6 className="fw-bold mb-1">Meeting with Parents</h6>
                  <small className="text-muted">Yesterday</small>
                </div>

              </div>
            </div>

            {/* Footer */}
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default MessageModal;
