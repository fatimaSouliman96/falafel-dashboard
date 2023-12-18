import React from 'react'
import { memo } from 'react'

function ContentDatils({data , toNavigate, deletePro , onSubmit}) {
    onSubmit?onSubmit(data):null;
    return (
        <>
            {
                data ? data.map((ele) => [
                    <tr key={ele}>
                        <td>{ele.name}</td>
                        <td>{ele.price}</td>
                        <td>{ele.amount}</td>
                        <td>{ele.totalPrice}</td>               
                    </tr>
                ]) : null
                    // <Spinner animation="border" role="status">
                    //     <span className="visually-hidden">Loading...</span>
                    // </Spinner>

            }
        </>
    )
}

export default memo(ContentDatils)
