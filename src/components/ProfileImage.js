import getImage from '../StaffImages'

const ProfileImage= (props)=>{
    let uimg = getImage(props.url)
    return <img src={uimg} alt="Profile" className="img rounded-circle staff-card-img d-block mx-auto" />
}

export default ProfileImage