import React, { useState } from 'react'
import { FaRegEdit } from 'react-icons/fa';
import { GiTakeMyMoney } from "react-icons/gi";
import { MdDeleteOutline } from 'react-icons/md';
import { CgDetailsMore } from "react-icons/cg";
import { useNavigate } from 'react-router'
import Spinner from 'react-bootstrap/Spinner';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './style/contentBill.css'

function ContentBills({ data, deletePro , goTo}) {
    const navigate = useNavigate()
    const [stylePopUp, setStylePopUp] = useState("none")

    const puyBill = () => {

        setStylePopUp("pop-up-puy")

    }

    const toNavigate = (ele) => {
        navigate(goTo , {state:{oldData:ele}})
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
                            {ele.status !== "Paid" ? <button className='puyPtn' onClick={() => puyBill()} ><GiTakeMyMoney size={18} /> دفع
                            </button> : null}
                            <button className='detilsPtn' onClick={() => navigate("/falafel-dashboard/bill-datils", { state: {data:ele} })} ><CgDetailsMore size={18} /> تفاصيل</button>
                        </td>
                    </tr>


                ]) :
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden"></span>
                    </Spinner>
            }
            <div className={stylePopUp} >
                <div className='form-paid' >
                    <p className='all-amount' >القيمة الكلية = {}</p>
                    <FloatingLabel controlId="floatingInput" label="القيمة المدفوعة" className="mb-3">
                        <Form.Control type="text" placeholder="amount" />
                    </FloatingLabel>
                </div>

            </div>
        </>
    )
}

export default ContentBills
