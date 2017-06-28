import actionTypes from './types';
import database from '../config/firebaseConfig';


// Requested
let addProjectRequestedAction = () => ({type: actionTypes.AddProjectRequested});
//Rejected
let addProjectRejectedAction = () => ({type: actionTypes.AddProjectRejected});
// Fulfilled
let addProjectFulfilledAction = (project) => ({type: actionTypes.AddProjectFulfilled, project}); 

export function addProject(abbr, name) {
    return dispatch => {
        dispatch(addProjectRequestedAction());
        const projectRef = database.ref('/projects');
        projectRef.push({
            abbr: abbr,
            name: name
        })
        .then(() => {
            dispatch(addProjectFulfilledAction({abbr,name}));
        })
        .catch((error) => {
            dispatch(addProjectRejectedAction());
        })
    }
}