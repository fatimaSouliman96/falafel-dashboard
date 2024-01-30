import ProductTable from '../../../componanets/table/ProductTable'
import { infoColumn } from '../const/infoColumn'
import ContentTable from '../componanets/ContentTable'
import { testInfoRow } from '../const/testInfoRow'
import HeadersMang from '../../../componanets/HeaderMangeTable/HeaderMange'

function MainStore() {
  return (
    <div className='store' >
      <h1 className='title-sec'>ادارة المخزن</h1>
      <HeadersMang textBtn={"اضافة الى المخزن"} goTo={"addStore"}/>
      <ProductTable infoTh={infoColumn} contentTable={<ContentTable data={testInfoRow} />}/>
    </div>
  )
}

export default MainStore
