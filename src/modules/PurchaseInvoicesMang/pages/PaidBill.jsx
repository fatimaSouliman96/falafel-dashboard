import React from 'react'
import ProductTable from '../../../componanets/table/ProductTable'
import ContentBills from '../Componanets/ContentBills'
import { infoCoulmn } from '../const/infoCoulmn'
import HeadersMang from '../../../componanets/HeaderMangeTable/HeaderMange'

function PaidBill() {
  return (
    <div>
       <div className='paid-bills'>
      <h1 className='title-sec'> الفواتير المدفوعة</h1>
      <HeadersMang textBtn={"اضافة فاتورة"} goTo={"/falafel-dashboard/add-bill"}/>
      <ProductTable contentTable={<ContentBills />} infoTh={infoCoulmn}/>
    </div>
    </div>
  )
}


export default PaidBill
