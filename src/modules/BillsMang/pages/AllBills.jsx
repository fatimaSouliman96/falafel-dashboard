import React, { useEffect } from 'react'
import './style/allBills.css'
import ProductTable from '../../../componanets/table/ProductTable'
import {data} from '../const/dataTable'
import { infoCoulmn } from '../const/infoCoulmn'
import ContentBills from '../Componanets/ContentBills'
import { useNavigate } from 'react-router'
import axios from 'axios'
import HeadersMang from '../../../componanets/HeaderMangeTable/HeaderMange'

function AllBills() {
  const navigate = useNavigate()  
  // useEffect(() => {
  //   axios.get("https://api-pos.alzero1store.com/api/invoices" , {
  //     headers: {
  //       'Accept': 'application/json',
  //       'content-type': 'text/json'
  //     }
  //   })
  //   .then(res => console.log(res))
  // }, [])
  return (
    <div className='all-bills'>
      <h1>كل الفواتير</h1>
      <HeadersMang textBtn={"اضافة فاتورة"} goTo={"/falafel-dashboard/add-bill"}/>
      <ProductTable contentTable={<ContentBills data={data} />} infoTh={infoCoulmn}/>
    </div>
  )
}

export default AllBills
