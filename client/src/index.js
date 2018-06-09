//react-redux, react-dom, react-router, react-router-dom, redux, react
//no need to specify relative path if from node_modules directory it is simply assumed.
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers' ;



const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(

	<Provider store={store}> 
		<App />
	</Provider>,
	document.querySelector('#root')

	);

//provider is a react component that reads changes from redux store and informs all children components