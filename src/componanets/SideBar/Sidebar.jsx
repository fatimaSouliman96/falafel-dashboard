import { Navbar, Nav, Collapse } from 'bootstrap-4-react';
import '../style/sidebar.css'
import { Link, NavLink } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { FaShoppingCart, FaFileInvoice, FaPeopleArrows, FaUserEdit } from "react-icons/fa";
import { RiBillFill } from "react-icons/ri";
import { IoLogOutOutline, IoStorefront } from "react-icons/io5";
import { useState } from 'react';
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { FaCircleUser } from 'react-icons/fa6'
import { useNavigate } from 'react-router'
import { CiMenuFries } from "react-icons/ci";

function Sidebar({newStyleSec}) {
  const navigate = useNavigate()  

  const [drop, setDrop] = useState("drop")
  const [dropUp, setDropUp] = useState("none");
  const [dropDown, setDropDown] = useState("show");
  const [styleList, setStyleList] = useState("unshow-List")
  const [styleIconMenu, setStyleIconMenu] = useState("styleIconMenu")
  const [styleNavBar, setStyleNavBar] = useState("")
  const [ styleProfil , setStyleProfil ] = useState("")
  const [ newStyleLink , setNewStyleLink ] = useState("")
  const [ styleOver , setStyleOver ] = useState("oldStyleOver")
  const [ styleMain , setStyleMain ] = useState("oldStyleOver")
  const [ stylePro , setStylePro ] = useState("oldStyleOver")
  const [ styleSupp , setStyleSupp ] = useState("oldStyleOver")
  const [ styleBuyBill , setStyleBuyBill ] = useState("oldStyleOver")
  const [ styleSalesBill , setStyleSalesBill ] = useState("oldStyleOver")
  const [ styleStore , setStyleStore ] = useState("oldStyleOver")

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
    ifOpen()
  }
  const showList = () => {

    if (styleList == "show-list") {
      setStyleList("unshow-List")
    }
    else {
      setStyleList("show-list")
    }
    ifOpen()
  }

  const onClickMenu = () => {
    if(styleNavBar == "hideNavBar"){
      setStyleNavBar("")
      setStyleIconMenu("styleIconMenu")
      newStyleSec()
      setStyleProfil("")
      setNewStyleLink("")

    } else{
      setStyleNavBar("hideNavBar")
      setStyleIconMenu("newStyleIconMenu")
      newStyleSec()
      setStyleProfil("newProfile")
      setNewStyleLink("newStyleLink")
    }
  
}
  const backtoSideBar = () =>{
    if(window.outerWidth<991){
      if(styleNavBar == "hideNavBar"){
        setStyleNavBar("")
        setStyleIconMenu("styleIconMenu")
        newStyleSec()
        setStyleProfil("")
        setNewStyleLink("")
  
      } else{
        null
      }
    }else{
      null
    }
    
  }
