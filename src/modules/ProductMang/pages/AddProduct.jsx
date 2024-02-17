import { useState } from 'react'
import './style/addPro.css'
import axios from 'axios'
import { IoLogoDropbox } from "react-icons/io";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router'

function AddProduct() {
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [brand, setBrand] = useState("")
  const [unit, setUnit] = useState("")
  const [description, setDescription] = useState("")

  const handleNameChange = (value) => {
    setName(value);
  };

  const handleBrandChange = (value) => {
    setBrand(value);
  };

  const handleUnitChange = (value) => {
    setUnit(value);
  };

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  const handleSuccess = () => {
    window.confirm('تم اضافة المنتج بنجاح');
    goTo();
  };

  const handleError = (error) => {
    console.log(error);
    if (error.response && error.response.status === 400) {
      window.confirm('الرجاء تعبئة جميع الحقول');
    } else {
      window.confirm('لم يتم انشاء المنتج');
    }
  };
  const handleSubmit = async () => {
    try {
      await axios.post('https://api-pos.alzero1store.com/api/products', {
        name: name,
        brand: brand,
        unit: unit,
        description: description
      });

      handleSuccess();
    } catch (error) {
      handleError(error);
    }
  };
  // const onSubmit = async () => {

  //   await axios.post('https://api-pos.alzero1store.com/api/products', {
  //     name: name,
  //     brand: brand,
  //     unit: unit,
  //     description: description
  //   })
  //     .then(function (response) {
  //       console.log(response);
  //       if (response.status == 200) {
  //         window.confirm("تم اضافة المنتج بنجاح")
  //         goTo()
  //       }

  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //       if (error.response.status == 400) {
  //         window.confirm("الرجاء تعبئة جميع الحقول")
  //       }
  //       else {
  //         window.confirm("لم يتم انشاء المنتج")
  //       }
  //     });


  // }
  const goTo = () => {
    navigate("/falafel-dashboard/main/product")
  }
  return (
    <div className='addPro' >
      <h1 className='title-sec'>اضافة منتج<FaArrowLeft size={30} style={{ color: "var(---olive)", float: "left", cursor: "pointer" }} onClick={() => goTo()} /></h1>
      <div className='add' >
        <IoLogoDropbox className='icon-form' size={200} />
        <div className='form-input' >
          <FloatingLabel controlId="floatingInput" label="اسم المنتج" className="mb-3" >
            <Form.Control value={name} onChange={(event) => handleNameChange(event.target.value)} type="text" placeholder="name" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="نوع المنتج" className="mb-3" >
            <Form.Control value={brand} onChange={(event) => handleBrandChange(event.target.value)} type="text" placeholder="brand" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="الواحدة" className="mb-3" >
            <Form.Control value={unit} onChange={(event) => handleUnitChange(event.target.value)} type="text" placeholder="unit" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="الوصف" className="mb-3" >
            <Form.Control value={description} onChange={(event) => handleDescriptionChange(event.target.value)} type="text" placeholder="description" />
          </FloatingLabel>

          <button className='add-item' onClick={(event) => handleSubmit(event)} >اضافة المنتج</button>
        </div>


      </div>

    </div>
  )
}

export default AddProduct
