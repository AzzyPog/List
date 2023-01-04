import { Outlet } from "react-router-dom";
import Logo from "../images/logo.png"
import Search from "../images/search.png"
import Arrow from "../images/arrow.png"
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <nav>
        <img
          src={Logo}
          width="50"
        />
        <div className="search">
          <img
            src={Search}
          />
          <input text="" />
          <img
            src={Arrow}
          />
        </div>
        <ul>
          <li>
            <a className="color" href="/">Login&nbsp;&nbsp;</a>
          </li>
          <li>
            <a className="color" href="/">Cadastrar</a>
          </li>
          <li>
            <a href="/">
              <img
                src=""
                width="21px"
              />
            </a>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;