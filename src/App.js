import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import { useState } from 'react';
import { Col, Container, Row, Button, Offcanvas } from "react-bootstrap";
import Header from './components/Header';
import SideBar from './components/SideBar';
import SiteFooter from './components/Footer';

function App() {
	const [show, setShow] = useState(false);

  	const handleClose = () => setShow(false);
  	const handleShow = () => setShow(true);
  return (
	<Container fluid>
		<Row>
			<Col md="2" className="d-none d-md-block py-5 border-right site-blue vh-100">
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
			</Col>
		</Row>
		<Row className="site-blue p-4 text-light">
			<SiteFooter />
		</Row>
	</Container>
  );
}

export default App;
