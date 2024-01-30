import React, { useState } from 'react'
import './style/addSupplier.css'
import { useLocation } from "react-router-dom";
import { FaArrowLeft, FaPeopleCarry } from 'react-icons/fa';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import '../../../componanets/style/form.css'
import { useNavigate } from 'react-router'

function EditSupplier() {
  const location = useLocation()
  const navigate = useNavigate()

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
  const onSubmit = async () => {

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

  const goTo = () => {
    navigate("/falafel-dashboard/suppliers")
  }

  return (
    <div className='add-supplier addPro'>
      <h1 className='title-sec'>تعديل مورد<FaArrowLeft size={30} style={{cursor:"pointer" , color:"var(---olive)" , float:"left"}} onClick={ () => goTo() } /></h1>
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
        <FaPeopleCarry className='icon-form' size={100} />
      </div>
    </div>
  )
}

export default EditSupplier
