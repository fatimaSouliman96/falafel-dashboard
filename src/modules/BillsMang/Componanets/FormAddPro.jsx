import '../../../componanets/style/form.css'
import { memo, useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import ProductTable from '../../../componanets/table/ProductTable';
import ContentDatils from './ContentDatils'
import { infoProduct } from '../const/infoProduct';

function FormAddPro({ selectedOp, dataSelect, addItems, sendTotal, allItems=[]}) {

  console.log("rerenderSon")
  const [idPro, setIdPro] = useState()
  const [namePro, setNamePro] = useState("")
  const [pricePro, setPricePro] = useState("")
  const [amount, setAmount] = useState("")
  const [totalPrice, setToatalPrice] = useState(0)
  const [items, setItems] = useState([])
  const [totalAmountBill, setTotalAmountBill] = useState(0)


  const onChangeOp = (e) => {
    setIdPro(e.target.value)
    setNamePro(e.target.selectedOptions[0].innerText)
  }
  const onChangePrice = (e) => {
    setPricePro(e.target.value)
  }
  const onChangeAmount = (e) => {
    setAmount(e.target.value)
  }
  const onChangeTow = () => {
    if (amount != 0 & pricePro != 0) {
      let newPrice = parseInt(amount) * parseInt(pricePro)
      setToatalPrice(newPrice)
      let product = {
        name: namePro,
        price: pricePro,
        amount: amount,
        totalPrice: totalPrice
      }
      setItems([...items, product])
    }

  }

  const onClickAddPro = () => {
   
    addItems(items)
    let total = parseInt(totalPrice) + parseInt(totalAmountBill)
    setTotalAmountBill(total)
    sendTotal(total)
    setIdPro(0)
    setPricePro("")
    setAmount("")
    setToatalPrice(0)
  }
  

  return (
    <>
      <div className='form-pro' >
        {dataSelect ? <select value={idPro} required className='custom-select' placeholder="name" onChange={e => onChangeOp(e)} >
          <option value={0} >{selectedOp}</option>
          {dataSelect.map(ele => [
            <option value={ele.id} key={ele}>{ele.name}</option>
          ])}
        </select> : null}

        <FloatingLabel controlId="floatingInput" label="سعر الواحدة" className="mb-3">
          <Form.Control value={pricePro} required onBlur={() => onChangeTow()} onChange={e => onChangePrice(e)} type="text" placeholder="price" />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label="العدد" className="mb-3">
          <Form.Control value={amount} required onBlur={() => onChangeTow()} onChange={e => onChangeAmount(e)} type="text" placeholder="amount" />
        </FloatingLabel>
        <p className='total-price' >  السعر الكلي للمنتج = {totalPrice} </p>

        <button className='add-pro-btn' onClick={() => onClickAddPro()} >اضافة المنتج الى الفاتورة</button>
        
      </div>

    </>
  )
}

export default memo(FormAddPro)
