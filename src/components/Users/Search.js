import React, { Component } from 'react'

class Search extends Component {
    state = {
        search:''
    }
    onChange = e => {
        this.setState({ search: e.target.value });
        console.log("tet");
    }
    onSubmit = e => {
        e.preventDefault();
        this.props.searchUser(this.state.search);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className='form'>
                    <div className='form-group input-group input-group-lg' style={top_margin}><input type='text' value={this.state.search} className='form-control' placeholder='Enter Username' onChange={this.onChange} /> </div>
                    <div className='form-group'><input type='submit' id='submit' className='btn btn-dark btn-lg btn-block' value='Submit' /> </div>
                </form>
            </div>
        )
    }
}
const top_margin = {
    marginTop: '.5rem'
}
export default Search;