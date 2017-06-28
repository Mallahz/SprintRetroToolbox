import React, { Component } from 'react';

class project extends Component {
    
    handleClick() {
        this.props.deleteProject(this.props.project.projectId);
    }
    
    render() {
        return (
            <li>
                Abbreviation: {this.props.project.abbr}
                Name: {this.props.project.name}
                <button 
                    onClick={this.handleClick.bind(this)}
                    className="btn btn-danger right">
                    Delete
                </button>
            </li>
        );
    }
}

export default project;