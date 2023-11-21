import Form from '../../../componanets/Form/Form'
import { infoForm } from '../const/infoForm'
import { FaPeopleCarry } from "react-icons/fa";
import './style/addSupplier.css'
import { useState } from 'react';
import axios from 'axios'

function AddSupplier() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")

  function change(value , placeholder ) {
    
    console.log(name)
    if (placeholder == "name") {
      setName(value)
      console.log(name)
    }

    if (placeholder == "phone") {
      setPhone(value)
      console.log(phone)
    }

    if (placeholder == "address") {
      setAddress(value)
      console.log(address)
    } 

  }
  const onSubmit = async(event) => {

    event.preventDefault()
    console.log(name)
    console.log(phone)
    console.log(address)
    await axios.post("https://api-pos.alzero1store.com/api/suppliers" , {
      name: name,
      phone: phone,
      address: address
    })
    .then(function (response) {
      console.log(response);
      if(response.status==200){
        window.confirm("تم اضافة المورد بنجاح")
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
    <div className='add-supplier'>
      <h1>اضافة مورد</h1>
      <div className='add' >
      <Form data={infoForm} typeBtn={"اضافة"} change={change} onSubmit={onSubmit} />
      <FaPeopleCarry size={100}  />
      </div>
    </div>
  )
}

export default AddSupplier
