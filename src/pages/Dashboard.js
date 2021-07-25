import { Col, Table } from "react-bootstrap"
import DashboardCard from "../components/DashboardCard"

import { Line } from 'react-chartjs-2';
import { Card } from "react-bootstrap";

const Dashboard = ()=>{
    const data = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            fill: true,
            pointRotation: 50,
            tension: 0.5,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
        ],
      };

      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };
    return (
        <>
            <Col md="3">
                <DashboardCard type="bg-info" title="SALES" value="2098" icon="sales" />
            </Col>
            <Col md="3">
                <DashboardCard type="bg-success" title="PURCHASES" value="155" icon="purchases" />
            </Col>
            <Col md="3">
                <DashboardCard type="bg-primary" title="CUSTOMERS" value="98" icon="customers" />
            </Col>
            <Col md="3">
                <DashboardCard type="bg-warning" title="SUPPLIERS" value="40" icon="suppliers" />
            </Col>
            <Col md="6" className="mt-4">
                <Card>
                    <Card.Body className="">
                        <Card.Title className="border-bottom">
                            <h4>Summary</h4>
                        </Card.Title>
                        <div className="d-flex justify-content-between">
                          <div>
                            <span>&#8358;156,043,808.00</span><br />
                            <span>Sales</span>
                          </div>
                          <div>
                            <span>&#8358;156,043,808.00</span><br />
                            <span>Purchases</span>
                          </div>
                          <div>
                            <span>&#8358;156,043,808.00</span><br />
                            <span>Expenses</span>
                          </div>
                        </div>
                        <Line data={data} options={options} />
                    </Card.Body>
                </Card>
            </Col>
            <Col md="6" className="mt-4">
				<Card>
					<Card.Body>
						<Card.Title className="border-bottom">
							<h4>Top Selling Products</h4>
						</Card.Title>
						<Card.Body className=" p-0 m-0">
							<Table striped>
								<tbody>
									<tr>
										<td>Mobile Phones</td>
										<td>&#8358;806,205,800.00</td>
									</tr>
									<tr>
										<td>Flat screen TV</td>
										<td>&#8358;806,205,800.00</td>
									</tr>
									<tr>
										<td>Air pods</td>
										<td>&#8358;205,800.00</td>
									</tr>
									<tr>
										<td>Game console</td>
										<td>&#8358;56,205,800.00</td>
									</tr>
									<tr>
										<td>Laptop</td>
										<td>&#8358;86,205,800.00</td>
									</tr>
									<tr>
										<td>Tablet</td>
										<td>&#8358;205,800.00</td>
									</tr>
									<tr>
										<td>Good Product</td>
										<td>&#8358;6,205,800.00</td>
									</tr>
								</tbody>
							</Table>
						</Card.Body>
					</Card.Body>
				</Card>
            </Col>
        </>
    )
}

export default Dashboard