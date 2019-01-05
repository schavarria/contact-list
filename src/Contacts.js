import React, { Component } from 'react';
import User from './Contacts.json'
import 'font-awesome/css/font-awesome.css'
import './App.css'

class Contact extends Component {
	state= {
		fname:'',
		lname:'',
		email:'',
		phone:'',
		city:'',
		state:'',
		picture:''

	}

	componentDidMount(){
		const user = User.find(person => person.id == this.props.match.params.id)
		this.setState({
			fname: user.name.first,
			lname: user.name.last,
			email: user.email,
			phone: user.phone,
			city: user.location.city,
			state: user.location.state,
			picture: user.picture.large

		})
	}

	handleGoBack = () => {
		this.props.history.goBack()
	}
	render(){
		return(
			<div className='mainCon'>
				<div className="picture"> <button onClick={this.handleGoBack}> <i className="fa fa-arrow-left"> </i></button> <img className="picture" src={this.state.picture}/></div>
				<p> <i className="fa fa-user"> </i> <span>{this.state.fname} {this.state.lname}</span> </p>
				<p> <i className="fa fa-envelope"> </i> <span>{this.state.email}</span></p>
				<p> <i className="fa fa-mobile"> </i> <span>{this.state.phone}</span></p>
				<p> <i className="fa fa-globe"> </i><span>{this.state.city}, {this.state.state}</span> </p>

			
			</div>
			);
	}
}

export default Contact;