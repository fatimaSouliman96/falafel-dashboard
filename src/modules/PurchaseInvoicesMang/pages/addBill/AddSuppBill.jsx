import { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios'

function AddSuppBill({ onSelect, idSupp }) {

  const [dataSupp, setDataSupp] = useState()

  useEffect(() => {
    // suppliers/dropDownSupplier
    axios.get('https://api-pos.alzero1store.com/api/suppliers/dropDownSupplier')
      .then(res => setDataSupp(res.data.data))
  }, [])

  return (
    <div>
       {dataSupp ? <select required value={idSupp} className='custom-select' placeholder="name" onChange={e => onSelect(e)} >
        <option value={0} >اختر مورد</option>
        {dataSupp.map(ele => [
          <option key={ele} value={ele.id}>{ele.name}</option>
        ])}
      </select> :   <Spinner animation="border" role="status">
          <span className="visually-hidden"></span>
        </Spinner>}
    </div>
  )
}

export default AddSuppBill
