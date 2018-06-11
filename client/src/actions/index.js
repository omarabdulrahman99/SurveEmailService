import axios from 'axios';
import { FETCH_USER } from './types';


export const fetchUser = () => async dispatch => {

	//redux thunk gives us direct access to dispatch. if it sees we are returning a function not an object it automatically calls the function with dispatch argument.
	//we want to call dispatch only after this ajax request is complete.
		
	const res = await axios.get('/api/current_user');
	     
	dispatch({type: FETCH_USER, payload: res.data});

	}


export const handleToken = (token) => async dispatch => {


	const res = await axios.post('/api/stripe', token);

	dispatch({type: FETCH_USER, payload: res.data});

};

