import { useEffect, useState } from "react"
import { Card, Col } from "react-bootstrap"
import StaffCard from "../components/StaffCard"

import img from '../images/arya.jpg'

const Staff = (props)=>{
    const [staff, setStaff] = useState([])
    useEffect(()=>{
        let data = props.getStaff()
        setStaff(data)
    }, [])
    return (
        
        staff.map(singStaff=>{//let myimg = require(`http://localhost/dannyvet/images/danny_vet`); console.log(myimg)
            return <StaffCard img={singStaff.img} />
        })
    )
}

export default Staff