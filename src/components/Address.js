import "./Address.css";
import React from "react";
import list from "../images/list-post-offices.jpg"
import Select from "../components/Select/Select"
import IconSearch from "../images/icon-search.png"
const Address = () => {
  return (
    <section>
      <div className="container-white">
        <div className="row">
          <div className="hidden-xs col-sm-5 col-md-6">
            <img className="thumb-map-office" src={list} />
          </div>
          <div className="col-xs-12 col-sm-7 col-md-6">
            <div className="search-post-offices">
              <div className="ghtkpo-search">
                <Select />
                <a className="btn btn-primary ghtkpo-btn-search">
                  <img className="search-icon" src={IconSearch} />
                  <span>Tra cứu điểm gửi hàng</span>
                </a>
              </div>
              {/* <div className="list-post-offices"></div> */}
              <div className="default-title">
                <div className="col-left">
                  <span className="big-text">++500</span>
                </div>
                <div className="col-right">
                  <span class="text-before">điểm gửi hàng...</span>
                  <span class="text-after">...trên toàn quốc!!!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Address;
