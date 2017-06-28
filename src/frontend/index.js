import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import { AppContainer } from 'react-hot-loader';
import { overrideComponentTypeChecker } from 'react-toolbox';
import { Provider } from 'react-redux';
import store from './store';
import './styles/index.css';

const rootEl = document.getElementById('app');

/*const render = () => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    rootEl
  );
};*/

if (process.env.NODE_ENV !== 'production') {
  overrideComponentTypeChecker((classType, reactElement) => (
    reactElement && (
      reactElement.type === classType
      || reactElement.type.name === classType.displayName
    )
  ));
  if (module.hot) {
    module.hot.accept('./component/App', render);
  }
}

//render();

const router = (
  <Provider store={store}>
      <App /> 
  </Provider>
)

ReactDOM.render(router, rootEl); //document.getElementById('root'));


