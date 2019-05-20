import React , {Component} from 'react'

export default class EvenAndOdd extends Component {

    constructor() {
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange(numbers) {
        this.setState({
            userInput: numbers
        })
    }

    assignEvenAndOdds(numStr) {
        let numArr = numStr.split(',') 
        let evenArr = []
        let oddArr = []

        for (let i = 0; i < numArr.length; i++) {
            if (numArr[i] %2 === 0) {
                evenArr.push(Number(numArr[i]))
            }
            else {
                oddArr.push(Number(numArr[i]))
            }
        }
        this.setState({
            evenArray: evenArr,
            oddArray: oddArr
        })
    }

    render() {
        return(
            <div className="puzzleBox evenAndOddPB">

                <h4>Even and Odds</h4>
                <input onChange={(event) => this.handleChange(event.target.value)} className="inputLine"></input>
                <button onClick={() => this.assignEvenAndOdds(this.state.userInput)} className="confirmationButton">Split</button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>

            </div>
        )
    }
}