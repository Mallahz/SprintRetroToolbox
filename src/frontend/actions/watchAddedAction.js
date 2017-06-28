import actionTypes from './types';
import database from '../config/firebaseConfig';

let getProjectAddedAction = (project) => ({type: actionTypes.ProjectAdded, project})

// Watch for changes to the projects node. Update if change happens.
export function watchProjectAddedEvent(dispatch) {
    database.ref('/projects').on('child_added', (snap) => {
        console.log("child_added dispatch fired");
        const project = snap.val();
        project.projectId = snap.key;
        dispatch(getProjectAddedAction(project));
    });
}