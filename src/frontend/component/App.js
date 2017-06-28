import { connect } from 'react-redux';
import Main from './Main';
import { getProjects } from '../actions/getProjectsAction'; 
import { addProject } from '../actions/addProjectAction';
import { deleteProject } from '../actions/deleteProject';
import { watchProjectAddedEvent } from '../actions/watchAddedAction';

function mapStateToProps(state) {
  return {
    projects: state.projects
  }
}

function mapDispatchToProps(dispatch) {
    watchProjectAddedEvent(dispatch);
    return {
      onGetProjects: () => dispatch(getProjects()),
      onAddProject: (abbr,name) => dispatch(addProject(abbr,name)),
      deleteProject: (projectId) => dispatch(deleteProject(projectId))
  };
}

// calling (Main) adds actions and props to main and makes them available
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
