import React, {Component} from 'react';
import Searchbox from '../components/Searchbox';
import Cardlist from '../components/Cardlist';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            robots : [],
            searchField : ""
        };
    }

    componentDidMount() {
        // Get users from 'https://jsonplaceholder.typicode.com/users' and then place them into the robots attribute/object.
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        }).then(users => {
            this.setState({robots : users});
        });
    }

    onSearchChange = (event) => {
        this.setState({searchField : event.target.value}); // Use the set method instead of accessing directly to the attribute.
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });

        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <Searchbox searchChange = {this.onSearchChange}/>
                <Scroll>
                    <Cardlist robots={filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}

export default App;