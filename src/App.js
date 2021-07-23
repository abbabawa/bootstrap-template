import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import { Col, Container, Row } from "react-bootstrap";
import Header from './components/Header';
import SideBar from './components/SideBar';
import SiteFooter from './components/Footer';

function App() {
  return (
	<Container fluid>
		<Row>
			<Col md="2" className="p-5 border-right site-blue vh-100">
				<SideBar />
			</Col>
			<Col>
				<Header />
			</Col>
		</Row>
		<Row className="site-blue p-4 text-light">
			<SiteFooter />
		</Row>
	</Container>
  );
}

export default App;
