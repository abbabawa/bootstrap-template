import {Col, Image} from 'react-bootstrap'
import logo from '../images/icon.png'

const SiteFooter = ()=>{
    return (
        <>
            <Col className=" ">
                <Image src={logo} className="logo" />
            </Col>
            <Col className="text-center">
                <h3>Contacts</h3>
                <p> No. 7 Old Zaria Terrace, Jos, Plateau State.</p>
                <p>Phone: +234 8133234321</p>
                <p>Email: fictitiouscompany@gmail.com</p>
            </Col>
            <Col className="text-center">
                <h3>Quick Links</h3>
            </Col>

        </>
    )
}

export default SiteFooter