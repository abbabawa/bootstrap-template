import { useEffect, useState } from "react"
import { Col } from "react-bootstrap"
import {useParams} from 'react-router-dom'
import ProfileImage from "../components/ProfileImage"

import getImage from '../StaffImages'

const StaffProfile = (props)=>{
    let id = Number(useParams().id)
    let uimg
    const [profile, setProfile] = useState({
		id: '',
		firstName: "",
		lastName: "",
		jobTitle: "",
		employmentDate: "",
		img: "",
		contactInfo: {
			phone: "",
			address: ""
		},
		links: {
			facebook: "",
			twitter: "",
			mail: ""
		},
		bio: ``
	})
    useEffect(()=>{
        let data = props.getStaffProfile(id)
        setProfile(data)
        //uimg = getImage(profile.img)
        console.log(data)
    }, [])
    return <>
        <Col md="5" className="text-center border-end">
            <ProfileImage url={profile.img} />
            {/* <img src={uimg} alt="Profile" className="img rounded-circle staff-card-img d-block mx-auto" /> */}
            <span className="d-block">{profile.firstName+" "+profile.lastName}</span>
            <span className="d-block">{"Part of the company since "+profile.employmentDate}</span>
        </Col>
        <Col md="7" className="d-flex flex-wrap">
            <div className="col-12 col-md-6 p-2">
                <h5 className="border-bottom bg-light p-2">Contact Info</h5>
                <p><span className="fw-bold fst-italic">Phone:</span> {profile.contactInfo.phone}</p>
                <p><span className="fw-bold fst-italic">Address:</span> {profile.contactInfo.address}</p>
            </div>
            <div className="col-12 col-md-6 p-2">
                <h5 className="border-bottom bg-light p-2">Links</h5>
                <p><span className="fw-bold fst-italic">facebook</span> {profile.links.facebook}</p>
                <p><span className="fw-bold fst-italic">twitter</span> {profile.links.twitter}</p>
                <p><span className="fw-bold fst-italic">mail</span> {profile.links.mail}</p>
            </div>
            <div className="p-2">
                <h5 className="border-bottom bg-light p-2">A little about {profile.firstName+" "+profile.lastName}</h5>
                <p>{profile.bio}</p>
            </div>
        </Col>
    </>
}

export default StaffProfile