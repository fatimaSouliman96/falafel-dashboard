import React, { useEffect, useState } from 'react'
import './style/product.css'
import ProductTable from '../../../componanets/table/ProductTable'
import { useNavigate } from 'react-router'
import { InfoTable } from '../const/infoTable'
import axios from 'axios'
import ContentTable from '../componanets/ContentTable'
import { CiCirclePlus } from "react-icons/ci";

function ProductMang() {
  const navigate = useNavigate()
  const [data, setData] = useState()

  useEffect(() => {
    axios.get("https://api-pos.alzero1store.com/api/products")
      .then(res => setData(res.data.data))
    console.log(data)
  }, [])

  const goTo = (num, id) => {
    navigate("editProduct", {
      state: {
        id: id,
        namePro: data[num].name,
        brand: data[num].brand,
        unit: data[num].unit,
        description: data[num].description
      }
    })
  }

  async function deletePro(id) {
    const conf = window.confirm("هل تريد حذف هذا المنتج")
    if (conf) {
      const newData = data.filter(ele => ele.id !== id)
      setData(newData)


      await axios.delete(`https://api-pos.alzero1store.com/api/products/${id}`)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

  }
  return (
    <div className='productMang' >
      <h1>ادارة المنتجات</h1>
      <button onClick={() => navigate("addproduct")} className='add-pro' >اضافة منتج<CiCirclePlus style={{paddingLeft:"0.5rem"}} size={25}/></button>
      <ProductTable infoTh={InfoTable} contentTable={<ContentTable deletePro={deletePro} toNavigate={goTo} data={data} />} />
      
    </div>
  )
}

export default ProductMang
