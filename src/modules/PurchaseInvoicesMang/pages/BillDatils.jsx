import ProductTable from '../../../componanets/table/ProductTable'
import { infoCoulmn } from '../const/infoCoulmn'
import { useLocation } from "react-router-dom";
import ContentOneBill from '../Componanets/ContentOneBill'
import ContentDatils from '../Componanets/ContentDatils';
import { infoProduct } from '../const/infoProduct';
import './style/billDatils.css'

function BillDatils() {
    const location = useLocation();
    
  return (
    <div className='bill-datils' >
      <ProductTable contentTable={<ContentOneBill  data={location.state.data} />} infoTh={infoCoulmn}/>
      <h2>تفاصيل الفاتورة</h2>
      <ProductTable className="product" contentTable={<ContentDatils data={location.state.data.details} />} infoTh={infoProduct}/>
    </div>
  )
}

export default BillDatils
