import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <section className="headerSection border">
      <div className="ms-5 ps-2 me-2 pe-5 d-inline-flex  align-items-center">
        <img
          style={{ height: "8em", width: "8em" }}
          className="siteLogo"
          src={logo}
          alt="ebay logo"
        />
        {/* // slecet categoy dropdown */}
        <div class="dropdown pb-3 ms-3">
          <a
            class="dropdown-toggle customLinkStyle "
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            href="/"
          >
            Shop by <br /> category
          </a>

          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li className="row">
              <a class="dropdown-item" href="/">
                Action
              </a>
            </li>
            <li className="row">
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Header;
