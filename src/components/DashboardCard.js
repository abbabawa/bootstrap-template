import {Card, Image} from 'react-bootstrap'
import { Cart, People, PersonLinesFill, Shop } from 'react-bootstrap-icons'
import supplierImage from '../images/suppliers.jpg'
import customerImage from '../images/customers.jpg'
import salesImage from '../images/sales.jpg'
import purchaseImage from '../images/supply.jpg'

const DashboardCard = (props)=>{
    let icon
    let img
    if(props.icon === 'sales'){
        icon = <Cart />
        img = salesImage
    }else if(props.icon === 'purchases'){
        icon = <Shop />
        img = purchaseImage
    }else if(props.icon === 'customers'){
        icon = <People />
        img = customerImage
    }else{
        icon = <PersonLinesFill />
        img = supplierImage
    }
    return (
        <Card className={props.type+" my-2"}>
            <Card.Body className="d-flex flex-wrap">
                <div className="d-flex col-12">
                    <div className="">
                        <span className="fs-6 fw-bold">{props.title}</span><br />
                        <span className="fs-4 fw-bold">{props.value}</span><br />
                        <span className="">in the last 30 days.</span>
                    </div>
                    <div className="ms-auto fs-3">
                        {icon}
                    </div>
                </div>
                <div>
                    <Image src={img} className="img img-fluid dashboard-card-img" />
                </div>
            </Card.Body>
        </Card>
    )
}

export default DashboardCard