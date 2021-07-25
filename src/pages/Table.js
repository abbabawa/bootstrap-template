import { useEffect, useState } from "react"
import { Button, Card, Col, NavLink, Table } from "react-bootstrap"
import TableBody from "../components/TableBody"

const SiteTable = (props)=>{
    const [customers, setCustomers] = useState([])
    const [pageNumber, setPageNumber] = useState(0)
    const [buttons, setButtons] = useState([])
    useEffect(()=>{
        let data = props.getCustomers()
        console.log(data)
        setCustomers(data)
        let count = 1
        let tempButtons = []
        for(let i=0; i<data.length; ){
            let singButton = <Button id={i} onClick={changePage} className="ms-3 mt-3">{count}</Button>
            tempButtons.push([singButton])
            i += 20
            count++
        }
        count=1
        setButtons(tempButtons)
    }, [])

    const changePage = e=>{
        setPageNumber(e.target.id)
    }

    const tableBodies = ()=>{
        return <tbody>
            <tr>
                <td>1</td>
                <td>mand</td>
            </tr>
        </tbody>
    }
    return (
        <Col md="12" className="">
            <Table className="">
                <thead>
                    <tr>
                        <th>S/no</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Address</th>
                        <th>View</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                {/* <tbody>
                    {
                        customers.map((customer, id)=>{
                            return (
                                <tr>
                                    <td>{id + 1}</td>
                                    <td>{customer.firstName}</td>
                                    <td>{customer.lastName}</td>
                                    <td>{customer.gender}</td>
                                    <td>{customer.address}</td>
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
                            )
                        })
                    }
                </tbody> */}
                <TableBody customers={customers} page={pageNumber} />
            </Table>
            <Card>
                <Card.Body className="overflow-auto">
                    {buttons.map(button=>{
                        return button
                    })}
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SiteTable