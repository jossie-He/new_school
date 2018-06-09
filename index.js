import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'

import App from './App'
import reducer from './reducers'

const store = createStore(reducer);
// console.log( store.getState() )
let _smallImgArr = store.getState().smallImgArr;

const render = () => ReactDOM.render(
	<App 
		smallImg={_smallImgArr}
		_bigImg={store.getState().bigImg}

		action_a={()=>store.dispatch({type:'aaa'})}
		action_b={()=>store.dispatch({type:'bbb'})}
		action_c={()=>store.dispatch({type:'ccc'})}
	/>,
	document.getElementById('root')
);

render();
store.subscribe( render )