import cssVars from 'css-vars-ponyfill'

import React from 'react'
import ReactDOM from 'react-dom'

import App from './modules/index'

cssVars({
  '--white-100': '#FFF',
  '--black-100': '#000',
  '--grey-10': 'rgba(0,0,0,0.1)',
  '--grey-15': 'rgba(0,0,0,0.15)',
  '--grey-25': 'rgba(0,0,0,0.25)',
  '--grey-50': 'rgba(0,0,0,0.5)',
  '--grey-75': 'rgba(0,0,0,0.75)',
  '--star-wars--yellow-100': 'rgba(255, 232, 31)',
  '--star-wars--yellow-75': 'rgba(255, 232, 31, 0.75)',
  '--star-wars--yellow-50': 'rgba(255, 232, 31, 0.5)',
  '--star-wars--yellow-25': 'rgba(255, 232, 31, 0.25)',
  '--star-wars--yellow-10': 'rgba(255, 232, 31, 0.1)',
  '--margin-top--category-section': '1rem',
  '--height-category-section': '700px',
  '--width-100': '100%',
  '--width-90': '90%',
  '--width-75': '75%',
  '--width-50': '50%',
  '--width-45': '45%'
})

ReactDOM.render(<App />, document.getElementById('root'))
