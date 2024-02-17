import React, { useEffect, useState } from 'react'
import ProductTable from '../../../componanets/table/ProductTable'
import { useNavigate } from 'react-router'
import { InfoTable } from '../const/infoTable'
import axios from 'axios'
import ContentTable from '../componanets/ContentTable'
import HeaderMange from '../../../componanets/HeaderMangeTable/HeaderMange'

function ProductMang() {
  const navigate = useNavigate()
  const [data, setData] = useState()
  const [ allData , setAllData ] = useState()
 
    useEffect(() => {
      axios.get("https://api-pos.alzero1store.com/api/products")
      .then(function (res) {
        setAllData(res.data.data)
        setData(res.data.data)
      })
        
    }, [])
  

  const goTo = (num, id) => {
    navigate("editProduct")
    localStorage.setItem("id",id)
    localStorage.setItem("namePro",data[num].name)
    localStorage.setItem("brand",data[num].brand)
    localStorage.setItem("unit",data[num].unit)
    localStorage.setItem("description",data[num].description)
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
  const onChangeSearch = async(e) => {
    if (e.target.value=="") {
      setData(allData)
    }else{
    await axios.get(`https://api-pos.alzero1store.com/api/products/search/${e.target.value}`)
        .then(res => setData(res.data.data))
        .catch(function (error) {
          console.log(error);
        });}

  }
  return (
    <div className='productMang' >
      <h1 className='title-sec' >ادارة المنتجات</h1>
      <HeaderMange goTo={"addproduct"} textBtn="اضافة منتج" onChangeSearch={onChangeSearch} />
      <ProductTable infoTh={InfoTable} contentTable={<ContentTable deletePro={deletePro} toNavigate={goTo} data={data} />} />
    </div>
  )
}

export default ProductMang
