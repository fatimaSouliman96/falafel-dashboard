import Spinner from 'react-bootstrap/Spinner';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from 'react-router'

function ContentTabel({ data , deletePro }) {
    const navigate = useNavigate()
     const toNavigate = (ele) => {
        navigate("editBill" , {state:{data:ele}} )
     }
  return (
    <>
    {

        data ? data.map((ele) => [
            <tr key={ele} id={ele.id} >
                <td>{ele.start_day_date}</td>
                <td>{ele.total_amount}</td>
                <td>{ele.note}</td>
                <td className='btns' >
                    <button className='edit' onClick={e => toNavigate(ele)} > <FaRegEdit /> تعديل</button>
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

export default ContentTabel
