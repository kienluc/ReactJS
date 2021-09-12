import React from 'react'
import appstore from "../appstore.png";
import googleplay from "../googleplay.png";
import iconsos from "../iconsos.png";
import './Top.css'

const TopNav = () => {
  return (
    <div className="container">
      <div className="top-container">
        <div className="t-l-container">
          <span>Bấm để tải app GiaohangCT :</span>
          <div className="logo-gh">
            <a
              href="https://itunes.apple.com/us/app/giao-hang-tiet-kiem/id1131996979"
              target="_blank"
            >
              <img src={appstore} className="appstore" alt="appstore" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.EComJSC.EComShop&amp;hl=vi"
              target="_blank"
            >
              <img src={googleplay} className="googleplay" alt="googleplay" />
            </a>
          </div>
        </div>

        <div className="t-r-container">
          <a className="btn-primary sos-chat">
            <img src={iconsos} />
            &nbsp;&nbsp; Cần hỗ trợ?
            <b>CHAT NGAY</b>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopNav;