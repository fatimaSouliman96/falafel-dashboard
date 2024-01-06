import { Outlet } from 'react-router'
import './style/mainSuppliers.css'

function MainSuppliers() {
  return (
    <div className='main-suppliers' >
      <Outlet />
    </div>
  )
}

export default MainSuppliers
