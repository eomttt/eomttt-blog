import * as React from 'react';
import * as ReactDOM from 'react-dom';

// eslint-disable-next-line import/extensions
import App from './App';
import './styles.css';

const mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
