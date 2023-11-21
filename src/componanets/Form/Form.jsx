import Input from '../input/Input'
import '../style/form.css'

function Form({ data , change , onSubmit , ref , value , typeBtn}) {
  return (
    <form className='form-input' onSubmit={ (event) => onSubmit(event)}>
      {
        data.map((ele , index) => [
          <Input  value={value?value[index]:null} ref={ref} onChange={change} typeInput={ele.type} placeholder={ele.place} label={ele.label} />
        ])
      }
      <input type='submit' className='submit' value={typeBtn}/>
    </form>
  )
}

export default Form
