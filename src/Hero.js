import React, { Component} from 'react';

import './Hero.css';
import {Container, Row, Col, Card, Button, ProgressBar, Accordion} from 'react-bootstrap';


// render state name and value bar
class Stat extends Component{
	// constructor(props){
	// 	super(props);
	// }
	
	render() {
		return(
			<Row className="align-items-center mt-1">
				<Col xs={5} md={6} lg={6}>
					{this.props.statName}
				</Col>
				<Col>
					<ProgressBar now={this.props.statValue} />
				</Col>
			</Row>
		)
	}
}

// render team info: weight, height and accumulated stat
class HeroTeam extends Component {
	// constructor(props){
	// 	super(props);
	// }

	// componentDidMount(props, state){
	// 	console.log("Team did Mount")
	// }
	// componentDidUpdate = () => {
	// 	console.log("Team Updated")
	// }
	// componentWillUnmount = () => {
	// 	console.log("Team card removed")
	// }
	render() {
		// console.log("Team rendered", this.props.teamInfo.length)
		return(
			<Card className="bg-dark text-white">
				{this.props.teamInfo.length !== 0 ?
					<Card.Body>
						<Card.Title>
							<h2>{this.props.teamInfo[0][0]} Team</h2>
						</Card.Title>
						<Card.Text>
							<Row className="align-items-center mt-1">
								<Col xs={5} md={3} lg={2}>
									Accumulated {this.props.teamInfo[0][0]} Stat
								</Col>
								<Col>
									<ProgressBar now={this.props.teamInfo[0][1]} />
								</Col>
							</Row>
							<Row xs md lg className="align-items-center mt-1">
								<Col xs={5} md={3} lg={2}>
									Average {this.props.teamInfo[1][0]}
								</Col>
								<Col>
									{Math.floor(this.props.teamInfo[1][1])}
								</Col>
							</Row>
							<Row xs md lg className="align-items-center mt-1">
								<Col xs={5} md={3} lg={2}>
									Average {this.props.teamInfo[2][0]}
								</Col>
								<Col>
									{Math.floor(this.props.teamInfo[2][1])}
								</Col>
							</Row>
						</Card.Text>
					</Card.Body>
				:
				<Card.Body>
					<Card.Title>
						Add heroes to your Super Team!
					</Card.Title>
				</Card.Body>
				}
			</Card>
		)
	}
}
// render hero card
class Hero extends Component{
	constructor(props){
		// Only called the first time that is rendered, following props are not read
		// console.log("Hero created")	 
		super(props);
		// Don't use states for everything
		this.updateData(props.heroInfo)
	}
	// process hero jsoninfo into variables
	updateData = (jsoninfo) => {
		// Hero Data
		this.id= jsoninfo.id;
		this.alignment= jsoninfo.biography.alignment;
		// Hero Card Info
		this.name= jsoninfo.name;
		this.image= jsoninfo.image.url;
		this.intelligence= jsoninfo.powerstats.intelligence;
		this.strength= jsoninfo.powerstats.strength;
		this.speed= jsoninfo.powerstats.speed;
		this.durability= jsoninfo.powerstats.durability;
		this.power= jsoninfo.powerstats.power;
		this.combat= jsoninfo.powerstats.combat;
		// Hero Details Info
		this.fullname= jsoninfo.biography[0];
		this.alias= jsoninfo.biography.aliases[0];
		this.workplace= jsoninfo.work.base;
		this.height= jsoninfo.appearance.height[1];
		this.weight= jsoninfo.appearance.weight[1];
		this.eyecolor= jsoninfo.appearance["eye-color"];
		this.haircolor= jsoninfo.appearance["hair-color"];
		this.count= "1"
	}
	// sort stats and return them ordered
	sortStats = () => {
		var statList = {
			"Intelligence": this.intelligence,
			"Strength": this.strength,
			"Speed": this.speed,
			"Durability": this.durability,
			"Power": this.power,
			"Combat": this.combat
		};
		var sorted_stats = [];
		for (var stat in statList) {
			sorted_stats.push([stat, statList[stat]]);
		}
		sorted_stats.sort((a, b) => {
			return a[1] - b[1];
		})
		
		sorted_stats = sorted_stats.reverse();
		return sorted_stats
	}
	// get information for details toogle section
	renderDetails = () => {
		var detailsObj = {
			"Weight": this.weight,
			"Height": this.height,
			"Name": this.name,
			"Alias": this.alias,
			"Eyes color": this.eyecolor,
			"Hair color": this.haircolor,
			"Base": this.workplace
		};

		if (detailsObj.Base.includes(",")) {
			detailsObj.Base = detailsObj.Base.substr(0, detailsObj.Base.indexOf(','))
			}

		var detailsList = [];
		for (var details in detailsObj) {
			detailsList.push([details, detailsObj[details]]);
		}		
		return detailsList
	}

	// componentDidMount(props, state){
	// 	console.log("Hero did Mount")
	// }
	// componentDidUpdate = () => {
	// 	console.log("Hero Updated")
	// }
	// componentWillUnmount = () => {
	// 	console.log("Hero Removed")
	// }
	
	render() {
		// console.log("Hero Rendered");
		// Update hero info
		this.updateData(this.props.heroInfo);
		return(
				<Container fluid className="cardContainer mt-3 mb-3 px-0">
					<Card className="bg-dark text-white">
						<Card.Body className = "">
							<Card.Title>
								{this.name}
							</Card.Title>
							<Card.Img variant="top" src={this.image} className="cardImage" />
							{this.props.showRemoveButton ? // show details and remove button on card
								<div>
									<Card.Text>
									{
										this.sortStats().map((stat) => (
											<Stat statName={stat[0]} statValue={stat[1]}/>
											))
									}
									</Card.Text>
									<Accordion className="bg-dark text-white">
										<Row className="mb-3">
											<Col className="d-flex justify-content-end">
												<Accordion.Toggle as={Button} eventKey="0" >
													Details
												</Accordion.Toggle>
											</Col>
											<Col className="d-flex justify-content-end">
												<Button onClick={() => this.props.removeFromTeam(this.props.heroID)} variant="primary">
													Remove
												</Button>
											</Col>
										</Row>
										<Accordion.Collapse eventKey="0">
												<Card.Text>
													{
													this.renderDetails().map((detail) => (
														<Row >
															<Col xs={5} md={5} lg={5}>
																{detail[0]}
															</Col>
															<Col>
																{detail[1]}
															</Col>
														</Row>
														))
													}
												</Card.Text>
										</Accordion.Collapse>
									</Accordion>
								</div>: 	// show add to team button on card
								<Row className="mt-2">
									<Col className="d-flex justify-content-end">
										<Button onClick={() => {
											this.props.addFromSearch(
												this.props.heroInfo)}} 
										variant="primary">
											Add to team
										</Button>
									</Col>
								</Row>
							}
						</Card.Body>
					</Card>
				</Container>
		)
	}
}

export {Stat, Hero, HeroTeam};