import React, { Component} from 'react';

import './Hero.css';
import {Container, Row, Col, Card, Button, ProgressBar, Accordion} from 'react-bootstrap';
import axios from 'axios';

class Stat extends Component{
	// constructor(props){
	// 	super(props);
	// }
	
	render() {
		return(
			<Row xs md lg className="align-items-center mt-1">
				<Col xs={5} md={6} lg={5}>
					{this.props.statName}
				</Col>
				<Col>
					<ProgressBar now={this.props.statValue} />
				</Col>
			</Row>
		)
	}
}

class HeroTeam extends Component {
	constructor(props){
		super(props);
		this.state ={
			statList: this.props.statList
		}
	}

	componentWillReceiveProps(nextProps) {
		console.log("Prop updated")
		this.setState({
			statList: nextProps.statList,
		}); 
	}

	sortStats = () => {
		var statList = {
			"Intelligence": this.state.statList[0],
			"Strength": this.state.statList[1],
			"Speed": this.state.statList[2],
			"Durability": this.state.statList[3],
			"Power": this.state.statList[4],
			"Combat": this.state.statList[5]
		};
		var sorted_stats = [];
		for (var stat in statList) {
			sorted_stats.push([stat, statList[stat]]);
		}
		sorted_stats.sort((a, b) => {
			return a[1] - b[1];
		})
		
		sorted_stats = sorted_stats.reverse();
		return [sorted_stats[0]]
	}
	// Fill initial cards
	componentDidMount(props, state){
		console.log("Team did Mount")
		this.setState({statList: this.props.statList})

	}
	componentDidUpdate = () => {
		console.log("Team Updated")
	}
	componentWillUnmount = () => {
		console.log("Team card removed")
	}
	render() {
		return(
			<Card className="bg-dark text-white">
				<Card.Body>
					<Card.Title>
						Hero Name
					</Card.Title>
					<Card.Text>
						{
						this.sortStats().map((stat) => (
							<Row xs md lg className="align-items-center mt-1">
								<Col xs={5} md={6} lg={5}>
								{stat[0]}
								</Col>
								<Col>
									{stat[1]}
								</Col>
							</Row>
							))
						}
						<Row xs md lg className="align-items-center mt-1">
							<Col xs={5} md={6} lg={5}>
								Height
							</Col>
							<Col>
								{this.state.statList[6]/this.state.statList[8]}
							</Col>
						</Row>
						<Row xs md lg className="align-items-center mt-1">
							<Col xs={5} md={6} lg={5}>
								Weight
							</Col>
							<Col>
								{this.state.statList[7]/this.state.statList[8]}
							</Col>
						</Row>
					</Card.Text>
				</Card.Body>
			</Card>
		)
	}
}
class Hero extends Component{
	constructor(props){
		// Only called the first time that is rendered, following props are not read
		console.log("Card created")	 
		super(props);
		this.state = { 
			showCard: true,
			showDetails: false,
			// Learn how to make an object of object state and reference the 2nd level
			id : this.props.heroId,
			alignment : "",
			name : "",
			image : "",
			intelligence : "",
			strength : "",
			speed : "",
			durability : "",
			power : "",
			combat : "",
			fullname : "",
			alias : "",
			workplace : "",
			height : "",
			weight : "",
			eyecolor : "",
			haircolor : "",	
			count: "1"
		};
		this.statList =[0,0,0,0,0,0,0,0,0]
	}
	// Update props for future cards. Deprecated?
	componentWillReceiveProps(nextProps) {
		this.setState({
			showCard: nextProps.showCard,
		}); 
		this.getInfo(nextProps.heroId);
	}
	// Fill initial cards
	componentDidMount(props, state){
		console.log("Hero did Mount")
		this.getInfo(this.state.id);
	}
	componentDidUpdate = () => {
		console.log("Hero Updated")
	}
	componentWillUnmount = () => {
		console.log("Hero card removed")
	}
	// axios get on App returns undefined, learn async
	getInfo = (heroId) => {
		axios.get("https://superheroapi.com/api.php/10226669230223430/" + heroId)
			.then((response) => {
				this.updateData(response.data)
			});
	}

	updateData = (jsoninfo) => {
		this.setState(() => ({
			// Hero Data
			id: jsoninfo.id,
			alignment: jsoninfo.biography.alignment,
			// Hero Card Info
			name: jsoninfo.name,
			image: jsoninfo.image.url,
			intelligence: jsoninfo.powerstats.intelligence,
			strength: jsoninfo.powerstats.strength,
			speed: jsoninfo.powerstats.speed,
			durability: jsoninfo.powerstats.durability,
			power: jsoninfo.powerstats.power,
			combat: jsoninfo.powerstats.combat,
			// Hero Details Info
			fullname: jsoninfo.biography[0],
			alias: jsoninfo.biography.aliases[0],
			workplace: jsoninfo.work.base,
			height: jsoninfo.appearance.height[1],
			weight: jsoninfo.appearance.weight[1],
			eyecolor: jsoninfo.appearance["eye-color"],		// How do I reference eye-color
			haircolor: jsoninfo.appearance["hair-color"],
			count: "1"
			})
		)
		this.statList = [
			this.state.intelligence,
			this.state.strength,
			this.state.speed,
			this.state.durability,
			this.state.power,
			this.state.combat,
			this.state.weight,
			this.state.height,
			this.state.count
		];
		// pass info to render team stat list
		this.props.parentCallback(this.statList, true)
	}

	sortStats = () => {
		var statList = {
			"Intelligence": this.state.intelligence,
			"Strength": this.state.strength,
			"Speed": this.state.speed,
			"Durability": this.state.durability,
			"Power": this.state.power,
			"Combat": this.state.combat
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

	showDetails = () => {
		this.getInfo(String(Math.floor(Math.random() * 731) + 1));
	}
	renderDetails = () => {
		var detailsObj = {
			"Weight": this.state.weight,
			"Height": this.state.height,
			"Name": this.state.name,
			"Alias": this.state.alias,
			"Eyes color": this.state.eyecolor,
			"Hair color": this.state.haircolor,
			"Base": this.state.workplace
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
	
	render() {
		return(
				<Container fluid className="cardContainer mt-3 mb-3">
					<Card className="bg-dark text-white">
						<Card.Body>
							<Card.Title>
								{this.state.name}
							</Card.Title>
							<Card.Img variant="top" src={this.state.image} className="cardImage" />
							{this.props.showInfo ?
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
												<Button onClick={() => this.props.showCard(this.props.heroGrid)} variant="primary">
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
								</div>: 	
								<Row className="mt-2">
									<Col className="d-flex justify-content-end">
										<Button onClick={() => this.props.showCard(this.props.heroGrid)} variant="primary">
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