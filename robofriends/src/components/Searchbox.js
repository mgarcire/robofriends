import React, {Component} from 'react';

class Searchbox extends Component {
    render() {
        return (
            <div className='pa2'>
                <input 
                    type='search' 
                    placeholder='Search robots' 
                    className='tc pa3 ba b--light-green t--light-green'
                    onChange={this.props.searchChange}
                />
            </div>
        );
    }
}

export default Searchbox;