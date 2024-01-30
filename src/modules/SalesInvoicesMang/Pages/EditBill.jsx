import { FaArrowLeft, FaFileInvoice } from 'react-icons/fa'
import './style/addBillSales.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import { useLocation } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router'

function EditBill() {
  const location = useLocation();
  const navigate = useNavigate()

  const [date, setDate] = useState(location.state.data.start_day_date)
  const [amount, setAmount] = useState(location.state.data.total_amount)
  const [note, setNote] = useState(location.state.data.note)

  const onChangeDate = (e) => {
    setDate(e)
  }

  const onChangeAmount = (e) => {
    setAmount(e)
  }

  const onChangeNote = (e) => {
      setNote(e)
  }

  const onSubmit = async () => {
    await axios.put(`https://api-pos.alzero1store.com/api/sale_invoices/edit/${location.state.data.id}?total_amount=${amount}&start_day_date=${date}&note=${note}`)
     .then(function (response) {
       console.log(response);
       if (response.status == 200) {
         window.confirm("تم تعديل الفاتورة بنجاح")
         navigate("/falafel-dashboard/main-sales")
       }
     })
     .catch(function (error) {
       console.log(error);
       if (error.response.status == 400) {
         window.confirm("الرجاء تعبئة جميع الحقول")
       }
       else {
         window.confirm("لم يتم تعديل الفاتورة")
       }
     });
     setDate("")
     setAmount("")
     setNote("")
  }

  const goTo = () => {
    navigate("/falafel-dashboard/main-sales")
  }

  return (
    <div className='add-bill addPro' >
      <h1 className='title-sec'>تعديل فاتورة المبيع<FaArrowLeft size={30} style={{cursor:"pointer" , color:"var(---olive)" , float:"left"}} onClick={ () => goTo() } /></h1>
      <div className='add-form' >
        <FaFileInvoice className='icon-form' size={150} />

        <div className='form' >
          <FloatingLabel controlId="floatingInput" label="تاريخ بداية اليوم" className="mb-3">
            <Form.Control value={date} type="datetime-local" placeholder="date" onChange={ e => onChangeDate(e.target.value)} />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="الكمية الكلية" className="mb-3">
            <Form.Control value={amount} type="text" placeholder="amount" onChange={ e => onChangeAmount(e.target.value)} />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="ملاحظات" className="mb-3">
            <Form.Control value={note} type="text" placeholder="note" onChange={ e => onChangeNote(e.target.value)} />
          </FloatingLabel>
          <button className='add-btn' onClick={ () => onSubmit()} >تعديل الفاتورة</button>
        </div>


      </div>
    </div>
  )
}

export default EditBill
  