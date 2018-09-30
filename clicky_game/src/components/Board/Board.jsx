import React, { Component } from 'react';
import './Board.css';

const simspons = [
	"https://consequenceofsound.files.wordpress.com/2017/04/homer-simpson-feature1.png?w=807",
	"https://i.ytimg.com/vi/yR3ecmWmrxs/maxresdefault.jpg",
	"http://themidult.com/wp-content/uploads/2017/03/marge-simpson-the-simpsons-angry.jpg",
	"https://vignette.wikia.nocookie.net/simpsons/images/6/66/Lisa_Simpson_First_Appearance.png/revision/latest?cb=20130527190850",
	"http://cdn2.gamedots.mx/media/gd/images/2015/05/burnsamor03.jpg",
	"https://fanburst-content-production.s3.amazonaws.com/artwork/687799cd-6baa-4f74-a819-54c74b047974.jpg",
	"https://i.gifer.com/T3Jf.gif",
	"https://i.dailymail.co.uk/i/newpix/2018/04/09/20/4AFE642E00000578-5595933-image-a-13_1523301498074.jpg",
	"https://pbs.twimg.com/media/DAgcA8mXkAARjmk.jpg",
	"http://pa1.narvii.com/6651/8d4f70e409b21289c436f8ec51fef9b7a11beb34_00.gif",
	"http://blog-peekyou-static.s3.amazonaws.com/wp-content/uploads/2014/09/oNtQSUn.jpg",
	"https://media1.tenor.com/images/8954e9961504c8add92db91e2aa5159f/tenor.gif?itemid=3791936"
];

class Board extends Component {
	state = {
		data : simspons
	}
	render() {
		return (
		  <div className="Board">
				<div className="imgContainer">
					{this.state.data.map(imgs => {
						return <img src={imgs}></img>
					})}
			 </div>
		  </div>
		);
	}
}

export default Board;