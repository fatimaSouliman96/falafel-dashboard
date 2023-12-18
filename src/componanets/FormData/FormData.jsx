import Input from '../input/Input'
import '../style/form.css'


function FormData({ data , change , onSubmit , value , typeBtn }) {
  const changeOp = (value) => {
    change(value)
  }
  return (
    <div className='form-input' >
      {
        data.map((ele , index) => [
          <Input  value={value?value[index]:null} onChange={change} typeInput={ele.type} placeholder={ele.place} label={ele.label} />
        ])
      }
      {typeBtn!=="none"?<button className='add-item' onClick={ (event) => onSubmit(event)} >{typeBtn}</button>:null}
    </div>
  )
}

export default FormData
