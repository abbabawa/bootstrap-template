import { Button } from "react-bootstrap"

const TableBody = (props)=>{
    let data = props.customers
    let rows = []
    console.log(props)
    for(let i=props.page; (i<props.page + 20) && i < data.length; i++){console.log(props.customers)
        let singleRow = <tr>
            <td>{Number(i)+1}</td>
            <td>{data[i].firstName}</td>
            <td>{data[i].lastName}</td>
            <td>{data[i].gender}</td>
            <td>{data[i].address}</td>
            <td>
                <Button className="btn btn-sm btn-primary text-light">View</Button>
            </td>
            <td>
                <Button className="btn btn-sm btn-warning text-light text-small">Edit</Button>
            </td>
            <td>
                <Button className="btn btn-sm btn-danger text-light">Delete</Button>
            </td>
        </tr>
        rows.push(singleRow)
    }
    return <tbody>{rows}</tbody>
}

export default TableBody