import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'

ReactDOM.render(
        <Provider store={store}>
            <App changeCurrent={updateCurrent}/>
        </Provider>,
        document.getElementById('root'));

registerServiceWorker();
