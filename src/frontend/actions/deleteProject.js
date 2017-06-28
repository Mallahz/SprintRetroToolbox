import actionTypes from './types';
import database from '../config/firebaseConfig';

let removeProjectAction = (projectId) => ({type: actionTypes.DeleteProject, projectId})

export function deleteProject(projectId) {
  return dispatch => {
      database.ref('/projects').child(projectId).remove();
      dispatch(removeProjectAction(projectId));
  }
}