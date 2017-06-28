import React, { Component } from 'react';

class AddProject extends Component {
    render() {
        return (
            <div className="bg-info meeting-form">
                <div className="row">
                    <div className="col-sm-4 col-md-2">
                        <b>Name:</b>
                    </div>
                    <div className="col-sm-8 col-md-10">
                        <input
                            type="text"
                            value={this.state.name}
                            onChange={e => this.setState({ name: e.target.value})}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 col-md-2">
                        <button 
                            type="button"
                            className="btn btn-primary"
                            onClick={() => this.props.onAddProjects(this.state.name)}
                            >
                        Add Project
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddProject;