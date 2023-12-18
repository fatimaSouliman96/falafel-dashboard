import './style/mainStore.css'
import ProductTable from '../../../componanets/table/ProductTable'
import { infoColumn } from '../const/infoColumn'
import ContentTable from '../componanets/ContentTable'
import { testInfoRow } from '../const/testInfoRow'

function MainStore() {
  return (
    <div className='store' >
      <h1>ادارة المخزن</h1>
      <ProductTable infoTh={infoColumn} contentTable={<ContentTable data={testInfoRow} />}/>
    </div>
  )
}

export default MainStore
