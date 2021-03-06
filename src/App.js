import React, {Component, useState} from 'react';

import './App.css';
import {Container, Row, Col, Alert, Button} from 'react-bootstrap';
import {Hero, HeroTeam} from './Hero';
import {SearchHero} from './SearchHero';
import {LoginForm} from './LoginForm';
import axios from 'axios';


class App extends Component {
	constructor(props) {
		// console.log("App created")
		super(props);
		this.state = {
			searchJsonList : [],
			gridJsonList: [],
			loggedIn : false,		// set to true to bypass login
			repeatedHero : false
		}
		this.searchJsonList = []
		this.gridJsonList = []
		this.updateFlag = true
		this.jsoninfo = {}
		this.goodHeroCount = 0
		this.evilHeroCount = 0

		this.statList = [0, 0, 0, 0, 0, 0, [], []]
		this.statsData = [0, 0, 0, 0, 0, 0, [], []]
		this.highestStat = 0
		this.height = 0
		this.weight = 0
		this.teamInfoList = []
		this.repeatedHero = false
	}
	// GET request, response contains json info a single hero
	getInfo = (heroId) => {
		axios.get("https://superheroapi.com/api.php/10226669230223430/" + heroId)
			.then((response) => {
				this.jsoninfo = response.data
			});
	}
	// Receive the result of a search, as a list of json info 
	handleSearchList = (jsonlist) => {
		this.searchJsonList = []
		for (var details in jsonlist){
			this.searchJsonList.push(jsonlist[details])
		}
		this.setState(() => ({
			searchJsonList: this.searchJsonList 
		}))
	}
	// Add hero from the Search Result Grid to the Team Grid
	handleAddToTeam = (jsoninfo) =>{
		// if hero is already on the grid show a warning
		this.repeatedHero = false
		this.setState({
			repeatedHero : false
		})

		for (var heroCard in this.gridJsonList){
			if(this.gridJsonList[heroCard].id === jsoninfo.id){
				console.log("Hero already in team")
				this.repeatedHero = true
				this.setState({
					repeatedHero : true
				})
				return 0
			}
		}

		// if the limit of good/evil heroes is reached show a warning
		if(this.goodHeroCount === 3){
			console.log("Too many good Heroes!")
		}
		if(this.evilHeroCount === 3){
			console.log("Too many evil Heroes!")
		}
		// prevent adding heroes 
		if(this.goodHeroCount < 3 && jsoninfo.biography.alignment === "good"){
			this.goodHeroCount = this.goodHeroCount + 1
			this.gridJsonList.push(jsoninfo)
		} else if (this.evilHeroCount < 3 && jsoninfo.biography.alignment === "bad"){
			this.evilHeroCount = this.evilHeroCount + 1
			this.gridJsonList.push(jsoninfo)	
		}
		// calculate weight, height and accumulated stat
		this.teamInfoList = this.addTeamInfo(this.gridJsonList)
		// update Team Grid
		this.setState(() => ({
			gridJsonList: this.gridJsonList
		}))
	}
	// remove team from Team Grid
	handleRemoveFromTeam = (heroID) => {
		var tempList = []
		this.gridJsonList = this.state.gridJsonList
		// remove hero and update Team Grid list
		for (var heroCard in this.gridJsonList){
			if(this.gridJsonList[heroCard].id !== heroID){
				tempList.push(this.gridJsonList[heroCard])
			} else {
				if(this.gridJsonList[heroCard].biography.alignment === "good"){
					this.goodHeroCount = this.goodHeroCount - 1
				} else if (this.gridJsonList[heroCard].biography.alignment === "bad"){
					this.evilHeroCount = this.evilHeroCount - 1
				}
			}
		}

		this.gridJsonList = tempList
		// reset weight, height and accumulated stat if team is deleted completely
		if(this.gridJsonList.length === 0){
			this.teamInfoList = []
		} else {
			this.teamInfoList = this.addTeamInfo(this.gridJsonList)
		}
		// update Team Grid
		this.setState(() => ({
			gridJsonList: this.gridJsonList
		}))
	}
	// calculate weight, height and accumulated stat
	addTeamInfo = (jsonlist) => {
		this.statList = [0, 0, 0, 0, 0, 0, [], []]

		for (var heroCard in this.gridJsonList){
			this.statList[0] += Number(jsonlist[heroCard].powerstats.intelligence)
			this.statList[1] += Number(jsonlist[heroCard].powerstats.strength)
			this.statList[2] += Number(jsonlist[heroCard].powerstats.speed)
			this.statList[3] += Number(jsonlist[heroCard].powerstats.durability)
			this.statList[4] += Number(jsonlist[heroCard].powerstats.power)
			this.statList[5] += Number(jsonlist[heroCard].powerstats.combat)
				
			this.statList[6].push(jsonlist[heroCard].appearance.height[1])
			this.statList[7].push(jsonlist[heroCard].appearance.weight[1])
		}

		this.highestStat = this.sortStats(this.statList)
		this.highestStat = [this.highestStat[0], this.highestStat[1]/jsonlist.length] 
		var height = 0
		var weight = 0
		this.height = this.castToNumber(this.statList[6])
		this.weight	= this.castToNumber(this.statList[7])
		
		this.height.map((item) => (
			height += item
		))		
		this.weight.map((item) => (
			weight += item
		))

		height = height / this.statList[6].length
		weight = weight / this.statList[7].length

		this.height	= ["Height", height]
		this.weight = ["Weight", weight]
		
		return [this.highestStat, this.weight, this.height]
	}
	// order stats and return the highest stat
	sortStats = (list) => {
		var statList = {
			"Intelligence": list[0],
			"Strength": list[1],
			"Speed": list[2],
			"Durability": list[3],
			"Power": list[4],
			"Combat": list[5]
		};
		var sorted_stats = [];
		for (var stat in statList) {
			sorted_stats.push([stat, statList[stat]]);
		}
		sorted_stats.sort((a, b) => {
			return a[1] - b[1];
		})
		
		sorted_stats = sorted_stats.reverse();
		return sorted_stats[0]
	}
	// process weight and height, removing characters and casting to int
	castToNumber = (weight) => {
		weight = weight.map((item) => {
			let number = item.replace(/\s[a-z]+|,/gi, "");
			if (number === "null") {
				return 0;
			} else {
				if(number.includes("tons")){
					return Number(number)*1000
				} else {
					return Number(number)
				}				
			}
		});
		return weight
	}
	// update login status
	handleLogIn = (success) => {
		if(success){
			this.setState({
				loggedIn: true
			})
		} else {
			this.setState({
				loggedIn: false
			})
		}
		
	}

