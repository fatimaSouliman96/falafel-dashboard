import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './style/edit.css'
import { useLocation } from "react-router-dom";
import axios from 'axios'
import { IoLogoDropbox } from 'react-icons/io';

function EditProduct() {
    const location = useLocation();

    const [name, setName] = useState(location.state.namePro)
    const [brand, setBrand] = useState(location.state.brand)
    const [unit, setUnit] = useState(location.state.unit)
    const [description, setDescription] = useState(location.state.description)

    function change(value, placeholder) {

        console.log(name)
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

    const editPro = async () => {

        await axios.post(`https://api-pos.alzero1store.com/api/products/${location.state.id}`, {
            name: name,
            brand: brand,
            unit: unit,
            description: description
        })
            .then(function (response) {
                console.log(response);
                if (response.status == 200) {
                    window.confirm("تم تعديل المنتج بنجاح")
                }

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className='editProduct' >
            <h1>تعديل المنتج</h1>
            <div className='add' >
                <div className='form-input' >
                    <FloatingLabel controlId="floatingInput" label="اسم المنتج" className="mb-3" >
                        <Form.Control value={name} onChange={(event) => change(event.target.value, event.target.placeholder)} type="text" placeholder="name" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingInput" label="نوع المنتج" className="mb-3" >
                        <Form.Control value={brand} onChange={(event) => change(event.target.value, event.target.placeholder)} type="text" placeholder="brand" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingInput" label="الواحدة" className="mb-3" >
                        <Form.Control value={unit} onChange={(event) => change(event.target.value, event.target.placeholder)} type="text" placeholder="unit" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingInput" label="الوصف" className="mb-3" >
                        <Form.Control value={description} onChange={(event) => change(event.target.value, event.target.placeholder)} type="text" placeholder="description" />
                    </FloatingLabel>
                    <button className='add-item' onClick={() => editPro()} >تعديل المنتج</button>
                </div>
                <IoLogoDropbox size={150} />
            </div>
        </div>
    )
}

export default EditProduct
