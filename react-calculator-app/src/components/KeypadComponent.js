import React, {Component} from 'react';

class KeypadComponents extends Component{
    render(){
        return(
            <div className="calculator-keypad">
                <div className="clearBtn">
                    <button className="backspace" id="CE" onClick={e => this.props.onClick(e.target.id)}>CE</button>
                    <button id="C" onClick={e => this.props.onClick(e.target.id)}>C</button>
                </div>
                <button id="7" onClick={e => this.props.onClick(e.target.id)}>7</button>
                <button id="8" onClick={e => this.props.onClick(e.target.id)}>8</button>
                <button id="9" onClick={e => this.props.onClick(e.target.id)}>9</button>
                <button id="/" onClick={e => this.props.onClick(e.target.id)}>/</button>

                <button id="4" onClick={e => this.props.onClick(e.target.id)}>4</button>
                <button id="5" onClick={e => this.props.onClick(e.target.id)}>5</button>
                <button id="6" onClick={e => this.props.onClick(e.target.id)}>6</button>
                <button id="*" onClick={e => this.props.onClick(e.target.id)}>x</button>

                <button id="1" onClick={e => this.props.onClick(e.target.id)}>1</button>
                <button id="2" onClick={e => this.props.onClick(e.target.id)}>2</button>
                <button id="3" onClick={e => this.props.onClick(e.target.id)}>3</button>
                <button id="-" onClick={e => this.props.onClick(e.target.id)}>-</button>

                <button id="0" onClick={e => this.props.onClick(e.target.id)}>0</button>
                <button id="." onClick={e => this.props.onClick(e.target.id)}>.</button>
                <button id="=" onClick={e => this.props.onClick(e.target.id)}>=</button>
                <button id="+" onClick={e => this.props.onClick(e.target.id)}>+</button>
            </div>
        );
    }
}

export default KeypadComponents;