	// componentDidMount(props, state){
	// 	console.log("App did Mount")
	// }
	// componentDidUpdate = () => {
	// 	console.log("App Updated")
	// }
	shouldComponentUpdate() {
		if (this.updateFlag){
			return true
		}else{
			return false
		}
	}

	render() {
		// console.log("App rendered")
		return(
			<Container fluid className="MainContainer">
				<Container className="NavSection">
					<Row >
						<Col className="text-center">
							<h1>Super Team Builder!</h1>
						</Col>
					</Row>
				</Container>
			{this.state.loggedIn !== true ?
				<Container className="LoginSection">
					<LoginForm logIn={this.handleLogIn}/>
				</Container>
				:
				<Row >
					<Col xs={12} md lg={8} className="TeamSection">
						<Container >
							{/* Team Information Section */}
							<Row xs={1} className="TeamInfo sticky-top">
								<Col>
									<HeroTeam teamInfo={this.teamInfoList}/>
								</Col>
							</Row>
							{/* Warnings Section */}
							<Container className="WarningContainer">
								{this.goodHeroCount === 3?
									<AlertDismissibleExample
									variant = "warning"
									text={["Can't add more than ", <b>3 good heroes!</b>]}
									/>
								:
								<></>
								}
								{this.evilHeroCount === 3?
									<AlertDismissibleExample
									variant = "warning"
									text = {["Can't add more than ", <b>3 evil heroes!</b>]}
									/>
								:
								<></>
								}
								{this.repeatedHero === true?
									<AlertDismissibleExample
									variant = "danger"
									text={["Hero ",<b>already</b>  ," in the Team!"]}
									/>
									:
									<></>
								}
							</Container>							
							{/* Heroes Grid Section */}
							<Row xs={1} md={1} lg={2} className="TeamGrid">
								{this.gridJsonList.map((heroInfo) => {
									// console.log("From search to search results",heroInfo.id)
									return (
										<Col>
											<Hero
											heroInfo={heroInfo}
											heroID = {heroInfo.id}
											showRemoveButton= {true}
											removeFromTeam ={this.handleRemoveFromTeam} />
										</Col>
									)
								})}
							</Row>
						</Container>
						
					</Col>
					<Col xs={12} md lg={4} className="SearchSection">
						<SearchHero
						heroList={this.state.searchJsonList}
						searchList={this.handleSearchList}
						addToTeam={this.handleAddToTeam}/>
					</Col>
				</Row>
			}
			</Container>
		)
	}
}

function AlertDismissibleExample(props) {
	const [show, setShow] = useState(true);
	if (show) {
		return (
			<Alert variant={props.variant} onClose={() => setShow(false)} dismissible>
				{props.text}

			</Alert>
		);	
	}
	return (
		<Row >
			<Col className="d-flex justify-content-end mb-2">
				<Button onClick={() => setShow(true)} variant={props.variant} >Show Warning</Button>
			</Col>
		</Row>
	)
}


// for gh-pages deployment
//  

export default App;
