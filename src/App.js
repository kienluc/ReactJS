import logo from './logo.svg';
import Person from './components/Person';
import TopNav from './components/Top';
import MasHead from './components/MasHead';
import "./App.css";
import Address from './components/Address';
import Memories from "./components/Memories/Memories";
import Register from './components/Register/Register'
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <TopNav />
      <header className="App-header">
      <nav className="navbar navbar-default">
        <div className="container-head">
          <div className="row">
            <div className="navbar-header">
              <a className="navbar-brand ghct">
                <span>GiaohangCT</span>
              </a>
            </div>
            <div className="navbar-collapse">
              <div className="menu-menu-top">
                <ul class="nav navbar-nav">
                  <li>
                    <a>Về chúng tôi</a>
                  </li>
                  <li>
                    <a>Dịch vụ</a>
                  </li>
                  <li>
                    <a>Tuyển dụng</a>
                  </li>
                  <li>
                    <a>Blog</a>
                  </li>
                  <li>
                    <a>Hỏi đáp</a>
                  </li>
                  <li>
                    <a>API</a>
                  </li>
                  <li>
                    <a>GHCT Zone 9</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
      <Person />
      <MasHead />
      <Address />
      <Memories />
      <Register />
      <Footer />
    </div>
  );
}

export default App;
