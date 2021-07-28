import { useEffect, useState } from "react"
import StaffCard from "../components/StaffCard"
import TitleBar from "../components/TitleBar"

const Staff = (props)=>{
    const [staff, setStaff] = useState([])
    useEffect(()=>{
        let data = props.getStaff()
        setStaff(data)
    }, [])
    return (
        <>
        <TitleBar  title="Staff" />
        {
            staff.map(singStaff=>{//let myimg = require(`http://localhost/dannyvet/images/danny_vet`); console.log(myimg)
                return <StaffCard id={singStaff.id} img={singStaff.img} name={singStaff.firstName+" "+singStaff.lastName} jobTitle={singStaff.jobTitle} />
            })
        }
        </>
    )
}

export default Staff