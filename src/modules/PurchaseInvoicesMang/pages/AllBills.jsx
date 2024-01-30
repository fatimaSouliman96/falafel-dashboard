import React, { useEffect, useState } from 'react'
import './style/allBills.css'
import ProductTable from '../../../componanets/table/ProductTable'
import { infoCoulmn } from '../const/infoCoulmn'
import ContentBills from '../Componanets/ContentBills'
import axios from 'axios'
import HeadersMang from '../../../componanets/HeaderMangeTable/HeaderMange'

function AllBills() {
  
  const [ datBills , setDataBills ] = useState()
  const [ allData , setAllData ] = useState()

  useEffect( () => {
     axios.get("https://api-pos.alzero1store.com/api/invoices" )
    .then((function (res) {
      setDataBills(res.data.data)
      setAllData(res.data.data)
    }))
  }, [])

  const search = async (e) => {
    if (e.target.value=="") {
      setDataBills(allData)
    }else{
    await axios.get(`https://api-pos.alzero1store.com/api/invoices/search/${e.target.value}`)
    .then(function (res) {
      setDataBills(res.data.data)
    })
        .catch(function (error) {
          console.log(error);
        });}
    
  }
  async function deleteBill(id) {
    const conf = window.confirm("هل تريد حذف هذه الفاتورة")
    if (conf) {
      const newData = datBills.filter(ele => ele.id !== id)
      setDataBills(newData)
      await axios.delete(`https://api-pos.alzero1store.com/api/invoices/${id}`)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }}
  return (
    <div className='all-bills'>
      <h1 className='title-sec'>كل فواتير الشراء</h1>
      <HeadersMang onChangeSearch={search} textBtn={"اضافة فاتورة"} goTo={"/falafel-dashboard/add-bill"}/>
      <ProductTable contentTable={<ContentBills goTo={"/falafel-dashboard/edit-bill"} deletePro={deleteBill} data={datBills} />} infoTh={infoCoulmn}/>
    </div>
  )
}

export default AllBills
