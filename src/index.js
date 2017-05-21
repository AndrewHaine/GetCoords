import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import './css/app.css';

ReactDOM.render(<Root />, document.getElementById('root'));

const headHeight = {
  main: document.querySelector('.main'),
  head: document.querySelector('header'),
  init() {
    this.updateHeight();
    window.onresize = () => this.updateHeight();
  },
  updateHeight() {
    this.main.style.height = `${window.innerHeight - this.head.clientHeight}px`;
  }
}

window.onload = () => headHeight.init();
