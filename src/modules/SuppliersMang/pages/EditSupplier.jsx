import React, { useState } from 'react'
import './style/addSupplier.css'
import { useLocation } from "react-router-dom";
import { FaPeopleCarry } from 'react-icons/fa';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import axios from 'axios'

function EditSupplier() {
  const location = useLocation()

  const [name, setName] = useState(location.state.name)
  const [phone, setPhone] = useState(location.state.phone)
  const [address, setAddress] = useState(location.state.address)

  function changeName(value) {
    setName(value)
  }
  function changePhone(value) {
    setPhone(value)
  }
  function changeAddress(value) {
    setAddress(value)
  }
  const onSubmit = async (event) => {

    event.preventDefault()
    console.log(name)
    console.log(phone)
    console.log(address)
    console.log(location.state.id)

    await axios.post(`https://api-pos.alzero1store.com/api/suppliers/${location.state.id}`, {
      name: name,
      phone: phone,
      address: address
    })
      .then(function (response) {
        console.log(response);
        if (response.status == 200) {
          window.confirm("تم تعديل المورد بنجاح")
        }

      })
      .catch(function (error) {
        console.log(error);
      });

  }
  return (
    <div className='add-supplier'>
      <h1>تعديل مورد</h1>
      <div className='add' >
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

          <button className='add-item' onClick={(event) => onSubmit(event)} >تعديل المورد</button>
        </div>
        <FaPeopleCarry size={100} />
      </div>
    </div>
  )
}

export default EditSupplier
