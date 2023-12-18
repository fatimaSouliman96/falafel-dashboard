import React from 'react'
import ProductTable from '../../../componanets/table/ProductTable'
import {data} from '../const/dataTable'
import { infoCoulmn } from '../const/infoCoulmn'
import { useLocation } from "react-router-dom";
import ContentOneBill from '../Componanets/ContentOneBill'
import ContentDatils from '../Componanets/ContentDatils';
import { dataProduct } from '../const/dataProduct';
import { infoProduct } from '../const/infoProduct';
import './style/billDatils.css'

function BillDatils() {
    const location = useLocation();
  return (
    <div className='bill-datils' >
      <ProductTable contentTable={<ContentOneBill  data={data[location.state.id-1]} />} infoTh={infoCoulmn}/>
      <h2>تفاصيل الفاتورة</h2>
      <ProductTable className="product" contentTable={<ContentDatils data={dataProduct} />} infoTh={infoProduct}/>
    </div>
  )
}

export default BillDatils
