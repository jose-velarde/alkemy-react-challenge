import React, { Component} from 'react';

import './SearchHero.css';
import {Container, Row, Col} from 'react-bootstrap';
import {Hero} from './Hero';
import axios from 'axios';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";


class SearchHero extends Component{
		// constructor(props){
		// 	super(props);
		// }

	// componentDidMount(props, state){
	// 	console.log("SearchHero did Mount")
	// }
	// componentDidUpdate = () => {
	// 	console.log("SearchHero Updated")
	// }

	// send jsoninfo from search results to the parent component (App)
	handleAddFromSearch = (jsoninfo) => {
		// console.log("handleAddFromSearch", jsoninfo)
		this.props.addToTeam(jsoninfo)
	}

	render(){
		return(
			<Container className="SearchContainer mt-2">
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
							this.props.searchList(response.data.results)
						}).catch(error => console.log(error));
					}}
				>
					{({touched, errors, isSubmitting, handleChange}) => (
					<Form>
						<Row className="mb-2">
							<label htmlFor="name">Add up to 6 heroes!</label>
						</Row>
						<Row className="justify-content-end">
							<Col xs={8} md={10} lg={9} className="form-group">
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
							<Col xs={4} md={2} lg={3} className="align-items-start">
								<button
								type="submit"
								className="btn btn-primary btn-block align-self-start"
								disabled={isSubmitting}
								>
									{isSubmitting ? "Loading..." : "Search"}
								</button>
							</Col>
						</Row>
					</Form>
					)}
				</Formik>
				<Row xs={1} md={1} lg={2} className="SearchResultGrid">
						{// render cards from search result
							this.props.heroList.map((heroInfo) => {
								// console.log("From search to search results",heroInfo.id)
								return ( 					
									<Col>
										<Hero 
										heroInfo= {heroInfo} 
										heroID = {heroInfo.id} 
										showRemoveButton= {false}
										addFromSearch = {this.handleAddFromSearch} />
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