import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

export default class NewPlaylist extends Component {
    constructor () {
    super();
    this.state = {
      inputValue: '',
      disabled: true,
      beforeEdit: true
    };
    this.handleChange = this.handleChange.bind(this); // don't forget this!
    this.handleSubmit = this.handleSubmit.bind(this); // don't forget this!
  }

    handleChange(event) {
        if (event.target.value.length <= 16 && event.target.value.length  > 0) this.setState({inputValue: event.target.value, disabled: false, beforeEdit: false});
        else this.setState({inputValue: event.target.value, disabled: true, beforeEdit: false});
    }

    handleSubmit(event) {
        event.preventDefault();
        // axios.post('/api/playlists/',
        //     {
        //         name: this.state.inputValue
        //     })
        //       .then(res => res.data)
        //       .then(result => {
        //         console.log(result); // response json from the server!
        // });
        this.props.addPlaylist(this.state.inputValue);
        this.setState({inputValue: '', disabled: true, beforeEdit: true});
    }

    render () {
        return (
            <div className="well">
                { this.state.inputValue.length === 0 && !this.state.beforeEdit ? <div className="alert alert-warning">Please enter a name</div> : '' }
                { this.state.inputValue.length > 16 ? <div className="alert alert-warning">Text should not be over 16 characters. </div> : '' }
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <fieldset>
                    <legend>New Playlist</legend>
                    <div className="form-group">
                        <label className="col-xs-2 control-label">Name</label>
                        <div className="col-xs-10">
                        <input className="form-control" value={this.state.inputValue} type="text" onChange={this.handleChange}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-xs-10 col-xs-offset-2">
                        <button type="submit" className="btn btn-success" disabled={this.state.disabled}>Create Playlist</button>
                        </div>
                    </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}

