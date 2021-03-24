import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import store, {AppStateType} from './redux/redux-store';

let rerenderEntireTree = (state: AppStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})

