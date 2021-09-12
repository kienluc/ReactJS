import React from 'react'
import './Register.css'
import ios from '../../images/icon-02.png'
import time from "../../images/icon-05.png";
import icon06 from "../../images/icon-06.png";
import icon07 from "../../images/icon-07.png";
import icon03 from "../../images/icon-03.png";
const Register =   () => {
  return (
    <section>
      <div className="con">
        <div className="do-you-know">
          <div className="row">
            <div class="col-sm-6 col-md-4 col-md-offset-2 col-md-pull-1">
              <h3 className="section-title">
                Bạn có biết?
                <br />
                <em>Dịch vụ chúng tôi cung cấp đã phù hợp với </em>
                <br />
                <strong>1.000 ++ khách hàng</strong>
              </h3>
              <p>
                <a
                  class="btn btn-primary1 btn-100"
                  href="http://khachhang.giaohangtietkiem.vn"
                >
                  Đăng ký ngay
                </a>
              </p>
            </div>
            <div class="col-sm-6 col-md-6">
              <ul className="content">
                <li>
                  <img src="https://giaohangtietkiem.vn/wp-content/uploads/2020/11/vn-01.png" />
                  <br />
                  <strong>
                    <br />
                    Phủ sóng 99% huyện xã
                    <br />
                  </strong>
                  <br />
                  <i>
                    Lấy hàng / Giao hàng trên 11.000 huyện xã trên toàn quốc
                  </i>
                </li>
                <li class="know-2">
                  <img src={ios} />
                  <br />
                  <strong>
                    <br />
                    App cho iOS và Android
                    <br />
                  </strong>
                  <br />
                  <i>
                    Đăng đơn – Tracking – Xử lý đơn hàng mọi lúc mọi nơi trên
                    điện thoại!
                  </i>
                </li>
                <li class="know-3">
                  <img src={time} />
                  <br />
                  <strong>
                    <br />
                    Giao nhanh không kịp hủy
                    <br />
                  </strong>
                  <br />
                  <i>
                    Giao nội tỉnh 6-12h
                    <br />
                    Giao nội miền 24-36h
                    <br />
                    Giao liên miền 48h
                  </i>
                </li>
                <li class="know-4">
                  <img src={icon06} />
                  <br />
                  <strong>
                    <br />
                    Đối soát trả tiền nhanh
                    <br />
                  </strong>
                  <br />
                  <i>Chuyển khoản vào tài khoản NH 3 lần/tuần vào thứ 2/4/6</i>
                </li>
                <li class="know-5">
                  <img src={icon07} />
                  <br />
                  <strong>Giao hàng linh hoạt</strong>
                  <br />
                  <i>
                    Linh hoạt giao hàng cho khách chọn, đổi địa chỉ giao, đổi
                    tiền thu hộ, đổi SĐT, đổi người nhận hàng,…
                  </i>
                </li>
                <li class="know-6">
                  <img src={icon03} />
                  <br />
                  <strong>
                    <br />
                    Miễn phí giao nhiều lần
                    <br />
                  </strong>
                </li>
                <li class="know-7">
                  <img src={icon03} />
                  <br />
                  <strong>Miễn phí thu hộ tiền</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Register;