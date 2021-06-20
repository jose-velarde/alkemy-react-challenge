import React, { Component} from 'react';

import './LoginForm.css';
import {Container, Row, Col, Alert} from 'react-bootstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import axios from 'axios';

class LoginForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			loginFailed: false
		}
	}
	// POST to http://challenge-react.alkemy.org/
	// Email: challenge@alkemy.org
	// Password: react

	// show error notification on login failure
	handleLoginError = (status, message) => {
		if(status){
			this.setState({
				loginFailed: true
			})
		} else {
			this.setState({
				loginFailed: false
			})
		}

	}
	render() {
		return(
			<Container className="FormContainer">
				<Formik
					initialValues={{ email: "", password: ""}}
					validationSchema={LoginSchema}
					onSubmit={(values, { setSubmitting }) => {
						const timeOut = setTimeout(() => {
						setSubmitting(false);
						clearTimeout(timeOut);
						}, 1000);
						axios.post('http://challenge-react.alkemy.org/', {
							email: values.email,
							password: values.password
						})
						.then((response) => {
							localStorage["token"] = response.data.token
							this.handleLoginError(false, "Logged In!");
							this.props.logIn(true)
						}, (error) => {
							console.log(error);
							this.handleLoginError(true, error.response.data.error);
							this.props.logIn(false)
						});
					}}
				>
					{({touched, errors, isSubmitting, handleChange}) => (
					<Form>
						<Row className="mb-2">
							<label htmlFor="name">Log in!</label>
						</Row>
						<Row className="text-center">
							<Col xs={12} md={5} lg={6} className="form-group">
								<Field
									type="email"
									name="email"
									placeholder="Enter email"
									onChange={handleChange}
									className={`form-control ${touched.email && errors.email ? "is-invalid" : ""}`}
								/>
								<ErrorMessage
									component="Row"
									name="email"
									className="invalid-feedback fs-6"
								/>
							</Col>
							<Col xs={12} md={5} lg={5} className="form-group">
								<Field
									type="password"
									name="password"
									placeholder="Enter password"
									onChange={handleChange}
									className={`form-control ${touched.password && errors.password ? "is-invalid" : ""}`}
								/>
								<ErrorMessage
									component="Row"
									name="password"
									className="invalid-feedback fs-6"
								/>
							</Col>
							<Col xs={12} md={2} lg={1} className="text-center">
								<button
								type="submit"
								className="btn btn-primary btn-block align-self-center"
								disabled={isSubmitting}
								>
									{isSubmitting ? "Loading..." : "Submit"}
								</button>
							</Col>
						</Row>
						{this.state.loginFailed ?
							<Alert variant="danger" className="mt-3">
								Login Failed
							</Alert>
						:
						<></>
						}
					</Form>
					)}
				</Formik>
			</Container>
		)
	}
}


const LoginSchema = Yup.object().shape({
	email: Yup.string()
		.email("Invalid email address format")
		.required("Email is required"),
	password: Yup.string()
		.min(3, "Password must be 3 characters at minimum")
		.required("Password is required")
});

export {LoginForm};
