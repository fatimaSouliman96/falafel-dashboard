import { FaCircleUser } from "react-icons/fa6"
import './style/profile.css'
import { IoLogOutOutline } from "react-icons/io5";
import { MdOutlinePassword } from "react-icons/md";
import { MdDelete } from "react-icons/md";
function Profile() {

  return (
    <div className="div-profile" >
      <div className="profile" >
      <FaCircleUser size={100} className="profile-icon"/>
      <span>احمد</span>
      <span>ahmad@gmail.com</span>
      <ul className="list" >
        <li className="item-list" >تغيير كلمة السر  <MdOutlinePassword /></li>
        <li className="item-list" >تسجيل خروج  <IoLogOutOutline /> </li>
        <li className="item-list" >حذف الحساب  <MdDelete /></li>
      </ul>
    </div>
    </div>
    
  )
}

export default Profile
