import React, { useState } from 'react'
import { FaRegEdit } from 'react-icons/fa';
import { GiTakeMyMoney } from "react-icons/gi";
import { MdDeleteOutline } from 'react-icons/md';
import { CgDetailsMore } from "react-icons/cg";
import { useNavigate } from 'react-router'
import Spinner from 'react-bootstrap/Spinner';
import PayPopUp from './PayPopUp';
import './style/payPopUp.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import axios from 'axios'

function ContentBills({ data, deletePro, goTo , setDataAfterPayBill}) {
    const navigate = useNavigate()
    const [stylePopUp, setStylePopUp] = useState("none")
    const [remainingValue, setRemainingValue] = useState(0)
    const [paidValue, setPaidValue] = useState(0)
    const [totalValue, setTotalValue] = useState(0)
    const [ id , setId ] = useState()

    const payBill = (id,total,paid,remaining) => {

        setStylePopUp("box")
        setId(id)
        setPaidValue(paid)
        setTotalValue(total)
        setRemainingValue(remaining)
        
        
    }

    const toNavigate = (ele) => {
        navigate(goTo, { state: { oldData: ele } })
    }

    const onClickCancelBill = () => {
        setStylePopUp("none")
        setTotalValue(0)
        setRemainingValue(0)
        setPaidValue(0)
    }
    const cahngePaid = (value) => {
            setPaidValue(value)
           
    }
    const newValue = (value) =>{
        let newRem= parseInt(remainingValue) - parseInt(value)
        setRemainingValue(newRem)
    }
    const clickPay = () => {
        axios.post(`https://api-pos.alzero1store.com/api/invoice_Partiallies/create/${id}`,
        {
            user_id: 1,
            paid_amount: paidValue,
            remaining_amount: remainingValue
        })
        .then(res=>console.log(res))
    }
    return (
        <>
            {
                data ? data.map((ele, index) => [
                    <tr key={ele} >
                        <td>{ele.invoice_number}</td>
                        <td>{ele.created_by}</td>
                        <td>{ele.created_at}</td>
                        <td>{ele.updated_at}</td>
                        <td>{ele.supplier_id}</td>
                        <td>{ele.total}</td>
                        <td>{ele.paid_amount}</td>
                        <td>{ele.remaining_amount}</td>
                        <td>{ele.status}</td>
                        <td>{ele.note}</td>
                        <td className='btns' >
                            <button className='edit' onClick={e => toNavigate(ele)} > <FaRegEdit size={18} /> تعديل</button>
                            <button className='del' onClick={e => deletePro(ele.id)}><MdDeleteOutline size={18} /> حذف </button>
                            {ele.status !== "Paid" ? <button className='puyPtn' onClick={() => payBill(ele.id,ele.total,ele.paid_amount,ele.remaining_amount)} ><GiTakeMyMoney size={18} /> دفع
                            </button> : null}
                            <button className='detilsPtn' onClick={() => navigate("/falafel-dashboard/main/bill-datils", { state: { data: ele } })} ><CgDetailsMore size={18} /> تفاصيل</button>

                        </td>
                    </tr>


                ]) :
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden"></span>
                    </Spinner>
            }
            <div className={stylePopUp} >
            <div className="pay-pop-up" >

                <h1>دفع الفاتورة</h1>

                <div className='rest-add-bill'>
                    <p className='total-price' >القيمة الكلية للفاتورة = {totalValue} </p>
                </div>

                <FloatingLabel controlId="floatingInput" label="القيمة المدفوعة" className="mb-3">
                    <Form.Control value={paidValue} onBlur={e => newValue(e.target.value)} onChange={ e => cahngePaid(e.target.value)} type="text" placeholder="amount" />
                </FloatingLabel>

                <div className='rest-add-bill' >
                    <p className='total-price' >القيمة المتبقية = {remainingValue} </p>
                </div>

                <div className='footer-btn' >

                    
                    <button onClick={() => clickPay()} className='add-bill-btn' >دفع</button>
                    <button onClick={() => onClickCancelBill()} className='add-bill-btn' >الغاء</button>

                </div>
            </div>
        </div>
        </>
    )
}

export default ContentBills
