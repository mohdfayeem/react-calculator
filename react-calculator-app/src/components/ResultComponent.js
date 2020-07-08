import React, {Component} from 'react';

class ResultComponents extends Component{
    render(){
        let {resultState} = this.props;
        return(
            <div className="calculator-result">
                <p>{resultState}</p>
            </div>
        );
    }
}

export default ResultComponents;