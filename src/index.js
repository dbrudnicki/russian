import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'

import './assets/style.scss'

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)

// Used to enable component hot replacement without page reload
// (Ignored in Production)
if (module.hot) {
  module.hot.accept()
}
