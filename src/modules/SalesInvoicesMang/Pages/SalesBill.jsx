import HeadersMang from '../../../componanets/HeaderMangeTable/HeaderMange'
import { infoCoulmn } from '../const/infoCoulmnSales'
import ProductTable from '../../../componanets/table/ProductTable'
import ContentTabel from '../Components/ContentTabel'
import { useEffect, useState } from 'react'
import axios from 'axios'

function SalesBill() {
  const [ billData , setBillData ] = useState()
  const [ allData , setAllData ] = useState()

  useEffect( () => {
    axios.get("https://api-pos.alzero1store.com/api/sale_invoices" )
    .then((function (res) {
      setBillData(res.data.data)
      setAllData(res.data.data)
    }))
  } , [])

  async function deleteBill(id) {
    const conf = window.confirm("هل تريد حذف هذه الفاتورة")
    if (conf) {
      const newData = billData.filter(ele => ele.id !== id)
      setBillData(newData)
      await axios.delete(`https://api-pos.alzero1store.com/api/sale_invoices/delete/${id}`)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }}
  return (
    <div className='main-sales'>
      <h1 className='title-sec'> فواتير المبيع</h1>
      <HeadersMang textBtn={"اضافة فاتورة"} goTo={"addBill"}/>
      <ProductTable contentTable={<ContentTabel data={billData} deletePro={deleteBill}/>} infoTh={infoCoulmn}/>
    </div>
  )
}

export default SalesBill
