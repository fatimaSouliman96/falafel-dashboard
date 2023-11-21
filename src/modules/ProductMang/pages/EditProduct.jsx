import React, { useState } from 'react'
import Form from '../../../componanets/Form/Form'
import { data } from '../const/dataForm'
import './style/edit.css'
import { useLocation } from "react-router-dom";
import axios from 'axios'

function EditProduct() {
    const location = useLocation();
    
    const [name, setName] = useState(location.state.namePro)
    const [brand, setBrand] = useState(location.state.brand)
    const [unit, setUnit] = useState( location.state.unit)
    const [description, setDescription] = useState(location.state.description)
    const values = [
        name,
        brand,
        unit,
        description
    ]
    function change(value, placeholder) {

        console.log(name)
        if (placeholder == "name") {
            setName(value)
            console.log(name)
        }

        if (placeholder == "brand") {
            setBrand(value)
            console.log(brand)
        }

        if (placeholder == "unit") {
            setUnit(value)
            console.log(unit)
        }
        if (placeholder == "description") {
            setDescription(value)
            console.log(description)
        }
    }
    
    const editPro = async(event) => {
        event.preventDefault()

        console.log(name)
        console.log(brand)
        console.log(unit)
        console.log(description)
        await axios.post(`https://api-pos.alzero1store.com/api/products/${location.state.id}`, {
            name: name,
            brand: brand,
            unit: unit,
            description: description
        })
            .then(function (response) {
                console.log(response);
                if(response.status==200){
                    window.confirm("تم تعديل المنتج بنجاح")
                  }

            })
            .catch(function (error) {
                console.log(error);
            });
    }
    
    return (
        <div className='editProduct' >
            <Form value={values} typeBtn={"تعديل"} data={data} onSubmit={editPro} change={change}/>
        </div>
    )
}

export default EditProduct
