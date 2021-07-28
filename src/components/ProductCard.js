import { Card, Button } from "react-bootstrap"

import one from '../images/products/pexels-pixabay-40739-1.jpg'
import two from '../images/products/pexels-ray-piedra-1456706-1.jpg'
import three from '../images/products/pexels-pixabay-40739-1.jpg'
import four from '../images/products/pexels-ready-made-3921805-1.jpg'
import five from '../images/products/pexels-ready-made-3921835-1.jpg'

const ProductCard = (props)=>{console.log(props.name)
    let img
    if(props.imgUrl === 'one'){
        img = one
    }else if(props.imgUrl === 'two'){
        img = two
    }else if(props.imgUrl === 'three'){
        img = three
    }else if(props.imgUrl === 'four'){
        img = four
    }else if(props.imgUrl === 'five'){
        img = five
    }
    return <Card className="my-2">
        <Card.Img variant="top" src={img} className="img product-card-img" />
        <Card.Body className="bg-light">
            <span className="d-block fw-bold">{props.name}</span>
            <span className="d-block fw-bold">&#8358;{props.price}</span>
            <div className="d-flex justify-content-between">
                <Button onClick={()=>{alert('edit product')}} className="btn btn-sm btn-success text-light">Edit</Button>
                <Button onClick={()=>{alert('delete product')}} className="btn btn-sm btn-danger text-light">Delete</Button>
            </div>
        </Card.Body>
    </Card>
}

export default ProductCard