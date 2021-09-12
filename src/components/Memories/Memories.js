import React from 'react';
import './Memories.css'

const Memories = () => {
  return (
    <section>
      <div className="grey-bg text-center">
        <h3>Phương Thức Hoạt Động</h3>
      </div>
      <div className="textwidget">
        <div className="grey-bg actives">
          <div className="container">
            <ul>
              <li class="active-1">
                <strong>Tiếp nhận đơn hàng</strong>
                Shop đăng nhập và đăng đơn hàng cho trung tâm điều vận GHTK qua
                hệ thống quản lý riêng.
              </li>
              <li class="active-2">
                <strong>Lấy hàng</strong>
                Nhân viên GHTK qua địa chỉ shop để lấy hàng tận nơi
              </li>
              <li class="active-3">
                <strong>Giao hàng</strong>
                GHTK giao hàng cho khách hàng và thu hộ tiền trực tiếp (Cash on
                Delivery)
              </li>
              <li class="active-4">
                <strong>Đối soát</strong>
                GHTK đối soát trả tiền cho shop (3 lần/tuần) qua tài khoản ngân
                hàng. Đồng thời gửi biên bản đối soát định kì vào email.
              </li>
              <li class="active-5">
                <strong>Kết thúc</strong>
                Giao dịch hoàn thành
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Memories;