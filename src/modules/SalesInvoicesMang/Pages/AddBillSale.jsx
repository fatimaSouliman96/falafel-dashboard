import { FaArrowLeft, FaFileInvoice } from 'react-icons/fa'
import './style/addBillSales.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router'

function AddBillSale() {
  const navigate = useNavigate()

  const [ date , setDate ] = useState()
  const [ amount , setAmount ] = useState()
  const [ note , setNote ] = useState()

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
     await axios.post('https://api-pos.alzero1store.com/api/sale_invoices/create', {
      user_id:1,
      start_day_date:date,
      total_amount:amount,
      note:note
    }
    )
      .then(function (response) {
        console.log(response);
        if (response.status == 200) {
          window.confirm("تم اضافة الفاتورة بنجاح")
          navigate("/falafel-dashboard/main/main-sales")
        }
      })
      .catch(function (error) {
        console.log(error);
        if (error.response.status == 400) {
          window.confirm("الرجاء تعبئة جميع الحقول")
        }
        else {
          window.confirm("لم يتم انشاء الفاتورة")
        }
      });
    setAmount("")
    setDate("")
    setNote("")
  }

  const goTo = () => {
    navigate("/falafel-dashboard/main/main-sales")
  }

  return (
    <div className='add-bill addPro' >
      <h1 className='title-sec'>اضافة فاتورة مبيع<FaArrowLeft size={30} style={{cursor:"pointer" , color:"var(---olive)" , float:"left"}} onClick={ () => goTo() } /></h1>
      <div className='add-form' >
      <FaFileInvoice className='icon-form' size={150} />
        <div className='form form-input' >

          <FloatingLabel controlId="floatingInput" label="تاريخ بداية اليوم" className="mb-3">
            <Form.Control onChange={ e => onChangeDate(e.target.value)} value={date}  type="datetime-local" placeholder="date" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="الكمية الكلية" className="mb-3">
            <Form.Control onChange={e => onChangeAmount(e.target.value)} value={amount}  type="text" placeholder="amount" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="ملاحظات" className="mb-3">
            <Form.Control onChange={e => onChangeNote(e.target.value)} value={note}  type="text" placeholder="note" />
          </FloatingLabel>

          <button onClick={() => onSubmit()} className='add-btn' >اضافة الفاتورة</button>
        </div>
       

      </div>
    </div>
  )
}

export default AddBillSale
