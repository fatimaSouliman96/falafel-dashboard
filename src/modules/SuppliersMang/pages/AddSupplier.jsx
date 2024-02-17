import { FaArrowLeft, FaPeopleCarry } from "react-icons/fa";
import './style/addSupplier.css'
import { useState } from 'react';
import axios from 'axios'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router'
import '../../../componanets/style/form.css'

function AddSupplier() {
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")

  function changeName(value) {
    setName(value)
  }
  function changePhone(value) {
    setPhone(value)
  }
  function changeAddress(value) {
    setAddress(value)
  }

  const onSubmit = async () => {
    await axios.post("https://api-pos.alzero1store.com/api/suppliers", {
      name: name,
      phone: phone,
      address: address
    })
      .then(function (response) {
        console.log(response);
        if (response.status == 200) {
          window.confirm("تم اضافة المورد بنجاح")
          goTo()
        }


      })
      .catch(function (error) {
        console.log(error);
        if (error.response.status == 400) {
          window.confirm("الرجاء تعبئة جميع الحقول")
        }
        else {
          window.confirm("لم يتم انشاء الفاتورة")
        }
      })
    setName("")
    setPhone("")
    setAddress("")
  }

  const goTo = () => {
    navigate("/falafel-dashboard/main/suppliers")
  }
  return (
    <div className='add-supplier addPro'>
      <h1 className='title-sec'>اضافة مورد<FaArrowLeft size={30} style={{cursor:"pointer", color:"var(---olive)" , float:"left"}} onClick={ () => goTo() } /></h1>
      <div className='add' >
        <FaPeopleCarry className='icon-form' size={100} />
        <div className='form-input'>
          <FloatingLabel controlId="floatingInput" label="اسم المورد" className="mb-3" >
            <Form.Control value={name} onChange={(event) => changeName(event.target.value)} type="text" placeholder="phone" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="رقم الاتصال" className="mb-3" >
            <Form.Control value={phone} onChange={(event) => changePhone(event.target.value)} type="text" placeholder="phone" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="العنوان" className="mb-3" >
            <Form.Control value={address} onChange={(event) => changeAddress(event.target.value)} type="text" placeholder="address" />
          </FloatingLabel>

          <button className='add-item' onClick={(event) => onSubmit(event)} >اضافة المورد</button>
        </div>

      </div>
    </div>
  )
}

export default AddSupplier
