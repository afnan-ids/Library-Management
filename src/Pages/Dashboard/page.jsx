import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import DashboardCards from "../../components/DashboardCards";
import CalendarWidget from "../../components/Calendar";
import MessageModal from "../../components/MessageModal";
import LabNavbar from "../../components/Navbar";
function Dashboard() {
  const [showMessageModal, setShowMessageModal] = useState(false);

  return (
    <>
    <CalendarWidget/>
    <DashboardCards/>
    <MessageModal/>
    <Sidebar/> 
    <LabNavbar/>
    </>
    // <div className="wrapper d-flex">
    //   <Sidebar />
    //   <div className="main-content flex-grow-1">
    //     <LabNavbar openMessage={() => setShowMessageModal(true)} />
    //     <div className="content p-3">
    //       <DashboardCards />
    //       <div className="row mt-4">
    //         <div className="col-md-6">
    //           <CalendarWidget />
    //         </div>
    //       </div>
    //     </div>
    //     <Lab />
    //   </div>

    //   {/* MESSAGE MODAL */}
    //   <MessageModal
    //     show={showMessageModal}
    //     handleClose={() => setShowMessageModal(false)}
    //   />
    // </div>
  );
}

export default Dashboard;
