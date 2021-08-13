import React, { useEffect } from "react";
import { useState } from "react";
import "./HeaderTop.css";

const HeaderTop = () => {
  const [userCountry, setUserCountry] = useState("");
  const [countryFlag, setUserCountryFlag] = useState("");
  // get user country name from ip address
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
    <section className="container d-flex justify-content-between headerTop">
      <div className="d-flex">
        <p>
          Hi! <a href="/login">Sign in</a> <span className="ms-1 me-1">or</span>
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
        <img title="ship to" className="flagImage " src={countryFlag} alt="" />
        <a title="ship to" href=".">
          ship to
        </a>
      </div>
    </section>
  );
};

export default HeaderTop;
