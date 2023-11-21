import React, { useState } from 'react'
import Form from '../../../componanets/Form/Form'
import './style/addPro.css'
import { data } from '../const/dataForm'
import axios from 'axios'
import { IoLogoDropbox } from "react-icons/io";

function AddProduct() {

  const [name, setName] = useState("")
  const [brand, setBrand] = useState("")
  const [unit, setUnit] = useState("")
  const [description, setDescription] = useState("")

  function change(value , placeholder ) {
    
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

  const onSubmit = async(event) => {

    event.preventDefault()

    await axios.post('https://api-pos.alzero1store.com/api/products', {
      name: name,
      brand: brand,
      unit: unit,
      description: description
    })
    .then(function (response) {
      console.log(response);
      if(response.status==200){
        window.confirm("تم اضافة المنتج بنجاح")
      }
      
    })
    .catch(function (error) {
      console.log(error);
      if(error.response.status==400){
        window.confirm("الرجاء تعبئة جميع الحقول")
      }
    });

  
  }

  return (
    <div className='addPro' >
      <h1>اضافة منتج</h1>
      <div className='add' >
        
        <Form typeBtn={"اضافة"} data={data} change={change} onSubmit={onSubmit} />
        <IoLogoDropbox size={150}/>

      </div>
      
    </div>
  )
}

export default AddProduct
