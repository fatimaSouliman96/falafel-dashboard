import { CiCirclePlus } from 'react-icons/ci'
import '../style/headerMange.css'
import { MdSearch } from 'react-icons/md'
import { useNavigate } from 'react-router'

function HeaderMange({textBtn , onChangeSearch , goTo}) {
    const navigate = useNavigate()
  return (
    <div className="header-table" >
        <div className="search-div">
          <input onChange={ e => onChangeSearch(e)} type="search" className='search-bar' />
          <MdSearch className='search-icon' />
          </div>
        <button onClick={() => navigate(goTo)} className='add-btn' >{textBtn}<CiCirclePlus style={{ paddingLeft: "0.5rem" }} size={35} /></button>
    </div>
  )
}

export default HeaderMange
