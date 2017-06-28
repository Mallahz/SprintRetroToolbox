import actionTypes from '../actions/types';

const initState = {
    inProgress: false,
    error: '',
    success:'',
    projects: {}
}

export function projectsReducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.GetProjectsRequested : {
            return {...state,
                inProgress: true,
                error: '',
                success:'',
                projects: {"requested": "Get Projs requested"}
            }
        }
        case actionTypes.GetProjectsFulfilled:
            const projects = action.projects;
            const newState = {...state, 
                inProgress: false,
                success: 'Got projects.'
            }
            newState.projects = [];
            if (projects) {
                newState.projects = Object.keys(projects).map(function (i) {
                    return projects[i];
                }); 
            }
            return newState;
        case actionTypes.AddProjectRequested: {
            return {...state,
                inProgress: true,
                error: '',
                success:'',
            }
        }
        case actionTypes.AddProjectRejected: {
            return {...state,
                inProgress: false,
                error: ' Error in adding project.'
            }
        }
        case actionTypes.AddProjectFulfilled: {
            const newState = {...state, 
                inProgress: false,
                success: 'Projected Added.'
            }
            return newState;
        }
        case actionTypes.DeleteProject: {
            const newState = {...state,
                inProgress: false,
                success: 'Project Deleted',
                projects: state.projects.filter((project) => action.projectId !== project.projectId )
            }

            console.log("deleted newState", newState);
            return newState
        }

        case actionTypes.ProjectAdded: {
            //const newState = {...state};
            const newState = {...state};
            let requested = newState.projects.requested;
            if (requested === undefined) {
                let project = {"abbr": action.project.abbr, "name": action.project.name, "projectId": action.project.projectId}
                // if a new project has been added, update it realtime on the screen
                newState.projects = newState.projects || [];
                newState.projects = newState.projects.slice();
                newState.projects.push(project);
            }
            return newState;
        }

        default:
            return state;
    }

}

