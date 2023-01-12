import React, { Component } from "react";
import DetailsPage from "./detailspage/DetailsPage";
import "./Header.css";

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }
  // darkmode() {
  //   var toggleicon = document.getElementById("toggle-icon");
  //   document.body.classList.toggle("dark-theme");
  //   if (document.body.classList.contains("dark-theme")) {
  //     toggleicon.classList.remove("fa-moon");
  //     toggleicon.classList.add("fa-sun");
  //   } else {
  //     toggleicon.classList.remove("fa-sun");
  //     toggleicon.classList.add("fa-moon");
  //   }
  // }

  search = (e) => {
    <DetailsPage props={e.target.value} />;
  };
  render() {
    return (
      <React.Fragment>
        <header>
          <div id="nav">
            <div className="brand-name">
              <div className="logo">
                <img
                  src="https://i.ibb.co/XZBcHWX/tatacliqlogo2.png"
                  alt="tatacliqlogo2"
                  border="0"
                />
              </div>
            </div>
            <div className="nav-options">
              <div className="topbar">
                <a
                  href="/"
                  // onClick={this.darkmode()}
                  id="togglebtn"
                  className="topbar-item"
                >
                  <i id="toggle-icon" className="fa-solid fa-moon"></i>
                </a>
                <a href="listingpage/listing.html" className="topbar-item">
                  <i className="fa-solid fa-right-to-bracket"></i>
                </a>
                <a href="listingpage/listing.html" className="topbar-item">
                  <i className="fa-solid fa-user"></i>
                </a>
                <a href="listingpage/listing.html" className="topbar-item">
                  Track Items
                </a>
              </div>
              <div className="bottombar">
                {/* <button className="categories">
                  <div className="categories-button">
                    Categories
                    <span>
                      <i className="fa-solid fa-caret-down"></i>
                    </span>
                  </div>
                </button>
                <button className="brands">
                  <div className="brands-button">
                    Brand
                    <span>
                      <i className="fa-solid fa-caret-down"></i>
                    </span>
                  </div>
                </button> */}
                <div className="search">
                  <input
                    onChange={this.search}
                    type="text"
                    placeholder="Search for brands"
                  />
                  <div className="search-icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                </div>
                <ul className="cart">
                  <li className="your-cart">
                    <a href="listingpage/listing.html">
                      <i className="fa-solid fa-cart-shopping"></i>
                    </a>
                  </li>
                  <li className="wishlist">
                    <a href="listingpage/listing.html">
                      <i className="fa-solid fa-heart"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
