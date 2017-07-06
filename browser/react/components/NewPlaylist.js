import React, { Component } from 'react';
// import { Link } from 'react-router-dom';


export default class NewPlaylist extends Component {
    constructor () {
    super();
    this.state = {
      inputValue: {}
    };
    this.handleChange = this.handleChange.bind(this); // don't forget this!
  }

    handleChange(event) {
        event.preventDefault();
        console.log('helooooo');
        this.setState({inputValue: event.target.value})
    }

    render () {
        return (
            <div className="well">
                <form className="form-horizontal">
                    <fieldset>
                    <legend>New Playlist</legend>
                    <div className="form-group">
                        <label className="col-xs-2 control-label">Name</label>
                        <div className="col-xs-10">
                        <input className="form-control" type="text" onChange={this.handleChange}/>
                        </div>
                    </div>
                
                    <div className="form-group">
                        <div className="col-xs-10 col-xs-offset-2">
                        <button type="submit" className="btn btn-success">Create Playlist</button>
                        </div>
                    </div>
                    
                    </fieldset>
                </form>
            </div>
        )
    }
}

