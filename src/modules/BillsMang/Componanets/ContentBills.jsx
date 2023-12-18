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

function ContentBills({ data, toNavigate, deletePro }) {
    const navigate = useNavigate()
    const [ stylePopUp , setStylePopUp ] = useState("none")

    const puyBill = () => {
        setStylePopUp("pop-up-puy")
    }
    return (
        <>
            {
                data ? data.map((ele, index) => [
                    <tr key={ele} >
                        <td>{ele.id}</td>
                        <td>{ele.userCreate}</td>
                        <td>{ele.supp}</td>
                        <td>{ele.TootalPrice}</td>
                        <td>{ele.paidPrice}</td>
                        <td>{parseInt(ele.TootalPrice) - parseInt(ele.paidPrice)}</td>
                        <td>{ele.state}</td>
                        <td>{ele.note}</td>
                        <td className='btns' >
                            <button className='edit' onClick={e => toNavigate(index, ele.id)} > <FaRegEdit size={18} /> تعديل</button>
                            <button className='del' onClick={e => deletePro(ele.id)}><MdDeleteOutline size={18} /> حذف </button>
                            {ele.state !== "مدفوع" ? <button className='puyPtn' onClick={ () => puyBill()} ><GiTakeMyMoney size={18} /> دفع </button> : null}
                            <button className='detilsPtn' onClick={() => navigate("/falafel-dashboard/bill-datils", { state: { id: ele.id } })} ><CgDetailsMore size={18} /> تفاصيل</button>
                            
                        </td>
                    </tr>


                ]) :
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden"></span>
                    </Spinner>
            }

        </>
    )
}

export default ContentBills
