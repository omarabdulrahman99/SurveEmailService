//react-redux, react-dom, react-router, react-router-dom, redux, react
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import reducers from './reducers' ;

const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.render(

	<Provider store={store}> 
		<App />
	</Provider>,
	document.querySelector('#root')

	);

//provider is a react component that reads changes from redux store and informs all children components