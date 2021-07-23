import { Bell, BoxArrowRight } from "react-bootstrap-icons"


const Header = ()=>{
    return (
        <header className="rounded border p-2 mt-2 d-flex">
            <h2>Fictitious Company</h2>
            <div className="ms-auto fs-3 me-3 text-primary">
                <Bell />
                <BoxArrowRight className="ms-4" />
            </div>
        </header>
    )
}

export default Header