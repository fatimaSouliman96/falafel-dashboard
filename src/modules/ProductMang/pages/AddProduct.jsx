import { useState } from 'react'
import './style/addPro.css'
import axios from 'axios'
import { IoLogoDropbox } from "react-icons/io";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function AddProduct() {

  const [name, setName] = useState()
  const [brand, setBrand] = useState()
  const [unit, setUnit] = useState()
  const [description, setDescription] = useState()

  function change(value, placeholder) {


    if (placeholder == "name") {
      setName(value)

    }

    if (placeholder == "brand") {
      setBrand(value)

    }

    if (placeholder == "unit") {
      setUnit(value)

    }
    if (placeholder == "description") {
      setDescription(value)

    }
  }

  const onSubmit = async () => {
    setName("")
    setBrand("")
    setUnit("")
    setDescription("")
    await axios.post('https://api-pos.alzero1store.com/api/products', {
      name: name,
      brand: brand,
      unit: unit,
      description: description
    })
      .then(function (response) {
        console.log(response);
        if (response.status == 200) {
          window.confirm("تم اضافة المنتج بنجاح")

        }

      })
      .catch(function (error) {
        console.log(error);
        if (error.response.status == 400) {
          window.confirm("الرجاء تعبئة جميع الحقول")
        }
        else {
          window.confirm("لم يتم انشاء المنتج")
        }
      });


  }

  return (
    <div className='addPro' >
      <h1>اضافة منتج</h1>
      <div className='add' >
        <div className='form-input' >
          <FloatingLabel controlId="floatingInput" label="اسم المنتج" className="mb-3" >
            <Form.Control value={name} onChange={(event) => change(event.target.value, event.target.placeholder)} type="text" placeholder="name"  />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="نوع المنتج" className="mb-3" >
            <Form.Control value={brand} onChange={(event) => change(event.target.value, event.target.placeholder)} type="text" placeholder="brand"  />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="الواحدة" className="mb-3" >
            <Form.Control value={unit} onChange={(event) => change(event.target.value, event.target.placeholder)} type="text" placeholder="unit"  />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="الوصف" className="mb-3" >
            <Form.Control value={description} onChange={(event) => change(event.target.value, event.target.placeholder)} type="text" placeholder="description"  />
          </FloatingLabel>
  
          <button className='add-item' onClick={(event) => onSubmit(event)} >اضافة المنتج</button>
        </div>
        <IoLogoDropbox size={150} />
      </div>

    </div>
  )
}

export default AddProduct
