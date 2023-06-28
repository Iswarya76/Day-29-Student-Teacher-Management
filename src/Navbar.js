import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "./Login_Context";

function Navbar() {
  const {useremail,setUserEmail} = useContext(LoginContext)

  const navigate = useNavigate();
  let handlelogOut = () => {
    navigate("/");
  };

  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-secondary">
      <Link className="navbar-brand ps-3" to={"/portal/welcome"}>
        <b className="text-black">Student - Teacher Admin Portal</b>
      </Link>

      <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
        <div className="input-group">
          <button onClick={handlelogOut} className="btn btn-primary" type="button">
          Logout
          </button>
        </div>
      </form>

      <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="mr-2 d-none d-lg-inline text-black small me-3">
             <b>{useremail.email}</b>
            </span>
            <img
              className="img-profile rounded-circle"
              src="https://picsum.photos/id/1/50/50"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;