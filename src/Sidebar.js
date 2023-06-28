import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav className="sb-sidenav accordion bg-dark" id="sidenavAccordion">
      <div className="sb-sidenav-menu">
        <div className="nav">
          <div className="sb-sidenav-menu-heading text-white">Core</div>
          <Link to={"/dashboard"} className="nav-link" href="index.html">
            <div className="sb-nav-link-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            Dashboard
          </Link>
          <div className="sb-sidenav-menu-heading text-white">Interface</div>
          <Link
            className="nav-link collapsed"
            to={"/teachers_data"}
            data-bs-toggle="collapse"
            data-bs-target="#collapseLayouts"
            aria-expanded="false"
            aria-controls="collapseLayouts"
          >
            <div className="sb-nav-link-icon">
              <i className="fas fa-columns"></i>
            </div>
            Teachers
            <div className="sb-sidenav-collapse-arrow">
            </div>
          </Link>

          <Link
            className="nav-link collapsed "
            to={"/students_data"}
            data-bs-toggle="collapse"
            data-bs-target="#collapsePages"
            aria-expanded="false"
            aria-controls="collapsePages"
          >
            <div className="sb-nav-link-icon">
              <i className="fas fa-book-open"></i>
            </div>
            Students
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;