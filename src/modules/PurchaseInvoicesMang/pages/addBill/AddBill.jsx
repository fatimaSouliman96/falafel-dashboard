import { useState , useEffect} from 'react'
import '../style/addBill.css'
import { RiBillLine } from "react-icons/ri";
import AddPriceBill from './AddPriceBill';
import AddSuppBill from './AddSuppBill';
import { useNavigate } from 'react-router'
import axios from 'axios'
import ProductTable from '../../../../componanets/table/ProductTable';
import { infoProduct } from '../../const/infoProduct';
import ContentAddPro from '../../Componanets/ContentAddPro';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';



function AddBill() {
  const navigate = useNavigate()

  const [idSupp, setIdSupp] = useState()
  const [ items , setItems ] = useState([])
  const [subItems, setSubItems] = useState([])
  const [remainingValue, setRemainingValue] = useState()
  const [paidValue, setPaidValue] = useState()
  const [totalValue, setTotalValue] = useState(0)
  const [note, setNote] = useState()
  
  const [namePro, setNamePro] = useState()
  const [idPro, setIdPro] = useState(0)
  const [pricePro, setPricePro] = useState()
  const [amount, setAmount] = useState()
  const [totalPrice, setTotalPrice] = useState(0)
  const [dropDownPro, setDropDownPro] = useState()
////////////// Supplier id  ///////////////
  const onSelect = (e) => {
    setIdSupp(e.target.value)
  }
////////////// Supplier id ///////////////

/////////// Products //////////////


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
    setTotalPrice(newPrice)
  }

}

const onClickAddPro = () => {
  let product = {
    id:idPro,
    product: namePro,
    price: pricePro,
    quantity: amount,
    sub_total: totalPrice
  }
  
  let supProduct = {
    Product: namePro,
    Price: pricePro,
    Quantity: amount,
    Sub_Total: totalPrice
  }
    setItems([...items, product])
    setSubItems([...subItems, supProduct])
    let total = parseInt(product.sub_total) + parseInt(totalValue)
    setTotalValue(total)
 
      
  setIdPro(0)
  setPricePro("")
  setAmount("")
  setTotalPrice(0)
}

const onClickCancel = () => {
  setIdPro(0)
  setPricePro("")
  setAmount("")
  setTotalPrice(0)
}

  const setInputs = (ele) => {
    deletePro(ele.Product, ele.Sub_Total)
    setNamePro(ele.Product)
    setAmount(ele.Quantity)
    setPricePro(ele.Price)
    setTotalPrice(ele.Sub_Total)
  }
  const deletePro = (pro, subTotal) => {
    let newTotal = parseInt(totalValue) - parseInt(subTotal)
    setTotalValue(newTotal)
    const newData = subItems.filter(ele => ele.Product!== pro)
    setItems(newData)
    setSubItems(newData)
  }
/////////// Products //////////////

//////////// Paid value ////////////////
const onChangePaid = (e) => {
  console.log(e.target.value)
  setPaidValue(e.target.value)
  let remaining = parseInt(totalValue) - parseInt(e.target.value)
  setRemainingValue(remaining)
}
//////////// Paid value ////////////////

///////// note //////////////
const onChangeNote = (e) => {
  setNote(e.target.value)
}

  ////current date
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const day = today.getDate();
  const currentDate = year + "-" + month + "-" + day;
////current date

  const onClickAddBill = async () => {
    if (localStorage.getItem("idBill")) {
      let newId = parseInt(localStorage.getItem("idBill")) + 1
      localStorage.setItem("idBill", newId)
    } else {
      let newId = 0 + 1
      localStorage.setItem("idBill", newId)
    }
      
      
    await axios.post('https://api-pos.alzero1store.com/api/invoices', {
      invoice: {
        user_id: "1",
        spplier_id: idSupp,
        invoice_number: localStorage.getItem("idBill"),
        invoice_date: currentDate,
        total_amount: totalValue,
        paid_amount: paidValue,
        remaining_amount: remainingValue,
        note: note
      },
      items: items
    }
    )
      .then(function (response) {
        console.log(response);
        if (response.status == 200) {
          window.confirm("تم اضافة الفاتورة بنجاح")
          navigate("/falafel-dashboard/all-bills")
        }
      })
      .catch(function (error) {
        console.log(error);
        if (error.response.status == 400) {
          window.confirm("الرجاء تعبئة جميع الحقول")
        }
        else {
          window.confirm("لم يتم انشاء الفاتورة")
        }
      });
      setIdSupp(0)
      setNote("")
      setTotalValue(0)
      setRemainingValue(0)
      setPaidValue("")
      setItems([])
      setSubItems([])
  }
  const onClickCancelBill = () => {   
    setIdSupp(0)
    setNote("")
    setTotalValue(0)
    setRemainingValue(0)
    setPaidValue("")
    setItems([])
    setSubItems([])
   
  }
  return (
    <div className='add-bill-form'>

      <h1>اضافة فاتورة<RiBillLine className='bill-icon' size={50} /></h1>
      <AddSuppBill onSelect={onSelect} idSupp={idSupp}/>
      <div className='add-pro-to-bill' >
      <div className='form-pro' >
        <h2>اضافة المنتجات في الفاتورة</h2>
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
       
      </div>
       {items.length!==0?<ProductTable infoTh={infoProduct} contentTable={<ContentAddPro deletePro={deletePro} setInputs={setInputs} data={subItems} />} />:null}
      </div>
      <AddPriceBill totalValue={totalValue} paidValue={paidValue} remainingValue={remainingValue} note={note} onChangePaid={onChangePaid} onChangeNote={onChangeNote} />
      
      <div className='footer-btn' >
      
      <button onClick={() => onClickCancelBill()} className='add-bill-btn' >الغاء</button>
      <button onClick={() => onClickAddBill()} className='add-bill-btn' >اضافة الفاتورة</button>

      </div>
      

    </div>
  )
}

export default AddBill
