import Table from 'react-bootstrap/Table';
import '../style/table.css'

function ProductTable({ infoTh , contentTable}) {

  return (
    <div className='table'>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            {
              infoTh.map(ele => [
                <th key={ele} >{ele.name}</th>
              ])
            }
            <th></th>
          </tr>
        </thead>
        <tbody>

          {contentTable}

        </tbody>
      </Table>
    </div>
  )
}

export default ProductTable
