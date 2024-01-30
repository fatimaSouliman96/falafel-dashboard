import { IoStorefront } from "react-icons/io5"
import './style/addStore.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form'
import { FaArrowLeft } from "react-icons/fa";
import '../../../componanets/style/form.css'
import { useNavigate } from 'react-router'

function AddToStore() {
    const navigate = useNavigate()


    const goTo = () => {
        navigate("/falafel-dashboard/main-store")
      }
    return (
        <div className="addPro" >
            <h1 className='title-sec'>اضافة الى المخزن<FaArrowLeft size={30} style={{cursor:"pointer" , color:"var(---olive)" , float:"left"}} onClick={ () => goTo() } /></h1>
            <div className="add" >
                <div className="form-input" >
                    <FloatingLabel controlId="floatingInput" label="المنتج" className="mb-3">
                        <Form.Control type="text" placeholder="pro" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingInput" label="الكمية الكلية" className="mb-3">
                        <Form.Control type="text" placeholder="amount" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingInput" label="الحد الادنى" className="mb-3">
                        <Form.Control type="text" placeholder="amount" />
                    </FloatingLabel>

                    <button className="add-item" >اضافة</button>
                </div>
                <IoStorefront className='icon-form' size={150} />
            </div>

        </div>
    )
}

export default AddToStore
