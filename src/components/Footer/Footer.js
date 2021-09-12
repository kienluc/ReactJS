import React from 'react';
import './Footer.css'
import noti from '../../images/dathongbao.png'
const Footer = () => {
  return (
    <section className="ft">
      <div className="con">
        <div className="l-f">
          <div>
            <div class="copy-right">
              &nbsp;&nbsp;CÔNG TY CỔ PHẦN GIAO HÀNG TIẾT KIỆM{" "}
            </div>
            <div class="footer-links">
              <div class="menu-footer-links-container">
                <ul id="menu-footer-links" class="menu1">
                  <li
                    id="menu-item-30"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-30"
                  >
                    <a href="https://giaohangtietkiem.vn/gioi-thieu">
                      Về chúng tôi
                    </a>
                  </li>
                  <li
                    id="menu-item-31"
                    class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-31"
                  >
                    <a href="https://giaohangtietkiem.vn/category/tuyen-dung">
                      Tuyển dụng
                    </a>
                  </li>
                  <li
                    id="menu-item-32"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-32"
                  >
                    <a href="https://giaohangtietkiem.vn/dich-vu-giao-hang-ghtk">
                      Dịch vụ
                    </a>
                  </li>
                </ul>
              </div>{" "}
              <span
                id="menu-item-32"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-32"
              >
                <a href="https://goo.gl/D6hNJ5" target="_blank">
                  Quy định chung
                </a>
                &nbsp;&nbsp;&nbsp;
                <a href="https://goo.gl/1njVc4" target="_blank">
                  Chính sách bảo mật
                </a>
              </span>
            </div>
            <div class="social-links">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/Giaohangtietkiem.vn"
                    target="_blank"
                  >
                    <i class="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/Giaohangtietkiem.vn"
                    target="_blank"
                  >
                    <i class="fab fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="mailto:cskh@ghtk.vn" target="_blank">
                    <i class="fas fa-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="http://online.gov.vn/CustomWebsiteDisplay.aspx?DocId=40786"
                    target="_blank"
                  >
                    <img src={noti} alt="feedback" className="img-responsive" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="r-f">
          <div>
            <div class="copy-right">
              CÔNG TY CỔ PHẦN GIAO HÀNG TIẾT KIỆM <br />
            </div>
            Giấy CNĐKKD: 0106181807 - Ngày cấp 21/05/2013, đăng ký thay đổi lần
            09 ngày 04/06/2020.
            <br />
            Cơ quan cấp: Phòng Đăng ký kinh doanh - Sở kế hoạch và đầu tư TP Hà
            Nội
            <br />
            <a href="https://goo.gl/maps/srZTEraEbkfE7pBX6" target="_blank">
              Địa chỉ trụ sở chính: Tòa nhà VTV, số 8 Phạm Hùng, phường Mễ Trì,
              quận Nam Từ Liêm, thành phố Hà Nội, Việt Nam
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Footer;
