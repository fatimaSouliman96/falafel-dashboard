import { useRef, useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Input(props) {

  const ref = useRef()
  
  function change(value , placeholder ) {
    props.onChange(value , placeholder);
}
function remove(event){
  props.remove(event)
}
  return (
    <div className={props.styleInput} >
       <FloatingLabel controlId="floatingInput" label={props.label} className="mb-3" >
        <Form.Control  value={props.value} ref={ref} onChange={ (event) => change(event.target.value , event.target.placeholder) } type={props.typeInput} placeholder={props.placeholder} />
      </FloatingLabel>
    </div>
  )
}

export default Input