const ifOpen = () => {
  
  if(window.outerWidth > 990 & styleNavBar=="hideNavBar"){
      console.log(window.outerWidth)
      setStyleNavBar("")
      setStyleIconMenu("styleIconMenu")
      newStyleSec("style")
      setStyleProfil("")
      setNewStyleLink("")
  
  }else{

    console.log(window.outerWidth)}
  
}
  return (
    <>

      <Navbar className={styleNavBar} expand="lg" light >
      <CiMenuFries style={{cursor: "pointer"}} className={styleIconMenu} onClick={() => onClickMenu()} size={30} />
        <Navbar.Brand href="#" onClick={() => showList()}>
          <FaCircleUser onMouseEnter={ () => styleNavBar=="hideNavBar"?setStyleOver("newStyleOver"):null} onMouseLeave={ () => setStyleOver("oldStyleOver")} className={styleProfil} style={{ color: "#fe83087e" }} size={30}  /><p className={styleOver} >الحساب</p>
          <h2>احمد</h2>
        </Navbar.Brand>
        <ul className={styleList}>
          <NavLink className="navLink" onClick={() => backtoSideBar()}  style={{cursor:"pointer"}} to="/falafel-dashboard/main/profile" >تعديل الحساب<FaUserEdit style={{cursor:"pointer" , color:"#fe83087e" , paddingLeft:"0.5rem"}} size={30} /></NavLink>
          <Link className="navLink" > تسجيل خروج<IoLogOutOutline size={30} style={{cursor:"pointer" , color:"#fe83087e" , paddingLeft:"0.5rem"}} /> </Link>
        </ul>
        <Collapse navbar>
          <Navbar.Nav mr="auto">
            <Nav.Item  >
              <NavLink to="/falafel-dashboard/main/" onClick={() => backtoSideBar()} className="navLink " ><AiFillHome onMouseEnter={ () => styleNavBar=="hideNavBar"?setStyleMain("styleMain"):null } onMouseLeave={ () => setStyleMain("oldStyleOver")} className={styleProfil} style={{ color: "#fe83087e" }} size={30}  /><p className={styleMain} >الصفحة الرئيسية</p>
                الصفحة الرئيسية</NavLink>
            </Nav.Item>

            <Nav.Item>

              <NavLink to="/falafel-dashboard/main/product" onClick={() => backtoSideBar()}  className="navLink"><FaShoppingCart onMouseEnter={ () => styleNavBar=="hideNavBar"?setStylePro("stylePro"):null } onMouseLeave={ () => setStylePro("oldStyleOver")} className={styleProfil} style={{ color: "#fe83087e" }} size={30}  /><p className={stylePro} > ادارة المنتجات</p>
                ادارة المنتجات</NavLink>
            </Nav.Item>

            <Nav.Item>

              <NavLink to="/falafel-dashboard/main/suppliers" onClick={() => backtoSideBar()}  className="navLink"><FaPeopleArrows onMouseEnter={ () => styleNavBar=="hideNavBar"?setStyleSupp("styleSupp"):null } onMouseLeave={ () => setStyleSupp("oldStyleOver")} className={styleProfil} style={{ color: "#fe83087e" }} size={30}  /><p className={styleSupp} > ادارة الموردين</p>
                ادارة الموردين</NavLink>
            </Nav.Item>

            <Nav.Item className="dropLink" >
              <Nav.Link onClick={() => dropShow()} to="/falafel-dashboard/main/main-bills" className="navLink dropLink"><RiBillFill onMouseEnter={ () => styleNavBar=="hideNavBar"?setStyleBuyBill("styleBuyBill"):null } onMouseLeave={ () => setStyleBuyBill("oldStyleOver")} className={styleProfil} style={{ color: "#fe83087e" }} size={30}  /><p className={styleBuyBill} > ادارة فواتير الشراء</p>ادارة فواتير الشراء<IoIosArrowDropdown className={dropDown} style={{ marginRight: "1rem" }} size={25} /> <IoIosArrowDropup className={dropUp} style={{ marginRight: "1rem" }} size={25} /></Nav.Link>
              <ul className={drop}>
                <NavLink to="/falafel-dashboard/main/all-bills" onClick={() => backtoSideBar()}  className="navLink">كل الفواتير</NavLink>
                <NavLink to="/falafel-dashboard/main/paid-bill" onClick={() => backtoSideBar()}  className="navLink">الفواتير المدفوعة</NavLink>
                <NavLink to="/falafel-dashboard/main/partly-bill" onClick={() => backtoSideBar()}  className="navLink">الفواتير المدفوعة جزئيا</NavLink>
                <NavLink to="/falafel-dashboard/main/unPaid-bill" onClick={() => backtoSideBar()}  className="navLink">الفواتير  الغير مدفوعة </NavLink>
              </ul>
            </Nav.Item>

            <Nav.Item  >
              <NavLink to="/falafel-dashboard/main/main-sales" onClick={() => backtoSideBar()}  className="navLink"><FaFileInvoice onMouseEnter={ () => styleNavBar=="hideNavBar"?setStyleSalesBill("styleSalesBill"):null } onMouseLeave={ () => setStyleSalesBill("oldStyleOver")} className={styleProfil} style={{ color: "#fe83087e" }} size={30}  /><p className={styleSalesBill} > ادارة فواتير المبيع</p>
                ادارة فواتير المبيع</NavLink>
            </Nav.Item>

            <Nav.Item>


              <NavLink to="/falafel-dashboard/main/main-store" onClick={() => backtoSideBar()}  className="navLink"> <IoStorefront onMouseEnter={ () => styleNavBar=="hideNavBar"?setStyleStore("styleStore"):null } onMouseLeave={ () => setStyleStore("oldStyleOver")} className={styleProfil} style={{ color: "#fe83087e" }} size={30}  /><p className={styleStore} > ادارة المخزن </p>
                ادارة المخزن</NavLink>
            </Nav.Item>

          </Navbar.Nav>

        </Collapse>
      </Navbar>
    </>
  );
}

export default Sidebar;