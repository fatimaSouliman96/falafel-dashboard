import { useEffect, useState } from 'react'
import ProductTable from '../../../componanets/table/ProductTable'
import { infoSupp } from '../const/infoSupp'
import axios from 'axios'
import TableContentSuppliers from '../componanets/TableContentSuppliers'
import './style/suppliersMang.css'
import { CiCirclePlus } from "react-icons/ci";
import { useNavigate } from 'react-router'

function SuppliersMang() {
    const [ data ,setData ] = useState()
    const navigate = useNavigate()
    useEffect( () => {
    axios.get("https://api-pos.alzero1store.com/api/suppliers")
        .then(res => setData(res.data.data))
        console.log(data)
    } , [])

    const goTo = (num, id) => {
      navigate("editSupplier", {
        state: {
          id: id,
          name: data[num].name,
          phone: data[num].phone,
          address: data[num].address,
        }
      })
    }
    async function deleteSupp(id) {
      const conf = window.confirm("هل تريد حذف هذا المورد")
      if (conf) {
        const newData = data.filter(ele => ele.id !== id)
        setData(newData)
  
  
        await axios.delete(`https://api-pos.alzero1store.com/api/suppliers/${id}`)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
  
    }
  return (
    <div className='suppliers' >
      <h1 className='title' >ادارة الموردين</h1>
      <button onClick={() => navigate("addSupplier")} className='add-pro' >اضافة مورد<CiCirclePlus style={{paddingLeft:"0.5rem"}} size={25}/></button>
      <ProductTable infoTh={infoSupp} contentTable={<TableContentSuppliers data={data} toNavigate={goTo} deletePro={deleteSupp}/>}/>
    </div>
  )
}

export default SuppliersMang
