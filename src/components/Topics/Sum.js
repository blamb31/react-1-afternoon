import React , {Component} from 'react'

export default class Sum extends Component {
    constructor() {
        super()

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleChange1(input) {
        this.setState({
            number1: input
        })
    }

    handleChange2(input) {
        this.setState({
            number2: input
        })
    }

    addNums(number1, number2) {
        let numSum = Number(number1) + Number(number2)
        this.setState({
            sum: numSum
        })
    }

    render() {
        return(
    
    <div className="puzzleBox sumPB">

        <h4>Sum</h4>

        <input className=" inputLine" onChange={(event) => this.handleChange1(event.target.value)}></input>        
        <input className=" inputLine" onChange={(event) => this.handleChange2(event.target.value)}></input>
        <button className="confirmationButton" onClick={() => this.addNums(this.state.number1, this.state.number2)}>Add</button>
        <span className="resultsBox" >Sum: {JSON.stringify(this.state.sum)}</span>
    
    </div>
        )
    }
}