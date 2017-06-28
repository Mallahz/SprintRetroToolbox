import React, { Component } from 'react';
//import { Link } from 'react-router';
import css from '../styles/app.css';
import Project from './Project';
//import AddProject from './AddProject';


class Main extends Component {
    
    constructor() {
        super();
        this.state = {
        abbr: '',
        name: ''
        };
    }
    
    componentWillMount() {
        console.log("componentWillMount Called");
        this.props.onGetProjects();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.projects !== this.props.projects) {
        }
    }

    componentDidUpdate(prevProps) {
    //     if (this.props.projects !== prevProps.projects) {
    //         this.props.onGetProjects();
    //     }
    }

    isLoaded(projects) {
        if (projects.length > 0) {
            return true
        } else {
            return false
        }

    }

    isEmpty(projects) {
        if (projects.length === 0)
            return true;
    }

    handleInputChange(event) {
    }

    handleFormSubmit(e) {
        e.preventDefault();
        this.props.onAddProject(this.state.abbr, this.state.name)
    }

    render() {
        const { projects } = this.props.projects;
        console.log("isLoaded result", this.isLoaded(projects));
        const projectList = (!this.isLoaded(projects))
            ? 'Loading...'
            : (this.isEmpty(projects))
                ? 'No projects exist yet'
                : projects.map((project, key) => <Project {...this.props}
                    key={key} projectId={project.projectId} project={project} />)
        return (
            <div>
                <h1>
                    Retro Specto
                </h1>
                <ul className="list-group">
                    {projectList}
                </ul>
                <div className="bg-info meeting-form">
                    <form onSubmit={this.handleFormSubmit.bind(this)}>
                        <div className="form-group">
                            <label>Abbreviation:</label> 
                            <input
                                className="form-control"
                                placeholder="Abbreviation"
                                value={this.state.abbr}
                                onChange={e => this.setState({ abbr: e.target.value })}
                                
                            />
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input 
                                className="form-control"
                                placeholder="Full Name of Project"
                                value={this.state.name}
                                onChange={e => this.setState({ name: e.target.value})}
                                
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Add Project</button>
                    </form>
            </div>
                    
            </div>
        );
    }
}


export default Main;