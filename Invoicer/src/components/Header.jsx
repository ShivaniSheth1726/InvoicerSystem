import React from "react";
import logo from "./../assets/logo.jpg";

const Header = ({ handlePrint }) => {
  return (
    <div>
      <header className="flex flex-col mb-5 xl:flex-row xl:justify-between">
        <div>
          <img width={80} src={logo} alt="logo of website" />
          <p className="font-bold uppercase tracking-wide text-4xl mb-3 m-0">
            S&R Travels
          </p>
          <h4 className=" font-bold uppercase md:text-4">GST Number:0000000000000</h4>
        </div>
      </header>
    </div>
  );
};

export default Header;
