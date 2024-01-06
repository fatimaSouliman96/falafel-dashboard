import Spinner from 'react-bootstrap/Spinner';
import { FaRegEdit } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';

function ContentAddPro({ data , setInputs , deletePro}) {
    const toNavigate = (ele) => {
        setInputs(ele)
    }
    return (
        <>
            {
                data ? data.map((ele , index) => [
                    <tr key={ele}>
                        <td>{ele.Product}</td>
                        <td>{ele.Price}</td>
                        <td>{ele.Quantity}</td>
                        <td>{ele.Sub_Total}</td>
                        <td className='btns' >
                            <button className='edit' onClick={e => toNavigate(ele)} > <FaRegEdit size={18} /> تعديل</button>
                            <button className='del' onClick={e => deletePro(ele.Product , ele.Sub_Total)}><MdDeleteOutline size={18} /> حذف </button>
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

export default ContentAddPro
