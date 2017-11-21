import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


describe('Index root', () => {
  it('renders without crashing' ,() => {
    const element = document.createElement('div');

    ReactDOM.render(<App />, element);
  });
});