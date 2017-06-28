import actionTypes from './types';
import database from '../config/firebaseConfig';


// Requested
let getProjectsRequestedAction = () => ({type: actionTypes.GetProjectsRequested});
// Rejected
let getProjectsRejectedAction = () => ({type: actionTypes.GetProjectsRejected});
// Fulfilled
let getProjectsFulfilledAction = (projects) => ({type: actionTypes.GetProjectsFulfilled,projects});


export function getProjects() {
    return dispatch => {
        dispatch(getProjectsRequestedAction());
        // Get data from database
        return database.ref('/projects').once('value', snap => {
            const projectsData = snap.val();
            // Add the id from the database to each project object
            const projectsFull = Object.keys(projectsData).map(function (i) {
                projectsData[i].projectId = i;
                return projectsData[i];
            });
            dispatch(getProjectsFulfilledAction(projectsFull))
        })
        .catch((error) => {
            console.log(error);
            dispatch(getProjectsRejectedAction());
        })
    }
}
