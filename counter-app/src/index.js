import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';


// rafcp

import './index.css';

const divRoot = document.querySelector('#root');

ReactDOM.render( <CounterApp numero={ 0 }/>, divRoot );
