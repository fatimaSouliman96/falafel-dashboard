import './style/profile.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Profile() {

  return (
    <div className="div-profile" >
      <h1 className='title-sec'>تعديل الحساب</h1>
      <div className="profile" >
        <FloatingLabel controlId="floatingInput" label="الايميل" className="mb-3 email" >
          <Form.Control value="ahmad@email.com" type="email" placeholder="name" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="كلمة السر" className="mb-3" >
          <Form.Control value="uu" type="password" placeholder="name" />
        </FloatingLabel>
        <button className="add-item" >تعديل</button>
      </div>
    </div>

  )
}

export default Profile
