import {Nav, Image, Figure} from 'react-bootstrap'
import {HouseFill} from 'react-bootstrap-icons'
import prof from '../images/profile_2.jpg'

const SideBar = ()=>{
    return (
        <>
            <Figure>
                <Figure.Image
                    src={prof} id="profImage" roundedCircle
                />
                <Figure.Caption className="text-light text-bold text-center fs-6">
                    John Smith<br/> John@gmail.com
                </Figure.Caption>
            </Figure>
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home" className="text-light"><HouseFill /> Dashboard</Nav.Link>
                <Nav.Link eventKey="link-1" className="text-light">Products</Nav.Link>
                <Nav.Link eventKey="link-2" className="text-light">Sales</Nav.Link>
            </Nav>
        </>
    )
}

export default SideBar