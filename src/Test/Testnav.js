import React from "react";
import { NavLink } from "react-router-dom";

const Testnav = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
              <li class="nav-item px-3">
                <NavLink to="./TestHome" style={{ textDecoration: "none" }}>
                  {" "}
                  <h1 style={{ color: "brown", fontWeight: "900" }}>HOME</h1>
                </NavLink>
              </li>
              <li class="nav-item px-3">
                <NavLink to="./TestAbout" style={{ textDecoration: "none" }}>
                  <h1 style={{ color: "red", fontWeight: "900" }}>ABOUT</h1>
                </NavLink>
              </li>
              <li class="nav-item px-3">
                <NavLink to="./TestContact" style={{ textDecoration: "none" }}>
                  <h1 style={{ color: "pink", fontWeight: "900" }}>CONTACT</h1>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Testnav;
