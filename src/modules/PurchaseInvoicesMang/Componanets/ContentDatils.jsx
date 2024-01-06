import { memo } from 'react'
import Spinner from 'react-bootstrap/Spinner';

function ContentDatils({ data }) {
    console.log(data)
    return (
        <>
            {
                data ? data.map((ele) => [
                    <tr key={ele}>
                        <td>{ele.Product}</td>
                        <td>{ele.Price}</td>
                        <td>{ele.Quantity}</td>
                        <td>{ele.Sub_Total}</td>             
                    </tr>
                ]) : 
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden"></span>
                    </Spinner>

            }
        </>
    )
}

export default memo(ContentDatils)
