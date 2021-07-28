import {Nav, Figure} from 'react-bootstrap'
import {Box, HouseFill, InputCursorText, People, Table } from 'react-bootstrap-icons'
import prof from '../images/profile_2.jpg'

const SideBar = ()=>{
    return (
        <>
            <Figure className="text-center" style={{width: "100%"}}>
                <Figure.Image
                    src={prof} id="profImage" roundedCircle
                />
                <Figure.Caption className="text-light text-bold text-center fs-6">
                    John Smith<br/> John@gmail.com
                </Figure.Caption>
            </Figure>
            <Nav defaultActiveKey="/" className="flex-column ps-3">
                <Nav.Link href="/" className="text-light"><HouseFill /> Dashboard</Nav.Link>
                <Nav.Link href="/products" eventKey="link-1" className="text-light"><Box /> Products</Nav.Link>
                <Nav.Link href="/table" eventKey="link-2" className="text-light"><Table /> Table</Nav.Link>
                <Nav.Link href="/form" eventKey="link-2" className="text-light"><InputCursorText /> Form</Nav.Link>
                <Nav.Link href="/Staff" eventKey="link-2" className="text-light"><People /> Staff</Nav.Link>
            </Nav>
        </>
    )
}

export default SideBar