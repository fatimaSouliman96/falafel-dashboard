
import HeadersMang from '../../../componanets/HeaderMangeTable/HeaderMange'
import ProductTable from '../../../componanets/table/ProductTable'
import ContentBills from '../Componanets/ContentBills'
import { infoCoulmn } from '../const/infoCoulmn'

function UnPaid() {
  return (
    <div>
      <div className='paid-bills'>
      <h1 className='title-sec'> الفواتير الغير مدفوعة</h1>
      <HeadersMang textBtn={"اضافة فاتورة"} goTo={"/falafel-dashboard/main/add-bill"}/>
      <ProductTable contentTable={<ContentBills />} infoTh={infoCoulmn}/>
        </div>
    </div>
  )
}

export default UnPaid
