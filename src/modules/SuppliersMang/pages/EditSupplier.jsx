import React, { useState } from 'react'
import './style/addSupplier.css'
import { useLocation } from "react-router-dom";
import Form from '../../../componanets/Form/Form';
import { FaPeopleCarry } from 'react-icons/fa';
import { infoForm } from '../const/infoForm';
import axios from 'axios'

function EditSupplier() {
    const location = useLocation()

    const [name, setName] = useState(location.state.name)
    const [phone, setPhone] = useState(location.state.phone)
    const [address, setAddress] = useState( location.state.address)

    const values = [
        name,
        phone,
        address,
    ]
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
        console.log(location.state.id)

        await axios.post(`https://api-pos.alzero1store.com/api/suppliers/${location.state.id}` , {
          name: name,
          phone: phone,
          address: address
        })
        .then(function (response) {
          console.log(response);
          if(response.status==200){
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
      <Form data={infoForm} typeBtn={"اضافة"} value={values} change={change} onSubmit={onSubmit}/>
      <FaPeopleCarry size={100}  />
      </div>
    </div>
  )
}

export default EditSupplier
