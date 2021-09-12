import React from "react";
import Slideshow from "./SlideShow/SlideShow";
import img1 from "../images/GH-sieu-toc-web-1.png";
import img2 from "../images/3.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/3.jpg";
import img5 from "../images/GH-sieu-toc-web-1.png";
import img6 from "../images/GH-sieu-toc-web-1.png";
import "./SlideShow.css";
import "./MasHead.css";
import dangky from "../images/dangki-06.png";
import search from "../images/search-07.png";
import ungtuyen from "../images/ung-tuyen.png";
import download from "../images/download-04.png";

const collection = [
  { src: img1, caption: "Caption one" },
  { src: img2, caption: "Caption two" },
  { src: img3, caption: "Caption three" },
  { src: img4, caption: "Caption four" },
  { src: img5, caption: "Caption five" },
  { src: img6, caption: "Caption six" },
];
const MasHead = () => {
  return (
    <section>
      <div className="container slideshow res">
        <div className="row2 header2">
          <div className="img">
            {/* <Slideshow input={collection} ratio={`3:2`} mode={`manual`} /> */}

            <Slideshow
              input={collection}
              ratio={`4:2`}
              mode={`automatic`}
              timeout={`3000`}
            />

            {/* <div>
              Made by <a href="https://about.phamvanlam.com/">Lam Pham</a>.
              Visit me at <a href="/">completejavascript.com</a>.
            </div> */}
          </div>
          <div className="left">
            <div className="block-signup">
              <div className="box">
                <a className="menu-item-17">
                  <img src={search} />
                  <span>Tra cứu đơn hàng</span>
                </a>
                <a className="menu-item-17">
                  <img src={dangky} />
                  <span>Đăng ký shop | Đăng nhập</span>
                </a>
                <a className="menu-item-17">
                  <img src={ungtuyen} />
                  <span>Ứng tuyển giao hàng</span>
                </a>
                <a className="menu-item-17">
                  <img src={download} />
                  <span>Tải app Giaohangtietkiem</span>
                </a>
                <a className="menu-item-17">
                  <img src={ungtuyen} />
                  <span>Bảng giá</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasHead;
