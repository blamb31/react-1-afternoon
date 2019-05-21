import React , {Component} from 'react'

export default class Palindrome extends Component {
    
    constructor() {
        super()

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleChange(input) {
        this.setState({
            userInput: input
        })
    }

    checkPali(input) {
        let inputArr = input.split('')
        let revInputArr = inputArr.reverse()
        let revInputStr = revInputArr.join('')

        if(input === revInputStr) {
            this.setState({
                palindrome: true
            })
        }
        else {
            this.setState({
                palindrome: false
            })
        }
    }
    
    render() {
        return(
            <div className="puzzleBox filterStringPB">

                <h4>Palindrome</h4>
                <input className=" inputLine" onChange={(event) => this.handleChange(event.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.checkPali(this.state.userInput)}>Check</button>
                <span className="resultsBox" >Palindrome: {JSON.stringify(this.state.palindrome)}</span>
            </div>
        )
    }
}