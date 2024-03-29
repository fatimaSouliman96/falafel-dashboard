import React from 'react'
import HeadersMang from '../../../componanets/HeaderMangeTable/HeaderMange'
import ProductTable from '../../../componanets/table/ProductTable'
import ContentBills from '../Componanets/ContentBills'
import { infoCoulmn } from '../const/infoCoulmn'

function PartlyPaidBill() {
  return (
    <div className='partly-paid' >
      <h1 className='title-sec'>الفواتير المدفوعة جزئيا</h1>
      <HeadersMang textBtn={"اضافة فاتورة"} goTo={"/falafel-dashboard/main/add-bill"}/>
      <ProductTable contentTable={<ContentBills />} infoTh={infoCoulmn}/>
    </div>
  )
}

export default PartlyPaidBill
