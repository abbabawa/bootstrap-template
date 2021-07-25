import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import { useState } from 'react';
import { Route, Switch } from 'react-router';
import { Col, Container, Row, Button, Offcanvas } from "react-bootstrap";
import Header from './components/Header';
import SideBar from './components/SideBar';
import SiteFooter from './components/Footer';
import Dashboard from './pages/Dashboard';
import SiteForm from './pages/Form';
import SiteTable from './pages/Table';

let customers = [
	{
		id: 1,
		firstName: "John",
		lastName: "Jones",
		gender: "male",
		address: "No 7, new layout Abuja",
	},
	{
		id: 2,
		firstName: "Sam",
		lastName: "Jackson",
		gender: "male",
		address: "No 57, Gada biu Jos, Plateau state.",
	},
	{
		id: 3,
		firstName: "John",
		lastName: "Doe",
		gender: "male",
		address: "No 7, Rayfield Jos, Plateau state",
	},
	{
		id: 4,
		firstName: "Mercy",
		lastName: "Michael",
		gender: "female",
		address: "No 7, Idumota, Lagos",
	},
	{
		id: 5,
		firstName: "Patience",
		lastName: "Samuel",
		gender: "female",
		address: "opp. sele nei private school jos. Plateau state",
	},
	{
		id: 6,
		firstName: "Peter",
		lastName: "Pan",
		gender: "male",
		address: "No 7, new layout Abuja",
	},
	{
		id: 7,
		firstName: "John",
		lastName: "Jones",
		gender: "male",
		address: "No 7, new layout Abuja",
	},
	{
		id: 8,
		firstName: "Sam",
		lastName: "Jackson",
		gender: "male",
		address: "No 57, Gada biu Jos, Plateau state.",
	},
	{
		id: 9,
		firstName: "John",
		lastName: "Doe",
		gender: "male",
		address: "No 7, Rayfield Jos, Plateau state",
	},
	{
		id: 10,
		firstName: "Mercy",
		lastName: "Michael",
		gender: "female",
		address: "No 7, Idumota, Lagos",
	},
	{
		id: 11,
		firstName: "Patience",
		lastName: "Samuel",
		gender: "female",
		address: "opp. sele nei private school jos. Plateau state",
	},
	{
		id: 12,
		firstName: "Peter",
		lastName: "Pan",
		gender: "male",
		address: "No 7, new layout Abuja",
	},
	{
		id: 13,
		firstName: "Sam",
		lastName: "Jackson",
		gender: "male",
		address: "No 57, Gada biu Jos, Plateau state.",
	},
	{
		id: 14,
		firstName: "John",
		lastName: "Doe",
		gender: "male",
		address: "No 7, Rayfield Jos, Plateau state",
	},
	{
		id: 15,
		firstName: "Mercy",
		lastName: "Michael",
		gender: "female",
		address: "No 7, Idumota, Lagos",
	},
	{
		id: 16,
		firstName: "Patience",
		lastName: "Samuel",
		gender: "female",
		address: "opp. sele nei private school jos. Plateau state",
	},
	{
		id: 17,
		firstName: "Peter",
		lastName: "Pan",
		gender: "male",
		address: "No 7, new layout Abuja",
	},
	{
		id: 18,
		firstName: "John",
		lastName: "Jones",
		gender: "male",
		address: "No 7, new layout Abuja",
	},
	{
		id: 19,
		firstName: "Sam",
		lastName: "Jackson",
		gender: "male",
		address: "No 57, Gada biu Jos, Plateau state.",
	},
	{
		id: 20,
		firstName: "John",
		lastName: "Doe",
		gender: "male",
		address: "No 7, Rayfield Jos, Plateau state",
	},
	{
		id: 21,
		firstName: "Peter",
		lastName: "Pan",
		gender: "male",
		address: "No 7, new layout Abuja",
	},
	{
		id: 22,
		firstName: "Sam",
		lastName: "Jackson",
		gender: "male",
		address: "No 57, Gada biu Jos, Plateau state.",
	},
	{
		id: 23,
		firstName: "John",
		lastName: "Doe",
		gender: "male",
		address: "No 7, Rayfield Jos, Plateau state",
	},
	{
		id: 24,
		firstName: "Mercy",
		lastName: "Michael",
		gender: "female",
		address: "No 7, Idumota, Lagos",
	},
	{
		id: 25,
		firstName: "Patience",
		lastName: "Samuel",
		gender: "female",
		address: "opp. sele nei private school jos. Plateau state",
	},
	{
		id: 26,
		firstName: "Peter",
		lastName: "Pan",
		gender: "male",
		address: "No 7, new layout Abuja",
	},
	{
		id: 27,
		firstName: "John",
		lastName: "Jones",
		gender: "male",
		address: "No 7, new layout Abuja",
	},
	{
		id: 28,
		firstName: "Sam",
		lastName: "Jackson",
		gender: "male",
		address: "No 57, Gada biu Jos, Plateau state.",
	},
	{
		id: 29,
		firstName: "John",
		lastName: "Doe",
		gender: "male",
		address: "No 7, Rayfield Jos, Plateau state",
	}
]

const getCustomers = ()=>{
	return customers
}

function App() {
	const [show, setShow] = useState(false);

  	const handleClose = () => setShow(false);
  	const handleShow = () => setShow(true);

	const handleSubmit = (data)=>{
		console.log(data)
        alert("Form submitted")
    }
  return (
	<Container fluid>
		<Row>
			<Col md="2" className="d-none d-md-block py-5 border-right site-blue">
				<SideBar />
			</Col>
			<Col>
				<Row className="px-4">
					<Header />
					<div className="d-md-none m-2">
						<Button variant="primary" onClick={handleShow}>
							Launch
						</Button>

						<Offcanvas show={show} onHide={handleClose} className="site-blue">
							<Offcanvas.Header closeButton>
							<Offcanvas.Title>Offcanvas</Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body>
								<SideBar />
							</Offcanvas.Body>
						</Offcanvas>
					</div>
				</Row>
				<Row className="py-3 px-4">
					<Switch>
						<Route path="/form">
							<SiteForm handleSubmit={handleSubmit} />
						</Route>
						<Route path="/table">
							<SiteTable getCustomers={getCustomers} />
						</Route>
						<Route path="/">
							<Dashboard />
						</Route>
					</Switch>
				</Row>
			</Col>
		</Row>
		<Row className="site-blue p-4 text-light">
			<SiteFooter />
		</Row>
	</Container>
  );
}

export default App;
