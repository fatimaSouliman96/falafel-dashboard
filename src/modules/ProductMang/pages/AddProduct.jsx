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
      <IoLogoDropbox size={200} />
        <div className='form-input' >
          <FloatingLabel controlId="floatingInput" label="اسم المنتج" className="mb-3" >
            <Form.Control value={name} onChange={(event) => changeName(event.target.value)} type="text" placeholder="name"  />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="نوع المنتج" className="mb-3" >
            <Form.Control value={brand} onChange={(event) => changeBrand(event.target.value)} type="text" placeholder="brand"  />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="الواحدة" className="mb-3" >
            <Form.Control value={unit} onChange={(event) => changeUnit(event.target.value)} type="text" placeholder="unit"  />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="الوصف" className="mb-3" >
            <Form.Control value={description} onChange={(event) => changeDescription(event.target.value)} type="text" placeholder="description"  />
          </FloatingLabel>
  
          <button className='add-item' onClick={(event) => onSubmit(event)} >اضافة المنتج</button>
        </div>
        
      </div>

    </div>
  )
}

export default AddProduct
