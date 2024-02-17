import { useState } from 'react';
import './style/payPopUp.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function PayPopUp({ style , onClickCancelBill , totaValue , remainingValue , paid=0 }) {

    const [paidValue, setPaidValue] = useState(totaValue-remainingValue)
    const [remaining, setRemaining] = useState(remainingValue)

    return (

        <div className={style} >
            <div className="pay-pop-up" >
                <h1>دفع الفاتورة</h1>
                <div className='rest-add-bill'>
                    <p className='total-price' >القيمة الكلية للفاتورة = {totaValue} </p>
                </div>
                <FloatingLabel controlId="floatingInput" label="القيمة المدفوعة" className="mb-3">
                    <Form.Control value={paidValue} type="text" placeholder="amount" />
                </FloatingLabel>
                <div className='rest-add-bill' >
                    <p className='total-price' >القيمة المتبقية = {remainingValue} </p>
                </div>
                <div className='footer-btn' >

                    
                    <button onClick={() => onClickPayBill()} className='add-bill-btn' >دفع</button>
                    <button onClick={() => onClickCancelBill()} className='add-bill-btn' >الغاء</button>

                </div>
            </div>
        </div>

    )
}

export default PayPopUp

