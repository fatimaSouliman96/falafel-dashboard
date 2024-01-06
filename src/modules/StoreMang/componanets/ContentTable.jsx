import { FaRegEdit } from 'react-icons/fa';
import { GiTakeMyMoney } from "react-icons/gi";
import { MdDeleteOutline } from 'react-icons/md';
import { CgDetailsMore } from "react-icons/cg";
import { useNavigate } from 'react-router'
import Spinner from 'react-bootstrap/Spinner'

function ContentTable({data}) {
  return (
    <>
            {
                data ? data.map((ele) => [
                    <tr key={ele} >
                        <td>{ele.pro}</td>
                        <td>{ele.totalAmount}</td>
                        <td>{ele.low}</td>
                        <td className='btns' >
                            <button className='edit' onClick={e => toNavigate(index, ele.id)} > <FaRegEdit size={18} /> تعديل</button>
                            <button className='del' onClick={e => deletePro(ele.id)}><MdDeleteOutline size={18} /> حذف </button>
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

export default ContentTable
