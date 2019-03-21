import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Game } from './models/whac';

let game = Game.create({})

ReactDOM.render(<App game={game} />, document.getElementById('root'));
