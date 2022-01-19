import React, {Component} from "react";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from "../components/ErrorBoundry";
import './App.css';

class App extends Component {
    constructor (){
        super();
        this.state = {  //these can change, and lives in the parent Component
            robots: [],
            searchfield: ""
        }
    }

    componentDidMount(){
        //delay in loading
        // setTimeout(this.apiRequest, 2000);
        this.apiRequest();
    }

    apiRequest = () => {
        fetch("https://jsonplaceholder.typicode.com/users").then(response=>response.json())
        .then(users => this.setState({robots: users}))
    }

    onSearchChange = (event) => { 
        this.setState({searchfield: event.target.value}) //React keyword to change the state values always use that
    }
    render(){
        const { robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if(!robots.length){
            return <h1>Loading</h1>
        }
        else {
            return(
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>  
                <Scroll> 
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
            );
        }
        
         //we passed the Search function to our Searchbox
    }
}

export default App;