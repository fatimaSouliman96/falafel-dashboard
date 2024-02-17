import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './style/addPro.css'
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router'
import axios from 'axios'
import { IoLogoDropbox } from 'react-icons/io';
import { FaArrowLeft } from "react-icons/fa6";


function EditProduct() {

  const navigate = useNavigate()
  
  const [name, setName] = useState(localStorage.getItem("namePro"))
  const [brand, setBrand] = useState(localStorage.getItem("brand"))
  const [unit, setUnit] = useState(localStorage.getItem("unit"))
  const [description, setDescription] = useState(localStorage.getItem("description"))
  

  function changeName(value) {
    setName(value)
  }

  function changeBrand(value) {
    setBrand(value)
  }

  function changeUnit(value) {
    setUnit(value)
  }

  function changeDescription(value) {
    setDescription(value)
  }

  const editPro = async () => {

    await axios.post(`https://api-pos.alzero1store.com/api/products/${localStorage.getItem("id")}`, {
      name: name,
      brand: brand,
      unit: unit,
      description: description
    })
      .then(function (response) {
        console.log(response);
        if (response.status == 200) {
        
          // goTo()
        }

      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const goTo = () => {
    navigate("/falafel-dashboard/main/product")
  }

  return (

    <div className='addPro'>
 
      <h1 className='title-sec'>تعديل المنتج <FaArrowLeft size={30} style={{ color: "var(---olive)", float: "left", cursor: "pointer" }} onClick={() => goTo()} /></h1>
      <div className='add' >
      <IoLogoDropbox className='icon-form' size={200} />
        <div className='form-input' >
          <FloatingLabel controlId="floatingInput" label="اسم المنتج" className="mb-3" >
            <Form.Control value={name} onChange={(event) => changeName(event.target.value)} type="text" placeholder="name" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="نوع المنتج" className="mb-3" >
            <Form.Control value={brand} onChange={(event) => changeBrand(event.target.value)} type="text" placeholder="brand" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="الواحدة" className="mb-3" >
            <Form.Control value={unit} onChange={(event) => changeUnit(event.target.value)} type="text" placeholder="unit" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="الوصف" className="mb-3" >
            <Form.Control value={description} onChange={(event) => changeDescription(event.target.value)} type="text" placeholder="description" />
          </FloatingLabel>

          <button className='add-item' onClick={() => editPro()} >تعديل المنتج</button>
        </div>
      </div>


    </div>

  )
}
export default React.memo(EditProduct)
