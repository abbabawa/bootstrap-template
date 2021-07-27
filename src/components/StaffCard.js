import {Col, Card, NavLink} from 'react-bootstrap'

//TODO: simulate actual dynamic display of images from a server
import arnold from '../images/arnold-1.jpg'
import arya from '../images/arya-1.jpg'
import female from '../images/female_portrait-1.jpg'
import johnson from '../images/johnson-1.jpg'
import sam from '../images/sam-1.jpg'
import portrait from '../images/portrait-1.jpg'

const StaffCard = (props)=>{
    let img
    if(props.img === 'arnold'){
        img = arnold
    }else if(props.img === 'arya'){
        img = arya
    }else if(props.img === 'female'){
        img = female
    }else if(props.img === 'johnson'){
        img = johnson
    }else if(props.img === 'sam'){
        img = sam
    }else if(props.img === 'portrait'){
        img = portrait
    }
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