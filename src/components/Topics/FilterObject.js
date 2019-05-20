import React , {Component} from 'react'

export default class FilterObject extends Component {

    constructor() {
        super()

        this.state = {
            unFilteredArray: [
                {
                    name: 'Jimmy Joe',
                    title: 'Hack0r',
                    age: 12,
                },
                {
                    name: 'Jeremy Schrader',
                    age: 24,
                    hairColor: 'brown'
                },
                {
                    name: 'Rudy Gobert',
                    title: 'DPOY',
                    position: "Center",
                    ppg: 18.4
                },
                
            ],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(input) {
        this.setState({
            userInput: input
        })
    }

    filterObject(input) {
        let newArr = this.state.unFilteredArray.filter( (obj) => {
            return obj.hasOwnProperty(input)
        } )

        this.setState({
            filteredArray: newArr
        })
    }

    render() {
        return(
        
        <div className="puzzleBox filterObjectPB">

            <h4>Filter Object</h4>
            <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
            <input className="inputLine" onChange={(event) => this.handleChange(event.target.value)} ></input>
            <button className="confirmationButton" onClick={() => this.filterObject(this.state.userInput)} >Filter</button>
            <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>

        </div>

        )
    }
}