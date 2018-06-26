
// curly braces allow us to drop React.Compenent (react.) from the class identifier
//import react and pull off the property component as a property called components
// same as const component = React.Component
import React, { Component }  from 'react';


class SearchBar extends Component{

    //define state in a class based component
    constructor(props){

        super(props);
        //  record the property 'term' in state
        this.state = {term:''};
    }

    render(){
        //whenever there is a single line arrow function, you dont have to have the left side in ()
        return(
            <div className="search-bar">
                <input
                    value = {this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}/>
            </div>
            )
    }

    //create an event handler
    onInputChange(term) {
      this.setState({term});
      this.props.onSearchTermChange(term);
    }
}


export default SearchBar;
