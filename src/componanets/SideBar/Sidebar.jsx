import { Navbar, Nav, Collapse } from 'bootstrap-4-react';
import '../style/sidebar.css'
import { NavLink } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { FaShoppingCart , FaFileInvoice , FaPeopleArrows} from "react-icons/fa";
import { RiBillFill } from "react-icons/ri";
import { IoStorefront } from "react-icons/io5";
import { useState } from 'react';
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";


function Sidebar() {
  const [drop, setDrop] = useState("drop")
  const [dropUp, setDropUp] = useState("none");
  const [dropDown, setDropDown] = useState("show");

  function dropShow() {
    if (drop == "drop") {
      setDrop("dropDown")
      setDropDown("none")
      setDropUp("show")
    }
    else {
      setDrop("drop")
      setDropDown("show")
      setDropUp("none")
    }
  }
  return (
    <>
      <Navbar expand="lg" light >
        <Navbar.Brand href="#">
          
        </Navbar.Brand>
        <Navbar.Toggler target="#navbarSupportedContent" aria-expanded="true" />
        <Collapse navbar id="navbarSupportedContent">
          <Navbar.Nav mr="auto">
            <Nav.Item  >

              <NavLink to="/falafel-dashboard/" className="navLink" ><AiFillHome size={30} />
                الصفحة الرئيسية</NavLink>
            </Nav.Item>


            <Nav.Item>

              <NavLink to="/falafel-dashboard/product" className="navLink"><FaShoppingCart size={30} />
                ادارة المنتجات</NavLink>
            </Nav.Item>

            <Nav.Item>

              <NavLink to="/falafel-dashboard/suppliers" className="navLink"><FaPeopleArrows size={30} />
                ادارة الموردين</NavLink>
            </Nav.Item>

            <Nav.Item className="dropLink" >
              <Nav.Link onClick={() => dropShow()} to="/falafel-dashboard/main-bills" className="navLink "><RiBillFill size={30} style={{ marginRight: "0.4rem" }} />ادارة فواتير الشراء<IoIosArrowDropdown className={dropDown} style={{ marginRight: "1rem" }} size={25} /> <IoIosArrowDropup className={dropUp} style={{ marginRight: "1rem" }} size={25} /></Nav.Link>
              <ul className={drop}>
                <NavLink to="/falafel-dashboard/all-bills" className="navLink">الفواتير</NavLink>
                <NavLink to="/falafel-dashboard/paid-bill" className="navLink">الفواتير المدفوعة</NavLink>
                <NavLink to="/falafel-dashboard/partly-bill" className="navLink">الفواتير المدفوعة جزئيا</NavLink>
              </ul>
            </Nav.Item>

            <Nav.Item  >
              <NavLink to="/falafel-dashboard/main-sales" className="navLink"><FaFileInvoice size={30} />
                ادارة فواتير المبيع</NavLink>
            </Nav.Item>
            
            <Nav.Item>


              <NavLink to="/falafel-dashboard/main-store" className="navLink"> <IoStorefront size={30} />
                ادارة المخزن</NavLink>
            </Nav.Item>

          </Navbar.Nav>

        </Collapse>
      </Navbar>
    </>
  );
}

export default Sidebar;