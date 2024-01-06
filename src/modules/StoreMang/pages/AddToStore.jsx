import { IoStorefront } from "react-icons/io5"
import './style/addStore.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form'

function AddToStore() {
    return (
        <div className="add" >
            <h1>اضافة الى المخزن</h1>
            <div className="add-store" >
                <div className="form" >
                    <FloatingLabel controlId="floatingInput" label="المنتج" className="mb-3">
                        <Form.Control type="text" placeholder="pro" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingInput" label="الكمية الكلية" className="mb-3">
                        <Form.Control type="text" placeholder="amount" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingInput" label="الحد الادنى" className="mb-3">
                        <Form.Control type="text" placeholder="amount" />
                    </FloatingLabel>

                    <button className="add-btn" >اضافة</button>
                </div>
                <IoStorefront size={150} />
            </div>

        </div>
    )
}

export default AddToStore
