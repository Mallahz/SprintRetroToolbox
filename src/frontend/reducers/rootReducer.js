import { combineReducers } from 'redux';
import { projectsReducer } from './projectsReducer';
//import { routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
    projects: projectsReducer
    //routing: routerReducer

})

export default rootReducer