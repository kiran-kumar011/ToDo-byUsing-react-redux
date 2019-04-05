export const ADD = 'ADD';
export const REMOVE = 'REMOVE';

function uuid() {
	return Math.random().toString(36).substring(2) 
               + (new Date()).getTime().toString(36);
}


export default function reducer(state = [], action) {
	console.log(state);
	switch(action.type) {
		case 'ADD': 
		return [...state].concat({name: action.name, id: uuid(), isDone: false});
		case 'TOGGLE_CHECK':
		return state.map(todo => action.id === todo.id? {name: todo.name, id: todo.id, isDone:!todo.isDone}: todo)
		case 'DELETE_TODO':
		return state.filter(todo => action.id !== todo.id)
		default: 
		return state;
	}
}