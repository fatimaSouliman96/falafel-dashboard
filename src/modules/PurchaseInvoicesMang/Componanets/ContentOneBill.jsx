import React from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { GiTakeMyMoney } from 'react-icons/gi'
import { MdDeleteOutline } from 'react-icons/md'
import Spinner from 'react-bootstrap/Spinner';
function ContentOneBill({data , toNavigate, deletePro }) {

    return (
        <>
            {
                data ?
                    <tr key={data.id} >
                        <td>{data.invoice_number}</td>
                        <td>{data.created_by}</td>
                        <td>{data.created_at}</td>
                        <td>{data.updated_at}</td>
                        <td>{data.supplier_id}</td>
                        <td>{data.total}</td>
                        <td>{data.paid_amount}</td>
                        <td>{data.remaining_amount}</td>
                        <td>{data.status}</td>
                        <td>{data.note}</td>
                        <td className='btns' >
                            <button className='edit' onClick={e => toNavigate(index, ele.id)} > <FaRegEdit size={18} /> تعديل</button>
                            <button className='del' onClick={e => deletePro(ele.id)}><MdDeleteOutline size={18}/> حذف </button>
                            {data.status !== "Paid" ? <button className='puyPtn' onClick={() => puyBill()} ><GiTakeMyMoney size={18} /> دفع
                            </button> : null}
                        </td>
                    </tr>
                :null
                    // <Spinner animation="border" role="status">
                    //     <span className="visually-hidden">Loading...</span>
                    // </Spinner>

            }
        </>
    )
}

export default ContentOneBill
