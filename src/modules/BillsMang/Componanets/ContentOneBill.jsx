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
                        <td>{data.id}</td>
                        <td>{data.userCreate}</td>
                        <td>{data.supp}</td>
                        <td>{data.TootalPrice}</td>
                        <td>{data.paidPrice}</td>
                        <td>{parseInt(data.TootalPrice)-parseInt(data.paidPrice)}</td>
                        <td>{data.state}</td>
                        <td>{data.note}</td>
                        <td className='btns' >
                            <button className='edit' onClick={e => toNavigate(index, ele.id)} > <FaRegEdit size={18} /> تعديل</button>
                            <button className='del' onClick={e => deletePro(ele.id)}><MdDeleteOutline size={18}/> حذف </button>
                            <button className='puyPtn' ><GiTakeMyMoney size={18}/> دفع </button>
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
