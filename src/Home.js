import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import User from './Contacts.json'
import './App.css'

class Home extends Component {
	
	render(){
		return(
			<div className='mainCon'>
				<h2> My Contacts </h2>
				<ul>
				{User.map(item => (
					<Link to={`/users/${item.id}`}><li> <img src={item.picture.thumbnail}/> {item.name.first}  {item.name.last} </li> </Link>
					))}
				</ul>
			</div>
			);
	}
}

export default Home;