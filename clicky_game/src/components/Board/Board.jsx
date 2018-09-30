import React, { Component } from 'react';
import './Board.css';
import Nav from '../Nav';

const simpsons = [
	{href:"https://consequenceofsound.files.wordpress.com/2017/04/homer-simpson-feature1.png?w=807",id:1},
	{href:"https://i.ytimg.com/vi/yR3ecmWmrxs/maxresdefault.jpg",id:2},
	{href:"http://themidult.com/wp-content/uploads/2017/03/marge-simpson-the-simpsons-angry.jpg",id:3},
	{href:"https://vignette.wikia.nocookie.net/simpsons/images/6/66/Lisa_Simpson_First_Appearance.png/revision/latest?cb=20130527190850",id:4},
	{href:"http://cdn2.gamedots.mx/media/gd/images/2015/05/burnsamor03.jpg",id:5},
	{href:"https://fanburst-content-production.s3.amazonaws.com/artwork/687799cd-6baa-4f74-a819-54c74b047974.jpg",id:6},
	{href:"https://i.gifer.com/T3Jf.gif",id:7},
	{href:"https://i.dailymail.co.uk/i/newpix/2018/04/09/20/4AFE642E00000578-5595933-image-a-13_1523301498074.jpg",id:8},
	{href:"https://pbs.twimg.com/media/DAgcA8mXkAARjmk.jpg",id:9},
	{href:"http://pa1.narvii.com/6651/8d4f70e409b21289c436f8ec51fef9b7a11beb34_00.gif",id:10},
	{href:"http://blog-peekyou-static.s3.amazonaws.com/wp-content/uploads/2014/09/oNtQSUn.jpg",id:11},
	{href:"https://media1.tenor.com/images/8954e9961504c8add92db91e2aa5159f/tenor.gif?itemid=3791936",id:12}
];

class Board extends Component {
	state = {
		data : simpsons,
		score: 0,
		topScore: 0,
		keptPick: []
	}
	clicked = props => {
		let clickedId = props.target.id;
		let checkKept = this.state.keptPick;
		this.checker(clickedId,checkKept);
		// state.keptPick.includes(value => {
		// 	console.log(value);
		// })
		if(!this.checker(clickedId,checkKept)) {
			// Continue with game
			// score increments, --
			// randomize
			// 
			let a = this.state.keptPick.concat(props.target.id);
			this.setState({keptPick: a});
			this.randomizer(this.state.data);
			this.setState({score: this.state.score + 1});
		} else {
			// you lose
			console.log('lose area');
			this.setState({score: 0});
			this.randomizer(this.state.data);
			this.setState({keptPick: []});
		}
		// console.log(props.target.id);
		// this.setState({score: this.state.score + 1});
		// console.log(this.state.score);
		// console.log(this.state.keptPick);
	}

	checker = (value,other) => {
		let a = other.includes(value);
		console.log(a);
		console.log(value,other);
		return a;
	}

	randomizer = a => {
		for (let i = a.length - 1 ; i > 0; i--){
			const j = Math.floor(Math.random()*(i + 1));
			[a[i],a[j]] = [a[j], a[i]];
		}
		return a;
		// let randomize = Math.floor(Math.random()*simpsons);
		// return randomize;
	}

	render() {
		return (
		<div className="Board">
			Clicky-Game Score: {this.state.score}
			<div className="imgContainer">
				{this.state.data.map(imgs => {
					return <img id={imgs.id} src={imgs.href} onClick={this.clicked}></img>
				})}
			</div>
		</div>
		);
	}
}

export default Board;