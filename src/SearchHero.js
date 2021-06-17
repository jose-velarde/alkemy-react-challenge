import React, { Component} from 'react';

import './SearchHero.css';
import {Container, Row, Col} from 'react-bootstrap';
import {Hero} from './Hero';
import axios from 'axios';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";


class SearchHero extends Component{
	constructor(props){
		super(props);
		this.state = {
			heroName: "",
			heroList: []
		}
		this.updateFlag = true
	}
	processList = (jsonList) => {
		let listResult =  [];
		if(listResult !== undefined){
			listResult = jsonList.map((heroItem)=>{
				return heroItem.id
			})	
		}
		this.setState({
			heroList: listResult
		});
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
		// if(operation){
		// 	this.statsData = this.statsData.map((item, index) => {
		// 		return Number(item) + Number(statsData[index]);
		// 	});
		// }else{
		// 	this.statsData = this.statsData.map((item, index) => {
		// 		return Number(item) - Number(statsData[index]);
		// 	});
		// }
	}
	handleShowFlag = (heroNumber) => {
		// let stateName = "show" + heroNumber
		// this.setState({
		// 	[stateName]: !this.state[stateName]
		// })
	}

	componentDidMount(props, state){
		console.log("SearchHero did Mount")
	}
	componentDidUpdate = () => {
		console.log("SearchHero Updated")
	}
	shouldComponentUpdate() {
		if (this.updateFlag){
			return true
		}else{
			return false
		}
	}

	render(){
		return(
			<Container className="SearchContainer">
				<Formik
					initialValues={{ name: ""}}
					validationSchema={LoginSchema}
					onSubmit={(values, { setSubmitting }) => {
						const timeOut = setTimeout(() => {
						setSubmitting(false);
						clearTimeout(timeOut);
						}, 1000);
						axios.get("https://superheroapi.com/api.php/10226669230223430/search/" + values.name)
						.then((response) => {
							this.processList(response.data.results)
						}).catch(error => console.log(error));
					}}
				>
					{({touched, errors, isSubmitting, handleChange}) => (
					<Form>
						<Row className="mb-2">
							<label htmlFor="name">Add a hero to your Super Team!</label>
						</Row>
						<Row className="justify-content-end">
							<Col xs={9} md={10} lg={11} className="form-group">

								<Field
									type="text"
									name="name"
									placeholder="Enter a hero's name"
									onChange={handleChange}
									className={`form-control ${touched.name && errors.name ? "is-invalid" : ""}`}
								/>
								<ErrorMessage
									component="Row"
									name="name"
									className="invalid-feedback fs-6"
								/>
							</Col>
							<Col xs={3} md={2} lg={1} className="align-items-top">
								<button
								type="submit"
								className="btn btn-primary btn-block "
								disabled={isSubmitting}
								>
									{isSubmitting ? "Loading..." : "Search"}
								</button>
							</Col>
						</Row>
					</Form>
					)}
				</Formik>
				<Row xs={1} md={3} lg={4} className="SearchResultGrid">
						{
							this.state.heroList.map((id) => {
								return ( 					
									<Col>
										<Hero heroId={id} heroGrid = "GoodHero1" showInfo= {false}
										showCard ={this.handleShowFlag} parentCallback = {this.handleCallback} />
									</Col>
								)
							})
						}



				</Row>
			</Container>
		)
	}
}


const LoginSchema = Yup.object().shape({
	name: Yup.string()
		.min(3, "Search must be 3 characters at minimum")
		.required("Hero's name is required"),
});


export {SearchHero};