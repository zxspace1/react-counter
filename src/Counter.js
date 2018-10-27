// import React from "react";
// Przykład komponentu funkcjnego
// const Counter = () => {
//     return(
//         <div className="counter">Licznik{Date.now()}</div>
//     )
// }
// export default Counter;
import React, {Component} from 'react';
import "./Counter.css";
import Display from "./Display";
import ButtonsPanel from "./ButtonsPanel";
class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counterValue: 0,
        }
        // this.incrementOrResetCounter = this.incrementOrResetCounter.bind(this);
    }

    updatetOrResetCounter = (idOfButton) => {
        
        if (idOfButton === 1) {
            this.setState( (prevState) => {
                return({
                    counterValue: prevState.counterValue + 1,
                })
            })
        } else if (idOfButton === -1) {
            this.setState( (prevState) => {
                return({
                    counterValue: prevState.counterValue - 1,
                })
            })
        } else if (idOfButton === 0) {
            this.setState({
                counterValue: 0,
            })
        }
 
    }


    render() {
        return(
        <div className="counter"> 
            <Display currentValue={this.state.counterValue} />
            <ButtonsPanel updateCounter={this.updatetOrResetCounter} />
        </div>
        )
    }
}

export default Counter;

// import './App.css';
// import Counter from './Counter';

// class App extends Component {
//     render( {
//         return (
//             <div className='App'>
//             <header className='App-header>
//             <h1 className='App-title'>Licznik w ReactJS</h1>
//             </header>
//             </div>
//         )
//     })
// }
