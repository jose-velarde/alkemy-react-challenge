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
			loggedIn : false,	
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

	getInfo = (heroId) => {
		axios.get("https://superheroapi.com/api.php/10226669230223430/" + heroId)
			.then((response) => {
				this.jsoninfo = response.data
			});
	}

	handleSearchList = (jsonlist) => {
		this.searchJsonList = []
		for (var details in jsonlist){
			this.searchJsonList.push(jsonlist[details])
		}
		this.setState(() => ({
			searchJsonList: this.searchJsonList 
		}))
	}

	handleAddToTeam = (jsoninfo) =>{
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
		if(this.goodHeroCount === 3){
			console.log("Too many good Heroes!")
		}
		if(this.evilHeroCount === 3){
			console.log("Too many evil Heroes!")
		}

		if(this.goodHeroCount < 3 && jsoninfo.biography.alignment === "good"){
			this.goodHeroCount = this.goodHeroCount + 1
			this.gridJsonList.push(jsoninfo)
		} else if (this.evilHeroCount < 3 && jsoninfo.biography.alignment === "bad"){
			this.evilHeroCount = this.evilHeroCount + 1
			this.gridJsonList.push(jsoninfo)	
		}

		this.teamInfoList = this.addTeamInfo(this.gridJsonList)

		this.setState(() => ({
			gridJsonList: this.gridJsonList
		}))
	}

	handleRemoveFromTeam = (heroID) => {
		var tempList = []
		this.gridJsonList = this.state.gridJsonList

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

		if(this.gridJsonList.length === 0){
			this.teamInfoList = []
		} else {
			this.teamInfoList = this.addTeamInfo(this.gridJsonList)
		}

		this.setState(() => ({
			gridJsonList: this.gridJsonList
		}))
	}

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
				<Container>
					<Row >
						<Col className="text-center">
							<h1>Super Team Builder!</h1>
						</Col>
					</Row>
				</Container>
			{this.state.loggedIn !== true ?
				<LoginForm logIn={this.handleLogIn}/>
				:
				<div>
					<Container className="TeamContainer">
						{/* Team Information Section */}
						<Row xs={1} className="TeamInfo">
							<Col>
								<HeroTeam teamInfo={this.teamInfoList}/>
							</Col>
						</Row>
						{/* Heroes Grid Section */}
						<Row xs={1} md={2} lg={3} className="TeamGrid">
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
					<SearchHero
					heroList={this.state.searchJsonList}
					searchList={this.handleSearchList}
					addToTeam={this.handleAddToTeam}/>
				</div>
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

export default App;
