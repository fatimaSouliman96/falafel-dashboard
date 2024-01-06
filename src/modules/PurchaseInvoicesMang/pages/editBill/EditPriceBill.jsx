import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router'
import { useLocation } from "react-router-dom";


function EditPriceBill({onChangePaid , onChangeNote , remainingValue , paidValue , note , totalValue}) {

  const navigate = useNavigate()
  const location = useLocation();

  
  
  return (
    <div className='form-add-price' >
      <div className='rest-add-bill'>
        <p className='total-price' >القيمة الكلية للفاتورة = {totalValue} </p>
      </div>
      <FloatingLabel controlId="floatingInput" label="القيمة المدفوعة" className="mb-3">
        <Form.Control value={paidValue} onChange={e => onChangePaid(e)} type="text" placeholder="amount" />
      </FloatingLabel>
      <div className='rest-add-bill' >
        <p className='total-price' >القيمة المتبقية = {remainingValue} </p>
      </div>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>اضافة ملاحظات</Form.Label>
        <Form.Control value={note} onChange={e => onChangeNote(e)} as="textarea" rows={3} />
      </Form.Group>

    </div>
  )
}

export default EditPriceBill
