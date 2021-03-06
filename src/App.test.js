import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import reactDom from 'react-dom'

it(`Renders without crashing`, () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>, div
  );
  reactDom.unmountComponentAtNode(div);
})