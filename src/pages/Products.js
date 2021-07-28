import { useEffect, useState } from "react"
import { Col } from "react-bootstrap"
import ProductCard from "../components/ProductCard"
import TitleBar from "../components/TitleBar"


const Products = (props)=>{
    const [products, setProducts] = useState([])
    useEffect(()=>{
        let data = props.getProducts()
        setProducts(data)
        console.log(data)
    }, [])

    const acceptInput = searchString=>{
        let data = props.searchProducts(searchString)
        setProducts(data)
    }
    return <> 
        <TitleBar handleSearch={acceptInput} title="Products" />
        {
            products.map(product=>{
                return <Col md="3">
                    <ProductCard imgUrl={product.img} name={product.name} price={product.price} id={product.id} />
                </Col>
            })
        }
    </>
}

export default Products