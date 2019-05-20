import React , {Component} from 'react'

export default class FilterString extends Component {

    constructor() {
        super()

        this.state = {
            unfilteredArray: ["Preston","Amanda", "Cameron", "Jessie", "Zack", "Savanah", "Blake", "Alex", "Jaren","Cordale", "Stefane"],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(input) {
        this.setState({
            userInput: input
        })
    }

    filterNames(inputName) {
        let filteredNames = this.state.unfilteredArray.filter( name => {
            return name.includes(inputName)
        })

        this.setState({
            filteredArray: filteredNames
        })
    }

    render() {
        return(
            <div className="puzzleBox filterStringPB">

                <h4>Filter String</h4>
                <span style={{width:400, overflowWrap: "break-word"}} className="puzzleText">Names: {JSON.stringify(this.state.unfilteredArray)} </span>
                <input className="inputLine" onChange={(event) => this.handleChange(event.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.filterNames(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered Names: {JSON.stringify(this.state.filteredArray)}</span>

            </div>
        )
    }
} 