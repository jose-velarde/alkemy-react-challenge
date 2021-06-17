import React, { Component} from 'react';

import './App.css';
import {Container, Row, Col} from 'react-bootstrap';
import {Hero, HeroTeam} from './Hero';
import {SearchHero} from './SearchHero';

class App extends Component {
	constructor(props) {
		console.log("App created")
		super(props);
		this.state ={
			goodHero1: String(Math.floor(Math.random() * 731) + 1),
			goodHero2: String(Math.floor(Math.random() * 731) + 1),
			goodHero3: String(Math.floor(Math.random() * 731) + 1),
			evilHero1: String(Math.floor(Math.random() * 731) + 1),
			evilHero2: String(Math.floor(Math.random() * 731) + 1),
			evilHero3: String(Math.floor(Math.random() * 731) + 1),
			showGoodHero1: true,
			showGoodHero2: true,
			showGoodHero3: true,
			showEvilHero1: true,
			showEvilHero2: true,
			showEvilHero3: true,
			statsData: [0, 0, 0, 0, 0, 0, 0, 0, 0],
			heroName: ""
		}
		this.statsData = [0, 0, 0, 0, 0, 0, 0, 0, 0]
		this.updateFlag = true
		this.heroName = ""
	}

	handleCallback = (statsData, operation) => {
		statsData = statsData.map((item) => {
			item = item.replace(/\s[a-z]+|,/gi, "");
			if (item==="null"){
				return 0;
			}
			else{
				return item;
			}
		});
		if(operation){
			this.statsData = this.statsData.map((item, index) => {
				return Number(item) + Number(statsData[index]);
			});
		}else{
			this.statsData = this.statsData.map((item, index) => {
				return Number(item) - Number(statsData[index]);
			});
		}
	}
	handleShowFlag = (heroNumber) => {
		let stateName = "show" + heroNumber
		this.setState({
			[stateName]: !this.state[stateName]
		})
		// if(this.statsData[8] === 6){
		// 	this.setState({
		// 		statsData: this.statsData
		// 	})
		// }
	}
	
	componentDidMount(props, state){
		console.log("App did Mount")
	}
	componentDidUpdate = () => {
		this.statsData = [0, 0, 0, 0, 0, 0, 0, 0, 0]
		console.log("App Updated")
	}
	shouldComponentUpdate() {
		if (this.updateFlag){
			return true
		}else{
			return false
		}
	}

	render() {
		return(
			<Container fluid className="MainContainer">
				<Container className="NavContainer">
					<Row>
						<Col>
							Super Team Builder!
						</Col>
					</Row>
				</Container>
				<Container className="FormContainer">
					{/* <Form>
						<Row xs={1} md={2} lg={2}>
							<Col>
								<Form.Group controlId="formEmail">
									<Form.Label>
										Email Adress
									</Form.Label>
									<Form.Control type="email" placeholder="Example@email.com" />
									<Form.Text className="text-muted">
										Your information is protected!
									</Form.Text>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group controlId="formPassword">
									<Form.Label>
										Password
									</Form.Label>
									<Form.Control type="password" placeholder="Password" />
								</Form.Group>
							</Col>
						</Row>
						<Row xs="auto" md="auto" lg="auto" className="d-flex justify-content-end">
							<Button variant="secondary">
								Login
							</Button>
						</Row>
					</Form> */}
				</Container>
				<Container className="TeamContainer">
					<Row xs={1} className="TeamInfo">
						<Col>
							{/* statsData is updated after the hero cards are rendered.
							I need to render HeroTeam last.  */}
							{this.statsData[8] === 6 ? 		//Display info if team complete
								<HeroTeam statList={this.statsData}/>
								: "Team incomplete"}
						</Col>
					</Row>
					<Row xs={1} md={2} lg={3} className="TeamGrid">
						<Col>
							{this.state.showGoodHero1 ? 
								<Hero 
								heroId={this.state.goodHero1} 
								heroGrid = "GoodHero1" 
								showInfo= {true}
								showCard ={this.handleShowFlag} 
								parentCallback = {this.handleCallback} />
							: <h1>Hidden</h1>}
						</Col>
						<Col>
							{this.state.showGoodHero2 ? 
								<Hero heroId={this.state.goodHero2} 
								heroGrid = "GoodHero2" 
								showInfo= {true}
								showCard ={this.handleShowFlag} 
								parentCallback = {this.handleCallback} />
							: <h1>Hidden</h1>}
						</Col>
						<Col>
							{this.state.showGoodHero3 ? 
								<Hero heroId={this.state.goodHero3} 
								heroGrid = "GoodHero3" 
								showInfo= {true}
								showCard ={this.handleShowFlag} 
								parentCallback = {this.handleCallback} />
							: <h1>Hidden</h1>}
						</Col>
						<Col>
							{this.state.showEvilHero1 ? 
								<Hero heroId={this.state.evilHero1} 
								heroGrid = "EvilHero1" 
								showInfo= {true}
								showCard ={this.handleShowFlag} 
								parentCallback = {this.handleCallback} />
							: <h1>Hidden</h1>}
						</Col>
						<Col>
							{this.state.showEvilHero2 ? 
								<Hero heroId={this.state.evilHero2} 
								heroGrid = "EvilHero2" 
								showInfo= {true}
								showCard ={this.handleShowFlag} 
								parentCallback = {this.handleCallback} />
							: <h1>Hidden</h1>}
						</Col>
						<Col>
							{this.state.showEvilHero3 ? 
								<Hero heroId={this.state.evilHero3} 
								heroGrid = "EvilHero3" 
								showInfo= {true}
								showCard ={this.handleShowFlag} 
								parentCallback = {this.handleCallback} />
							: <h1>Hidden</h1>}
						</Col>
					</Row>
				</Container>
				<SearchHero />
			</Container>
		)
	}
}

export default App;
