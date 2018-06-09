import axios from 'axios';
import { FETCH_USER } from './types';


const fetchUser = () => {


	return function(dispatch){

	//redux thunk gives us direct access to dispatch. if it sees we are returning a function not an object it automatically calls the function with dispatch argument.
	//we want to call dispatch only after this ajax request is complete.
		
		   axios.get('/api/current_user')
			    .then(res => dispatch({type: FETCH_USER, payload: res}));

	}

};