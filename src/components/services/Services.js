import React from "react";
import "./Services.css";
import services_img from "./services.png";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="services">
      <div className="services_title">Dostępne usługi</div>
      <div className="services_bottom">
        <div className="services_option">
          <div className="services_option_obj">
            <Link to="../map">
              <button className="services_option_map_btn">Map</button>
            </Link>
          </div>
          <div className="services_option_obj">
            <Link to="../dashboard">
              <button className="services_option_dashboard_btn">
                Dashboard
              </button>
            </Link>
          </div>
        </div>
        <div className="services_images">
          <img
            className="services_img"
            src={services_img}
            alt="services images"
          ></img>
        </div>
      </div>
    </div>
  );
}
