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
				<Row className="py-3">
					<Switch>
						<Route path="/form">
							<SiteForm handleSubmit={handleSubmit} />
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
