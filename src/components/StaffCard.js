import {Col, Card, NavLink} from 'react-bootstrap'
import getImage from '../StaffImages'

const StaffCard = (props)=>{console.log(getImage)
    let img = getImage(props.img)
    
    return <Col md="3" className="my-2 ">
                <Card className="">
                    <Card.Img variant="top" src={img} alt="my img" className="img staff-card-img rounded-circle mx-auto my-3 border border-dark" />
                    <Card.Body className="bg-light">
                        <span className="d-block fs-5 fw-bold">{props.name}</span>
                        <span className="d-block fs-6 fst-italic">{props.jobTitle}</span>
                        <NavLink href={`/staff_profile/${props.id}`} className="btn btn-primary text-light">View</NavLink>
                    </Card.Body>
                </Card>
            </Col>
}

export default StaffCard