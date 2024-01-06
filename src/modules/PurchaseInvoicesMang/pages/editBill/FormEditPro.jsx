import '../../../../componanets/style/form.css'
import { memo, useEffect, useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import ProductTable from '../../../../componanets/table/ProductTable';
import { infoProduct } from '../../const/infoProduct';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router'
import { useLocation } from "react-router-dom";
import axios from 'axios'
import ContentAddPro from '../../Componanets/ContentAddPro';
import Spinner from 'react-bootstrap/Spinner';

function FormEditPro({ onAddPro , oldItems , totalValue}) {
  const navigate = useNavigate()
  const location = useLocation();

  const [namePro, setNamePro] = useState("")
  const [idPro, setIdPro] = useState()
  const [idItem, setIdItem] = useState()
  const [ items , setItems ] = useState(oldItems)
  const [pricePro, setPricePro] = useState("")
  const [amount, setAmount] = useState("")
  const [totalPrice, setToatalPrice] = useState(0)
  const [subItems, setSubItems] = useState(oldItems)
  const [totalAmountBill, setTotalAmountBill] = useState(totalValue)

  const [dropDownPro, setDropDownPro] = useState()

  useEffect(() => {
    axios.get('https://api-pos.alzero1store.com/api/products/dropdownProduct')
      .then(res => setDropDownPro(res.data.data))
  }, [])

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
    }

  }
  
  const onClickAddPro = () => {

    let product = {
      product: namePro,
      price: pricePro,
      quantity: amount,
      sub_total: totalPrice
    }
    let total = parseInt(totalPrice) + parseInt(totalAmountBill)
    setTotalAmountBill(total)
    onAddPro(product , total)
    let supProduct = {
      Product: namePro,
      Price: pricePro,
      Quantity: amount,
      Sub_Total: totalPrice
    }
    setSubItems([...subItems, supProduct])

    
    setIdPro(0)
    setPricePro("")
    setAmount("")
    setToatalPrice(0)
  }

  const onClickCancel = () => {
    console.log(totalAmountBill)
    let product = {
      product: namePro,
      price: pricePro,
      quantity: amount,
      sub_total: totalPrice
    }
    setItems([...items, product])
    let total = parseInt(totalPrice) + parseInt(totalAmountBill)
    setTotalAmountBill(total)
    
    onAddPro(items , total)
    let supProduct = {
      Product: namePro,
      Price: pricePro,
      Quantity: amount,
      Sub_Total: totalPrice
    }
    setSubItems([...subItems, supProduct])

    
    setIdPro(0)
    setPricePro("")
    setAmount("")
    setToatalPrice(0)
  }

  const setInputs = (ele) => {

    deletePro(ele.id, ele.Sub_Total)
    setIdItem(ele.id)
    setNamePro(ele.Product)
    setAmount(ele.Quantity)
    setPricePro(ele.Price)
    setToatalPrice(ele.Sub_Total)
  }

  const deletePro = (id, subTotal) => {
    let newTotal = parseInt(totalAmountBill) - parseInt(subTotal)
    setTotalAmountBill(newTotal)
    const newData = subItems.filter(ele => ele.id !== id)
    setSubItems(newData)
    setItems(newData)
    onAddPro(newData , newTotal)

  }

  return (
    <>
      <div className='form-pro' >
        <h2>تعديل المنتجات في الفاتورة</h2>
        <div className='add-form' >
          {dropDownPro ? <select value={idPro} required className='custom-select' placeholder="name" onChange={e => onChangeOp(e)} >
            <option value={0} >اختر منتج</option>
            {dropDownPro.map(ele => [
              <option value={ele.id} key={ele}>{ele.name}</option>
            ])}
          </select> :
            <Spinner animation="border" role="status">
              <span className="visually-hidden"></span>
            </Spinner>
          }

          <FloatingLabel controlId="floatingInput" label="سعر الواحدة" className="mb-3">
            <Form.Control value={pricePro} required onBlur={() => onChangeTow()} onChange={e => onChangePrice(e)} type="text" placeholder="price" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="العدد" className="mb-3">
            <Form.Control value={amount} required onBlur={() => onChangeTow()} onChange={e => onChangeAmount(e)} type="text" placeholder="amount" />
          </FloatingLabel>

        </div>

        <p className='total-price' >  السعر الكلي للمنتج = {totalPrice} </p>
        <div className='footer-btn' >

          <button className='add-pro-btn' onClick={() => onClickCancel()} >الغاء</button>
          <button className='add-pro-btn' onClick={() => onClickAddPro()} >اضافة المنتج الى الفاتورة</button>

        </div>

        <ProductTable infoTh={infoProduct} contentTable={<ContentAddPro deletePro={deletePro} setInputs={setInputs} data={subItems} />} />
      </div>


    </>
  )
}

export default memo(FormEditPro)
