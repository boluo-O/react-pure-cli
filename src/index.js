import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import './utils/log'

// HMR模块热替换
if (module.hot) {
    module.hot.accept()
}

ReactDOM.render(<App />, document.getElementById('root'))