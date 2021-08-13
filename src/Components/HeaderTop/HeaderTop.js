import React, { useEffect } from "react";
import { useState } from "react";
import "./HeaderTop.css";
const HeaderTop = () => {
  const [userCountry, setUserCountry] = useState("");
  const [countryFlag, setUserCountryFlag] = useState("");
  // get logged in user'data
  const [loggedInUser, setLoggedInuser] = useState("");

  // get user country name from ip address for showing flag
  useEffect(() => {
    fetch("https://extreme-ip-lookup.com/json/")
      .then((res) => res.json())
      .then((response) => {
        console.log(setUserCountry(response.country));
      })
      .catch((data, status) => {
        console.log("Request failed:", data);
      });
  }, []);

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${userCountry}`)
      .then((res) => res.json())
      .then((data) => setUserCountryFlag(data[0].flag));
  }, [userCountry]);

  return (
    <section className="headerTopSection border ">
      <div className=" d-flex justify-content-between align-items-center  ms-5 ps-2 me-2 pe-5">
        <div className="d-flex mt-1">
          <p>
            <span> Hi! {loggedInUser.name}</span>
            <a href="/login">Sign in</a> <span className="ms-1 me-1">or</span>
            <a href="/createAcc">register</a>
          </p>

          <p>
            <a className="ms-5 customLinkStyle" href="/dailyDeals ">
              Daily Deals
            </a>
            <a className="ms-5 customLinkStyle" href="/helpAndContact">
              help {"&"} contact
            </a>
          </p>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <img
            title="Ship to"
            className="flagImage "
            src={countryFlag}
            alt=""
          />
          <a className="ms-3 customLinkStyle" title="Ship to" href="/shipTo">
            Ship to
          </a>
          <a title="Sell" className="ms-2 customLinkStyle" href="/sell">
            Sell
          </a>
          {/* watchlist dropdown */}
          <div class="btn-group">
            <button
              class="btn btn-sm dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Watchlist
            </button>
            <ul class="dropdown-menu">
              <li className="dropdown-item">
                <a href="/summary">Summary</a>
              </li>
              <li className="dropdown-item">
                <a href="/summary">Recently Viwed</a>
              </li>
            </ul>
          </div>

          {/* my eaby dropdown */}
          <div class="btn-group dropDown">
            <button
              class="btn btn-sm dropdown-toggle customDropDownStyle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              My ebay
            </button>
            <ul class="dropdown-menu dropDownContent">
              <li className="dropdown-item">
                <a className="customLinkStyle" href="/summary">
                  Summary
                </a>
              </li>
              <li className="dropdown-item">
                <a className="customLinkStyle" href="/summary">
                  Recently Viwed
                </a>
              </li>
              <li className="dropdown-item">
                <a className="customLinkStyle" href="/summary">
                  Bids/Offers
                </a>
              </li>
              <li className="dropdown-item">
                <a className="customLinkStyle" href="/summary">
                  Watchlist
                </a>
              </li>
              <li className="dropdown-item">
                <a className="customLinkStyle" href="/summary">
                  Purchase History
                </a>
              </li>
              <li className="dropdown-item">
                <a className="customLinkStyle" href="/summary">
                  Buy Again
                </a>
              </li>
              <li className="dropdown-item">
                <a className="customLinkStyle" href="/summary">
                  Selling
                </a>
              </li>
              <li className="dropdown-item">
                <a className="customLinkStyle" href="/summary">
                  Saved Searches
                </a>
              </li>
              <li className="dropdown-item">
                <a className="customLinkStyle" href="/summary">
                  Saved Seller
                </a>
              </li>
            </ul>
          </div>

          <a className="ms-5 customLinkStyle" href="/notification">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-bell"
              viewBox="0 0 16 16"
              style={{ color: "black" }}
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
            </svg>
          </a>
          <a className="ms-5  customLinkStyle" href="/card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "black", fontWeight: "bold" }}
              fill="currentColor"
              class="bi bi-cart2"
              viewBox="0 0 16 16"
              width="25"
              height="25"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeaderTop;
