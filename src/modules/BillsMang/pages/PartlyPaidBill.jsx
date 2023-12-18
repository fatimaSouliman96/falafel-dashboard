import React from 'react'
import HeadersMang from '../../../componanets/HeaderMangeTable/HeaderMange'
import ProductTable from '../../../componanets/table/ProductTable'
import ContentBills from '../Componanets/ContentBills'
import { data } from '../const/dataTable'
import { infoCoulmn } from '../const/infoCoulmn'
import './style/partlyPaid.css'

function PartlyPaidBill() {
  return (
    <div className='partly-paid' >
      <h1>الفواتير المدفوعة جزئيا</h1>
      <HeadersMang textBtn={"اضافة فاتورة"} goTo={"/falafel-dashboard/add-bill"}/>
      <ProductTable contentTable={<ContentBills data={data} />} infoTh={infoCoulmn}/>
    </div>
  )
}

export default PartlyPaidBill
