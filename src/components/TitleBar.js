import { Row, Col } from "react-bootstrap"
import { useState } from "react"


const TitleBar = (props)=>{
    const [searchInput, setSearchInput] = useState('')
    const inputChange = e=>{
        setSearchInput(e.target.value)
        props.handleSearch(e.target.value)
    }
    let searchCol = <Col>
                        <input type="text" className="ms-auto form-control" value={searchInput} onChange={inputChange} placeholder="Search" />
                    </Col>
    return <Row className="my-3">
            <Col className="">
                <h4>{props.title}</h4>
            </Col>
            {props.handleSearch ? searchCol : ''}
        </Row>
}

export default TitleBar