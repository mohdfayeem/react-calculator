import React, { Component } from "react";
import ReresultComponents from "./components/ResultComponent";
import KeypadComponents from "./components/KeypadComponent";
import "./App.css";

class App extends Component {

	constructor(){
		super();
		this.state = {
			resultState: ""
		}
	}

	// Get Button
	buttonClick = (btnId) => {
		if(btnId === "C"){
			this.setState({
				resultState: ""
			})
		}else if(btnId === "CE"){
			this.setState({
				resultState: this.state.resultState.slice(0, -1)
			})
		}else if(btnId === "="){
			this.calculate()
		}else{
			this.setState({
				resultState: this.state.resultState + btnId
			})
		}
	}

	calculate = () => {
		var calculateResult = ""
		if(this.state.resultState.includes('--')){
			calculateResult = this.state.resultState.replace('--', '+')
		}else{
			calculateResult = this.state.resultState
		}

		try{
			this.setState({
				resultState: (eval(calculateResult) || "" ) + ""
			})
		}catch(e){
			this.setState({
				resultState: 'Error'
			})
		}
	}

	render() {
	return (
		<div>
			<div className="container">
				<h1>React Calculator</h1>
				<div className="calculator-body">
				<ReresultComponents resultState={this.state.resultState} />
				<KeypadComponents onClick={this.buttonClick} />
				</div>
			</div>
		</div>
	);
	}
}

export default App;
