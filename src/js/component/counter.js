import React from "react";
import "../../styles/counter.scss";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

export const Counter = props => {
	return (
		<div className="  text-center mt-5">
			<h1 className="">Simple Counter with React</h1>
			<h3>Seconds Counter</h3>
			<div className="secCounter container  ">
				<div className=" row ">
					<div className="Calendario">
						<i className="fas fa-clock"></i>
					</div>
					<div className="six">{props.digitFour % 10}</div>
					<div className="five">{props.digitFour % 10}</div>
					<div className="four">{props.digitFour % 10}</div>
					<div className="three">{props.digitThree % 10}</div>
					<div className="two">{props.digitTwo % 10}</div>
					<div className="one">{props.digitOne % 10}</div>
				</div>
			</div>
		</div>
	);
};

let counter = 0;
setInterval(function() {
	const six = Math.floor(counter / 100000);
	const five = Math.floor(counter / 10000);
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	console.log(six, five, four, three, two, one);
	counter++;
	ReactDOM.render(
		<Counter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
			digitFive={five}
			digitsix={six}
		/>,
		document.querySelector("#app")
	);
}, 1000);

Counter.propTypes = {
	digitSix: PropTypes.number,
	digitFive: PropTypes.number,
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};
