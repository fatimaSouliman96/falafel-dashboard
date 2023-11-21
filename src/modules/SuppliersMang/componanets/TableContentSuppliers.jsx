import Spinner from 'react-bootstrap/Spinner';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

function TableContentSuppliers({data , toNavigate, deletePro}) {
    return (
        <>
            {
                data ? data.map((ele, index) => [
                    <tr   >
                        <td>{index + 1}</td>
                        {ele.name ? <td>{ele.name}</td> : null}
                        {ele.phone ? <td>{ele.phone}</td> : null}
                        {ele.address ? <td>{ele.address}</td> : null}
                        <td className='btns' >
                            <button className='edit' onClick={e => toNavigate(index, ele.id)} > <FaRegEdit /> تعديل</button>
                            <button className='del' onClick={e => deletePro(ele.id)}><MdDeleteOutline /> حذف </button>
                        </td>
                    </tr>
                ]) :
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>

            }
        </>
    )
}

export default TableContentSuppliers
