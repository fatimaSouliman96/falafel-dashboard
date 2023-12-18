import React, { useEffect, useState } from 'react'
import { dataSupplier } from '../const/dataSupplier'
import './style/addBill.css'
import { selectPro } from '../const/selectPro'
import FormAddPro from '../Componanets/FormAddPro'
import { RiBillLine } from "react-icons/ri";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import ProductTable from '../../../componanets/table/ProductTable'
import { infoProduct } from '../const/infoProduct'
import ContentDatils from '../Componanets/ContentDatils'

function AddBill() {
  console.log("rerender-Father")
  const [supplers, setSupplers] = useState()
  const [totalAmount, setTotalAmount] = useState(0)
  const [remainingValue, setRemainingValue] = useState(0)
  const [paidValue, setPaidValue] = useState()
  const [idBill, setIdBill] = useState(0)
  const [idSupp, setIdSupp] = useState()
  const [date, setDate] = useState("")
  const [note, setNote] = useState()
  const [items, setItems] = useState([])

  ////current date
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const day = today.getDate();
  const currentDate = year + "-" + month + "-" + day;
  //////add product to the bill
  const onAddPro = (items) => {
    setItems(items)
    console.log(items)
  }
  ///set supplier name
  const onChangeSupp = (e) => {
    setIdSupp(e.target.value)
    setDate(currentDate)
    if (localStorage.getItem("idBill")) {
      let newId = parseInt(localStorage.getItem("idBill")) + 1
      localStorage.setItem("idBill", newId)
      setIdBill(newId)
    } else {
      let newId = 0 + 1
      localStorage.setItem("idBill", newId)
      setIdBill(newId)
    }
  }
  ////calc total price fie the bill
  const setTotalAmountOfBill = (total) => {
    setTotalAmount(total)
  }
  ////paid amount
  const onChangePaid = (e) => {
    setPaidValue(e.target.value)
    let remaining = parseInt(totalAmount) - parseInt(e.target.value)
    setRemainingValue(remaining)

  }

  const onChangeNote = (e) => {
    setNote(e.target.value)
  }
  ///add bill
  const onClickAddBill = async () => {
    // await axios.post('https://api-pos.alzero1store.com/api/invoices', {
    //   invoice: {
    //     user_id: "1",
    //     spplier_id: idSupp,
    //     invoice_number: idBill,
    //     invoice_date: date,
    //     total_amount: totalAmount,
    //     paid_amount: paidValue,
    //     remaining_amount: remainingValue,
    //     note: note
    //   },
    //   items: items
    // }
    // )
    //   .then(function (response) {
    //     console.log(response);
    //     if (response.status == 200) {
    //       window.confirm("تم اضافة الفاتورة بنجاح")
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //     if (error.response.status == 400) {
    //       window.confirm("الرجاء تعبئة جميع الحقول")
    //     }
    //     else{
    //       window.confirm("لم يتم انشاء الفاتورة")
    //     }
    //   });
    setItems([])
    setIdSupp(0)
    setTotalAmount(0)
    setRemainingValue(0)
    setPaidValue("")
  }

  return (
    <div className='add-bill-form'>
      
      <h1>اضافة فاتورة<RiBillLine className='bill-icon' size={50} /></h1>
      {dataSupplier ? <select required value={idSupp} className='custom-select' placeholder="name" onChange={e => onChangeSupp(e)} >
        <option value={0} >اختر مورد</option>
        {dataSupplier.map(ele => [
          <option key={ele} value={ele.id}>{ele.name}</option>
        ])}
      </select> : null}
      <div className='add-pro-to-bill' >
        <h2>اضافة المنتجات الى الفاتورة</h2>
        <FormAddPro allItems={items} sendTotal={setTotalAmountOfBill} addItems={onAddPro} selectedOp="اختر منتج" dataSelect={selectPro} />
        {items.length > 0 ? <ProductTable infoTh={infoProduct} contentTable={<ContentDatils data={items} />} /> : null}
      </div>
      <div className='rest-add-bill'>
        <p className='total-price' >القيمة الكلية للفاتورة = {totalAmount} </p>
      </div>
      <FloatingLabel controlId="floatingInput" label="القيمة المدفوعة" className="mb-3">
        <Form.Control value={paidValue} onBlur={e => onChangePaid(e)} type="text" placeholder="amount" />
      </FloatingLabel>
      <div className='rest-add-bill' >
        <p className='total-price' >القيمة المتبقية = {remainingValue} </p>
      </div>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>اضافة ملاحظات</Form.Label>
        <Form.Control onBlur={e => onChangeNote(e)} as="textarea" rows={3} />
      </Form.Group>
      <button onClick={e => onClickAddBill(e)} className='add-bill-btn' >اضافة الفاتورة</button>
    
    </div>
  )
}

export default AddBill
