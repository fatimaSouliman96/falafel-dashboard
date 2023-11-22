import { Navbar, Nav, Collapse } from 'bootstrap-4-react';
import '../style/sidebar.css'
import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa";
import { RiBillFill } from "react-icons/ri";
import { IoStorefront } from "react-icons/io5";

function Sidebar() {

  return (
    <>
     <Navbar  expand="lg" >
        <Navbar.Brand href="#">
          فلافل
        </Navbar.Brand>
        <Navbar.Toggler target="#navbarSupportedContent" aria-expanded="true" />
        <Collapse navbar id="navbarSupportedContent">
          <Navbar.Nav mr="auto">
            <Nav.Item active>
              <AiFillHome  size={30}/>
              <Link to="/falafel-dashboard/" >الصفحة الرئيسية</Link>
            </Nav.Item>

            <Nav.Item>
              <FaShoppingCart size={30}/>
              <Link to="/falafel-dashboard/product">ادارة المنتجات</Link>
            </Nav.Item>

            <Nav.Item>
              <FaPeopleArrows size={30}/>
            <Link to="/falafel-dashboard/suppliers">ادارة الموردين</Link>
            </Nav.Item>

            <Nav.Item>
              <RiBillFill size={30}/>
            <Link>ادارة الفواتير</Link>
            </Nav.Item>

            <Nav.Item>
                <IoStorefront size={30}/>
            <Link>ادارة المخزن</Link>
            </Nav.Item>
            
          </Navbar.Nav>
        
        </Collapse>
      </Navbar>
    </>
  );
}

export default Sidebar;