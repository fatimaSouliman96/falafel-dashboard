import { FaPeopleCarry } from "react-icons/fa";
import './style/addSupplier.css'
import { useState } from 'react';
import axios from 'axios'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function AddSupplier() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")

  function change(value, placeholder) {

    if (placeholder == "name") {
      setName(value)

    }

    if (placeholder == "phone") {
      setPhone(value)

    }

    if (placeholder == "address") {
      setAddress(value)

    }

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
  return (
    <div className='add-supplier'>
      <h1>اضافة مورد</h1>
      <div className='add' >
        <div className='form-input'>
          <FloatingLabel controlId="floatingInput"  label="اسم المورد" className="mb-3" >
            <Form.Control value={name} onChange={(event) => change(event.target.value, event.target.placeholder)} type="text" placeholder="phone" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput"  label="رقم الاتصال" className="mb-3" >
            <Form.Control value={phone} onChange={(event) => change(event.target.value, event.target.placeholder)} type="text" placeholder="phone" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput"   label="العنوان"  className="mb-3" >
            <Form.Control value={address} onChange={(event) => change(event.target.value, event.target.placeholder)} type="text" placeholder="address" />
          </FloatingLabel>
    
          <button className='add-item' onClick={(event) => onSubmit(event)} >اضافة المورد</button>
        </div>
        <FaPeopleCarry size={100} />
      </div>
    </div>
  )
}

export default AddSupplier
