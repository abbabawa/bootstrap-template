import {Col, Card} from 'react-bootstrap'

//TODO: simulate actual dynamic display of images from a server
import arnold from '../images/arnold.jpg'
import arya from '../images/arya-1.jpg'
import female from '../images/female_portrait.jpg'
import johnson from '../images/johnson.jpg'
import sam from '../images/sam.jpg'
import portrait from '../images/portrait.jpg'

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
    return <Col md="3">
                <Card>
                    <Card.Img variant="top" src={img} alt="my img" className="img staff-card-img" />
                    <Card.Body>

                    </Card.Body>
                </Card>
            </Col>
}

export default StaffCard