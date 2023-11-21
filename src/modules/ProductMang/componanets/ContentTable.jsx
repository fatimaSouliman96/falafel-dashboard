import Spinner from 'react-bootstrap/Spinner';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

function ContentTable({ data, toNavigate, deletePro }) {

    return (
        <>
            {

                data ? data.map((ele, index) => [
                    <tr id={ele.id} >
                        <td>{index + 1}</td>
                        {ele.name ? <td>{ele.name}</td> : null}
                        {ele.brand ? <td>{ele.brand}</td> : null}
                        {ele.unit ? <td>{ele.unit}</td> : null}
                        {ele.description ? <td>{ele.description}</td> : null}
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

export default ContentTable
